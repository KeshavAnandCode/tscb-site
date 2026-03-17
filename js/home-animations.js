/* =====================================================
   TSCB — Homepage GSAP Masterpiece
   Linked ONLY in index.html  |  v1.0
   ===================================================== */

(function () {
    'use strict';

    /* Guard: only run when there is a hero section */
    if (!document.querySelector('.hero')) return;

    /* Register GSAP plugins (safe to call multiple times) */
    gsap.registerPlugin(ScrollTrigger);

    /* ====================================================
       1.  HERO — ORBS ENTRANCE + MOUSE PARALLAX
       ==================================================== */

    /* Orbs drift in after preloader */
    gsap.from('.hero-orb-1', {
        scale: 0.2, opacity: 0, duration: 2.8,
        ease: 'power3.out', delay: 0.85
    });
    gsap.from('.hero-orb-2', {
        scale: 0.2, opacity: 0, duration: 3.2,
        ease: 'power3.out', delay: 1.0
    });
    gsap.from('.hero-orb-3', {
        scale: 0.2, opacity: 0, duration: 2.2,
        ease: 'power3.out', delay: 1.3
    });

    /* Orb glow pulse after preloader (subtle depth feel) */
    gsap.to('.hero-orb-1', {
        opacity: 0.85, scale: 1.08,
        duration: 3, ease: 'sine.inOut',
        yoyo: true, repeat: -1, delay: 1.8
    });

    /* Orb scroll parallax */
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.8,
        onUpdate: function (self) {
            var p = self.progress;
            gsap.set('.hero-orb-1', { y: p * -130, x: p * 45 });
            gsap.set('.hero-orb-2', { y: p * -90,  x: p * -35 });
            gsap.set('.hero-orb-3', { y: p * -60,  rotate: p * 50 });
        }
    });

    /* Hero mouse parallax — orbs follow the cursor */
    var heroEl = document.querySelector('.hero');
    heroEl.addEventListener('mousemove', function (e) {
        var rect = heroEl.getBoundingClientRect();
        var xR = (e.clientX - rect.left)  / rect.width  - 0.5;
        var yR = (e.clientY - rect.top)   / rect.height - 0.5;
        gsap.to('.hero-orb-1', { x: xR * 55,  y: yR * 35,  duration: 1.8, ease: 'power2.out', overwrite: 'auto' });
        gsap.to('.hero-orb-2', { x: xR * -40, y: yR * -25, duration: 2.0, ease: 'power2.out', overwrite: 'auto' });
        gsap.to('.hero-orb-3', { x: xR * 25,  y: yR * 18,  duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
    });

    /* ====================================================
       2.  COUNTER SECTION — 3-STAGE DRAMATIC ENTRANCE
       (counter-item has no .wow class — safe to animate)
       ==================================================== */

    var counterSection = document.querySelector('.our-counter');
    if (counterSection) {

        /* Stage 1 — the whole box scales in */
        gsap.from('.counter-box', {
            scrollTrigger: { trigger: '.our-counter', start: 'top 78%', once: true },
            scale: 0.88, opacity: 0, borderRadius: '40px',
            duration: 1.2, ease: 'power4.out',
            immediateRender: false
        });

        /* Stage 2 — individual items slide up with stagger */
        gsap.from('.counter-item', {
            scrollTrigger: { trigger: '.our-counter', start: 'top 78%', once: true },
            y: 60, opacity: 0,
            duration: 0.85, stagger: 0.18, delay: 0.25,
            ease: 'back.out(1.6)',
            immediateRender: false
        });

        /* Stage 3 — counter h2 numbers pop with elastic */
        gsap.from('.counter-title h2', {
            scrollTrigger: { trigger: '.our-counter', start: 'top 78%', once: true },
            scale: 0.4, opacity: 0,
            duration: 1.1, stagger: 0.2, delay: 0.55,
            ease: 'elastic.out(1.1, 0.52)',
            immediateRender: false
        });

        /* Counter hover — h2 magnify */
        document.querySelectorAll('.counter-item').forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                gsap.to(item.querySelector('.counter-title h2'), {
                    scale: 1.12, color: '#d92800',
                    duration: 0.35, ease: 'back.out(2)'
                });
            });
            item.addEventListener('mouseleave', function () {
                gsap.to(item.querySelector('.counter-title h2'), {
                    scale: 1, color: '',
                    duration: 0.5, ease: 'power2.out'
                });
            });
        });
    }

    /* ====================================================
       3.  MISSION IMAGE — SCROLL PARALLAX
       (the reveal animation in function.js still runs)
       ==================================================== */

    gsap.to('.mission-img', {
        scrollTrigger: {
            trigger: '.our-mission',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8
        },
        y: -60, ease: 'none'
    });

    gsap.to('.mission-life-circle', {
        scrollTrigger: {
            trigger: '.our-mission',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2.5
        },
        y: -95, rotate: 35, ease: 'none'
    });

    /* ====================================================
       4.  SERVICE TICKER — FADE IN + SUBTLE SCALE
       ==================================================== */

    gsap.from('.service-ticker', {
        scrollTrigger: { trigger: '.service-ticker', start: 'top 92%', once: true },
        opacity: 0, scaleY: 0.6,
        transformOrigin: 'center center',
        duration: 0.7, ease: 'back.out(2)',
        immediateRender: false
    });

    /* ====================================================
       5.  SERVICE CARDS — 3D TILT ON HOVER
       (entrance handled by WOW.js — we layer on tilt only)
       ==================================================== */

    document.querySelectorAll('.service-item').forEach(function (card) {
        card.style.transformStyle = 'preserve-3d';
        card.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var rotX = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -10;
            var rotY = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  10;
            gsap.to(card, {
                rotationX: rotX, rotationY: rotY,
                transformPerspective: 700,
                duration: 0.35, ease: 'power2.out', overwrite: 'auto'
            });
        });
        card.addEventListener('mouseleave', function () {
            gsap.to(card, {
                rotationX: 0, rotationY: 0,
                duration: 0.75, ease: 'elastic.out(1, 0.45)', overwrite: 'auto'
            });
        });
    });

    /* ====================================================
       6.  SPONSORS — GUARANTEED VISIBILITY
       Two-trigger system: ScrollTrigger + load-time check
       gsap.set() owns initial state (no CSS opacity:0 ever)
       ==================================================== */

    var sponsorItems = document.querySelectorAll('.sponsor-logo-item');
    if (sponsorItems.length) {

        /* Immediately set invisible via GSAP — no CSS conflict */
        gsap.set(sponsorItems, { opacity: 0, y: 60, scale: 0.78, rotationY: 15 });

        var sponsorsPlayed = false;
        function playSponsors() {
            if (sponsorsPlayed) return;
            sponsorsPlayed = true;
            gsap.to(sponsorItems, {
                opacity: 1, y: 0, scale: 1, rotationY: 0,
                duration: 0.9, stagger: 0.22,
                ease: 'back.out(1.8)',
                clearProps: 'rotationY'
            });
        }

        /* Trigger 1: normal scroll */
        ScrollTrigger.create({
            trigger: '.our-sponsors-section',
            start: 'top 88%',
            once: true,
            onEnter: playSponsors
        });

        /* Trigger 2: already visible when page finishes loading */
        window.addEventListener('load', function () {
            setTimeout(function () {
                var sec = document.querySelector('.our-sponsors-section');
                if (!sec) return;
                var rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.92) {
                    playSponsors();
                }
            }, 980);
        });

        /* 3D tilt on hover — works after animation completes */
        sponsorItems.forEach(function (card) {
            card.style.transformStyle = 'preserve-3d';
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var rotX = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -8;
                var rotY = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  8;
                gsap.to(card, {
                    rotationX: rotX, rotationY: rotY,
                    transformPerspective: 500,
                    duration: 0.3, ease: 'power2.out', overwrite: 'auto'
                });
            });
            card.addEventListener('mouseleave', function () {
                gsap.to(card, {
                    rotationX: 0, rotationY: 0,
                    duration: 0.65, ease: 'elastic.out(1, 0.45)', overwrite: 'auto'
                });
            });
        });
    }

    /* ====================================================
       7.  CTA BOX — SPLIT ENTRANCE
       (cta-box-btn has .wow — we animate cta-box-content only)
       ==================================================== */

    gsap.from('.cta-box-content', {
        scrollTrigger: { trigger: '.cta-box', start: 'top 82%', once: true },
        x: -70, opacity: 0,
        duration: 1.1, ease: 'power4.out',
        immediateRender: false
    });

    /* ====================================================
       8.  GLOBAL SCROLL PROGRESS + SECTION FLASH
       Brief red flash on the progress bar when entering a section
       ==================================================== */

    var sectionFlashSections = document.querySelectorAll('.our-counter, .our-services, .our-sponsors-section, .cta-box');
    sectionFlashSections.forEach(function (sec) {
        ScrollTrigger.create({
            trigger: sec,
            start: 'top 60%',
            once: true,
            onEnter: function () {
                var bar = document.getElementById('tscb-progress');
                if (!bar) return;
                gsap.fromTo(bar, { boxShadow: '0 0 0 0 rgba(217,40,0,0)' },
                    { boxShadow: '0 0 18px 4px rgba(217,40,0,0.7)', duration: 0.3, yoyo: true, repeat: 1, ease: 'power2.inOut' });
            }
        });
    });

    /* ====================================================
       9.  ABOUT-LIST ICON BOXES — STAGGER SPIN-IN
       (icons inside .about-list-item — no .wow class on the icon)
       ==================================================== */

    gsap.from('#home-about .about-list-item .icon-box', {
        scrollTrigger: { trigger: '#home-about .about-content-body', start: 'top 82%', once: true },
        scale: 0, rotate: -180, opacity: 0,
        duration: 0.75, stagger: 0.2, delay: 0.15,
        ease: 'back.out(2)',
        immediateRender: false
    });

    /* ====================================================
       10.  SCROLL-TRIGGERED BACKGROUND GRADIENT SHIFT
            on the hero as user scrolls away
       ==================================================== */

    ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: function (self) {
            heroEl.style.filter = 'brightness(' + (1 - self.progress * 0.18) + ')';
        }
    });

    /* ====================================================
       FINALIZE: refresh ScrollTrigger after full load
       (handles lazy images and font layout shifts)
       ==================================================== */

    window.addEventListener('load', function () {
        setTimeout(function () {
            ScrollTrigger.refresh();
        }, 300);
    });

})();
