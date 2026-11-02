const { contextBridge, ipcRenderer } = require('electron');

try {
  const webviewPreloadPath = typeof __dirname !== 'undefined'
    ? (__dirname + '/webview-preload.js').replace(/\\/g, '/')
    : '';

  contextBridge.exposeInMainWorld('zbmApi', {
    // State & Window
    getState: () => ipcRenderer.invoke('get-state'),
    setOpacity: (val) => ipcRenderer.send('set-opacity', val),
    toggleAlwaysOnTop: (val) => ipcRenderer.send('toggle-always-on-top', val),
    toggleClickThrough: (val) => ipcRenderer.send('toggle-click-through', val),
    setSkipTaskbar: (val) => ipcRenderer.send('set-skip-taskbar', val),
    triggerBossPanic: () => ipcRenderer.send('trigger-boss-panic'),
    toggleDecoyMode: () => ipcRenderer.send('toggle-decoy-mode'),

    // Meeting Invisibility & AdBlocker
    toggleContentProtection: () => ipcRenderer.send('toggle-content-protection'),
    toggleAdBlocker: (val) => ipcRenderer.send('toggle-ad-blocker', val),

    // Session & Downloads
    loadSession: () => ipcRenderer.invoke('load-session'),
    saveSession: (data) => ipcRenderer.send('save-session', data),
    showInFolder: (filePath) => ipcRenderer.send('show-in-folder', filePath),

    // Window Controls
    minimize: () => ipcRenderer.send('window-minimize'),
    maximize: () => ipcRenderer.send('window-maximize'),
    toggleFullscreen: () => ipcRenderer.send('window-fullscreen'),
    isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
    isFullScreen: () => ipcRenderer.invoke('window-is-fullscreen'),
    close: () => ipcRenderer.send('window-close'),
    resizePreset: (preset) => ipcRenderer.send('resize-preset', preset),
    snapCorner: (corner) => ipcRenderer.send('snap-corner', corner),
    setMouseIgnore: (ignore) => ipcRenderer.send('set-mouse-ignore', ignore),
    readClipboard: () => ipcRenderer.invoke('read-clipboard'),
    copyToClipboard: (text) => ipcRenderer.send('write-clipboard', text),
    saveFrameSnapshot: (dataUrl) => ipcRenderer.invoke('save-frame-snapshot', dataUrl),
    getMemoryStats: () => ipcRenderer.invoke('get-memory-stats'),
    clearBrowsingData: () => ipcRenderer.invoke('clear-browsing-data'),
    getWebviewPreloadPath: () => webviewPreloadPath,

    // Auto-Updater
    checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
    restartAndInstallUpdate: () => ipcRenderer.invoke('restart-and-install-update'),
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),
    onUpdaterEvent: (callback) => ipcRenderer.on('updater-event', (event, data) => callback(data)),

    // IPC Event Listeners
    onOpacityUpdated: (callback) => ipcRenderer.on('opacity-updated', (event, val) => callback(val)),
    onBossStateChanged: (callback) => ipcRenderer.on('boss-state-changed', (event, val) => callback(val)),
    onDecoyModeToggled: (callback) => ipcRenderer.on('toggle-decoy-mode', (event, val) => callback(val)),
    onClickThroughToggled: (callback) => ipcRenderer.on('click-through-toggled', (event, val) => callback(val)),
    onAlwaysOnTopChanged: (callback) => ipcRenderer.on('always-on-top-changed', (event, val) => callback(val)),
    onAudioMuteToggled: (callback) => ipcRenderer.on('audio-mute-toggled', (event, val) => callback(val)),
    onMaximizedChanged: (callback) => ipcRenderer.on('window-maximized-changed', (event, val) => callback(val)),
    onFullScreenChanged: (callback) => ipcRenderer.on('window-fullscreen-changed', (event, val) => callback(val)),
    onContentProtectionToggled: (callback) => ipcRenderer.on('content-protection-toggled', (event, val) => callback(val)),
    onAdBlockerToggled: (callback) => ipcRenderer.on('ad-blocker-toggled', (event, val) => callback(val)),
    onDownloadStarted: (callback) => ipcRenderer.on('download-started', (event, data) => callback(data)),
    onDownloadProgress: (callback) => ipcRenderer.on('download-progress', (event, data) => callback(data)),
    onDownloadCompleted: (callback) => ipcRenderer.on('download-completed', (event, data) => callback(data))
  });
} catch (err) {
  console.error('[Preload Error]', err);
}
