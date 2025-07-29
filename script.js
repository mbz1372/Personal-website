// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const langToggle = document.querySelector('.lang-toggle');
const portfolioFilters = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const contactForm = document.querySelector('.contact-form');
const profileImg = document.getElementById('profile-img');

// Language state
let currentLang = 'fa';

// Navigation functionality
function initNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Language toggle functionality
function initLanguageToggle() {
    const translations = {
        fa: {
            'nav-home': 'خانه',
            'nav-about': 'درباره من',
            'nav-resume': 'رزومه',
            'nav-portfolio': 'نمونه کارها',
            'nav-contact': 'تماس',
            'hero-title': 'سلام، من محمدباقر هستم',
            'hero-subtitle': 'توسعه‌دهنده نرم‌افزار و متخصص فناوری',
            'hero-description': 'متخصص در توسعه نرم‌افزار و فناوری‌های نوین با تجربه در پروژه‌های مختلف',
            'btn-contact': 'تماس با من',
            'btn-portfolio': 'مشاهده نمونه کارها',
            'about-title': 'درباره من',
            'resume-title': 'رزومه',
            'portfolio-title': 'نمونه کارها',
            'contact-title': 'تماس با من',
            'download-cv': 'دانلود رزومه',
            'contact-email': 'ایمیل',
            'contact-phone': 'تلفن',
            'contact-address': 'آدرس',
            'form-name': 'نام و نام خانوادگی',
            'form-email': 'ایمیل',
            'form-subject': 'موضوع',
            'form-message': 'پیام شما',
            'btn-send': 'ارسال پیام',
            'footer-text': '© 2024 محمدباقر ذوالفقاری. تمامی حقوق محفوظ است.'
        },
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-resume': 'Resume',
            'nav-portfolio': 'Portfolio',
            'nav-contact': 'Contact',
            'hero-title': 'Hello, I\'m Mohammad Bagher',
            'hero-subtitle': 'Software Developer & Technology Specialist',
            'hero-description': 'Specialized in software development and modern technologies with experience in various projects',
            'btn-contact': 'Contact Me',
            'btn-portfolio': 'View Portfolio',
            'about-title': 'About Me',
            'resume-title': 'Resume',
            'portfolio-title': 'Portfolio',
            'contact-title': 'Contact Me',
            'download-cv': 'Download CV',
            'contact-email': 'Email',
            'contact-phone': 'Phone',
            'contact-address': 'Address',
            'form-name': 'Full Name',
            'form-email': 'Email',
            'form-subject': 'Subject',
            'form-message': 'Your Message',
            'btn-send': 'Send Message',
            'footer-text': '© 2024 Mohammad Bagher Zolfaghari. All rights reserved.'
        }
    };

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fa' ? 'en' : 'fa';
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
        
        // Update button text
        langToggle.textContent = currentLang === 'fa' ? 'EN' : 'فا';
        
        // Update all text content
        updateLanguage(translations[currentLang]);
    });
}

function updateLanguage(translations) {
    // Update navigation
    document.querySelector('a[href="#home"]').textContent = translations['nav-home'];
    document.querySelector('a[href="#about"]').textContent = translations['nav-about'];
    document.querySelector('a[href="#resume"]').textContent = translations['nav-resume'];
    document.querySelector('a[href="#portfolio"]').textContent = translations['nav-portfolio'];
    document.querySelector('a[href="#contact"]').textContent = translations['nav-contact'];
    
    // Update hero section
    document.querySelector('.hero-title').textContent = translations['hero-title'];
    document.querySelector('.hero-subtitle').textContent = translations['hero-subtitle'];
    document.querySelector('.hero-description').textContent = translations['hero-description'];
    
    // Update buttons
    document.querySelector('a[href="#contact"].btn-primary').textContent = translations['btn-contact'];
    document.querySelector('a[href="#portfolio"].btn-secondary').textContent = translations['btn-portfolio'];
    
    // Update section titles
    document.querySelector('#about .section-title').textContent = translations['about-title'];
    document.querySelector('#resume .section-title').textContent = translations['resume-title'];
    document.querySelector('#portfolio .section-title').textContent = translations['portfolio-title'];
    document.querySelector('#contact .section-title').textContent = translations['contact-title'];
    
    // Update contact form placeholders
    document.querySelector('input[name="name"]').placeholder = translations['form-name'];
    document.querySelector('input[name="email"]').placeholder = translations['form-email'];
    document.querySelector('input[name="subject"]').placeholder = translations['form-subject'];
    document.querySelector('textarea[name="message"]').placeholder = translations['form-message'];
    
    // Update footer
    document.querySelector('.footer p').textContent = translations['footer-text'];
}

// Portfolio filtering
function initPortfolioFilter() {
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            portfolioFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            filter.classList.add('active');
            
            const filterValue = filter.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
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

// Contact form handling
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading"></span> در حال ارسال...';
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                showNotification('پیام شما با موفقیت ارسال شد!', 'success');
                contactForm.reset();
                
            } catch (error) {
                // Show error message
                showNotification('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.', 'error');
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .skill-item, .timeline-item, .portfolio-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Profile image error handling
function initProfileImage() {
    if (profileImg) {
        profileImg.addEventListener('error', () => {
            // Create a default avatar with initials
            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext('2d');
            
            // Draw background
            const gradient = ctx.createLinearGradient(0, 0, 300, 300);
            gradient.addColorStop(0, '#2563eb');
            gradient.addColorStop(1, '#3b82f6');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 300, 300);
            
            // Draw initials
            ctx.fillStyle = 'white';
            ctx.font = 'bold 80px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('مب', 150, 150);
            
            // Replace image with canvas
            profileImg.src = canvas.toDataURL();
        });
        
        // Set a placeholder image initially
        profileImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjgwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPm2YqNio2KjYsNmJPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzAwIiB5Mj0iMzAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyNTYzRUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0I4MkY2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K';
    }
}

// Typing animation for hero title
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation after page load
    setTimeout(typeWriter, 1000);
}

// Skills progress animation
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }, index * 200);
            }
        });
    });
    
    skillItems.forEach(item => {
        item.style.transform = 'translateY(50px)';
        item.style.opacity = '0';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// Initialize all functionality
function init() {
    initNavigation();
    initLanguageToggle();
    initPortfolioFilter();
    initContactForm();
    initScrollAnimations();
    initProfileImage();
    initTypingAnimation();
    initSkillsAnimation();
    
    // Add loading class removal
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
    
    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Start when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Additional utility functions
const utils = {
    // Debounce function for performance optimization
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for scroll events
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export utils for external use
window.portfolioUtils = utils;