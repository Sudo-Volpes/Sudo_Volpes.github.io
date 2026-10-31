/* Shared mobile-menu toggle for the site header (all pages).
   Toggles the nav list below the hamburger and closes it on
   link tap or outside click. */
(function () {
    'use strict';
    var btn = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul');
    if (!btn || !menu) return;

    function close() {
        menu.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.classList.toggle('active');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', close);
    });

    document.addEventListener('click', function (e) {
        if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== btn) {
            close();
        }
    });
})();

/* Sticky call bar: hidden by default on pages that name a section with
   data-show-near, and revealed once that section or the footer is visible. */
(function () {
    'use strict';

    function init() {
        var bar = document.querySelector('.callbar[data-show-near]');
        if (!bar) return;

        var selector = bar.getAttribute('data-show-near');
        var target = selector ? document.querySelector(selector) : null;
        var footer = document.querySelector('footer');

        // Without IntersectionObserver, err on the side of showing the phone number.
        if (!target || !('IntersectionObserver' in window)) {
            bar.classList.add('is-visible');
            return;
        }

        var inView = new Map();

        function apply() {
            var show = false;
            inView.forEach(function (value) {
                if (value) show = true;
            });
            bar.classList.toggle('is-visible', show);
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                inView.set(entry.target, entry.isIntersecting);
            });
            apply();
        }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });

        inView.set(target, false);
        observer.observe(target);

        if (footer) {
            inView.set(footer, false);
            observer.observe(footer);
        }
    }

    // The bar is often placed after this script in the markup, so wait for
    // the document to be parsed instead of assuming it already exists.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
