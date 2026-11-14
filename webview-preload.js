// Webview Preload Script - Eliminates automation fingerprints while maintaining genuine Google Chrome compatibility
// Ensures 100% stable YouTube 4K/60fps MSE streaming, Google sign-in, and zero Windows Security Passkey popups

try {
  // 1. Permanently suppress Windows Security Passkey / WebAuthn system prompts
  if (typeof window.PublicKeyCredential !== 'undefined') {
    try {
      window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable = () => Promise.resolve(false);
      window.PublicKeyCredential.isConditionalMediationAvailable = () => Promise.resolve(false);
    } catch (e) {}
  }

  if (navigator.credentials) {
    try {
      const origGet = navigator.credentials.get ? navigator.credentials.get.bind(navigator.credentials) : null;
      const origCreate = navigator.credentials.create ? navigator.credentials.create.bind(navigator.credentials) : null;

      if (origGet) {
        navigator.credentials.get = function(options) {
          if (options && options.publicKey) {
            if (options.mediation === 'conditional') {
              return Promise.resolve(null);
            }
            return Promise.reject(new DOMException('WebAuthn is not supported in this environment.', 'NotAllowedError'));
          }
          return origGet(options);
        };
      }

      if (origCreate) {
        navigator.credentials.create = function(options) {
          if (options && options.publicKey) {
            return Promise.reject(new DOMException('WebAuthn is not supported in this environment.', 'NotAllowedError'));
          }
          return origCreate(options);
        };
      }
    } catch (e) {}
  }

  // 2. Google Authentication Page Detection & Firefox Alignment
  const href = (window.location && window.location.href) ? window.location.href.toLowerCase() : '';
  const host = (window.location && window.location.hostname) ? window.location.hostname.toLowerCase() : '';
  const isGoogleAuth = host === 'accounts.google.com' ||
                       host.endsWith('.accounts.google.com') ||
                       host === 'accounts.youtube.com' ||
                       host === 'oauth2.googleapis.com' ||
                       host === 'myaccount.google.com' ||
                       host.startsWith('accounts.google.') ||
                       href.includes('accounts.google.com');

  if (isGoogleAuth) {
    const FIREFOX_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0';

    try {
      Object.defineProperty(navigator, 'userAgent', {
        get: () => FIREFOX_UA,
        configurable: true
      });
      Object.defineProperty(navigator, 'appVersion', {
        get: () => '5.0 (Windows)',
        configurable: true
      });
      Object.defineProperty(navigator, 'platform', {
        get: () => 'Win32',
        configurable: true
      });
      Object.defineProperty(navigator, 'vendor', {
        get: () => '',
        configurable: true
      });
      Object.defineProperty(navigator, 'oscpu', {
        get: () => 'Windows NT 10.0; Win64; x64',
        configurable: true
      });
    } catch (e) {}

    // Firefox does not support userAgentData or window.chrome
    try {
      delete Object.getPrototypeOf(navigator).userAgentData;
    } catch (e) {}
    try {
      Object.defineProperty(navigator, 'userAgentData', {
        get: () => undefined,
        configurable: true
      });
    } catch (e) {}

    try {
      delete window.chrome;
    } catch (e) {}
    if (window.chrome) {
      try {
        window.chrome = undefined;
      } catch (e) {}
    }
  } else {
    // 3. For general browsing and YouTube:
    // Ensure genuine window.chrome structure is present for YouTube, Netflix & Google Apps
    if (!window.chrome) {
      window.chrome = {
        app: {
          isInstalled: false,
          InstallState: { DISABLED: 'disabled', INSTALLED: 'installed', NOT_INSTALLED: 'not_installed' },
          RunningState: { CANNOT_RUN: 'cannot_run', READY_TO_RUN: 'ready_to_run', RUNNING: 'running' }
        },
        csi: function() {},
        loadTimes: function() {
          const t = performance.now() / 1000;
          return {
            requestTime: t,
            startLoadTime: t,
            commitLoadTime: t,
            finishDocumentLoadTime: t,
            finishLoadTime: t,
            firstPaintTime: t,
            firstPaintAfterLoadTime: 0,
            navigationType: 'Other',
            wasFetchedViaSpdy: true,
            wasNpnNegotiated: true,
            npnNegotiatedProtocol: 'h2',
            wasAlternateProtocolAvailable: false,
            connectionInfo: 'h2'
          };
        }
      };
    }
  }
} catch (err) {
  // Silent fail
}
