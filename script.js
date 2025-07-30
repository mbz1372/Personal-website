// Language management
let currentLanguage = 'en';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const savedLanguage = localStorage.getItem('website-language') || 'en';
    setLanguage(savedLanguage);
    
    // Handle profile image loading
    handleProfileImageLoading();
    
    // Add smooth transitions
    addPageTransitions();
    
    // Initialize navigation
    initializeNavigation();
    
    // Add scroll effects
    addScrollEffects();
    
    // Initialize interactive elements
    initializeInteractiveElements();
    
    // Initialize mouse cursor
    initializeCustomCursor();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize skill bars animation
    initializeSkillBars();
    
    // Initialize hero animations
    initializeHeroAnimations();
});

// Language switching function
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'fa' : 'en';
    setLanguage(newLanguage);
}

// Set language function
function setLanguage(language) {
    currentLanguage = language;
    
    // Update HTML attributes
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', language);
    htmlElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
    
    // Update all text content
    updateTextContent(language);
    
    // Save preference
    localStorage.setItem('website-language', language);
    
    // Update language button text
    updateLanguageButton(language);
    
    // Add transition effect
    document.body.style.opacity = '0.9';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

// Update text content based on language
function updateTextContent(language) {
    const elements = document.querySelectorAll('[data-en][data-fa]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
}

// Update language button
function updateLanguageButton(language) {
    const langTexts = document.querySelectorAll('.lang-text');
    langTexts.forEach(langText => {
        if (langText) {
            langText.textContent = language === 'en' ? 'فا' : 'EN';
        }
    });
}

// Handle profile image loading
function handleProfileImageLoading() {
    const profileImg = document.getElementById('profileImg');
    
    if (profileImg) {
        // Create a temporary image to check if the file exists
        const tempImg = new Image();
        tempImg.onload = function() {
            profileImg.src = this.src;
            profileImg.style.opacity = '1';
        };
        tempImg.onerror = function() {
            // If image doesn't exist, show the overlay
            const overlay = profileImg.nextElementSibling;
            if (overlay && overlay.classList.contains('image-overlay')) {
                overlay.style.opacity = '1';
            }
        };
        tempImg.src = profileImg.src;
    }
}

// Initialize minimal custom cursor
function initializeCustomCursor() {
    // Only initialize custom cursor on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
        
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        document.body.appendChild(cursorFollower);
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX - 4 + 'px';
            cursor.style.top = mouseY - 4 + 'px';
        });
        
        // Smooth follower animation
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            
            cursorFollower.style.left = followerX - 16 + 'px';
            cursorFollower.style.top = followerY - 16 + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        // Add minimal hover effects
        const interactiveElements = document.querySelectorAll('a, button, .btn, .certification-card, .quick-link-card, .nav-menu a, .social-link-hero, .lang-btn, .hamburger');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '0.6';
        });
    }
}

// Initialize hero animations
function initializeHeroAnimations() {
    // Animate hero stats on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    animateNumber(statNumber);
                }
            }
        });
    });
    
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => statsObserver.observe(item));
    
    // Animate floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 2}s`;
    });
}

// Initialize animations with Intersection Observer
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Special animation for skill bars
                if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.getAttribute('data-progress');
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 300);
                }
                
                // Special animation for certification cards
                if (entry.target.classList.contains('certification-card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, 200);
                }
                
                // Special animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateNumber(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.certification-card, .quick-link-card, .skill-card, .timeline-content, .video-card, .article-card, .book-card, .stat-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
    
    // Observe skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(bar);
    });
    
    // Observe stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate numbers
function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 25);
}

// Initialize skill bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// Initialize filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterableItems = document.querySelectorAll('[data-category]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            filterableItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Add page transitions
function addPageTransitions() {
    const internalLinks = document.querySelectorAll('a[href$=".html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Add fade out effect
            document.body.style.opacity = '0';
            document.body.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}

// Initialize navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const nav = document.querySelector('.nav');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Add scroll effect to navbar
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navbar
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            nav.style.transform = 'translateY(0)';
        }
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    }, 100));
    
    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Add scroll effects
function addScrollEffects() {
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.hero-particles, .floating-card');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16));
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn, .lang-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.certification-card, .quick-link-card, .video-card, .article-card, .book-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
        });
    });
}

// Add ripple CSS
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize custom cursor based on screen size
    const existingCursor = document.querySelector('.cursor');
    const existingFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth <= 768) {
        // Remove custom cursor on mobile
        if (existingCursor) existingCursor.remove();
        if (existingFollower) existingFollower.remove();
    } else if (!existingCursor) {
        // Re-initialize custom cursor on desktop
        initializeCustomCursor();
    }
});

// Add mouse movement parallax effect for hero section
document.addEventListener('mousemove', throttle((e) => {
    if (window.innerWidth > 768) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Apply parallax to floating cards
        const floatingCards = document.querySelectorAll('.floating-card');
        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 15;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Apply subtle parallax to hero image
        const heroImage = document.querySelector('.hero-image-wrapper');
        if (heroImage) {
            const x = (mouseX - 0.5) * 10;
            const y = (mouseY - 0.5) * 10;
            
            heroImage.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
}, 16));

// Performance optimization: Throttle scroll and mouse events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply smooth page entrance animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Initialize page entrance
document.body.style.opacity = '0';
document.body.style.transform = 'translateY(20px)';
document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';