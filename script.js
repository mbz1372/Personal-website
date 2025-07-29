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
}

// Update language button
function updateLanguageButton(language) {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = language === 'en' ? 'فارسی' : 'English';
    }
}

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
            // If profile.jpg doesn't exist, use a placeholder
            profileImg.src = createProfilePlaceholder();
            profileImg.classList.add('loaded');
        };
        
        tempImg.src = 'profile.jpg';
    }
}

// Create a profile placeholder if image doesn't exist
function createProfilePlaceholder() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0, '#2563eb');
    gradient.addColorStop(1, '#f59e0b');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);
    
    // Add initials
    ctx.fillStyle = 'white';
    ctx.font = 'bold 120px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MZ', 200, 200);
    
    return canvas.toDataURL();
}

// Add smooth page transitions
function addPageTransitions() {
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section, .header');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Smooth scrolling for any future navigation links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Copy to clipboard functionality (for contact info)
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        const originalText = element.textContent;
        element.textContent = currentLanguage === 'en' ? 'Copied!' : 'کپی شد!';
        element.style.color = '#10b981';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show success feedback
        const originalText = element.textContent;
        element.textContent = currentLanguage === 'en' ? 'Copied!' : 'کپی شد!';
        element.style.color = '#10b981';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    });
}

// Add click event listeners for contact items
document.addEventListener('DOMContentLoaded', function() {
    const contactValues = document.querySelectorAll('.contact-value');
    contactValues.forEach(contact => {
        contact.addEventListener('click', function(e) {
            if (contact.textContent.includes('@') || contact.textContent.includes('۰۹')) {
                e.preventDefault();
                copyToClipboard(contact.textContent, contact);
            }
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Toggle language with Ctrl/Cmd + L
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        toggleLanguage();
    }
});

// Add touch-friendly interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Performance optimization: Lazy load profile image
function lazyLoadImage(img) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy');
                imageObserver.unobserve(lazyImage);
            }
        });
    });
    
    imageObserver.observe(img);
}

// Add error handling for missing resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
        // Could implement fallback image logic here
    }
});

// Preload critical resources
function preloadCriticalResources() {
    // Preload fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
}

// Initialize preloading
preloadCriticalResources();