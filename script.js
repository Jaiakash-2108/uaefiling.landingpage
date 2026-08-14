/**
 * UAE Filing - Interaction Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-content .btn');
    const mobileClose = document.querySelector('.mobile-menu-close');

    if (hamburger && mobileNav) {
        const toggleMenu = () => {
            mobileNav.classList.toggle('active');
            const isActive = mobileNav.classList.contains('active');
            // Change icon
            if (isActive) {
                hamburger.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                document.body.style.overflow = 'hidden';
                document.body.classList.add('mobile-nav-active');
            } else {
                hamburger.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
                document.body.style.overflow = '';
                document.body.classList.remove('mobile-nav-active');
            }
        };

        hamburger.addEventListener('click', toggleMenu);
        if (mobileClose) {
            mobileClose.addEventListener('click', toggleMenu);
        }

        // Close menu on link click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // 2. Audience Selector Tabs (Shadcn Feature108 Component Switch)
    const serveTriggers = document.querySelectorAll('.serve-tab-trigger, .tab-btn');
    const servePanels = document.querySelectorAll('.serve-card-box .tab-panel, .tab-panel, .tab-pane');

    if (serveTriggers.length > 0) {
        serveTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const targetId = trigger.getAttribute('data-target');

                // Update data-state, aria-selected, and remove active class from all triggers
                serveTriggers.forEach(t => {
                    t.setAttribute('data-state', 'inactive');
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });

                // Set clicked trigger to active
                trigger.setAttribute('data-state', 'active');
                trigger.classList.add('active');
                trigger.setAttribute('aria-selected', 'true');

                // Hide all panels by removing active class
                servePanels.forEach(panel => {
                    panel.classList.remove('active');
                });

                // Show target panel with active class for smooth opacity and translateY transition
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // 3. FAQ Accordion
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const isExpanded = acc.getAttribute('aria-expanded') === 'true';
            const content = acc.nextElementSibling;
            
            // Close all other accordions (Optional behavior)
            accordions.forEach(otherAcc => {
                if (otherAcc !== acc) {
                    otherAcc.setAttribute('aria-expanded', 'false');
                    otherAcc.nextElementSibling.style.maxHeight = null;
                    otherAcc.nextElementSibling.style.opacity = '0';
                }
            });

            // Toggle current
            if (!isExpanded) {
                acc.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
            } else {
                acc.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
                content.style.opacity = '0';
            }
        });
    });

    // 4. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                // Account for fixed navbar
                const navbarHeight = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Scroll Reveal with IntersectionObserver
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once revealed to animate only once
                observer.unobserve(entry.target); 
            }
        });
    };
    
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.1
    };
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(revealCallback, revealOptions);
        revealElements.forEach(el => observer.observe(el));
    }

    // 5.5. Animated Counter Effect
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 1500; // Duration in ms

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            if (isNaN(target)) return;

            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / speed, 1);
                
                // Cubic easing out
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const value = Math.floor(easedProgress * target);
                
                counter.textContent = (value >= 1000 ? value.toLocaleString() : value) + suffix;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    counter.textContent = (target >= 1000 ? target.toLocaleString() : target) + suffix;
                }
            };
            window.requestAnimationFrame(step);
        });
    }

    const trustBar = document.getElementById('trust-bar');
    if (trustBar) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            observer.observe(trustBar);
        } else {
            animateCounters();
        }
    }

    // 6. Form Submission Prevention (for demo)
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('.btn-submit');
            const originalText = btn.innerText;
            btn.innerText = 'Submitting...';
            btn.disabled = true;
            
            // Simulate API Call
            setTimeout(() => {
                btn.innerText = 'Enquiry Sent Successfully!';
                btn.style.backgroundColor = '#10B981'; // Success Green
                leadForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

    // 7. Interactive Testimonial Switcher
    const avatarBtns = document.querySelectorAll('.avatar-btn');
    const quoteTextEl = document.getElementById('active-quote-text');
    const quoteAuthorEl = document.getElementById('active-quote-author');

    if (avatarBtns.length > 0 && quoteTextEl && quoteAuthorEl) {
        avatarBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) return;

                const newQuote = btn.getAttribute('data-quote');
                const newAuthor = btn.getAttribute('data-author');

                // Remove active class from all buttons and add to the clicked button
                avatarBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                // Smooth 0.3s opacity transition (pure fade)
                quoteTextEl.style.transition = 'opacity 0.15s ease-in-out';
                quoteAuthorEl.style.transition = 'opacity 0.15s ease-in-out';
                
                quoteTextEl.style.opacity = '0';
                quoteAuthorEl.style.opacity = '0';

                setTimeout(() => {
                    quoteTextEl.textContent = newQuote;
                    quoteAuthorEl.textContent = newAuthor;

                    setTimeout(() => {
                        quoteTextEl.style.transition = 'opacity 0.3s ease-in-out';
                        quoteAuthorEl.style.transition = 'opacity 0.3s ease-in-out';
                        
                        quoteTextEl.style.opacity = '1';
                        quoteAuthorEl.style.opacity = '1';
                    }, 20);
                }, 150);
            });
        });
    }
});
