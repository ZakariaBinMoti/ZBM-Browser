const electron = require('electron');
if (typeof electron === 'string') {
  // Invoked with ELECTRON_RUN_AS_NODE or plain node - auto-respawn as real Electron GUI
  const { spawn } = require('child_process');
  delete process.env.ELECTRON_RUN_AS_NODE;
  const child = spawn(electron, [__dirname], {
    detached: true,
    stdio: 'ignore',
    env: { ...process.env, ELECTRON_RUN_AS_NODE: undefined }
  });
  child.unref();
  process.exit(0);
}

const { app, BrowserWindow, ipcMain, globalShortcut, Tray, Menu, screen, nativeImage, session, shell, clipboard } = electron;
const path = require('path');
const fs = require('fs');

let autoUpdater = null;
try {
  ({ autoUpdater } = require('electron-updater'));
} catch (e) {
  console.log('electron-updater load note:', e.message);
}

// Dedicated persistent user data directory
const customUserData = path.join(app.getPath('appData'), 'ZBM-Browser-Data');
try {
  if (!fs.existsSync(customUserData)) {
    fs.mkdirSync(customUserData, { recursive: true });
  }
  app.setPath('userData', customUserData);
} catch (e) {
  console.error('Error setting userData path:', e);
}

// Session state file for auto-restore
const sessionFilePath = path.join(customUserData, 'saved-session.json');

// Genuine Desktop Google Chrome 131 User Agent
// Seamless Google sign-in compatibility, native 4K/60fps YouTube MSE streaming, zero playback stops
const DESKTOP_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
app.userAgentFallback = DESKTOP_USER_AGENT;

// Media & Hardware Performance switches
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch('disable-features', 'HardwareMediaKeyHandling,WebAuthentication,WebAuthenticationConditionalUI');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');
app.commandLine.appendSwitch('ignore-gpu-blocklist');

let mainWindow = null;
let tray = null;
let isBossHidden = false;
let currentOpacity = 1.0;
let isClickThrough = false;
let isAlwaysOnTop = false;
let isSkipTaskbar = false;
let isDecoyActive = false;
let isContentProtected = false; // Meeting & Screen-Share Invisibility
let isAdBlockerActive = true;

// Known third-party ad networks (Pure ad servers, never YouTube/Google media streams)
const BLOCKED_AD_DOMAINS = new Set([
  'doubleclick.net',
  'googleadservices.com',
  'taboola.com',
  'outbrain.com',
  'adnxs.com',
  'rubiconproject.com',
  'popads.net',
  'adroll.com',
  'scorecardresearch.com',
  'quantserve.com',
  'zedo.com',
  'criteo.com',
  'pubmatic.com',
  'adservice.google.com'
]);

function createDiscreetIcon() {
  try {
    const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGUlEQVR4nGNgGAWjYBSMglEwKBgoMCQAAAIAAAFpfkpuAAAAAElFTkSuQmCC';
    return nativeImage.createFromDataURL('data:image/png;base64,' + pngBase64);
  } catch (e) {
    return nativeImage.createEmpty();
  }
}

function configureSession(targetSession) {
  // Set User-Agent at C++ layer for wire-speed performance (zero JS interceptor lag)
  targetSession.setUserAgent(DESKTOP_USER_AGENT);

  // Fast header filter: Only modify if X-Requested-With header exists
  targetSession.webRequest.onBeforeSendHeaders((details, callback) => {
    if (details.requestHeaders && details.requestHeaders['X-Requested-With']) {
      delete details.requestHeaders['X-Requested-With'];
      return callback({ cancel: false, requestHeaders: details.requestHeaders });
    }
    callback({ cancel: false });
  });

  // Fast-path AdBlocker: Never block YouTube streams or video chunks (prevents 'Something went wrong')
  targetSession.webRequest.onBeforeRequest({ urls: ['*://*/*'] }, (details, callback) => {
    if (!isAdBlockerActive) {
      return callback({ cancel: false });
    }

    const url = details.url;

    // Fast-path: Immediately allow data, blobs, YouTube, and Google video streaming endpoints
    if (
      url.startsWith('data:') ||
      url.startsWith('blob:') ||
      url.includes('googlevideo.com') ||
      url.includes('youtube.com') ||
      url.includes('ytimg.com') ||
      url.includes('youtube-nocookie.com') ||
      url.includes('googleapis.com') ||
      url.includes('gstatic.com')
    ) {
      return callback({ cancel: false });
    }

    // Check third-party ad networks using fast hostname lookup
    try {
      const hostname = new URL(url).hostname.toLowerCase();
      for (const domain of BLOCKED_AD_DOMAINS) {
        if (hostname === domain || hostname.endsWith('.' + domain)) {
          return callback({ cancel: true });
        }
      }
    } catch (e) {}

    callback({ cancel: false });
  });

  // Standard permissions
  targetSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowed = ['media', 'geolocation', 'notifications', 'fullscreen', 'pointerLock', 'clipboard-read', 'clipboard-sanitized-write'];
    callback(allowed.includes(permission));
  });

  // Download Manager setup
  targetSession.on('will-download', (event, item, webContents) => {
    const filename = item.getFilename();
    const totalBytes = item.getTotalBytes();
    const savePath = item.getSavePath();

    mainWindow?.webContents.send('download-started', {
      filename,
      totalBytes
    });

    item.on('updated', (evt, state) => {
      if (state === 'progressing') {
        mainWindow?.webContents.send('download-progress', {
          filename,
          receivedBytes: item.getReceivedBytes(),
          totalBytes: item.getTotalBytes()
        });
      }
    });

    item.once('done', (evt, state) => {
      mainWindow?.webContents.send('download-completed', {
        filename,
        state,
        path: item.getSavePath()
      });
    });
  });
}

function createWindow() {
  try {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;

    const defaultWidth = Math.min(1100, Math.floor(screenWidth * 0.88));
    const defaultHeight = Math.min(740, Math.floor(screenHeight * 0.88));
    const initialX = Math.floor((screenWidth - defaultWidth) / 2);
    const initialY = Math.floor((screenHeight - defaultHeight) / 2);

    mainWindow = new BrowserWindow({
      width: defaultWidth,
      height: defaultHeight,
      x: initialX,
      y: initialY,
      minWidth: 300,
      minHeight: 160,
      frame: false,
      transparent: false,
      resizable: true,
      show: true,
      alwaysOnTop: isAlwaysOnTop,
      skipTaskbar: isSkipTaskbar,
      hasShadow: true,
      roundedCorners: true,
      backgroundColor: '#0f172a',
      icon: createDiscreetIcon(),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: false,
        webviewTag: true,
        backgroundThrottling: false,
        webSecurity: true
      }
    });

    mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
      try {
        fs.appendFileSync(path.join(__dirname, 'debug.log'), `[Renderer ${level}] ${message} (${sourceId}:${line})\n`);
      } catch (e) {}
    });

    mainWindow.setOpacity(currentOpacity);
    mainWindow.loadFile('index.html');
    mainWindow.show();
    mainWindow.focus();

    // Track state changes
    mainWindow.on('maximize', () => mainWindow?.webContents.send('window-maximized-changed', true));
    mainWindow.on('unmaximize', () => mainWindow?.webContents.send('window-maximized-changed', false));
    mainWindow.on('enter-full-screen', () => mainWindow?.webContents.send('window-fullscreen-changed', true));
    mainWindow.on('leave-full-screen', () => mainWindow?.webContents.send('window-fullscreen-changed', false));

    // Configure persistent session
    const zbmSession = session.fromPartition('persist:zbm-profile');
    configureSession(zbmSession);
    configureSession(session.defaultSession);

    registerGlobalShortcuts();
    createSystemTray();

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  } catch (err) {
    console.error('Error during createWindow:', err);
  }
}

function registerGlobalShortcuts() {
  try {
    globalShortcut.unregisterAll();

    // 1. Boss Panic Key: Alt + X (or Alt + Q)
    globalShortcut.register('Alt+X', () => toggleBossPanic());
    globalShortcut.register('Alt+Q', () => toggleBossPanic());

    // 2. Camouflage Decoy Key: Alt + D
    globalShortcut.register('Alt+D', () => toggleDecoyMode());

    // 3. Ghost Click-Through Mode: Alt + C
    globalShortcut.register('Alt+C', () => toggleClickThrough());

    // 4. Quick Opacity Controls: Alt + Up / Alt + Down
    globalShortcut.register('Alt+Up', () => changeOpacity(0.08));
    globalShortcut.register('Alt+Down', () => changeOpacity(-0.08));

    // 5. Mute Audio Key: Alt + M
    globalShortcut.register('Alt+M', () => {
      if (mainWindow && !mainWindow.isDestroyed()) {
        const isMuted = mainWindow.webContents.isAudioMuted();
        mainWindow.webContents.setAudioMuted(!isMuted);
        mainWindow.webContents.send('audio-mute-toggled', !isMuted);
      }
    });
  } catch (err) {
    console.warn('Global shortcuts registration error:', err);
  }
}

function toggleBossPanic() {
  if (!mainWindow || mainWindow.isDestroyed()) return;

  if (isBossHidden) {
    mainWindow.show();
    mainWindow.webContents.setAudioMuted(false);
    isBossHidden = false;
    mainWindow.webContents.send('boss-state-changed', false);
  } else {
    mainWindow.webContents.setAudioMuted(true);
    mainWindow.hide();
    isBossHidden = true;
    if (tray) {
      tray.displayBalloon?.({
        title: 'ZBM Browser Running',
        content: 'Press Alt + X to restore window'
      });
    }
  }
}

function toggleDecoyMode() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  isDecoyActive = !isDecoyActive;
  mainWindow.webContents.send('toggle-decoy-mode', isDecoyActive);
}

function toggleClickThrough() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  isClickThrough = !isClickThrough;
  mainWindow.setIgnoreMouseEvents(isClickThrough, { forward: true });
  mainWindow.webContents.send('click-through-toggled', isClickThrough);
}

function changeOpacity(delta) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  currentOpacity = Math.max(0.12, Math.min(1.0, currentOpacity + delta));
  mainWindow.setOpacity(currentOpacity);
  mainWindow.webContents.send('opacity-updated', currentOpacity);
}

function setWindowOpacity(value) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  currentOpacity = Math.max(0.10, Math.min(1.0, value));
  mainWindow.setOpacity(currentOpacity);
  mainWindow.webContents.send('opacity-updated', currentOpacity);
}

function toggleContentProtection() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  isContentProtected = !isContentProtected;
  // Electron API for WDA_EXCLUDEFROMCAPTURE (Screen share / Zoom / Teams / Meet invisibility)
  mainWindow.setContentProtection(isContentProtected);
  mainWindow.webContents.send('content-protection-toggled', isContentProtected);
}

function createSystemTray() {
  try {
    if (tray) return;

    const icon = createDiscreetIcon();
    tray = new Tray(icon);
    tray.setToolTip('ZBM Browser');

    const updateTrayMenu = () => {
      const contextMenu = Menu.buildFromTemplate([
        {
          label: isBossHidden ? 'Show Window (Alt+X)' : 'Stealth Hide / Panic (Alt+X)',
          click: () => toggleBossPanic()
        },
        {
          label: isDecoyActive ? 'Show Browser (Alt+D)' : 'Camouflage Decoy (Alt+D)',
          click: () => toggleDecoyMode()
        },
        {
          label: isClickThrough ? 'Disable Click-Through (Alt+C)' : 'Enable Click-Through (Alt+C)',
          click: () => toggleClickThrough()
        },
        {
          label: isContentProtected ? 'Disable Meeting Invisibility' : 'Enable Meeting Invisibility (Shield)',
          click: () => toggleContentProtection()
        },
        { type: 'separator' },
        {
          label: 'Opacity',
          submenu: [
            { label: '100% Solid', click: () => setWindowOpacity(1.0) },
            { label: '80% Clear', click: () => setWindowOpacity(0.8) },
            { label: '50% Ghost', click: () => setWindowOpacity(0.5) },
            { label: '30% Ultra Stealth', click: () => setWindowOpacity(0.3) },
            { label: '15% Whisper', click: () => setWindowOpacity(0.15) }
          ]
        },
        {
          label: 'Always On Top',
          type: 'checkbox',
          checked: isAlwaysOnTop,
          click: (item) => {
            isAlwaysOnTop = item.checked;
            if (mainWindow) {
              mainWindow.setAlwaysOnTop(isAlwaysOnTop, 'floating');
              mainWindow.webContents.send('always-on-top-changed', isAlwaysOnTop);
            }
          }
        },
        { type: 'separator' },
        {
          label: 'Exit ZBM Browser',
          click: () => {
            app.isQuiting = true;
            app.quit();
          }
        }
      ]);
      tray.setContextMenu(contextMenu);
    };

    updateTrayMenu();
    tray.on('double-click', () => toggleBossPanic());
  } catch (err) {
    console.warn('System tray initialization skipped or failed:', err);
  }
}

// IPC Handlers
ipcMain.handle('get-state', () => {
  return {
    opacity: currentOpacity,
    isAlwaysOnTop,
    isClickThrough,
    isSkipTaskbar,
    isBossHidden,
    isDecoyActive,
    isContentProtected,
    isAdBlockerActive,
    isMaximized: mainWindow ? mainWindow.isMaximized() : false,
    isFullScreen: mainWindow ? mainWindow.isFullScreen() : false
  };
});

ipcMain.on('set-opacity', (event, value) => setWindowOpacity(value));

ipcMain.on('toggle-always-on-top', (event, val) => {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  isAlwaysOnTop = val !== undefined ? val : !isAlwaysOnTop;
  mainWindow.setAlwaysOnTop(isAlwaysOnTop, 'floating');
  mainWindow.webContents.send('always-on-top-changed', isAlwaysOnTop);
});

ipcMain.on('toggle-click-through', (event, val) => {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  isClickThrough = val !== undefined ? val : !isClickThrough;
  mainWindow.setIgnoreMouseEvents(isClickThrough, { forward: true });
  mainWindow.webContents.send('click-through-toggled', isClickThrough);
});

ipcMain.on('toggle-content-protection', () => {
  toggleContentProtection();
});

ipcMain.on('toggle-ad-blocker', (event, val) => {
  isAdBlockerActive = val !== undefined ? val : !isAdBlockerActive;
  mainWindow?.webContents.send('ad-blocker-toggled', isAdBlockerActive);
});

ipcMain.on('trigger-boss-panic', () => toggleBossPanic());
ipcMain.on('toggle-decoy-mode', () => toggleDecoyMode());

ipcMain.handle('read-clipboard', () => clipboard.readText());
ipcMain.on('write-clipboard', (event, text) => clipboard.writeText(text));

// Session Save/Load Handlers
ipcMain.handle('load-session', () => {
  try {
    if (fs.existsSync(sessionFilePath)) {
      return JSON.parse(fs.readFileSync(sessionFilePath, 'utf8'));
    }
  } catch (e) {}
  return null;
});

ipcMain.on('save-session', (event, sessionData) => {
  try {
    fs.writeFileSync(sessionFilePath, JSON.stringify(sessionData, null, 2), 'utf8');
  } catch (e) {}
});

ipcMain.on('show-in-folder', (event, filePath) => {
  if (filePath && fs.existsSync(filePath)) {
    shell.showItemInFolder(filePath);
  } else {
    shell.openPath(app.getPath('downloads'));
  }
});

// HD Video Frame Snapshot Saver & Clipboard Sync
ipcMain.handle('save-frame-snapshot', async (event, dataUrl) => {
  try {
    if (!dataUrl || !dataUrl.startsWith('data:image/')) {
      return { success: false, error: 'Invalid frame image data' };
    }
    const nativeImg = nativeImage.createFromDataURL(dataUrl);
    clipboard.writeImage(nativeImg);

    const downloadsDir = app.getPath('downloads');
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const filename = `ZBM_Snapshot_${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.png`;
    const fullPath = path.join(downloadsDir, filename);

    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(fullPath, base64Data, 'base64');
    return { success: true, filePath: fullPath, filename };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// RAM Eco Saver: Process Memory Metrics
ipcMain.handle('get-memory-stats', async () => {
  try {
    const memInfo = await process.getProcessMemoryInfo();
    const metrics = app.getAppMetrics();
    let totalWorkingSetKB = memInfo.residentSet || 0;
    metrics.forEach(m => {
      totalWorkingSetKB += (m.memory.workingSetSize || 0);
    });
    const totalMB = Math.round(totalWorkingSetKB / 1024);
    return { success: true, memoryMB: totalMB, processCount: metrics.length };
  } catch (e) {
    return { success: false, memoryMB: 0 };
  }
});

// Privacy & Cache Clearer
ipcMain.handle('clear-browsing-data', async () => {
  try {
    await session.defaultSession.clearCache();
    await session.defaultSession.clearStorageData({
      storages: ['appcache', 'cookies', 'filesystem', 'indexdb', 'localstorage', 'shadercache', 'websql', 'serviceworkers', 'cachestorage']
    });
    const userSession = session.fromPartition('persist:zbm-profile');
    await userSession.clearCache();
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
});

// Window Controls
ipcMain.on('window-minimize', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) || mainWindow;
  win?.minimize();
});
ipcMain.on('window-maximize', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) || mainWindow;
  if (!win || win.isDestroyed()) return;
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
  win.webContents.send('window-maximized-changed', win.isMaximized());
});
ipcMain.on('window-fullscreen', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) || mainWindow;
  if (!win || win.isDestroyed()) return;
  const isFS = !win.isFullScreen();
  win.setFullScreen(isFS);
  win.webContents.send('window-fullscreen-changed', isFS);
});
ipcMain.handle('window-is-maximized', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) || mainWindow;
  return win && !win.isDestroyed() ? win.isMaximized() : false;
});
ipcMain.handle('window-is-fullscreen', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) || mainWindow;
  return win && !win.isDestroyed() ? win.isFullScreen() : false;
});
ipcMain.on('window-close', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) || mainWindow;
  win?.close();
});

ipcMain.on('resize-preset', (event, { width, height }) => {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  const bounds = mainWindow.getBounds();
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;

  let newX = bounds.x + (bounds.width - width);
  let newY = bounds.y + (bounds.height - height);

  newX = Math.max(10, Math.min(newX, screenWidth - width - 10));
  newY = Math.max(10, Math.min(newY, screenHeight - height - 10));

  mainWindow.setBounds({ x: newX, y: newY, width, height });
});

app.on('web-contents-created', (event, contents) => {
  contents.setUserAgent(DESKTOP_USER_AGENT);

  contents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        autoHideMenuBar: true,
        webPreferences: {
          partition: 'persist:zbm-profile',
          preload: path.join(__dirname, 'webview-preload.js'),
          contextIsolation: false
        }
      }
    };
  });
});

// ==============================================
// GITHUB AUTO-UPDATER ENGINE
// ==============================================
function sendUpdaterStatus(payload) {
  if (mainWindow && !mainWindow.isDestroyed() && mainWindow.webContents) {
    mainWindow.webContents.send('updater-event', payload);
  }
}

function initAutoUpdater() {
  if (!autoUpdater) return;

  try {
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;

    autoUpdater.on('checking-for-update', () => {
      sendUpdaterStatus({ status: 'checking' });
    });

    autoUpdater.on('update-available', (info) => {
      sendUpdaterStatus({
        status: 'available',
        version: info.version,
        releaseDate: info.releaseDate
      });
    });

    autoUpdater.on('update-not-available', (info) => {
      sendUpdaterStatus({
        status: 'not-available',
        version: app.getVersion()
      });
    });

    autoUpdater.on('error', (err) => {
      sendUpdaterStatus({
        status: 'error',
        message: err ? (err.message || String(err)) : 'Unknown update error'
      });
    });

    autoUpdater.on('download-progress', (progressObj) => {
      sendUpdaterStatus({
        status: 'downloading',
        percent: Math.round(progressObj.percent || 0),
        bytesPerSecond: progressObj.bytesPerSecond,
        transferred: progressObj.transferred,
        total: progressObj.total
      });
    });

    autoUpdater.on('update-downloaded', (info) => {
      sendUpdaterStatus({
        status: 'downloaded',
        version: info.version
      });
    });

    // Check for updates automatically in packaged production builds
    if (app.isPackaged) {
      setTimeout(() => {
        autoUpdater.checkForUpdates().catch(e => {
          console.log('Background update check:', e.message);
        });
      }, 7000);
    }
  } catch (err) {
    console.warn('AutoUpdater init error:', err);
  }
}

// Auto-Updater IPC Handlers
ipcMain.handle('get-app-version', () => app.getVersion());

ipcMain.handle('check-for-updates', async () => {
  if (!autoUpdater) {
    return { success: false, error: 'Updater module is not installed' };
  }
  if (!app.isPackaged) {
    return {
      success: false,
      isDev: true,
      version: app.getVersion(),
      message: 'Running in development mode. Auto-updates activate on installed GitHub releases.'
    };
  }
  try {
    const result = await autoUpdater.checkForUpdates();
    return { success: true, updateInfo: result?.updateInfo };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('restart-and-install-update', () => {
  if (autoUpdater) {
    autoUpdater.quitAndInstall(false, true);
    return true;
  }
  return false;
});

app.whenReady().then(() => {
  createWindow();
  initAutoUpdater();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('before-quit', async () => {
  try {
    await session.defaultSession.cookies.flushStore();
    await session.fromPartition('persist:zbm-profile').cookies.flushStore();
  } catch (e) {}
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
