// ZBM Personal Browser - Multi-Tab Engine with Meeting Invisibility & Stealth Suite

// ==========================================
// 1. DOM REFERENCES
// ==========================================
const appContainer = document.getElementById('app-container');
const tabsContainer = document.getElementById('tabs-container');
const btnNewTab = document.getElementById('btn-new-tab');
const webviewsContainer = document.getElementById('webviews-container');
const newTabDashboard = document.getElementById('new-tab-dashboard');

// Window Controls
const btnWinMinimize = document.getElementById('btn-win-minimize');
const btnWinMaximize = document.getElementById('btn-win-maximize');
const btnWinFullscreen = document.getElementById('btn-win-fullscreen');
const btnWinClose = document.getElementById('btn-win-close');

// Navigation Controls
const navBtnBack = document.getElementById('nav-btn-back');
const navBtnForward = document.getElementById('nav-btn-forward');
const navBtnReload = document.getElementById('nav-btn-reload');
const iconReload = document.getElementById('icon-reload');
const iconStop = document.getElementById('icon-stop');
const navBtnHome = document.getElementById('nav-btn-home');

// Omnibox
const omniboxInput = document.getElementById('omnibox-input');
const omniboxBtnGo = document.getElementById('omnibox-btn-go');
const omniboxProgress = document.getElementById('omnibox-progress');

// Toolbar Actions & Shields
const btnToggleVideoMode = document.getElementById('btn-toggle-video-mode');
const btnToggleSplit = document.getElementById('btn-toggle-split');
const btnFindPage = document.getElementById('btn-find-page');
// Hamburger Menu Elements
const btnHamburgerMenu = document.getElementById('btn-hamburger-menu');
const hamburgerDropdown = document.getElementById('hamburger-dropdown');
const menuItemShield = document.getElementById('menu-item-shield');
const menuBadgeShield = document.getElementById('menu-badge-shield');
const menuItemPin = document.getElementById('menu-item-pin');
const menuBadgePin = document.getElementById('menu-badge-pin');
const menuItemGhost = document.getElementById('menu-item-ghost');
const menuBadgeGhost = document.getElementById('menu-badge-ghost');
const menuItemDecoy = document.getElementById('menu-item-decoy');
const menuItemPanic = document.getElementById('menu-item-panic');
const menuItemSplit = document.getElementById('menu-item-split');
const menuBadgeSplit = document.getElementById('menu-badge-split');
const menuItemFind = document.getElementById('menu-item-find');
const menuItemEco = document.getElementById('menu-item-eco');
const menuBadgeEco = document.getElementById('menu-badge-eco');
const menuItemReader = document.getElementById('menu-item-reader');
const menuBadgeReader = document.getElementById('menu-badge-reader');
const menuItemDarkmode = document.getElementById('menu-item-darkmode');
const menuBadgeDarkmode = document.getElementById('menu-badge-darkmode');
const menuItemAdblock = document.getElementById('menu-item-adblock');
const menuBadgeAdblock = document.getElementById('menu-badge-adblock');
const menuItemHistory = document.getElementById('menu-item-history');
const menuItemDownloads = document.getElementById('menu-item-downloads');
const menuItemClean = document.getElementById('menu-item-clean');
const menuItemShortcuts = document.getElementById('menu-item-shortcuts');

const btnToolbarEco = document.getElementById('btn-toolbar-eco');
const btnToolbarReader = document.getElementById('btn-toolbar-reader');
const btnToolbarHistory = document.getElementById('btn-toolbar-history');
const btnToolbarShield = document.getElementById('btn-toolbar-shield');
const btnToolbarDarkMode = document.getElementById('btn-toolbar-darkmode');
const btnToolbarAdblock = document.getElementById('btn-toolbar-adblock');
const btnToolbarTheme = document.getElementById('btn-toolbar-theme');
const themeMenu = document.getElementById('theme-menu');
const btnToolbarDownloads = document.getElementById('btn-toolbar-downloads');
const downloadBadge = document.getElementById('download-badge');
const downloadsDrawer = document.getElementById('downloads-drawer');
const downloadsList = document.getElementById('downloads-list');
const btnCloseDownloads = document.getElementById('btn-close-downloads');

// Omnibox Extensions
const omniboxCleanLink = document.getElementById('omnibox-clean-link');
const omniboxStarBtn = document.getElementById('omnibox-star-btn');
const bookmarksBar = document.getElementById('bookmarks-bar');

// Find in Page Elements
const findBar = document.getElementById('find-bar');
const findInput = document.getElementById('find-input');
const findCount = document.getElementById('find-count');
const findPrev = document.getElementById('find-prev');
const findNext = document.getElementById('find-next');
const findClose = document.getElementById('find-close');

// Zoom Toast
const zoomToast = document.getElementById('zoom-toast');
const btnNewIncognito = document.getElementById('btn-new-incognito');

// History Drawer & Clean Data Elements
const historyDrawer = document.getElementById('history-drawer');
const btnCloseHistory = document.getElementById('btn-close-history');
const historySearchInput = document.getElementById('history-search-input');
const historyList = document.getElementById('history-list');
const btnClearHistoryPrompt = document.getElementById('btn-clear-history-prompt');

const cleanDataModal = document.getElementById('clean-data-modal');
const btnCloseCleanModal = document.getElementById('btn-close-clean-modal');
const btnCancelClean = document.getElementById('btn-cancel-clean');
const btnConfirmClean = document.getElementById('btn-confirm-clean');
const cleanChkCache = document.getElementById('clean-chk-cache');
const cleanChkHistory = document.getElementById('clean-chk-history');
const cleanChkCookies = document.getElementById('clean-chk-cookies');

const toastContainer = document.getElementById('toast-container');

const toolbarOpacitySlider = document.getElementById('toolbar-opacity-slider');
const toolbarOpacityVal = document.getElementById('toolbar-opacity-val');
const btnToolbarPin = document.getElementById('btn-toolbar-pin');
const btnToolbarGhost = document.getElementById('btn-toolbar-ghost');
const btnToolbarDecoy = document.getElementById('btn-toolbar-decoy');
const btnToolbarPanic = document.getElementById('btn-toolbar-panic');

// Floating Stealth Video HUD
const videoHudTop = document.getElementById('video-hud-top');
const videoHudBottom = document.getElementById('video-hud-bottom');
const btnExitVideoMode = document.getElementById('btn-exit-video-mode');
const btnVideoShield = document.getElementById('btn-video-shield');
const btnVideoSnapshot = document.getElementById('btn-video-snapshot');
const btnVideoPip = document.getElementById('btn-video-pip');
const btnBoostStep = document.getElementById('btn-boost-step');
const videoOpacitySlider = document.getElementById('video-opacity-slider');
const videoOpacityVal = document.getElementById('video-opacity-val');
const btnVideoPin = document.getElementById('btn-video-pin');
const btnVideoGhost = document.getElementById('btn-video-ghost');
const btnVideoDecoy = document.getElementById('btn-video-decoy');
const btnVideoPanic = document.getElementById('btn-video-panic');
const btnVideoFs = document.getElementById('btn-video-fs');
const btnVideoMinimize = document.getElementById('btn-video-minimize');
const btnVideoClose = document.getElementById('btn-video-close');

// Auto-Updater Elements
const menuItemUpdate = document.getElementById('menu-item-update');
const menuItemGithub = document.getElementById('menu-item-github');
const appVersionBadge = document.getElementById('app-version-badge');
const updateNotificationBanner = document.getElementById('update-notification-banner');
const updateBannerText = document.getElementById('update-banner-text');
const btnUpdateAction = document.getElementById('btn-update-action');
const btnUpdateDismiss = document.getElementById('btn-update-dismiss');

// Video Presets
const btnSizeMini = document.getElementById('btn-size-mini');
const btnSizeMed = document.getElementById('btn-size-med');
const btnSizeWide = document.getElementById('btn-size-wide');
const btnSizeHd = document.getElementById('btn-size-hd');

// Video Playback Controls
const btnPlayPause = document.getElementById('btn-play-pause');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const btnRewind = document.getElementById('btn-rewind');
const btnForward = document.getElementById('btn-forward');
const timelineSlider = document.getElementById('timeline-slider');
const timeCurrent = document.getElementById('time-current');
const timeDuration = document.getElementById('time-duration');
const btnMute = document.getElementById('btn-mute');
const iconVol = document.getElementById('icon-vol');
const iconMute = document.getElementById('icon-mute');
const btnSpeed = document.getElementById('btn-speed');
const btnAudioOnly = document.getElementById('btn-audio-only');
const btnShortcuts = document.getElementById('btn-shortcuts');

// Overlays & Screens
const ghostNotice = document.getElementById('ghost-notice');
const shieldNotice = document.getElementById('shield-notice');
const audioOnlyScreen = document.getElementById('audio-only-screen');
const clockDisplay = document.getElementById('clock-display');
const decoyContainer = document.getElementById('decoy-container');
const btnExitDecoy = document.getElementById('btn-exit-decoy');
const shortcutsModal = document.getElementById('shortcuts-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

// Dashboard Elements
const dashboardClock = document.getElementById('dashboard-clock');
const dashboardDate = document.getElementById('dashboard-date');
const dashboardSearchInput = document.getElementById('dashboard-search-input');
const dashboardBtnSearch = document.getElementById('dashboard-btn-search');

// ==========================================
// 2. STATE & CONSTANTS
// ==========================================
let tabs = [];
let activeTabId = null;
let tabCounter = 0;

let isSplitMode = false;
let secondaryTabId = null;
let isEcoModeActive = false;
let isReaderModeActive = false;

let bookmarks = [];
let browsingHistory = [];
let zoomToastTimer = null;

let isStealthVideoMode = false;
let currentOpacity = 1.0;
let isAlwaysOnTop = false;
let isClickThrough = false;
let isDecoyActive = false;
let isContentProtected = false;
let isAdBlockerActive = true;
let isDarkModeActive = false;
let isAudioOnly = false;
let isMuted = false;
let isPlaying = true;
let currentPlaybackRate = 1.0;
let currentAudioBoost = 1.0; // 1.0 = 100%, 1.5 = 150%, 2.0 = 200%, 3.0 = 300%

let hudTimeout = null;
let videoPollInterval = null;
let clockInterval = null;
let activeDownloads = {};

// Universal Dark Mode Inversion CSS
const DARK_MODE_CSS = `
  html {
    filter: invert(90%) hue-rotate(180deg) !important;
    background: #111111 !important;
  }
  img, video, canvas, svg, iframe, [style*="background-image"] {
    filter: invert(100%) hue-rotate(180deg) !important;
  }
`;

// Crystal-Clear Stealth Video Focus CSS (Eliminates YouTube ambient blur canvas!)
const CRISP_VIDEO_FOCUS_CSS = `
  #cinematics, 
  #cinematics-container, 
  .ytp-ambient-background, 
  canvas#cinematics {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  html, body, ytd-app, #page-manager {
    background: #000000 !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  #masthead-container,
  ytd-masthead,
  #secondary,
  #related,
  #below,
  #comments,
  #chat,
  #guide,
  tp-yt-app-drawer,
  ytd-miniplayer,
  .ytp-chrome-top,
  .ytp-watermark,
  .ytp-youtube-button,
  .ytp-pause-overlay,
  .ytp-ce-element,
  #ticker,
  .ytd-merch-shelf-renderer {
    display: none !important;
  }

  #movie_player,
  .html5-video-player,
  #player-container-outer,
  #player-container-inner,
  #player-container,
  #ytd-player,
  #player {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
    z-index: 2147483640 !important;
    background: #000000 !important;
  }

  video.html5-main-video,
  .html5-video-player video,
  video {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
    object-fit: contain !important; /* contain = crystal clear, zero blur */
    filter: none !important;
    backdrop-filter: none !important;
    z-index: 2147483642 !important;
  }
`;

// Always active Ad-Skipper & Auto-Play Script
const AD_SKIP_SCRIPT = `
  (() => {
    setInterval(() => {
      const skipBtn = document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button, .ytp-ad-skip-button-modern, [id^="skip-button"] button');
      if (skipBtn) skipBtn.click();

      const adClose = document.querySelector('.ytp-ad-overlay-close-button');
      if (adClose) adClose.click();

      const adVideo = document.querySelector('.ad-showing video, .ad-interrupting video');
      if (adVideo) {
        adVideo.playbackRate = 16.0;
        adVideo.muted = true;
        adVideo.currentTime = adVideo.duration || 999;
      }
    }, 400);
  })();
`;

// ==========================================
// 3. MULTI-TAB ARCHITECTURE & PERSISTENCE
// ==========================================
function createTab(initialUrl = 'https://www.youtube.com', activate = true, isIncognito = false) {
  tabCounter++;
  const tabId = 'tab-' + tabCounter;

  const webview = document.createElement('webview');
  webview.id = 'wv-' + tabId;

  // Private tabs get disposable in-memory partitions
  if (isIncognito) {
    webview.setAttribute('partition', 'in-memory-incognito-' + Date.now());
  } else {
    webview.setAttribute('partition', 'persist:zbm-profile'); // Unified session across all tabs
  }

  webview.setAttribute('allowpopups', 'true');
  webview.setAttribute('useragent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');

  if (window.zbmApi && window.zbmApi.getWebviewPreloadPath) {
    try {
      const p = window.zbmApi.getWebviewPreloadPath();
      webview.setAttribute('preload', 'file:///' + p.replace(/\\/g, '/'));
    } catch (e) {}
  }

  webview.setAttribute('webpreferences', 'contextIsolation=false');
  webview.src = initialUrl;

  const tabData = {
    id: tabId,
    url: initialUrl,
    title: isIncognito ? 'Private Tab' : (initialUrl.includes('youtube.com') ? 'YouTube' : 'New Tab'),
    favicon: null,
    isLoading: false,
    webviewEl: webview,
    cssInjectionKey: null,
    darkModeKey: null,
    isIncognito: Boolean(isIncognito),
    zoomFactor: 1.0,
    isSleeping: false,
    savedUrl: null,
    lastActiveTime: Date.now()
  };

  tabs.push(tabData);
  webviewsContainer.appendChild(webview);

  attachWebviewListeners(tabData);
  renderTabsUI();

  if (activate || tabs.length === 1) {
    switchTab(tabId);
  }

  if (tabsContainer) {
    requestAnimationFrame(() => {
      tabsContainer.scrollTo({ left: tabsContainer.scrollWidth, behavior: 'smooth' });
    });
  }

  saveSessionDebounced();
  return tabData;
}

function closeTab(tabId) {
  const index = tabs.findIndex(t => t.id === tabId);
  if (index === -1) return;

  const tabToClose = tabs[index];
  if (tabToClose.webviewEl && tabToClose.webviewEl.parentNode) {
    tabToClose.webviewEl.parentNode.removeChild(tabToClose.webviewEl);
  }

  tabs.splice(index, 1);

  if (isSplitMode && secondaryTabId === tabId) {
    const nextSec = tabs.find(t => t.id !== activeTabId);
    if (nextSec) {
      secondaryTabId = nextSec.id;
    } else {
      toggleSplitMode(false);
    }
  }

  if (tabs.length === 0) {
    createTab('https://www.youtube.com', true);
    return;
  }

  if (activeTabId === tabId) {
    const nextIndex = Math.max(0, index - 1);
    switchTab(tabs[nextIndex].id);
  } else {
    renderTabsUI();
    if (isSplitMode) updateSplitLayout();
  }

  saveSessionDebounced();
}

function switchTab(tabId) {
  const targetTab = tabs.find(t => t.id === tabId);
  if (!targetTab) return;

  // Wake up tab if sleeping in Eco Mode
  if (targetTab.isSleeping && targetTab.savedUrl) {
    targetTab.isSleeping = false;
    targetTab.webviewEl.src = targetTab.savedUrl;
    targetTab.savedUrl = null;
    showToast('Resumed tab from sleep', 2000);
  }

  targetTab.lastActiveTime = Date.now();

  if (isSplitMode) {
    if (tabId === secondaryTabId) {
      // Swap active and secondary
      secondaryTabId = activeTabId;
      activeTabId = tabId;
    } else {
      activeTabId = tabId;
      if (!secondaryTabId || secondaryTabId === activeTabId) {
        const other = tabs.find(t => t.id !== activeTabId);
        secondaryTabId = other ? other.id : null;
      }
    }
    updateSplitLayout();
  } else {
    activeTabId = tabId;
    tabs.forEach(t => {
      if (t.id === tabId) {
        t.webviewEl.style.display = 'flex';
        t.webviewEl.classList.add('active-webview');
        t.webviewEl.classList.remove('split-secondary-webview');
      } else {
        t.webviewEl.style.display = 'none';
        t.webviewEl.classList.remove('active-webview', 'split-secondary-webview');
      }
    });
  }

  renderTabsUI();
  const activeEl = tabsContainer?.querySelector(`[data-tab-id="${tabId}"]`);
  if (activeEl && activeEl.scrollIntoView) {
    activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }
  updateOmniboxForActiveTab();
  updateBookmarkStarUI();
  updateNavButtonsState();

  if (targetTab.url === 'about:blank' || !targetTab.url) {
    newTabDashboard.classList.add('active');
  } else {
    newTabDashboard.classList.remove('active');
  }

  if (isStealthVideoMode) {
    applyStealthVideoCss(targetTab);
  }

  if (isDarkModeActive) {
    applyDarkModeCss(targetTab);
  }

  saveSessionDebounced();
}

function updateSplitLayout() {
  tabs.forEach(t => {
    if (t.id === activeTabId) {
      t.webviewEl.style.display = 'flex';
      t.webviewEl.classList.add('active-webview');
      t.webviewEl.classList.remove('split-secondary-webview');
    } else if (t.id === secondaryTabId) {
      t.webviewEl.style.display = 'flex';
      t.webviewEl.classList.remove('active-webview');
      t.webviewEl.classList.add('split-secondary-webview');
    } else {
      t.webviewEl.style.display = 'none';
      t.webviewEl.classList.remove('active-webview', 'split-secondary-webview');
    }
  });
}

function getActiveTab() {
  return tabs.find(t => t.id === activeTabId);
}

function renderTabsUI() {
  tabsContainer.innerHTML = '';

  tabs.forEach(tab => {
    const tabEl = document.createElement('div');
    let classes = 'browser-tab';
    if (tab.id === activeTabId) classes += ' active';
    if (isSplitMode && tab.id === secondaryTabId) classes += ' split-active';
    if (tab.isIncognito) classes += ' incognito-tab';
    if (tab.isSleeping) classes += ' sleeping-tab';
    tabEl.className = classes;
    tabEl.setAttribute('data-tab-id', tab.id);

    const iconEl = document.createElement('div');
    iconEl.className = 'tab-favicon';
    if (tab.isLoading) {
      iconEl.innerHTML = '<div class="tab-spinner"></div>';
    } else if (tab.isSleeping) {
      iconEl.innerHTML = '<span class="tab-sleep-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></span>';
    } else if (tab.isIncognito) {
      iconEl.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10s3-4 10-4 10 4 10 4"/><circle cx="7" cy="15" r="3"/><circle cx="17" cy="15" r="3"/><path d="M10 15h4"/></svg>';
    } else if (tab.favicon) {
      iconEl.innerHTML = `<img src="${tab.favicon}" alt="" width="14" height="14" onerror="this.outerHTML='<svg width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><line x1=\\'2\\' y1=\\'12\\' x2=\\'22\\' y2=\\'12\\'/></svg>'">`;
    } else {
      iconEl.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    }

    const titleEl = document.createElement('span');
    titleEl.className = 'tab-title';
    titleEl.textContent = tab.title || (tab.isIncognito ? 'Private Tab' : 'New Tab');

    const closeBtn = document.createElement('button');
    closeBtn.className = 'tab-close-btn';
    closeBtn.innerHTML = '✕';
    closeBtn.title = 'Close tab (Ctrl+W)';
    closeBtn.addEventListener('mousedown', (e) => e.stopPropagation());
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTab(tab.id);
    });

    tabEl.appendChild(iconEl);
    tabEl.appendChild(titleEl);
    tabEl.appendChild(closeBtn);

    tabEl.addEventListener('mousedown', (e) => e.stopPropagation());
    tabEl.addEventListener('click', () => switchTab(tab.id));
    tabEl.addEventListener('auxclick', (e) => {
      if (e.button === 1) {
        e.preventDefault();
        closeTab(tab.id);
      }
    });

    tabsContainer.appendChild(tabEl);
  });
}

function attachWebviewListeners(tab) {
  const wv = tab.webviewEl;

  wv.addEventListener('dom-ready', () => {
    wv.executeJavaScript(AD_SKIP_SCRIPT).catch(() => {});

    if (isStealthVideoMode && tab.id === activeTabId) {
      applyStealthVideoCss(tab);
    }
    if (isDarkModeActive) {
      applyDarkModeCss(tab);
    }
  });

  wv.addEventListener('did-start-loading', () => {
    tab.isLoading = true;
    if (tab.id === activeTabId) {
      omniboxProgress.style.display = 'block';
      iconReload.style.display = 'none';
      iconStop.style.display = 'block';
    }
    renderTabsUI();
  });

  wv.addEventListener('did-stop-loading', () => {
    tab.isLoading = false;
    if (tab.id === activeTabId) {
      omniboxProgress.style.display = 'none';
      iconReload.style.display = 'block';
      iconStop.style.display = 'none';
      updateNavButtonsState();
    }
    renderTabsUI();
  });

  wv.addEventListener('did-navigate', (e) => {
    tab.url = e.url;
    if (tab.id === activeTabId) {
      updateOmniboxForActiveTab();
      updateBookmarkStarUI();
      updateNavButtonsState();
      if (tab.url !== 'about:blank') {
        newTabDashboard.classList.remove('active');
      }
    }
    if (!tab.isIncognito) recordHistory(tab.title, tab.url, tab.favicon);
    saveSessionDebounced();
  });

  wv.addEventListener('did-navigate-in-page', (e) => {
    if (e.isMainFrame) {
      tab.url = e.url;
      if (tab.id === activeTabId) {
        updateOmniboxForActiveTab();
        updateBookmarkStarUI();
        updateNavButtonsState();
        if (isStealthVideoMode) applyStealthVideoCss(tab);
        if (isDarkModeActive) applyDarkModeCss(tab);
      }
      if (!tab.isIncognito) recordHistory(tab.title, tab.url, tab.favicon);
      saveSessionDebounced();
    }
  });

  wv.addEventListener('page-title-updated', (e) => {
    tab.title = e.title;
    renderTabsUI();
    if (!tab.isIncognito) recordHistory(tab.title, tab.url, tab.favicon);
    saveSessionDebounced();
  });

  wv.addEventListener('page-favicon-updated', (e) => {
    if (e.favicons && e.favicons.length > 0) {
      tab.favicon = e.favicons[0];
      renderTabsUI();
    }
  });

  wv.addEventListener('found-in-page', (e) => {
    if (tab.id === activeTabId && e.result) {
      const active = e.result.activeMatchOrdinal || 0;
      const total = e.result.matches || 0;
      if (findCount) {
        findCount.textContent = `${active}/${total}`;
        findCount.style.color = (total === 0 && findInput.value.trim().length > 0) ? '#ef4444' : 'var(--accent-cyan)';
      }
    }
  });

  wv.addEventListener('new-window', (e) => {
    e.preventDefault();
    createTab(e.url, true, tab.isIncognito);
  });
}

function updateOmniboxForActiveTab() {
  const tab = getActiveTab();
  if (!tab) return;
  omniboxInput.value = (tab.url === 'about:blank' || !tab.url) ? '' : tab.url;
}

function updateNavButtonsState() {
  const tab = getActiveTab();
  if (!tab || !tab.webviewEl) return;
  try {
    navBtnBack.disabled = !tab.webviewEl.canGoBack();
    navBtnForward.disabled = !tab.webviewEl.canGoForward();
  } catch (e) {}
}

let saveTimeout = null;
function saveSessionDebounced() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    if (window.zbmApi && window.zbmApi.saveSession) {
      // Exclude incognito tabs from session restore
      const persistableTabs = tabs.filter(t => !t.isIncognito);
      const sessionData = {
        activeTabId,
        tabs: persistableTabs.map(t => ({ id: t.id, url: t.url, title: t.title }))
      };
      window.zbmApi.saveSession(sessionData);
    }
  }, 1000);
}

// ==========================================
// 4. SMART OMNIBOX & SEARCH ENGINE
// ==========================================
function normalizeUrl(input) {
  let query = input.trim();
  if (!query) return 'about:blank';

  // Smart Prefixes
  if (query.startsWith('yt ')) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query.substring(3).trim())}`;
  }
  if (query.startsWith('g ')) {
    return `https://www.google.com/search?q=${encodeURIComponent(query.substring(2).trim())}`;
  }
  if (query.startsWith('ai ')) {
    return `https://chatgpt.com/?q=${encodeURIComponent(query.substring(3).trim())}`;
  }
  if (query.startsWith('wiki ')) {
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query.substring(5).trim())}`;
  }
  if (query.startsWith('gh ')) {
    return `https://github.com/search?q=${encodeURIComponent(query.substring(3).trim())}`;
  }
  if (query.startsWith('r ')) {
    const sub = query.substring(2).trim();
    if (!sub.includes(' ')) return `https://www.reddit.com/r/${encodeURIComponent(sub)}`;
    return `https://www.reddit.com/search/?q=${encodeURIComponent(sub)}`;
  }

  // Direct Protocol
  if (/^https?:\/\//i.test(query)) {
    return query;
  }

  // Domain regex
  const isDomain = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i.test(query) || /^localhost(:[0-9]+)?(\/.*)?$/i.test(query);
  if (isDomain) {
    return 'https://' + query;
  }

  // Default to Google
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function navigateActiveTab(targetUrl) {
  const tab = getActiveTab();
  if (!tab) return;

  const url = normalizeUrl(targetUrl);
  tab.url = url;

  if (url === 'about:blank') {
    newTabDashboard.classList.add('active');
    tab.webviewEl.loadURL('about:blank');
  } else {
    newTabDashboard.classList.remove('active');
    tab.webviewEl.loadURL(url);
  }

  omniboxInput.value = url === 'about:blank' ? '' : url;
}

// ==========================================
// 5. CRYSTAL-CLEAR STEALTH VIDEO MODE
// ==========================================
async function toggleStealthVideoMode() {
  isStealthVideoMode = !isStealthVideoMode;
  const tab = getActiveTab();

  if (isStealthVideoMode) {
    appContainer.classList.add('stealth-video-active');
    btnToggleVideoMode.classList.add('active');
    if (tab) await applyStealthVideoCss(tab);
    startVideoPolling();
    resetHudTimer();
  } else {
    appContainer.classList.remove('stealth-video-active');
    btnToggleVideoMode.classList.remove('active');
    if (tab && tab.cssInjectionKey) {
      try {
        await tab.webviewEl.removeInsertedCSS(tab.cssInjectionKey);
      } catch (e) {}
      tab.cssInjectionKey = null;
    }
    stopVideoPolling();
  }
}

async function applyStealthVideoCss(tab) {
  if (!tab || !tab.webviewEl) return;
  try {
    if (tab.cssInjectionKey) {
      try { await tab.webviewEl.removeInsertedCSS(tab.cssInjectionKey); } catch (e) {}
    }
    tab.cssInjectionKey = await tab.webviewEl.insertCSS(CRISP_VIDEO_FOCUS_CSS);
  } catch (e) {}
}

async function toggleUniversalDarkMode() {
  isDarkModeActive = !isDarkModeActive;
  btnToolbarDarkMode?.classList.toggle('active', isDarkModeActive);
  if (menuBadgeDarkmode) {
    menuBadgeDarkmode.textContent = isDarkModeActive ? 'ON' : 'OFF';
    menuBadgeDarkmode.classList.toggle('active', isDarkModeActive);
  }

  for (const tab of tabs) {
    if (isDarkModeActive) {
      await applyDarkModeCss(tab);
    } else if (tab.darkModeKey) {
      try { await tab.webviewEl.removeInsertedCSS(tab.darkModeKey); } catch (e) {}
      tab.darkModeKey = null;
    }
  }
}

async function applyDarkModeCss(tab) {
  if (!tab || !tab.webviewEl) return;
  try {
    if (tab.darkModeKey) {
      try { await tab.webviewEl.removeInsertedCSS(tab.darkModeKey); } catch (e) {}
    }
    tab.darkModeKey = await tab.webviewEl.insertCSS(DARK_MODE_CSS);
  } catch (e) {}
}

function resetHudTimer() {
  appContainer.classList.add('show-floating-hud');
  clearTimeout(hudTimeout);
  hudTimeout = setTimeout(() => {
    if (isStealthVideoMode && !shortcutsModal.classList.contains('visible') && !decoyContainer.classList.contains('active')) {
      appContainer.classList.remove('show-floating-hud');
    }
  }, 2400);
}

// ==========================================
// 6. VIDEO PLAYBACK & AUDIO BOOST ENGINE
// ==========================================
function executeInActiveWebview(script) {
  const tab = getActiveTab();
  if (tab && tab.webviewEl) {
    return tab.webviewEl.executeJavaScript(script).catch(() => null);
  }
  return Promise.resolve(null);
}

function togglePlayPause() {
  executeInActiveWebview(`
    (() => {
      const v = document.querySelector('video');
      if (v) {
        if (v.paused) v.play(); else v.pause();
        return !v.paused;
      }
      return false;
    })()
  `).then(playing => {
    if (playing !== null) {
      isPlaying = playing;
      updatePlayPauseIcons();
    }
  });
}

function updatePlayPauseIcons() {
  if (isPlaying) {
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
  } else {
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
  }
}

function seekRelative(seconds) {
  executeInActiveWebview(`
    const v = document.querySelector('video');
    if (v) v.currentTime += ${seconds};
  `);
}

function toggleMute() {
  executeInActiveWebview(`
    (() => {
      const v = document.querySelector('video');
      if (v) {
        v.muted = !v.muted;
        return v.muted;
      }
      return false;
    })()
  `).then(muted => {
    if (muted !== null) {
      isMuted = muted;
      updateMuteIcons();
    }
  });
}

function updateMuteIcons() {
  if (isMuted) {
    iconVol.style.display = 'none';
    iconMute.style.display = 'block';
  } else {
    iconVol.style.display = 'block';
    iconMute.style.display = 'none';
  }
}

// Audio Booster (100% -> 150% -> 200% -> 300% via Web Audio GainNode)
const boostSteps = [1.0, 1.5, 2.0, 3.0];
function cycleAudioBoost() {
  const idx = (boostSteps.indexOf(currentAudioBoost) + 1) % boostSteps.length;
  currentAudioBoost = boostSteps[idx];
  const percentText = Math.round(currentAudioBoost * 100) + '%';
  btnBoostStep.textContent = percentText;

  executeInActiveWebview(`
    (() => {
      const v = document.querySelector('video');
      if (v) {
        if (!window.__zbmAudioCtx) {
          try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const source = ctx.createMediaElementSource(v);
            const gain = ctx.createGain();
            source.connect(gain);
            gain.connect(ctx.destination);
            window.__zbmAudioCtx = ctx;
            window.__zbmGain = gain;
          } catch(e) {}
        }
        if (window.__zbmGain) {
          window.__zbmGain.gain.value = ${currentAudioBoost};
        }
      }
    })()
  `);
}

// Speed controller
const speedList = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0, 3.0];
function adjustSpeed(delta) {
  let idx = speedList.indexOf(currentPlaybackRate);
  if (idx === -1) idx = 2; // 1.0 default
  idx = Math.max(0, Math.min(speedList.length - 1, idx + delta));
  currentPlaybackRate = speedList[idx];
  btnSpeed.textContent = currentPlaybackRate + 'x';
  executeInActiveWebview(`const v = document.querySelector('video'); if (v) v.playbackRate = ${currentPlaybackRate};`);
}

function startVideoPolling() {
  stopVideoPolling();
  videoPollInterval = setInterval(() => {
    executeInActiveWebview(`
      (() => {
        const v = document.querySelector('video');
        if (v) {
          return {
            currentTime: v.currentTime || 0,
            duration: v.duration || 0,
            paused: v.paused,
            muted: v.muted
          };
        }
        return null;
      })()
    `).then(info => {
      if (info) {
        timeCurrent.textContent = formatTime(info.currentTime);
        timeDuration.textContent = formatTime(info.duration);
        if (info.duration > 0) {
          timelineSlider.value = (info.currentTime / info.duration) * 100;
        }
        isPlaying = !info.paused;
        isMuted = info.muted;
        updatePlayPauseIcons();
        updateMuteIcons();
      }
    });
  }, 800);
}

function stopVideoPolling() {
  if (videoPollInterval) {
    clearInterval(videoPollInterval);
    videoPollInterval = null;
  }
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ==========================================
// 7. MEETING SHIELD, DECOYS & STEALTH
// ==========================================
function updateOpacityDisplay(val) {
  if (typeof val !== 'number' || isNaN(val)) val = 1.0;
  currentOpacity = Math.max(0.12, Math.min(1.0, val));
  const percent = Math.round(currentOpacity * 100);
  if (toolbarOpacitySlider) toolbarOpacitySlider.value = percent;
  if (toolbarOpacityVal) toolbarOpacityVal.textContent = percent + '%';
  if (videoOpacitySlider) videoOpacitySlider.value = percent;
  if (videoOpacityVal) videoOpacityVal.textContent = percent + '%';
  if (appContainer) {
    appContainer.style.opacity = currentOpacity;
  }
}

function adjustOpacityLocal(delta) {
  const newVal = Math.max(0.12, Math.min(1.0, currentOpacity + delta));
  updateOpacityDisplay(newVal);
  if (window.zbmApi) window.zbmApi.setOpacity(newVal);
}

function setMeetingShield(active) {
  isContentProtected = Boolean(active);
  btnToolbarShield?.classList.toggle('active', isContentProtected);
  btnVideoShield?.classList.toggle('active', isContentProtected);
  if (menuBadgeShield) {
    menuBadgeShield.textContent = isContentProtected ? 'ON' : 'OFF';
    menuBadgeShield.classList.toggle('active', isContentProtected);
  }

  if (isContentProtected) {
    shieldNotice?.classList.add('active');
    setTimeout(() => shieldNotice?.classList.remove('active'), 4000);
  } else {
    shieldNotice?.classList.remove('active');
  }
}

function setDecoyState(active) {
  isDecoyActive = Boolean(active);
  decoyContainer?.classList.toggle('active', isDecoyActive);
  btnToolbarDecoy?.classList.toggle('active', isDecoyActive);
  btnVideoDecoy?.classList.toggle('active', isDecoyActive);

  if (isDecoyActive) {
    executeInActiveWebview(`const v = document.querySelector('video'); if (v) v.pause();`);
  } else {
    executeInActiveWebview(`const v = document.querySelector('video'); if (v) v.play();`);
  }
}

function setGhostState(active) {
  isClickThrough = Boolean(active);
  btnToolbarGhost?.classList.toggle('active', isClickThrough);
  btnVideoGhost?.classList.toggle('active', isClickThrough);
  if (menuBadgeGhost) {
    menuBadgeGhost.textContent = isClickThrough ? 'ON' : 'OFF';
    menuBadgeGhost.classList.toggle('active', isClickThrough);
  }

  if (isClickThrough) {
    ghostNotice?.classList.add('active');
    setTimeout(() => ghostNotice?.classList.remove('active'), 4500);
  } else {
    ghostNotice?.classList.remove('active');
  }
}

function setPinState(active) {
  isAlwaysOnTop = Boolean(active);
  btnToolbarPin?.classList.toggle('active', isAlwaysOnTop);
  btnVideoPin?.classList.toggle('active', isAlwaysOnTop);
  if (menuBadgePin) {
    menuBadgePin.textContent = isAlwaysOnTop ? 'ON' : 'OFF';
    menuBadgePin.classList.toggle('active', isAlwaysOnTop);
  }
}

function toggleAudioOnly() {
  isAudioOnly = !isAudioOnly;
  audioOnlyScreen.classList.toggle('active', isAudioOnly);
  btnAudioOnly.style.background = isAudioOnly ? 'var(--accent-cyan)' : '';
  btnAudioOnly.style.color = isAudioOnly ? '#0f172a' : '';
}

// ==========================================
// 8. DOWNLOADS MANAGER
// ==========================================
function updateDownloadsUI() {
  const keys = Object.keys(activeDownloads);
  if (keys.length === 0) {
    downloadsList.innerHTML = '<div class="empty-downloads" style="padding:16px; text-align:center; color:#64748b; font-size:11px;">No active downloads</div>';
    downloadBadge.style.display = 'none';
    return;
  }

  downloadBadge.style.display = 'block';
  downloadsList.innerHTML = '';

  keys.forEach(filename => {
    const d = activeDownloads[filename];
    const row = document.createElement('div');
    row.className = 'download-row';

    const percent = d.totalBytes > 0 ? Math.round((d.receivedBytes / d.totalBytes) * 100) : 0;
    const mbReceived = (d.receivedBytes / (1024 * 1024)).toFixed(1);
    const mbTotal = (d.totalBytes / (1024 * 1024)).toFixed(1);

    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
        <span style="font-weight:600; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${d.filename}</span>
        <span style="color:#38bdf8; font-size:10px;">${d.state === 'completed' ? '✓ Completed' : percent + '%'}</span>
      </div>
      <div class="dl-progress-bar"><div class="dl-progress-fill" style="width:${d.state === 'completed' ? 100 : percent}%;"></div></div>
      <div style="display:flex; justify-content:space-between; font-size:9px; color:#94a3b8; margin-top:3px;">
        <span>${mbReceived} MB / ${mbTotal} MB</span>
        <button class="btn-show-folder" data-path="${d.path || ''}">Show in folder</button>
      </div>
    `;

    row.querySelector('.btn-show-folder').addEventListener('click', (e) => {
      const p = e.target.getAttribute('data-path');
      window.zbmApi?.showInFolder(p);
    });

    downloadsList.appendChild(row);
  });
}

// ==========================================
// 9. POWER UTILITIES: TOASTS, SPLIT, FIND, SNAPSHOT, ECO, BOOKMARKS, HISTORY
// ==========================================

// Global Toast System
function showToast(message, duration = 3000) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'zbm-toast';
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 320);
  }, duration);
}

// Split Screen Dual View Mode
function toggleSplitMode(forcedState) {
  isSplitMode = forcedState !== undefined ? forcedState : !isSplitMode;
  btnToggleSplit?.classList.toggle('active', isSplitMode);
  if (menuBadgeSplit) {
    menuBadgeSplit.textContent = isSplitMode ? 'ON' : 'OFF';
    menuBadgeSplit.classList.toggle('active', isSplitMode);
  }
  webviewsContainer.classList.toggle('split-mode', isSplitMode);

  if (isSplitMode) {
    if (tabs.length < 2) {
      createTab('https://www.google.com', false);
    }
    const sec = tabs.find(t => t.id !== activeTabId) || tabs[1];
    secondaryTabId = sec ? sec.id : null;
    updateSplitLayout();
    showToast('🪟 Split Screen Active: 2 tabs side-by-side', 2500);
  } else {
    secondaryTabId = null;
    tabs.forEach(t => {
      t.webviewEl.classList.remove('split-secondary-webview');
      if (t.id === activeTabId) {
        t.webviewEl.style.display = 'flex';
        t.webviewEl.classList.add('active-webview');
      } else {
        t.webviewEl.style.display = 'none';
        t.webviewEl.classList.remove('active-webview');
      }
    });
    showToast('Single Tab View Restored', 1500);
  }
  renderTabsUI();
}

// Find in Page Engine
function openFindBar() {
  if (!findBar) return;
  findBar.classList.add('visible');
  findInput.focus();
  findInput.select();
  const q = findInput.value.trim();
  const tab = getActiveTab();
  if (q && tab && tab.webviewEl) {
    tab.webviewEl.findInPage(q);
  }
}

function closeFindBar() {
  if (!findBar) return;
  findBar.classList.remove('visible');
  if (findCount) findCount.textContent = '0/0';
  const tab = getActiveTab();
  if (tab && tab.webviewEl) {
    try { tab.webviewEl.stopFindInPage('clearSelection'); } catch(e) {}
  }
}

// Page Zoom Controller (Ctrl + / Ctrl - / Ctrl 0)
function adjustZoom(delta, reset = false) {
  const tab = getActiveTab();
  if (!tab || !tab.webviewEl) return;

  if (tab.zoomFactor === undefined) tab.zoomFactor = 1.0;
  if (reset) {
    tab.zoomFactor = 1.0;
  } else {
    tab.zoomFactor = Math.round((tab.zoomFactor + delta) * 10) / 10;
    tab.zoomFactor = Math.max(0.4, Math.min(2.5, tab.zoomFactor));
  }

  try {
    tab.webviewEl.setZoomFactor(tab.zoomFactor);
  } catch(e) {}

  const percent = Math.round(tab.zoomFactor * 100);
  if (zoomToast) {
    zoomToast.textContent = `Zoom: ${percent}%`;
    zoomToast.classList.add('visible');
    clearTimeout(zoomToastTimer);
    zoomToastTimer = setTimeout(() => zoomToast.classList.remove('visible'), 1600);
  }
}

// 1-Click Crisp Video Frame Capture (Ctrl+Shift+S)
async function captureVideoFrame() {
  const tab = getActiveTab();
  if (!tab || !tab.webviewEl) return;

  showToast('Capturing video frame...');

  const dataUrl = await tab.webviewEl.executeJavaScript(`
    (() => {
      const v = document.querySelector('video');
      if (!v) return null;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = v.videoWidth || v.clientWidth || 1280;
        canvas.height = v.videoHeight || v.clientHeight || 720;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/png');
      } catch(e) {
        return null;
      }
    })()
  `).catch(() => null);

  if (dataUrl && window.zbmApi && window.zbmApi.saveFrameSnapshot) {
    const res = await window.zbmApi.saveFrameSnapshot(dataUrl);
    if (res && res.success) {
      showToast(`Saved to Downloads & Copied: <b>${res.filename}</b>`, 4000);
    } else {
      showToast(`Could not save snapshot: ${res?.error || 'Unknown'}`, 3000);
    }
  } else {
    showToast('No active video player found on current tab', 2500);
  }
}

// Native Picture-in-Picture (PiP)
function toggleNativePip() {
  executeInActiveWebview(`
    (() => {
      const v = document.querySelector('video');
      if (v) {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
          return false;
        } else {
          v.requestPictureInPicture();
          return true;
        }
      }
      return null;
    })()
  `).then(res => {
    if (res === true) showToast('Picture-in-Picture Activated', 2000);
    else if (res === false) showToast('Picture-in-Picture Closed', 1500);
    else showToast('No video player found for PiP', 2000);
  });
}

// Distraction-Free Reader Mode (Alt+R)
async function toggleReaderMode() {
  const tab = getActiveTab();
  if (!tab || !tab.webviewEl) return;

  isReaderModeActive = !isReaderModeActive;
  btnToolbarReader?.classList.toggle('active', isReaderModeActive);
  if (menuBadgeReader) {
    menuBadgeReader.textContent = isReaderModeActive ? 'ON' : 'OFF';
    menuBadgeReader.classList.toggle('active', isReaderModeActive);
  }

  if (isReaderModeActive) {
    await tab.webviewEl.executeJavaScript(`
      (() => {
        if (window.__zbmReaderActive) return;
        window.__zbmReaderActive = true;
        const article = document.querySelector('article, main, [role="main"], .post-content, #content, .entry-content') || document.body;
        const title = document.title || 'Reader View';
        const content = article.innerHTML;

        window.__zbmOriginalBody = document.body.innerHTML;
        document.body.innerHTML = \`
          <div id="__zbm_reader_view" style="max-width: 740px; margin: 40px auto; padding: 24px; font-family: Georgia, serif; line-height: 1.8; font-size: 19px; color: #e4e4e7; background: #121214;">
            <h1 style="font-size: 32px; line-height: 1.25; margin-bottom: 24px; color: #38bdf8;">\${title}</h1>
            <div style="opacity: 0.9;">\${content}</div>
          </div>
        \`;
        document.body.style.background = '#121214';
      })()
    `).catch(() => {});
    showToast('Reader Mode: Distraction-free typography active', 2500);
  } else {
    await tab.webviewEl.executeJavaScript(`
      (() => {
        if (window.__zbmOriginalBody) {
          document.body.innerHTML = window.__zbmOriginalBody;
          window.__zbmReaderActive = false;
        }
      })()
    `).catch(() => {});
    showToast('Reader Mode Exited', 1500);
  }
}

// RAM Eco Saver (Tab Hibernation & Memory Optimization)
async function toggleEcoMode() {
  isEcoModeActive = !isEcoModeActive;
  btnToolbarEco?.classList.toggle('active', isEcoModeActive);
  if (menuBadgeEco) {
    menuBadgeEco.textContent = isEcoModeActive ? 'ON' : 'OFF';
    menuBadgeEco.classList.toggle('active', isEcoModeActive);
  }

  if (isEcoModeActive) {
    let sleepingCount = 0;
    tabs.forEach(t => {
      if (t.id !== activeTabId && (!isSplitMode || t.id !== secondaryTabId)) {
        if (!t.isSleeping && t.url && t.url !== 'about:blank') {
          t.savedUrl = t.url;
          t.isSleeping = true;
          t.webviewEl.loadURL('about:blank');
          sleepingCount++;
        }
      }
    });

    renderTabsUI();
    let statsMsg = '';
    if (window.zbmApi && window.zbmApi.getMemoryStats) {
      const stats = await window.zbmApi.getMemoryStats();
      if (stats.success) statsMsg = ` (${stats.memoryMB} MB active)`;
    }
    showToast(`RAM Eco Saver Active: ${sleepingCount} inactive tab(s) sleeping to free RAM!${statsMsg}`, 3500);
  } else {
    tabs.forEach(t => {
      if (t.isSleeping && t.savedUrl) {
        t.isSleeping = false;
        t.webviewEl.src = t.savedUrl;
        t.savedUrl = null;
      }
    });
    renderTabsUI();
    showToast('RAM Eco Saver Deactivated: All tabs restored', 2000);
  }
}

// Copy Clean URL without Tracking & UTM Parameters
function copyCleanUrl() {
  const tab = getActiveTab();
  if (!tab || !tab.url || tab.url === 'about:blank') {
    showToast('No active URL to copy', 2000);
    return;
  }
  try {
    const urlObj = new URL(tab.url);
    const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'si', 'igshid', 'mc_eid', 'ref', 'ref_src'];
    trackingParams.forEach(param => urlObj.searchParams.delete(param));
    const clean = urlObj.toString();
    if (window.zbmApi && window.zbmApi.copyToClipboard) {
      window.zbmApi.copyToClipboard(clean);
      showToast('Clean URL copied to clipboard (trackers removed)!', 3000);
    }
  } catch(e) {
    if (window.zbmApi && window.zbmApi.copyToClipboard) {
      window.zbmApi.copyToClipboard(tab.url);
      showToast('URL copied to clipboard', 2000);
    }
  }
}

// Bookmarks Management
function initBookmarks() {
  try {
    const saved = localStorage.getItem('zbm_bookmarks');
    if (saved) bookmarks = JSON.parse(saved);
  } catch(e) {}
  renderBookmarksBar();
}

function updateBookmarkStarUI() {
  const tab = getActiveTab();
  if (!tab || !tab.url || tab.url === 'about:blank') {
    if (omniboxStarBtn) {
      omniboxStarBtn.classList.remove('bookmarked');
    }
    return;
  }
  const isBookmarked = bookmarks.some(b => b.url === tab.url);
  if (omniboxStarBtn) {
    omniboxStarBtn.classList.toggle('bookmarked', isBookmarked);
  }
}

function toggleBookmarkCurrentTab() {
  const tab = getActiveTab();
  if (!tab || !tab.url || tab.url === 'about:blank') return;

  const idx = bookmarks.findIndex(b => b.url === tab.url);
  if (idx !== -1) {
    bookmarks.splice(idx, 1);
    showToast(`Removed "${tab.title || tab.url}" from Bookmarks`, 2000);
  } else {
    bookmarks.push({
      title: tab.title || tab.url,
      url: tab.url,
      icon: tab.favicon || ''
    });
    showToast(`Bookmarked "${tab.title || tab.url}"!`, 2500);
  }
  try {
    localStorage.setItem('zbm_bookmarks', JSON.stringify(bookmarks));
  } catch(e) {}
  updateBookmarkStarUI();
  renderBookmarksBar();
}

function renderBookmarksBar() {
  if (!bookmarksBar) return;
  const defaultBMs = [
    { title: 'Google', url: 'https://www.google.com', svg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
    { title: 'YouTube', url: 'https://www.youtube.com', svg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>' },
    { title: 'ChatGPT', url: 'https://chatgpt.com', svg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
    { title: 'GitHub', url: 'https://github.com', svg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>' },
    { title: 'Reddit', url: 'https://www.reddit.com', svg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>' }
  ];

  const allItems = [...defaultBMs, ...bookmarks];
  bookmarksBar.innerHTML = '';
  allItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'bookmark-item';
    el.setAttribute('data-url', item.url);
    el.title = item.url;
    let iconHtml = '';
    if (item.svg) {
      iconHtml = item.svg;
    } else if (item.icon && item.icon.startsWith('http')) {
      iconHtml = `<img src="${item.icon}" alt="" width="12" height="12" style="border-radius:2px;" onerror="this.outerHTML='<svg width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><line x1=\\'2\\' y1=\\'12\\' x2=\\'22\\' y2=\\'12\\'/></svg>'">`;
    } else {
      iconHtml = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    }
    el.innerHTML = `<span class="bm-icon">${iconHtml}</span> ${item.title}`;
    el.addEventListener('click', () => navigateActiveTab(item.url));
    bookmarksBar.appendChild(el);
  });
}

// Browsing History Engine
function initHistory() {
  try {
    const saved = localStorage.getItem('zbm_history');
    if (saved) browsingHistory = JSON.parse(saved);
  } catch(e) {}
}

function recordHistory(title, url, favicon) {
  if (!url || url === 'about:blank' || url.startsWith('chrome://')) return;
  const entry = {
    title: title || url,
    url: url,
    icon: favicon || '',
    time: Date.now()
  };
  if (browsingHistory.length > 0 && browsingHistory[0].url === url) {
    browsingHistory[0].title = entry.title;
    browsingHistory[0].time = entry.time;
  } else {
    browsingHistory.unshift(entry);
    if (browsingHistory.length > 250) browsingHistory.pop();
  }
  try {
    localStorage.setItem('zbm_history', JSON.stringify(browsingHistory));
  } catch(e) {}
}

function openHistoryDrawer() {
  if (!historyDrawer) return;
  renderHistoryList();
  historyDrawer.classList.add('visible');
  if (historySearchInput) {
    historySearchInput.value = '';
    historySearchInput.focus();
  }
}

function closeHistoryDrawer() {
  if (historyDrawer) historyDrawer.classList.remove('visible');
}

function renderHistoryList(filter = '') {
  if (!historyList) return;
  historyList.innerHTML = '';

  const q = filter.toLowerCase().trim();
  const items = browsingHistory.filter(h => {
    return !q || h.title.toLowerCase().includes(q) || h.url.toLowerCase().includes(q);
  });

  if (items.length === 0) {
    historyList.innerHTML = '<div class="empty-history" style="padding:16px; text-align:center; color:#64748b; font-size:11px;">No browsing history found</div>';
    return;
  }

  items.slice(0, 50).forEach(item => {
    const row = document.createElement('div');
    row.className = 'history-row';
    const dateStr = new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let iconHtml = '';
    if (item.icon && item.icon.startsWith('http')) {
      iconHtml = `<img src="${item.icon}" alt="" width="14" height="14" style="border-radius:2px;" onerror="this.outerHTML='<svg width=\\'13\\' height=\\'13\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><line x1=\\'2\\' y1=\\'12\\' x2=\\'22\\' y2=\\'12\\'/></svg>'">`;
    } else {
      iconHtml = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    }

    row.innerHTML = `
      <span class="hist-icon">${iconHtml}</span>
      <div class="hist-details">
        <span class="hist-title">${item.title}</span>
        <span class="hist-url">${item.url}</span>
      </div>
      <span class="hist-time">${dateStr}</span>
    `;

    row.addEventListener('click', () => {
      navigateActiveTab(item.url);
      closeHistoryDrawer();
    });

    historyList.appendChild(row);
  });
}

// Clear Browsing Data & Privacy Cache
function openCleanDataModal() {
  if (cleanDataModal) cleanDataModal.classList.add('visible');
}
function closeCleanDataModal() {
  if (cleanDataModal) cleanDataModal.classList.remove('visible');
}

async function executeCleanBrowsingData() {
  const doCache = cleanChkCache ? cleanChkCache.checked : true;
  const doHistory = cleanChkHistory ? cleanChkHistory.checked : true;
  const doCookies = cleanChkCookies ? cleanChkCookies.checked : false;

  if (doHistory) {
    browsingHistory = [];
    try { localStorage.removeItem('zbm_history'); } catch(e) {}
    renderHistoryList();
  }

  if (window.zbmApi && window.zbmApi.clearBrowsingData) {
    await window.zbmApi.clearBrowsingData();
  }

  closeCleanDataModal();
  showToast('Browsing data & privacy cache purged successfully!', 3500);
}

// Theme Accent Color Switcher
function initTheme() {
  try {
    const saved = localStorage.getItem('zbm_theme');
    if (saved) setTheme(saved);
  } catch(e) {}
}

function setTheme(themeClass) {
  document.body.classList.remove('theme-cyan', 'theme-emerald', 'theme-purple', 'theme-amber', 'theme-crimson');
  if (themeClass) {
    document.body.classList.add(themeClass);
    try { localStorage.setItem('zbm_theme', themeClass); } catch(e) {}
  }
}

// ==========================================
// 10. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  document.addEventListener('mousemove', () => {
    if (isStealthVideoMode) resetHudTimer();
  });

  // Window Controls - Resilient dual listener (pointerdown + click with debounce)
  function attachWindowControl(el, action) {
    if (!el) return;
    let lastAction = 0;
    const run = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const now = Date.now();
      if (now - lastAction < 250) return;
      lastAction = now;
      action();
    };
    el.addEventListener('pointerdown', run);
    el.addEventListener('click', run);
  }

  attachWindowControl(btnWinMinimize, () => window.zbmApi?.minimize());
  attachWindowControl(btnWinMaximize, () => window.zbmApi?.maximize());
  attachWindowControl(btnWinClose, () => window.zbmApi?.close());
  attachWindowControl(btnWinFullscreen, () => window.zbmApi?.toggleFullscreen());

  const dragSpacer = document.querySelector('.titlebar-drag-spacer');
  if (dragSpacer) {
    dragSpacer.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      window.zbmApi?.maximize();
    });
  }

  attachWindowControl(btnVideoMinimize, () => window.zbmApi?.minimize());
  attachWindowControl(btnVideoFs, () => window.zbmApi?.toggleFullscreen());
  attachWindowControl(btnVideoClose, () => window.zbmApi?.close());

  // Tabs & Navigation - Instant click response
  if (btnNewTab) {
    btnNewTab.addEventListener('mousedown', (e) => e.stopPropagation());
    btnNewTab.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      createTab('about:blank', true);
    });
  }
  if (btnNewIncognito) {
    btnNewIncognito.addEventListener('mousedown', (e) => e.stopPropagation());
    btnNewIncognito.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      createTab('about:blank', true, true);
    });
  }

  navBtnBack.addEventListener('click', () => {
    const tab = getActiveTab();
    if (tab && tab.webviewEl && tab.webviewEl.canGoBack()) tab.webviewEl.goBack();
  });

  navBtnForward.addEventListener('click', () => {
    const tab = getActiveTab();
    if (tab && tab.webviewEl && tab.webviewEl.canGoForward()) tab.webviewEl.goForward();
  });

  navBtnReload.addEventListener('click', () => {
    const tab = getActiveTab();
    if (tab && tab.webviewEl) {
      if (tab.isLoading) tab.webviewEl.stop();
      else tab.webviewEl.reload();
    }
  });

  navBtnHome.addEventListener('click', () => navigateActiveTab('about:blank'));

  omniboxInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') navigateActiveTab(omniboxInput.value);
  });
  omniboxBtnGo.addEventListener('click', () => navigateActiveTab(omniboxInput.value));

  // Omnibox Extensions: Clean URL & Bookmarks
  if (omniboxCleanLink) omniboxCleanLink.addEventListener('click', copyCleanUrl);
  if (omniboxStarBtn) omniboxStarBtn.addEventListener('click', toggleBookmarkCurrentTab);

  // Speed Dials
  document.querySelectorAll('.speed-dial-card').forEach(item => {
    item.addEventListener('click', () => {
      const url = item.getAttribute('data-url');
      if (url) navigateActiveTab(url);
    });
  });

  dashboardSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') navigateActiveTab(dashboardSearchInput.value);
  });
  dashboardBtnSearch.addEventListener('click', () => navigateActiveTab(dashboardSearchInput.value));

  // Stealth Video Mode
  btnToggleVideoMode.addEventListener('click', toggleStealthVideoMode);
  btnExitVideoMode.addEventListener('click', () => {
    if (isStealthVideoMode) toggleStealthVideoMode();
  });

  // Split-Screen Dual View
  if (btnToggleSplit) {
    btnToggleSplit.addEventListener('click', () => toggleSplitMode());
  }

  // Find in Page
  if (btnFindPage) {
    btnFindPage.addEventListener('click', openFindBar);
  }
  if (findInput) {
    findInput.addEventListener('input', () => {
      const q = findInput.value.trim();
      const tab = getActiveTab();
      if (!tab || !tab.webviewEl) return;
      if (q) tab.webviewEl.findInPage(q);
      else tab.webviewEl.stopFindInPage('clearSelection');
    });
    findInput.addEventListener('keydown', (e) => {
      const tab = getActiveTab();
      if (!tab || !tab.webviewEl) return;
      if (e.key === 'Enter') {
        tab.webviewEl.findInPage(findInput.value, { forward: !e.shiftKey, findNext: true });
      } else if (e.key === 'Escape') {
        closeFindBar();
      }
    });
  }
  if (findNext) {
    findNext.addEventListener('click', () => {
      const tab = getActiveTab();
      if (tab && tab.webviewEl && findInput.value) {
        tab.webviewEl.findInPage(findInput.value, { forward: true, findNext: true });
      }
    });
  }
  if (findPrev) {
    findPrev.addEventListener('click', () => {
      const tab = getActiveTab();
      if (tab && tab.webviewEl && findInput.value) {
        tab.webviewEl.findInPage(findInput.value, { forward: false, findNext: true });
      }
    });
  }
  if (findClose) {
    findClose.addEventListener('click', closeFindBar);
  }

  // RAM Eco Saver
  if (btnToolbarEco) {
    btnToolbarEco.addEventListener('click', toggleEcoMode);
  }

  // Reader Mode
  if (btnToolbarReader) {
    btnToolbarReader.addEventListener('click', toggleReaderMode);
  }

  // History Drawer & Clean Data Dialog
  if (btnToolbarHistory) {
    btnToolbarHistory.addEventListener('click', () => {
      if (historyDrawer.classList.contains('visible')) closeHistoryDrawer();
      else openHistoryDrawer();
    });
  }
  if (btnCloseHistory) btnCloseHistory.addEventListener('click', closeHistoryDrawer);
  if (historySearchInput) {
    historySearchInput.addEventListener('input', (e) => renderHistoryList(e.target.value));
  }
  if (btnClearHistoryPrompt) {
    btnClearHistoryPrompt.addEventListener('click', () => {
      closeHistoryDrawer();
      openCleanDataModal();
    });
  }
  if (btnCloseCleanModal) btnCloseCleanModal.addEventListener('click', closeCleanDataModal);
  if (btnCancelClean) btnCancelClean.addEventListener('click', closeCleanDataModal);
  if (btnConfirmClean) btnConfirmClean.addEventListener('click', executeCleanBrowsingData);

  // Hamburger Menu Toggle & Outside Click
  if (btnHamburgerMenu && hamburgerDropdown) {
    btnHamburgerMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburgerDropdown.classList.toggle('visible');
      btnHamburgerMenu.classList.toggle('active', hamburgerDropdown.classList.contains('visible'));
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hamburger-menu-wrapper')) {
        hamburgerDropdown.classList.remove('visible');
        btnHamburgerMenu.classList.remove('active');
      }
    });
  }

  // Hamburger Menu Option Click Handlers
  menuItemShield?.addEventListener('click', () => {
    window.zbmApi?.toggleContentProtection();
  });
  menuItemPin?.addEventListener('click', () => {
    const nextVal = !isAlwaysOnTop;
    setPinState(nextVal);
    if (window.zbmApi) window.zbmApi.toggleAlwaysOnTop(nextVal);
  });
  menuItemGhost?.addEventListener('click', () => {
    window.zbmApi?.toggleClickThrough();
  });
  menuItemDecoy?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    window.zbmApi?.toggleDecoyMode();
  });
  menuItemPanic?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    window.zbmApi?.triggerBossPanic();
  });
  menuItemSplit?.addEventListener('click', () => {
    toggleSplitMode();
  });
  menuItemFind?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    openFindBar();
  });
  menuItemEco?.addEventListener('click', () => {
    toggleEcoMode();
  });
  menuItemReader?.addEventListener('click', () => {
    toggleReaderMode();
  });
  menuItemDarkmode?.addEventListener('click', () => {
    toggleUniversalDarkMode();
  });
  menuItemAdblock?.addEventListener('click', () => {
    isAdBlockerActive = !isAdBlockerActive;
    if (menuBadgeAdblock) {
      menuBadgeAdblock.textContent = isAdBlockerActive ? 'ON' : 'OFF';
      menuBadgeAdblock.classList.toggle('active', isAdBlockerActive);
    }
    btnToolbarAdblock?.classList.toggle('active', isAdBlockerActive);
    if (window.zbmApi) window.zbmApi.toggleAdBlocker(isAdBlockerActive);
  });
  menuItemHistory?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    openHistoryDrawer();
  });
  menuItemDownloads?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    downloadsDrawer?.classList.toggle('visible');
  });
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const theme = dot.getAttribute('data-theme');
      setTheme(theme);
      showToast('Theme Accent Updated', 1500);
    });
  });
  menuItemClean?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    openCleanDataModal();
  });
  menuItemShortcuts?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    shortcutsModal?.classList.add('visible');
  });

  // Legacy Theme Accent Switcher fallback
  if (btnToolbarTheme && themeMenu) {
    btnToolbarTheme.addEventListener('click', (e) => {
      e.stopPropagation();
      themeMenu.classList.toggle('visible');
    });
    document.querySelectorAll('.theme-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const theme = opt.getAttribute('data-theme');
        setTheme(theme);
        themeMenu.classList.remove('visible');
        showToast('Theme Accent Updated', 1500);
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.theme-picker-wrapper')) {
        themeMenu.classList.remove('visible');
      }
    });
  }

  // Meeting Invisibility Shield
  const handleShieldToggle = () => window.zbmApi?.toggleContentProtection();
  btnToolbarShield?.addEventListener('click', handleShieldToggle);
  btnVideoShield?.addEventListener('click', handleShieldToggle);

  // Universal Dark Mode
  btnToolbarDarkMode?.addEventListener('click', toggleUniversalDarkMode);

  // AdBlocker Toggle
  btnToolbarAdblock?.addEventListener('click', () => {
    isAdBlockerActive = !isAdBlockerActive;
    btnToolbarAdblock?.classList.toggle('active', isAdBlockerActive);
    if (window.zbmApi) window.zbmApi.toggleAdBlocker(isAdBlockerActive);
  });

  // Downloads Drawer
  btnToolbarDownloads?.addEventListener('click', () => downloadsDrawer?.classList.toggle('visible'));
  btnCloseDownloads?.addEventListener('click', () => downloadsDrawer?.classList.remove('visible'));

  // Video Frame Snapshot
  if (btnVideoSnapshot) {
    btnVideoSnapshot.addEventListener('click', captureVideoFrame);
  }

  // Native Picture-in-Picture
  if (btnVideoPip) {
    btnVideoPip.addEventListener('click', toggleNativePip);
  }

  // Audio Booster
  btnBoostStep?.addEventListener('click', cycleAudioBoost);

  // Opacity Sliders
  const handleOpacityChange = (e) => {
    e.stopPropagation();
    const val = parseFloat(e.target.value) / 100;
    updateOpacityDisplay(val);
    if (window.zbmApi) window.zbmApi.setOpacity(val);
  };
  if (toolbarOpacitySlider) {
    toolbarOpacitySlider.addEventListener('mousedown', (e) => e.stopPropagation());
    toolbarOpacitySlider.addEventListener('pointerdown', (e) => e.stopPropagation());
    toolbarOpacitySlider.addEventListener('input', handleOpacityChange);
    toolbarOpacitySlider.addEventListener('change', handleOpacityChange);
  }
  if (videoOpacitySlider) {
    videoOpacitySlider.addEventListener('mousedown', (e) => e.stopPropagation());
    videoOpacitySlider.addEventListener('pointerdown', (e) => e.stopPropagation());
    videoOpacitySlider.addEventListener('input', handleOpacityChange);
    videoOpacitySlider.addEventListener('change', handleOpacityChange);
  }

  // Always On Top
  const handlePinToggle = () => {
    const nextVal = !isAlwaysOnTop;
    setPinState(nextVal);
    if (window.zbmApi) window.zbmApi.toggleAlwaysOnTop(nextVal);
  };
  btnToolbarPin?.addEventListener('click', handlePinToggle);
  btnVideoPin?.addEventListener('click', handlePinToggle);

  // Ghost Mode
  const handleGhostToggle = () => window.zbmApi?.toggleClickThrough();
  btnToolbarGhost?.addEventListener('click', handleGhostToggle);
  btnVideoGhost?.addEventListener('click', handleGhostToggle);

  // Decoy Selector & Views
  const handleDecoyToggle = () => window.zbmApi?.toggleDecoyMode();
  btnToolbarDecoy?.addEventListener('click', handleDecoyToggle);
  btnVideoDecoy?.addEventListener('click', handleDecoyToggle);
  btnExitDecoy?.addEventListener('click', handleDecoyToggle);

  document.querySelectorAll('.decoy-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.decoy-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.decoy-view').forEach(v => v.classList.remove('active'));
      tabBtn.classList.add('active');
      const target = tabBtn.getAttribute('data-decoy');
      const targetView = document.getElementById('decoy-view-' + target);
      if (targetView) targetView.classList.add('active');
    });
  });

  // Panic Key
  const handlePanicTrigger = () => window.zbmApi?.triggerBossPanic();
  btnToolbarPanic?.addEventListener('click', handlePanicTrigger);
  btnVideoPanic?.addEventListener('click', handlePanicTrigger);

  // Video Presets
  btnSizeMini?.addEventListener('click', () => window.zbmApi?.resizePreset({ width: 320, height: 180 }));
  btnSizeMed?.addEventListener('click', () => window.zbmApi?.resizePreset({ width: 480, height: 270 }));
  btnSizeWide?.addEventListener('click', () => window.zbmApi?.resizePreset({ width: 640, height: 360 }));
  btnSizeHd?.addEventListener('click', () => window.zbmApi?.resizePreset({ width: 960, height: 540 }));

  // Video Playback Controls
  btnPlayPause?.addEventListener('click', togglePlayPause);
  btnRewind?.addEventListener('click', () => seekRelative(-10));
  btnForward?.addEventListener('click', () => seekRelative(10));
  btnMute?.addEventListener('click', toggleMute);
  btnSpeed?.addEventListener('click', () => adjustSpeed(1));

  timelineSlider?.addEventListener('input', (e) => {
    const percent = parseFloat(e.target.value);
    executeInActiveWebview(`
      const v = document.querySelector('video');
      if (v && v.duration) v.currentTime = (v.duration * ${percent}) / 100;
    `);
  });

  btnAudioOnly?.addEventListener('click', toggleAudioOnly);
  audioOnlyScreen?.addEventListener('click', toggleAudioOnly);

  btnShortcuts?.addEventListener('click', () => shortcutsModal?.classList.add('visible'));
  btnCloseModal?.addEventListener('click', () => shortcutsModal?.classList.remove('visible'));

  // Global & In-App Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === omniboxInput || document.activeElement === dashboardSearchInput || document.activeElement === findInput || document.activeElement === historySearchInput) {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }

    if (e.key === 'Escape') {
      if (cleanDataModal && cleanDataModal.classList.contains('visible')) {
        closeCleanDataModal();
      } else if (historyDrawer && historyDrawer.classList.contains('visible')) {
        closeHistoryDrawer();
      } else if (findBar && findBar.classList.contains('visible')) {
        closeFindBar();
      } else if (shortcutsModal.classList.contains('visible')) {
        shortcutsModal.classList.remove('visible');
      } else if (downloadsDrawer.classList.contains('visible')) {
        downloadsDrawer.classList.remove('visible');
      } else if (isDecoyActive) {
        window.zbmApi?.toggleDecoyMode();
      } else if (isStealthVideoMode) {
        toggleStealthVideoMode();
      } else {
        window.zbmApi?.triggerBossPanic();
      }
    } else if (e.key === 'F11') {
      e.preventDefault();
      window.zbmApi?.toggleFullscreen();
    } else if (e.altKey && e.key === '2') {
      e.preventDefault();
      toggleSplitMode();
    } else if (e.ctrlKey && (e.key === 'f' || e.key === 'F')) {
      e.preventDefault();
      openFindBar();
    } else if (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      captureVideoFrame();
    } else if (e.ctrlKey && (e.key === '=' || e.key === '+')) {
      e.preventDefault();
      adjustZoom(0.1);
    } else if (e.ctrlKey && (e.key === '-' || e.key === '_')) {
      e.preventDefault();
      adjustZoom(-0.1);
    } else if (e.ctrlKey && e.key === '0') {
      e.preventDefault();
      adjustZoom(0, true);
    } else if (e.ctrlKey && (e.key === 'd' || e.key === 'D')) {
      e.preventDefault();
      toggleBookmarkCurrentTab();
    } else if (e.ctrlKey && (e.key === 'h' || e.key === 'H')) {
      e.preventDefault();
      if (historyDrawer.classList.contains('visible')) closeHistoryDrawer();
      else openHistoryDrawer();
    } else if (e.altKey && (e.key === 'e' || e.key === 'E')) {
      e.preventDefault();
      toggleEcoMode();
    } else if (e.altKey && (e.key === 'r' || e.key === 'R')) {
      e.preventDefault();
      toggleReaderMode();
    } else if (e.altKey && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      toggleNativePip();
    } else if (e.ctrlKey && e.shiftKey && (e.key === 'Delete' || e.key === 'Del')) {
      e.preventDefault();
      openCleanDataModal();
    } else if (e.altKey && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      window.zbmApi?.toggleContentProtection();
    } else if (e.altKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
      e.preventDefault();
      toggleUniversalDarkMode();
    } else if (e.ctrlKey && e.shiftKey && (e.key === 'N' || e.key === 'n')) {
      e.preventDefault();
      createTab('about:blank', true, true);
    } else if (e.ctrlKey && (e.key === 't' || e.key === 'T')) {
      e.preventDefault();
      createTab('about:blank', true);
    } else if (e.ctrlKey && (e.key === 'w' || e.key === 'W')) {
      e.preventDefault();
      if (activeTabId) closeTab(activeTabId);
    } else if (e.ctrlKey && (e.key === 'l' || e.key === 'L')) {
      e.preventDefault();
      omniboxInput.focus();
      omniboxInput.select();
    } else if (e.key === 'F5' || (e.ctrlKey && (e.key === 'r' || e.key === 'R'))) {
      e.preventDefault();
      const tab = getActiveTab();
      if (tab && tab.webviewEl) tab.webviewEl.reload();
    } else if ((e.altKey && (e.key === 'v' || e.key === 'V')) || e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleStealthVideoMode();
    } else if (e.key === 'F2') {
      e.preventDefault();
      window.zbmApi?.toggleDecoyMode();
    } else if (e.key === '[') {
      adjustOpacityLocal(-0.06);
    } else if (e.key === ']') {
      adjustOpacityLocal(0.06);
    } else if (e.key === '>' || (e.shiftKey && e.key === '.')) {
      adjustSpeed(1);
    } else if (e.key === '<' || (e.shiftKey && e.key === ',')) {
      adjustSpeed(-1);
    } else if (e.key === ' ' || e.code === 'Space') {
      if (isStealthVideoMode) {
        e.preventDefault();
        togglePlayPause();
      }
    } else if (e.key === 'ArrowLeft') {
      if (isStealthVideoMode) seekRelative(-10);
    } else if (e.key === 'ArrowRight') {
      if (isStealthVideoMode) seekRelative(10);
    } else if (e.key === 'm' || e.key === 'M') {
      if (isStealthVideoMode) toggleMute();
    } else if (e.key === 'a' || e.key === 'A') {
      if (isStealthVideoMode) toggleAudioOnly();
    }
  });
}

// ==========================================
// 11. CLOCK & INITIALIZATION
// ==========================================
function startClock() {
  const update = () => {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const timeStr = `${hrs}:${mins}:${secs}`;

    if (clockDisplay) clockDisplay.textContent = timeStr;
    if (dashboardClock) dashboardClock.textContent = timeStr;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if (dashboardDate) dashboardDate.textContent = now.toLocaleDateString(undefined, options);
  };
  update();
  clockInterval = setInterval(update, 1000);
}

// 1. Synchronous initialization: bind all UI listeners and restore local prefs instantly
initTheme();
initBookmarks();
initHistory();
setupEventListeners();
startClock();

// 2. Asynchronous background connection: Electron IPC & session restore
async function initAsync() {
  if (window.zbmApi) {
    try {
      // IPC Listeners registered right away
      window.zbmApi.onOpacityUpdated((val) => updateOpacityDisplay(val));
      window.zbmApi.onDecoyModeToggled((active) => setDecoyState(active));
      window.zbmApi.onClickThroughToggled((active) => setGhostState(active));
      window.zbmApi.onAlwaysOnTopChanged((active) => setPinState(active));
      window.zbmApi.onContentProtectionToggled((active) => setMeetingShield(active));
      window.zbmApi.onAdBlockerToggled((active) => {
        isAdBlockerActive = Boolean(active);
        btnToolbarAdblock?.classList.toggle('active', isAdBlockerActive);
      });

      window.zbmApi.onMaximizedChanged((isMax) => {
        if (btnWinMaximize) btnWinMaximize.textContent = isMax ? '🗗' : '🗖';
      });
      window.zbmApi.onFullScreenChanged((isFs) => {
        btnWinFullscreen?.classList.toggle('active', isFs);
        btnVideoFs?.classList.toggle('active', isFs);
      });
      window.zbmApi.onAudioMuteToggled((muted) => {
        isMuted = Boolean(muted);
        updateMuteIcons();
      });

      // Downloads tracking
      window.zbmApi.onDownloadStarted((data) => {
        activeDownloads[data.filename] = {
          filename: data.filename,
          totalBytes: data.totalBytes,
          receivedBytes: 0,
          state: 'downloading'
        };
        updateDownloadsUI();
        downloadsDrawer?.classList.add('visible');
      });

      window.zbmApi.onDownloadProgress((data) => {
        if (activeDownloads[data.filename]) {
          activeDownloads[data.filename].receivedBytes = data.receivedBytes;
          activeDownloads[data.filename].totalBytes = data.totalBytes;
          updateDownloadsUI();
        }
      });

      window.zbmApi.onDownloadCompleted((data) => {
        if (activeDownloads[data.filename]) {
          activeDownloads[data.filename].state = 'completed';
          activeDownloads[data.filename].path = data.path;
          updateDownloadsUI();
        }
      });

      const state = await window.zbmApi.getState();
      if (state) {
        if (typeof state.opacity === 'number') updateOpacityDisplay(state.opacity);
        setPinState(Boolean(state.isAlwaysOnTop));
        setGhostState(Boolean(state.isClickThrough));
        setMeetingShield(Boolean(state.isContentProtected));
        if (btnWinMaximize) btnWinMaximize.textContent = state.isMaximized ? '🗗' : '🗖';
      }
    } catch (err) {
      console.warn('IPC init state error:', err);
    }
  }

  // Session Restore: Restore saved tabs or open YouTube default
  let restored = false;
  if (window.zbmApi && window.zbmApi.loadSession) {
    try {
      const saved = await window.zbmApi.loadSession();
      if (saved && saved.tabs && saved.tabs.length > 0) {
        saved.tabs.forEach((t, i) => {
          createTab(t.url || 'https://www.youtube.com', i === 0);
        });
        restored = true;
      }
    } catch (e) {
      console.warn('Session load error:', e);
    }
  }

  // Auto-Updater UI & Events
  if (window.zbmApi && window.zbmApi.getAppVersion) {
    try {
      const ver = await window.zbmApi.getAppVersion();
      if (ver && appVersionBadge) {
        appVersionBadge.textContent = 'v' + ver;
      }
    } catch(e) {}
  }

  menuItemUpdate?.addEventListener('click', async () => {
    hamburgerDropdown?.classList.remove('visible');
    showToast('Checking GitHub for ZBM Browser updates...', 2500);

    if (window.zbmApi && window.zbmApi.checkForUpdates) {
      try {
        const res = await window.zbmApi.checkForUpdates();
        if (res && res.isDev) {
          showToast(`Running v${res.version} (Dev Mode). Auto-update active on installed releases.`, 4000);
        } else if (res && !res.success) {
          showToast(`Update check: ${res.error || 'Up to date'}`, 3000);
        }
      } catch (err) {
        showToast('Could not check updates: ' + err.message, 3000);
      }
    }
  });

  menuItemGithub?.addEventListener('click', () => {
    hamburgerDropdown?.classList.remove('visible');
    navigateActiveTab('https://github.com/ZakariaBinMoti/ZBM-Browser/releases');
  });

  btnUpdateAction?.addEventListener('click', () => {
    if (window.zbmApi && window.zbmApi.restartAndInstallUpdate) {
      window.zbmApi.restartAndInstallUpdate();
    }
  });

  btnUpdateDismiss?.addEventListener('click', () => {
    if (updateNotificationBanner) updateNotificationBanner.style.display = 'none';
  });

  if (window.zbmApi && window.zbmApi.onUpdaterEvent) {
    window.zbmApi.onUpdaterEvent((data) => {
      if (!data) return;
      if (data.status === 'available') {
        showToast(`Update v${data.version} available! Downloading in background...`, 4000);
      } else if (data.status === 'downloading') {
        if (appVersionBadge) appVersionBadge.textContent = `${data.percent}%`;
      } else if (data.status === 'downloaded') {
        if (updateNotificationBanner) {
          if (updateBannerText) updateBannerText.textContent = `ZBM Browser v${data.version} is downloaded and ready to install!`;
          updateNotificationBanner.style.display = 'flex';
        }
        showToast(`Update v${data.version} ready! Click Restart to apply.`, 5000);
      } else if (data.status === 'not-available') {
        showToast(`ZBM Browser is up to date (v${data.version})!`, 2500);
      }
    });
  }

  if (!restored && tabs.length === 0) {
    createTab('https://www.youtube.com', true);
  }
}

// Start async initialization
initAsync();
