(function () {
    "use strict";

    /* ============================
       Scroll Progress Bar
       ============================ */
    var progressBar = document.createElement('div');
    progressBar.id = 'tscb-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }, { passive: true });

    /* ============================
       Hero Decorative Orbs
       ============================ */
    var hero = document.querySelector('.hero');
    if (hero) {
        ['hero-orb-1', 'hero-orb-2', 'hero-orb-3'].forEach(function (cls) {
            var orb = document.createElement('div');
            orb.className = cls;
            hero.prepend(orb);
        });
    }

    /* ============================
       Intersection Observer: Stagger counters
       ============================ */
    function observeElements(selector, className, threshold) {
        var elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: threshold || 0.2, rootMargin: '0px 0px -60px 0px' });

        elements.forEach(function (el) { observer.observe(el); });
    }

    observeElements('.counter-item', 'is-visible', 0.2);
    observeElements('.sponsor-logo-item', 'is-visible', 0.15);
    observeElements('.about-list-item', 'is-visible', 0.15);

    /* ============================
       GSAP Enhanced Animations (if GSAP available)
       ============================ */
    window.addEventListener('load', function () {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        /* --- Hero content stagger --- */
        var heroContent = document.querySelector('.hero-content .section-title');
        if (heroContent) {
            var heroKids = heroContent.querySelectorAll('h3, p');
            gsap.from(heroKids, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.3
            });
        }

        /* --- Counter numbers enhanced count-up feel --- */
        var counterBox = document.querySelector('.counter-box');
        if (counterBox) {
            gsap.from(counterBox, {
                scrollTrigger: {
                    trigger: counterBox,
                    start: 'top 80%',
                },
                scaleX: 0.92,
                scaleY: 0.95,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out'
            });
        }

        /* --- Service items stagger entrance --- */
        var serviceItems = document.querySelectorAll('.service-item');
        if (serviceItems.length) {
            gsap.from(serviceItems, {
                scrollTrigger: {
                    trigger: serviceItems[0].closest('.our-services') || serviceItems[0],
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.4)'
            });
        }

        /* --- About list items stagger --- */
        var aboutItems = document.querySelectorAll('.about-list-item');
        if (aboutItems.length) {
            gsap.from(aboutItems, {
                scrollTrigger: {
                    trigger: aboutItems[0].parentElement,
                    start: 'top 80%',
                },
                x: -30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power2.out'
            });
        }

        /* --- Sponsor logos stagger entrance --- */
        var sponsorItems = document.querySelectorAll('.sponsor-logo-item');
        if (sponsorItems.length) {
            gsap.from(sponsorItems, {
                scrollTrigger: {
                    trigger: document.querySelector('.sponsors-logo-grid'),
                    start: 'top 80%',
                },
                y: 40,
                scale: 0.88,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'back.out(1.7)'
            });
        }

        /* --- CTA section reveal --- */
        var ctaBox = document.querySelector('.cta-box');
        if (ctaBox) {
            gsap.from(ctaBox, {
                scrollTrigger: {
                    trigger: ctaBox,
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out'
            });
        }

        /* --- Section titles enhanced parallax --- */
        var sectionTitles = document.querySelectorAll('.section-row .section-title');
        sectionTitles.forEach(function (title) {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                },
                y: 25,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        /* --- Team member items stagger --- */
        var teamItems = document.querySelectorAll('.team-member-item');
        if (teamItems.length) {
            gsap.from(teamItems, {
                scrollTrigger: {
                    trigger: teamItems[0].closest('.our-teams') || teamItems[0],
                    start: 'top 75%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.14,
                ease: 'back.out(1.4)'
            });
        }

        /* --- Mission image floating --- */
        var missionImg = document.querySelector('.mission-img figure');
        if (missionImg) {
            gsap.to(missionImg, {
                y: -18,
                duration: 3.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
        }

        /* --- Mission life circle pulse --- */
        var lifeCircle = document.querySelector('.mission-life-circle img');
        if (lifeCircle) {
            gsap.to(lifeCircle, {
                boxShadow: '0 0 0 12px rgba(217, 40, 0, 0.12)',
                duration: 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
        }

        /* --- Orb parallax on scroll --- */
        var orbs = document.querySelectorAll('.hero-orb-1, .hero-orb-2, .hero-orb-3');
        if (orbs.length && document.querySelector('.hero')) {
            orbs.forEach(function (orb, i) {
                var speed = (i + 1) * 0.08;
                gsap.to(orb, {
                    scrollTrigger: {
                        trigger: '.hero',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1
                    },
                    y: (i % 2 === 0 ? -1 : 1) * 120 * speed * 10,
                    x: (i % 2 === 0 ? 1 : -1) * 40 * speed * 5,
                    ease: 'none'
                });
            });
        }

        /* --- Counter section scale in --- */
        var counterItems = document.querySelectorAll('.counter-item');
        if (counterItems.length) {
            counterItems.forEach(function (item, i) {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    y: 35,
                    scale: 0.92,
                    opacity: 0,
                    duration: 0.75,
                    delay: i * 0.1,
                    ease: 'back.out(1.5)'
                });
            });
        }

        /* --- Sponsors footer line --- */
        var sponsorFooter = document.querySelector('.sponsors-footer');
        if (sponsorFooter) {
            gsap.from(sponsorFooter, {
                scrollTrigger: {
                    trigger: sponsorFooter,
                    start: 'top 90%'
                },
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out'
            });
        }
    });

    /* ============================
       Magnetic Button Effect (subtle)
       ============================ */
    var magnetBtns = document.querySelectorAll('.btn-default, .readmore-btn');
    magnetBtns.forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
            var rect = btn.getBoundingClientRect();
            var cx = rect.left + rect.width / 2;
            var cy = rect.top + rect.height / 2;
            var dx = (e.clientX - cx) / (rect.width / 2);
            var dy = (e.clientY - cy) / (rect.height / 2);
            var strength = btn.classList.contains('readmore-btn') ? 6 : 8;
            btn.style.transform = 'translate(' + (dx * strength) + 'px, ' + (dy * strength) + 'px)';
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.transform = '';
            btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });

        btn.addEventListener('mouseenter', function () {
            btn.style.transition = 'transform 0.1s ease';
        });
    });

    /* ============================
       Active nav link highlight
       ============================ */
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.main-menu .nav-item a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        var linkFile = href.split('/').pop();
        if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
            link.closest('.nav-item').classList.add('active');
        }
    });

    /* ============================
       Smooth Ticker Speed Boost on hover
       ============================ */
    var tickerBoxes = document.querySelectorAll('.scrolling-ticker-box');
    tickerBoxes.forEach(function (box) {
        box.addEventListener('mouseenter', function () {
            box.style.animationPlayState = 'paused';
            var content = box.querySelectorAll('.scrolling-content');
            content.forEach(function (c) { c.style.animationPlayState = 'paused'; });
        });
        box.addEventListener('mouseleave', function () {
            box.style.animationPlayState = '';
            var content = box.querySelectorAll('.scrolling-content');
            content.forEach(function (c) { c.style.animationPlayState = ''; });
        });
    });

    /* ============================
       Image tilt effect on about images
       ============================ */
    var tiltImages = document.querySelectorAll('.about-img-1, .about-img-2, .mission-img .image-anime');
    tiltImages.forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
            var rect = el.getBoundingClientRect();
            var cx = rect.left + rect.width / 2;
            var cy = rect.top + rect.height / 2;
            var dx = (e.clientX - cx) / (rect.width / 2);
            var dy = (e.clientY - cy) / (rect.height / 2);
            var img = el.querySelector('img, figure');
            if (img) {
                img.style.transform = 'perspective(600px) rotateY(' + (dx * 4) + 'deg) rotateX(' + (-dy * 4) + 'deg) scale(1.03)';
                img.style.transition = 'transform 0.1s ease';
            }
        });

        el.addEventListener('mouseleave', function () {
            var img = el.querySelector('img, figure');
            if (img) {
                img.style.transform = '';
                img.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            }
        });
    });

    /* ============================
       Counter box animated number suffix
       ============================ */
    // Ensure counter values have proper styling after WOW init
    document.addEventListener('DOMContentLoaded', function () {
        var counterTitles = document.querySelectorAll('.counter-title h2');
        counterTitles.forEach(function (h2) {
            h2.style.letterSpacing = '-0.02em';
        });
    });

})();
