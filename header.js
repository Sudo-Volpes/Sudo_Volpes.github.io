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
