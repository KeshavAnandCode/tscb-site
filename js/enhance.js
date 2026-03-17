/* =====================================================
   TSCB — Cross-page Utilities
   ===================================================== */

(function () {
    'use strict';

    /* ---- Scroll Progress Bar ---- */
    (function () {
        var bar = document.createElement('div');
        bar.id = 'tscb-progress';
        document.body.appendChild(bar);

        function onScroll() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = pct + '%';
        }

        window.addEventListener('scroll', onScroll, { passive: true });
    })();

    /* ---- Hero Decorative Orbs ---- */
    (function () {
        var hero = document.querySelector('.hero');
        if (!hero) return;
        [1, 2, 3].forEach(function (n) {
            var orb = document.createElement('div');
            orb.className = 'hero-orb-' + n;
            hero.appendChild(orb);
        });
    })();

    /* ---- Magnetic Buttons ---- */
    (function () {
        var btns = document.querySelectorAll('.btn-default, .readmore-btn, .circular-arrow');
        btns.forEach(function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var cx = rect.left + rect.width / 2;
                var cy = rect.top + rect.height / 2;
                var dx = (e.clientX - cx) * 0.25;
                var dy = (e.clientY - cy) * 0.25;
                btn.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
            });
            btn.addEventListener('mouseleave', function () {
                btn.style.transform = '';
            });
        });
    })();

    /* ---- Active nav link ---- */
    (function () {
        var currentFile = window.location.pathname.split('/').pop() || 'index.html';
        var links = document.querySelectorAll('.navbar-nav .nav-link');
        links.forEach(function (link) {
            var href = link.getAttribute('href') || '';
            var file = href.split('/').pop();
            if (file === currentFile || (currentFile === '' && file === 'index.html')) {
                var item = link.closest('.nav-item');
                if (item) item.classList.add('active');
            }
        });
    })();

    /* ---- Ticker pause on hover ---- */
    (function () {
        var ticker = document.querySelector('.ticker-wrap');
        if (!ticker) return;
        var inner = ticker.querySelector('.ticker');
        if (!inner) return;
        ticker.addEventListener('mouseenter', function () {
            inner.style.animationPlayState = 'paused';
        });
        ticker.addEventListener('mouseleave', function () {
            inner.style.animationPlayState = '';
        });
    })();

})();
