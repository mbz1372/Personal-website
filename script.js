// Language management
let currentLanguage = 'en';
let currentTheme = 'light';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const savedLanguage = localStorage.getItem('website-language') || 'en';
    setLanguage(savedLanguage);

    // Initialize theme
    const savedTheme = localStorage.getItem('website-theme') || 'light';
    setTheme(savedTheme);
    
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
    
    // Initialize contact form
    initializeContactForm();
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
    document.body.style.opacity = '0.7';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
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
    
    // Update form placeholders
    updateFormPlaceholders(language);
}

// Update form placeholders
function updateFormPlaceholders(language) {
    const inputs = document.querySelectorAll('input[data-en-placeholder], textarea[data-en-placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute(`data-${language}-placeholder`);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
}

// Update language button
function updateLanguageButton(language) {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = language === 'en' ? 'فارسی' : 'English';
    }
    // Update theme button text when language changes
    updateThemeButton(currentTheme);
}

// Theme switching function
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Set theme function
function setTheme(theme) {
    currentTheme = theme;
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    localStorage.setItem('website-theme', theme);
    updateThemeButton(theme);
}

// Update theme button
function updateThemeButton(theme) {
    const themeText = document.querySelector('.theme-text');
    const themeIcon = document.querySelector('.theme-btn i');
    if (themeText && themeIcon) {
        if (theme === 'dark') {
            themeText.textContent = currentLanguage === 'en' ? 'Light' : 'روشن';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeText.textContent = currentLanguage === 'en' ? 'Dark' : 'تاریک';
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
        
        // Add placeholder translations
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.name === 'name') {
                input.setAttribute('data-en-placeholder', 'Your Name');
                input.setAttribute('data-fa-placeholder', 'نام شما');
            } else if (input.name === 'email') {
                input.setAttribute('data-en-placeholder', 'Your Email');
                input.setAttribute('data-fa-placeholder', 'ایمیل شما');
            } else if (input.name === 'subject') {
                input.setAttribute('data-en-placeholder', 'Subject');
                input.setAttribute('data-fa-placeholder', 'موضوع');
            } else if (input.name === 'message') {
                input.setAttribute('data-en-placeholder', 'Your Message');
                input.setAttribute('data-fa-placeholder', 'پیام شما');
            }
        });
    }
}

// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        const message = currentLanguage === 'en' ? 'Please fill in all fields' : 'لطفاً تمام فیلدها را پر کنید';
        showNotification(message, 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        const message = currentLanguage === 'en' ? 'Please enter a valid email address' : 'لطفاً یک آدرس ایمیل معتبر وارد کنید';
        showNotification(message, 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        const message = currentLanguage === 'en' ? 'Message sent successfully! I\'ll get back to you soon.' : 'پیام با موفقیت ارسال شد! به زودی با شما تماس خواهم گرفت.';
        showNotification(message, 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#0066cc'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background: rgba(255,255,255,0.2);
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Handle profile image loading
function handleProfileImageLoading() {
    const profileImg = document.getElementById('profileImg');
    
    if (profileImg) {
        // Create a temporary image to check if the file exists
        const tempImg = new Image();
        
        tempImg.onload = function() {
            profileImg.src = 'profile.jpg';
            profileImg.classList.add('loaded');
        };
        
        tempImg.onerror = function() {
            // If profile.jpg doesn't exist, show placeholder
            console.log('Profile image not found, using placeholder');
            profileImg.classList.add('loaded'); // This will hide the overlay
        };
        
        tempImg.src = 'profile.jpg';
    }
}

// Initialize custom cursor
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
            
            cursor.style.left = mouseX - 10 + 'px';
            cursor.style.top = mouseY - 10 + 'px';
        });
        
        // Smooth follower animation
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursorFollower.style.left = followerX - 20 + 'px';
            cursorFollower.style.top = followerY - 20 + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        // Add hover effects
        const interactiveElements = document.querySelectorAll('a, button, .btn, .card, .social-link, .nav-menu a, .filter-btn');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.style.transform = 'scale(1.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.style.transform = 'scale(1)';
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '0.5';
        });
    } else {
        // Remove cursor: none for mobile
        document.body.style.cursor = 'auto';
    }
}

// Initialize animations
function initializeAnimations() {
    // Animate elements on scroll
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
                    const progress = entry.target.getAttribute('data-progress');
                    setTimeout(() => {
                        entry.target.style.width = progress + '%';
                    }, 500);
                }
                
                // Special animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateNumber(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-card, .timeline-content, .video-card, .article-card, .book-card, .stat-card, .quick-link-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
    
    // Observe skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
    
    // Observe stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate numbers
function animateNumber(element) {
    const target = parseInt(element.textContent);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Initialize skill bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s ease-in-out';
    });
}

// Initialize filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterableItems = document.querySelectorAll('[data-category]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            filterableItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
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
    // Smooth page transitions
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        // Skip external links and anchors
        const href = link.getAttribute('href');
        if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) {
            return;
        }
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add fade out effect
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Fade in on page load
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    });
}

// Initialize navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add scroll effects
function addScrollEffects() {
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-circle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
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
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    
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
    const cards = document.querySelectorAll('.skill-card, .video-card, .article-card, .book-card, .quick-link-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add tilt effect to cards on mouse move
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
    
    // Initialize load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Loading...</span>';
            
            // Simulate loading
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i> <span>Load More Articles</span>';
                // Here you would typically load more content
            }, 2000);
        });
    }
}

// Add CSS for ripple effect
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
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
        document.body.style.cursor = 'auto';
    } else if (!existingCursor) {
        // Re-initialize custom cursor on desktop
        initializeCustomCursor();
    }
});

// Add mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Apply parallax to floating elements
    const floatingElements = document.querySelectorAll('.floating-circle');
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        element.style.transform += ` translate(${x}px, ${y}px)`;
    });
    
    // Apply subtle parallax to hero elements
    const heroElements = document.querySelectorAll('.hero-image, .hero-text');
    heroElements.forEach((element, index) => {
        const speed = index === 0 ? 10 : -5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

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

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Update floating elements
    const floatingElements = document.querySelectorAll('.floating-circle');
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.3;
        element.style.transform = `translateY(${rate * speed}px)`;
    });
}, 16)); // ~60fps