/* =========================================================
   Plakidas Auto – GDPR cookie-consent logic
   ------------------------------------------------------------
   • No cookie-setting / third-party resource is loaded until the
     visitor gives a valid choice.
   • Two optional categories: Google Fonts and Google Maps.
     "Necessary" is always on (stores the choice itself).
   • Choice is persisted in localStorage with a version so we can
     re-prompt when this notice changes.
   • Visitors can change or withdraw consent at any time via the
     re-open pill, and can opt into the map individually.
   Works on every page; the gated elements (fonts link, map iframe)
   simply do not exist on pages that don't use them.
   ========================================================= */
(function () {
    'use strict';

    var STORE_KEY = 'plakidas_consent';
    var VERSION = 1; // bump to re-prompt everyone when this notice changes

    /* ---------- Derive a path prefix from this script's own <script src> ----------
       Root pages include  "cookie-consent.js"  -> ""
       Services pages include "../cookie-consent.js" -> "../"
       This makes relative links (privacy.html) correct from both levels. */
    function baseHref() {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].getAttribute('src') || '';
            if (src.indexOf('cookie-consent.js') > -1) {
                var idx = src.lastIndexOf('/');
                return idx === -1 ? '' : src.substring(0, idx + 1);
            }
        }
        return '';
    }
    var BASE = baseHref();

    /* ------------------- Persistence ------------------- */
    function readStored() {
        try {
            var raw = window.localStorage.getItem(STORE_KEY);
            if (!raw) return null;
            var data = JSON.parse(raw);
            if (!data || data.version !== VERSION) return null; // re-prompt on change
            return {
                fonts: !!data.fonts,
                map: !!data.map,
                ts: data.ts || 0,
                version: data.version
            };
        } catch (e) {
            return null;
        }
    }

    function writeStored(state) {
        try {
            window.localStorage.setItem(STORE_KEY, JSON.stringify({
                fonts: !!state.fonts,
                map: !!state.map,
                ts: state.ts || Date.now(),
                version: VERSION
            }));
        } catch (e) {
            /* storage may be blocked (private mode); the banner choice still works for this visit */
        }
    }

    /* ---------- Gated third-party resources (only touched after consent) ---------- */
    function loadFonts() {
        var link = document.getElementById('cc-fonts-link');
        if (link && link.getAttribute('data-src') && !link.getAttribute('href')) {
            link.setAttribute('href', link.getAttribute('data-src'));
        }
    }
    function unloadFonts() {
        var link = document.getElementById('cc-fonts-link');
        if (link && link.getAttribute('href')) link.removeAttribute('href');
    }

    function loadMap() {
        var iframe = document.getElementById('cc-map-iframe');
        var placeholder = document.getElementById('cc-map-placeholder');
        if (iframe && iframe.getAttribute('data-src') && !iframe.getAttribute('src')) {
            iframe.setAttribute('src', iframe.getAttribute('data-src'));
        }
        if (placeholder) placeholder.hidden = true;
    }
    function unloadMap() {
        var iframe = document.getElementById('cc-map-iframe');
        var placeholder = document.getElementById('cc-map-placeholder');
        if (iframe) iframe.removeAttribute('src');
        if (placeholder) placeholder.hidden = false;
    }

    function applyState(state) {
        if (state.fonts) loadFonts(); else unloadFonts();
        if (state.map) loadMap(); else unloadMap();
    }

    /* ------------------- Build the banner UI ------------------- */
    function buildBanner() {
        if (document.getElementById('plakidas-cc-banner')) {
            return document.getElementById('plakidas-cc-banner');
        }

        var banner = document.createElement('div');
        banner.id = 'plakidas-cc-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie και απορρήτου – επιλογές');
        banner.innerHTML = [
            '<div class="pcc-inner">',
                '<div class="pcc-text">',
                    '<span class="pcc-ico" aria-hidden="true">\uD83C\uDF6A</span>',
                    '<p>',
                        'Χρησιμοποιούμε cookie και τρίτες υπηρεσίες, όπως <strong>Google Fonts</strong> και ',
                        '<strong>Google Maps</strong>, ώστε ο ιστότοπος να λειτουργεί και να βελτιώνεται. ',
                        'Δεν φορτώνουμε καμία από αυτές πριν δοθεί η συγκατάθεσή σας. ',
                        '<a href="' + BASE + 'privacy.html" target="_blank" rel="noopener">Πολιτική Απορρήτου</a>.',
                    '</p>',
                '</div>',

                '<div class="pcc-panel" id="plakidas-cc-panel" aria-hidden="true">',
                    '<div class="pcc-row">',
                        '<div class="pcc-row-txt"><b>Βασικά (Necessary)</b>',
                        '<small>Απαραίτητα για τη λειτουργία του ιστοτοπίου και την αποθήκευση της επιλογής σας. ',
                        'Είναι πάντα ενεργά και δεν μπορούν να απενεργοποιηθούν.</small></div>',
                        '<div class="pcc-locked">Ενεργό \uD83D\uDD12</div>',
                    '</div>',
                    '<div class="pcc-row">',
                        '<div class="pcc-row-txt"><b>Γραμματοσειρές (Google Fonts)</b>',
                        '<small>Φορτώνει τη γραμματοσειρά από τον Google. Αποστέλλεται η διεύθυνση IP σας στον Google.</small></div>',
                        '<label class="pcc-switch"><input type="checkbox" id="cc-opt-fonts" aria-label="Ενεργοποίηση Google Fonts">',
                        '<span class="pcc-slider"></span></label>',
                    '</div>',
                    '<div class="pcc-row">',
                        '<div class="pcc-row-txt"><b>Χάρτης (Google Maps)</b>',
                        '<small>Εμφανίζει τον χάρτη θέσης από τον Google Maps και αποστέλλει δεδομένα θέσης/χρήσης στον Google.</small></div>',
                        '<label class="pcc-switch"><input type="checkbox" id="cc-opt-map" aria-label="Ενεργοποίηση Google Maps">',
                        '<span class="pcc-slider"></span></label>',
                    '</div>',
                    '<div class="pcc-actions" style="margin-top:0.85rem">',
                        '<button type="button" class="pcc-btn pcc-btn-accept" id="cc-save-prefs">Αποθήκευση επιλογών</button>',
                    '</div>',
                '</div>',

                '<div class="pcc-actions">',
                    '<button type="button" class="pcc-btn pcc-btn-accept" id="cc-accept-all">Αποδοχή όλων</button>',
                    '<button type="button" class="pcc-btn pcc-btn-reject" id="cc-accept-necessary">Μόνο βασικά</button>',
                    '<button type="button" class="pcc-btn pcc-btn-more" id="cc-open-prefs">Προσαρμογή ρυθμίσεων</button>',
                '</div>',
            '</div>'
        ].join('');

        document.body.appendChild(banner);
        wireBanner();
        return banner;
    }

    function wireBanner() {
        var acceptAll = document.getElementById('cc-accept-all');
        var acceptNecessary = document.getElementById('cc-accept-necessary');
        var openPrefs = document.getElementById('cc-open-prefs');
        var savePrefs = document.getElementById('cc-save-prefs');
        var panel = document.getElementById('plakidas-cc-panel');

        acceptAll.addEventListener('click', function () {
            saveAndApply({ fonts: true, map: true });
        });
        acceptNecessary.addEventListener('click', function () {
            saveAndApply({ fonts: false, map: false });
        });
        savePrefs.addEventListener('click', function () {
            saveAndApply({
                fonts: document.getElementById('cc-opt-fonts').checked,
                map: document.getElementById('cc-opt-map').checked
            });
        });
        openPrefs.addEventListener('click', function () {
            var open = panel.classList.toggle('open');
            panel.setAttribute('aria-hidden', open ? 'false' : 'true');
        });
    }

    function saveAndApply(choice) {
        var state = {
            fonts: !!choice.fonts,
            map: !!choice.map,
            ts: Date.now(),
            version: VERSION
        };
        writeStored(state);
        applyState(state);
        removeBanner();
        showReopen();
    }

    function removeBanner() {
        var b = document.getElementById('plakidas-cc-banner');
        if (b && b.parentNode) b.parentNode.removeChild(b);
    }

    /* ------------------- Re-open / change consent ------------------- */
    function showReopen() {
        if (document.getElementById('plakidas-cc-reopen')) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.id = 'plakidas-cc-reopen';
        btn.textContent = '\uD83C\uDF6A  Ρυθμίσεις cookie';
        btn.setAttribute('aria-label', 'Επεξεργασία ή αναίρεση ρυθμίσεων cookie');
        btn.addEventListener('click', openPreferences);
        document.body.appendChild(btn);
    }

    function openPreferences() {
        var stored = readStored();
        var banner = buildBanner();
        var panel = document.getElementById('plakidas-cc-panel');
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        // reflect the current (stored) choice in the toggles
        document.getElementById('cc-opt-fonts').checked = !!(stored && stored.fonts);
        document.getElementById('cc-opt-map').checked = !!(stored && stored.map);
        banner.setAttribute('aria-label', 'Cookie και απορρήτου – επεξεργασία επιλογών');
    }

    /* ------------------- Explicit, individual opt-in for the map ------------------- */
    function wireMapPlaceholder() {
        var btn = document.getElementById('cc-map-load-btn');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var stored = readStored() || { fonts: false, map: false, ts: 0, version: VERSION };
            stored.map = true;
            stored.ts = Date.now();
            writeStored(stored);
            loadMap();
        });
    }

    /* ------------------- Footer legal link (kept consistent site-wide) ------------------- */
    function injectPrivacyLink() {
        if (document.querySelector('.pcc-privacy-link')) return;
        var a = document.createElement('a');
        a.className = 'pcc-privacy-link';
        a.href = BASE + 'privacy.html';
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = 'Πολιτική Απορρήτου';
        var footer = document.querySelector('footer');
        if (footer) {
            footer.appendChild(a);
        } else {
            // Some sub-pages have no <footer>; anchor the link at the page bottom instead.
            a.classList.add('pcc-privacy-fallback');
            document.body.appendChild(a);
        }
    }

    /* ------------------- Boot ------------------- */
    function boot() {
        injectPrivacyLink();
        wireMapPlaceholder();

        var stored = readStored();
        if (stored) {
            applyState(stored);   // apply the previously saved choice; load nothing new
            showReopen();
        } else {
            buildBanner();        // first visit: show banner, load NO third parties
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
