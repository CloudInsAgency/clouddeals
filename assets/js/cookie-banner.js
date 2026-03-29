/**
 * CloudPriceDeals — Cookie Consent Banner
 * Lightweight, GDPR/CCPA compliant
 * No external dependencies
 */

(function() {
  const COOKIE_KEY = 'cpd_cookie_consent';
  const COOKIE_VERSION = '1';

  // Check if already consented
  function getConsent() {
    try {
      return localStorage.getItem(COOKIE_KEY);
    } catch(e) { return null; }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(COOKIE_KEY, value + '_v' + COOKIE_VERSION);
    } catch(e) {}
  }

  function hideBanner() {
    const banner = document.getElementById('cpd-cookie-banner');
    if (banner) {
      banner.style.transform = 'translateY(120%)';
      banner.style.opacity = '0';
      setTimeout(() => banner.remove(), 400);
    }
  }

  function acceptAll() {
    setConsent('accepted');
    hideBanner();
    // Fire analytics if GA4 is present
    if (window.gtag) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied'
      });
    }
  }

  function declineNonEssential() {
    setConsent('declined');
    hideBanner();
    if (window.gtag) {
      gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  }

  function injectBanner() {
    if (getConsent()) return; // Already decided

    const css = `
      #cpd-cookie-banner {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(0);
        width: calc(100% - 48px);
        max-width: 680px;
        background: #0f172a;
        color: #e2e8f0;
        border-radius: 16px;
        padding: 20px 24px;
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 99999;
        box-shadow: 0 8px 40px rgba(0,0,0,0.35);
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        transition: transform 0.4s ease, opacity 0.4s ease;
        flex-wrap: wrap;
      }
      #cpd-cookie-banner .cpd-cookie-icon {
        font-size: 28px;
        flex-shrink: 0;
      }
      #cpd-cookie-banner .cpd-cookie-text {
        flex: 1;
        min-width: 200px;
      }
      #cpd-cookie-banner .cpd-cookie-text strong {
        display: block;
        color: #f8fafc;
        font-size: 15px;
        margin-bottom: 3px;
      }
      #cpd-cookie-banner .cpd-cookie-text a {
        color: #60a5fa;
        text-decoration: underline;
      }
      #cpd-cookie-banner .cpd-cookie-actions {
        display: flex;
        gap: 10px;
        flex-shrink: 0;
        flex-wrap: wrap;
      }
      #cpd-cookie-banner .cpd-btn-accept {
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.2s;
      }
      #cpd-cookie-banner .cpd-btn-accept:hover {
        background: #1d4ed8;
      }
      #cpd-cookie-banner .cpd-btn-decline {
        background: transparent;
        color: #94a3b8;
        border: 1.5px solid #334155;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        transition: border-color 0.2s, color 0.2s;
      }
      #cpd-cookie-banner .cpd-btn-decline:hover {
        border-color: #60a5fa;
        color: #e2e8f0;
      }
      @media (max-width: 540px) {
        #cpd-cookie-banner {
          bottom: 16px;
          padding: 16px;
          gap: 14px;
        }
        #cpd-cookie-banner .cpd-cookie-actions {
          width: 100%;
          justify-content: stretch;
        }
        #cpd-cookie-banner .cpd-btn-accept,
        #cpd-cookie-banner .cpd-btn-decline {
          flex: 1;
          text-align: center;
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const banner = document.createElement('div');
    banner.id = 'cpd-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <div class="cpd-cookie-icon">🍪</div>
      <div class="cpd-cookie-text">
        <strong>We use cookies</strong>
        We use analytics cookies to understand how visitors use CloudPriceDeals.com and improve your experience.
        <a href="/privacy.html" target="_blank">Privacy Policy</a>
      </div>
      <div class="cpd-cookie-actions">
        <button class="cpd-btn-decline" onclick="cpdDeclineCookies()">Essential Only</button>
        <button class="cpd-btn-accept" onclick="cpdAcceptCookies()">Accept All</button>
      </div>
    `;

    document.body.appendChild(banner);
  }

  // Expose to global scope for button onclick handlers
  window.cpdAcceptCookies = acceptAll;
  window.cpdDeclineCookies = declineNonEssential;

  // Show banner after short delay so page loads first
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(injectBanner, 800));
  } else {
    setTimeout(injectBanner, 800);
  }

})();
