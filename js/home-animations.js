/* =====================================================
   TSCB — Homepage GSAP Masterpiece
   Linked ONLY in index.html  |  v2.0 (mobile-aware)
   ===================================================== */

(function () {
    'use strict';

    /* Guard: only run when there is a hero section */
    if (!document.querySelector('.hero')) return;

    /* Register GSAP plugins */
    gsap.registerPlugin(ScrollTrigger);

    /* ── Mobile detection ── */
    var isMobile = window.matchMedia('(max-width: 767px)').matches ||
                   ('ontouchstart' in window && window.innerWidth < 900);

    /* ====================================================
       1.  HERO — ORBS ENTRANCE
       ==================================================== */

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

    /* Orb subtle glow pulse */
    gsap.to('.hero-orb-1', {
        opacity: 0.85, scale: 1.08,
        duration: 3, ease: 'sine.inOut',
        yoyo: true, repeat: -1, delay: 1.8
    });

    /* Orb scroll parallax — desktop + mobile */
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

    /* Hero parallax:
       Desktop → mouse-follow
       Mobile  → gentle continuous drift (no cursor needed) */
    var heroEl = document.querySelector('.hero');

    if (!isMobile) {
        heroEl.addEventListener('mousemove', function (e) {
            var rect = heroEl.getBoundingClientRect();
            var xR = (e.clientX - rect.left)  / rect.width  - 0.5;
            var yR = (e.clientY - rect.top)   / rect.height - 0.5;
            gsap.to('.hero-orb-1', { x: xR * 55,  y: yR * 35,  duration: 1.8, ease: 'power2.out', overwrite: 'auto' });
            gsap.to('.hero-orb-2', { x: xR * -40, y: yR * -25, duration: 2.0, ease: 'power2.out', overwrite: 'auto' });
            gsap.to('.hero-orb-3', { x: xR * 25,  y: yR * 18,  duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
        });
    } else {
        /* Mobile: slow ambient drift on orbs */
        gsap.to('.hero-orb-2', {
            x: 30, y: -20,
            duration: 4, ease: 'sine.inOut',
            yoyo: true, repeat: -1, delay: 0.5
        });
        gsap.to('.hero-orb-3', {
            x: -20, y: 15, rotate: 20,
            duration: 5, ease: 'sine.inOut',
            yoyo: true, repeat: -1, delay: 1
        });
    }

    /* ====================================================
       2.  COUNTER SECTION — single clean entrance
           (replaces the previous 3-stage cascade that caused
           the "spasm" effect; waypoints/counterUp still runs)
       ==================================================== */

    var counterSection = document.querySelector('.our-counter');
    if (counterSection) {

        /* One unified entrance: box scales in, items slide up together */
        var counterTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.our-counter',
                start: 'top 82%',
                once: true
            }
        });

        counterTl
            .from('.counter-box', {
                scale: 0.9, opacity: 0,
                duration: 0.9, ease: 'power3.out',
                immediateRender: false
            })
            .from('.counter-item', {
                y: 40, opacity: 0,
                duration: 0.65, stagger: 0.12,
                ease: 'power3.out',
                immediateRender: false
            }, '-=0.5');

        /* Counter hover — desktop only */
        if (!isMobile) {
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
    }

    /* ====================================================
       3.  MISSION IMAGE — SCROLL PARALLAX (desktop only)
           On mobile the parallax y-shift breaks the stacked
           layout and makes the image float out of place.
       ==================================================== */

    if (!isMobile) {
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
    }

    /* ====================================================
       4.  SERVICE TICKER — FADE IN
       ==================================================== */

    gsap.from('.service-ticker', {
        scrollTrigger: { trigger: '.service-ticker', start: 'top 92%', once: true },
        opacity: 0, scaleY: 0.6,
        transformOrigin: 'center center',
        duration: 0.7, ease: 'back.out(2)',
        immediateRender: false
    });

    /* ====================================================
       5.  SERVICE CARDS
           Desktop → 3D tilt on hover
           Mobile  → slide-up stagger on scroll
       ==================================================== */

    if (!isMobile) {
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
    } else {
        /* Mobile: tap-scale feedback */
        document.querySelectorAll('.service-item').forEach(function (card) {
            card.addEventListener('touchstart', function () {
                gsap.to(card, { scale: 0.97, duration: 0.15, ease: 'power2.out' });
            }, { passive: true });
            card.addEventListener('touchend', function () {
                gsap.to(card, { scale: 1, duration: 0.35, ease: 'elastic.out(1.2, 0.5)' });
            }, { passive: true });
        });
    }

    /* ====================================================
       6.  SPONSORS — GUARANTEED VISIBILITY
       ==================================================== */

    var sponsorItems = document.querySelectorAll('.sponsor-logo-item');
    if (sponsorItems.length) {

        gsap.set(sponsorItems, { opacity: 0, y: 50, scale: 0.82 });

        var sponsorsPlayed = false;
        function playSponsors() {
            if (sponsorsPlayed) return;
            sponsorsPlayed = true;
            gsap.to(sponsorItems, {
                opacity: 1, y: 0, scale: 1,
                duration: 0.8, stagger: 0.15,
                ease: 'back.out(1.6)'
            });
        }

        ScrollTrigger.create({
            trigger: '.our-sponsors-section',
            start: 'top 88%',
            once: true,
            onEnter: playSponsors
        });

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

        /* 3D tilt — desktop only */
        if (!isMobile) {
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
    }

    /* ====================================================
       7.  CTA BOX — SPLIT ENTRANCE
       ==================================================== */

    gsap.from('.cta-box-content', {
        scrollTrigger: { trigger: '.cta-box', start: 'top 82%', once: true },
        x: isMobile ? 0 : -70,
        y: isMobile ? 30 : 0,
        opacity: 0,
        duration: 1.1, ease: 'power4.out',
        immediateRender: false
    });

    /* ====================================================
       8.  GLOBAL SCROLL PROGRESS FLASH
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
       ==================================================== */

    gsap.from('#home-about .about-list-item .icon-box', {
        scrollTrigger: { trigger: '#home-about .about-content-body', start: 'top 82%', once: true },
        scale: 0, rotate: -180, opacity: 0,
        duration: 0.75, stagger: 0.2, delay: 0.15,
        ease: 'back.out(2)',
        immediateRender: false
    });

    /* ====================================================
       10. MOBILE-SPECIFIC SCROLL ANIMATIONS
           Beautiful slide-in effects activated by scroll
           (replaces cursor-dependent hover animations)
       ==================================================== */

    if (isMobile) {

        /* About section list items: stagger slide from left */
        gsap.from('#home-about .about-list-item', {
            scrollTrigger: { trigger: '#home-about .about-content-body', start: 'top 88%', once: true },
            x: -30, opacity: 0,
            duration: 0.6, stagger: 0.15,
            ease: 'power3.out',
            immediateRender: false
        });

        /* Mission section: text slides in from left, image from bottom */
        gsap.from('.mission-content .section-title', {
            scrollTrigger: { trigger: '.our-mission', start: 'top 85%', once: true },
            x: -40, opacity: 0,
            duration: 0.75, ease: 'power3.out',
            immediateRender: false
        });

        gsap.from('.mission-image', {
            scrollTrigger: { trigger: '.mission-image', start: 'top 90%', once: true },
            y: 50, opacity: 0,
            duration: 0.8, ease: 'power3.out',
            immediateRender: false
        });

        /* Service items: alternate slide from left/right */
        document.querySelectorAll('.service-item').forEach(function (card, i) {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                x: i % 2 === 0 ? -40 : 40,
                opacity: 0,
                duration: 0.65,
                ease: 'power3.out',
                immediateRender: false
            });
        });

        /* CTA box: gentle scale pop */
        gsap.from('.cta-box', {
            scrollTrigger: { trigger: '.cta-box', start: 'top 90%', once: true },
            scale: 0.95, opacity: 0,
            duration: 0.75, ease: 'back.out(1.8)',
            immediateRender: false
        });
    }

    /* ====================================================
       11. HERO BRIGHTNESS SHIFT ON SCROLL (desktop only)
       ==================================================== */

    if (!isMobile) {
        ScrollTrigger.create({
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            onUpdate: function (self) {
                heroEl.style.filter = 'brightness(' + (1 - self.progress * 0.18) + ')';
            }
        });
    }

    /* ====================================================
       FINALIZE: refresh ScrollTrigger after full load
       ==================================================== */

    window.addEventListener('load', function () {
        setTimeout(function () {
            ScrollTrigger.refresh();
        }, 400);
    });

})();
