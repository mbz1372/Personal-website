// Articles Page JavaScript

// Global variables
let currentFilter = 'all';
let currentSort = 'newest';
let articlesData = [];
let filteredArticles = [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeArticlesPage();
    setupEventListeners();
    setupModalEvents();
    loadSampleData();
});

// Initialize articles page
function initializeArticlesPage() {
    // Initialize search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Initialize filter tabs
    setupFilterTabs();
    
    // Initialize sort functionality
    setupSortFunctionality();
    
    // Initialize articles grid
    initializeArticlesGrid();
}

// Setup event listeners
function setupEventListeners() {
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreArticles);
    }
    
    // Upload form submission
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleFormSubmission);
    }
    
    // File upload handlers
    setupFileUploadHandlers();
}

// Setup modal events
function setupModalEvents() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeUploadModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeUploadModal();
            }
        });
    }
}

// Open upload modal
function openUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        const firstInput = modal.querySelector('input, select, textarea');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
        
        showNotification(
            getCurrentLanguage() === 'en' 
                ? 'Upload new content to share your knowledge!' 
                : 'محتوای جدید آپلود کنید تا دانش خود را به اشتراک بگذارید!'
        );
    }
}

// Close upload modal
function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        
        // Reset form
        const form = document.getElementById('uploadForm');
        if (form) {
            form.reset();
            clearFileUploadLabels();
        }
    }
}

// Setup filter tabs
function setupFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            
            // Apply filter
            applyFilters();
            
            // Add ripple effect
            addRippleEffect(this);
        });
    });
}

// Setup sort functionality
function setupSortFunctionality() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            applyFilters();
        });
    }
}

// Handle search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    applyFilters(searchTerm);
}

// Apply filters and sorting
function applyFilters(searchTerm = '') {
    // Get search term if not provided
    if (!searchTerm) {
        const searchInput = document.getElementById('searchInput');
        searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    }
    
    // Filter articles
    filteredArticles = articlesData.filter(article => {
        // Category filter
        const categoryMatch = currentFilter === 'all' || article.category === currentFilter;
        
        // Search filter
        const searchMatch = !searchTerm || 
            article.title.toLowerCase().includes(searchTerm) ||
            article.description.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return categoryMatch && searchMatch;
    });
    
    // Sort articles
    sortArticles();
    
    // Render filtered articles
    renderArticles();
    
    // Update UI
    updateFilterUI();
}

// Sort articles based on current sort option
function sortArticles() {
    switch (currentSort) {
        case 'newest':
            filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'title':
            filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'popular':
            filteredArticles.sort((a, b) => b.views - a.views);
            break;
    }
}

// Render articles in grid
function renderArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    if (filteredArticles.length === 0) {
        showEmptyState();
        return;
    }
    
    articlesGrid.innerHTML = '';
    
    filteredArticles.forEach((article, index) => {
        const articleElement = createArticleElement(article, index);
        articlesGrid.appendChild(articleElement);
    });
    
    // Animate articles appearance
    animateArticlesAppearance();
}

// Create article element
function createArticleElement(article, index) {
    const articleDiv = document.createElement('article');
    articleDiv.className = 'article-card';
    articleDiv.setAttribute('data-category', article.category);
    articleDiv.setAttribute('data-date', article.date);
    articleDiv.style.animationDelay = `${index * 0.1}s`;
    
    const categoryClass = article.category === 'books' ? 'book' : 
                         article.category === 'research' ? 'research' : 
                         article.category === 'tutorials' ? 'tutorial' : '';
    
    articleDiv.innerHTML = `
        <div class="article-image">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="article-category ${categoryClass}">
                <span data-en="${getCategoryName(article.category, 'en')}" data-fa="${getCategoryName(article.category, 'fa')}">${getCategoryName(article.category, getCurrentLanguage())}</span>
            </div>
        </div>
        <div class="article-content">
            <h3 data-en="${article.title}" data-fa="${article.titleFa || article.title}">${getCurrentLanguage() === 'fa' ? (article.titleFa || article.title) : article.title}</h3>
            <p data-en="${article.description}" data-fa="${article.descriptionFa || article.description}">${getCurrentLanguage() === 'fa' ? (article.descriptionFa || article.description) : article.description}</p>
            <div class="article-meta">
                <span class="date"><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                <span class="read-time"><i class="fas fa-clock"></i> ${article.readTime}</span>
                <span class="views"><i class="fas fa-eye"></i> ${formatNumber(article.views)}</span>
            </div>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="article-actions">
                <a href="${article.link || '#'}" class="btn btn-outline btn-sm" ${article.link ? 'target="_blank"' : ''}>
                    <i class="fas ${getActionIcon(article.category)}"></i>
                    <span data-en="${getActionText(article.category, 'en')}" data-fa="${getActionText(article.category, 'fa')}">${getActionText(article.category, getCurrentLanguage())}</span>
                </a>
                <button class="btn-icon" onclick="shareArticle(this)" title="Share">
                    <i class="fas fa-share"></i>
                </button>
                <button class="btn-icon" onclick="bookmarkArticle(this)" title="Bookmark">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>
        </div>
    `;
    
    return articleDiv;
}

// Show empty state
function showEmptyState() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    const currentLang = getCurrentLanguage();
    const emptyStateHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3 data-en="No articles found" data-fa="مقاله‌ای یافت نشد">${currentLang === 'fa' ? 'مقاله‌ای یافت نشد' : 'No articles found'}</h3>
            <p data-en="Try adjusting your search or filter criteria" data-fa="جستجو یا فیلتر خود را تغییر دهید">${currentLang === 'fa' ? 'جستجو یا فیلتر خود را تغییر دهید' : 'Try adjusting your search or filter criteria'}</p>
            <button class="btn btn-primary" onclick="clearFilters()">
                <i class="fas fa-refresh"></i>
                <span data-en="Clear Filters" data-fa="پاک کردن فیلترها">${currentLang === 'fa' ? 'پاک کردن فیلترها' : 'Clear Filters'}</span>
            </button>
        </div>
    `;
    
    articlesGrid.innerHTML = emptyStateHTML;
}

// Clear all filters
function clearFilters() {
    // Reset filter
    currentFilter = 'all';
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-filter') === 'all') {
            tab.classList.add('active');
        }
    });
    
    // Reset search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset sort
    currentSort = 'newest';
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'newest';
    }
    
    // Apply filters
    applyFilters();
    
    showNotification(
        getCurrentLanguage() === 'en' 
            ? 'Filters cleared successfully!' 
            : 'فیلترها با موفقیت پاک شدند!'
    );
}

// Animate articles appearance
function animateArticlesAppearance() {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newArticle = {
        id: Date.now(),
        category: formData.get('contentType') || document.getElementById('contentType').value,
        title: formData.get('contentTitle') || document.getElementById('contentTitle').value,
        description: formData.get('contentDescription') || document.getElementById('contentDescription').value,
        tags: (formData.get('contentTags') || document.getElementById('contentTags').value).split(',').map(tag => tag.trim()).filter(tag => tag),
        date: new Date().toISOString().split('T')[0],
        views: Math.floor(Math.random() * 1000),
        readTime: Math.floor(Math.random() * 20) + 5 + ' min read',
        image: 'https://via.placeholder.com/400x250/0066cc/ffffff?text=New+Article',
        link: formData.get('contentLink') || document.getElementById('contentLink').value || '#'
    };
    
    // Add to articles data
    articlesData.unshift(newArticle);
    
    // Refresh display
    applyFilters();
    
    // Close modal
    closeUploadModal();
    
    // Show success message
    showNotification(
        getCurrentLanguage() === 'en' 
            ? 'Article uploaded successfully!' 
            : 'مقاله با موفقیت آپلود شد!'
    );
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Setup file upload handlers
function setupFileUploadHandlers() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const label = this.nextElementSibling;
            const file = this.files[0];
            
            if (file) {
                const fileName = file.name;
                const fileSize = (file.size / 1024 / 1024).toFixed(2);
                label.innerHTML = `
                    <i class="fas fa-check"></i>
                    <span>${fileName} (${fileSize} MB)</span>
                `;
                label.style.borderColor = 'var(--accent-color)';
                label.style.background = 'rgba(16, 185, 129, 0.05)';
                label.style.color = 'var(--accent-color)';
            }
        });
    });
}

// Clear file upload labels
function clearFileUploadLabels() {
    const labels = document.querySelectorAll('.file-upload-label');
    labels.forEach(label => {
        const isImage = label.getAttribute('for') === 'coverImage';
        label.innerHTML = isImage 
            ? '<i class="fas fa-cloud-upload-alt"></i><span data-en="Choose Image" data-fa="انتخاب تصویر">Choose Image</span>'
            : '<i class="fas fa-file-upload"></i><span data-en="Choose File" data-fa="انتخاب فایل">Choose File</span>';
        label.style.borderColor = '';
        label.style.background = '';
        label.style.color = '';
    });
}

// Share article
function shareArticle(button) {
    const article = button.closest('.article-card');
    const title = article.querySelector('h3').textContent;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            showNotification(
                getCurrentLanguage() === 'en' 
                    ? 'Article shared successfully!' 
                    : 'مقاله با موفقیت به اشتراک گذاشته شد!'
            );
        }).catch(console.error);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
            showNotification(
                getCurrentLanguage() === 'en' 
                    ? 'Link copied to clipboard!' 
                    : 'لینک در کلیپ‌بورد کپی شد!'
            );
        }).catch(console.error);
    }
    
    addRippleEffect(button);
}

// Bookmark article
function bookmarkArticle(button) {
    button.classList.toggle('bookmarked');
    const isBookmarked = button.classList.contains('bookmarked');
    
    showNotification(
        getCurrentLanguage() === 'en' 
            ? (isBookmarked ? 'Article bookmarked!' : 'Bookmark removed!')
            : (isBookmarked ? 'مقاله نشانه‌گذاری شد!' : 'نشانه‌گذاری حذف شد!')
    );
    
    addRippleEffect(button);
}

// Load more articles
function loadMoreArticles() {
    // Simulate loading more articles
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showNotification(
            getCurrentLanguage() === 'en' 
                ? 'No more articles to load' 
                : 'مقاله‌ای برای بارگیری وجود ندارد'
        );
    }, 1000);
}

// Show loading state
function showLoading() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = `
            <div class="loading-spinner"></div>
            <span data-en="Loading..." data-fa="در حال بارگیری...">Loading...</span>
        `;
        loadMoreBtn.disabled = true;
    }
}

// Hide loading state
function hideLoading() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = `
            <i class="fas fa-plus"></i>
            <span data-en="Load More Articles" data-fa="بارگیری مقالات بیشتر">Load More Articles</span>
        `;
        loadMoreBtn.disabled = false;
    }
}

// Load sample data
function loadSampleData() {
    articlesData = [
        {
            id: 1,
            category: 'articles',
            title: 'Complete Guide to Product Strategy in 2024',
            titleFa: 'راهنمای کامل استراتژی محصول در ۲۰۲۴',
            description: 'A comprehensive guide covering modern product strategy frameworks, methodologies, and best practices for product managers.',
            descriptionFa: 'راهنمای جامعی که چارچوب‌ها، روش‌شناسی‌ها و بهترین شیوه‌های استراتژی محصول مدرن را پوشش می‌دهد.',
            date: '2024-01-15',
            readTime: '12 min read',
            views: 1200,
            tags: ['Product Strategy', 'Framework', 'Best Practices'],
            image: 'https://via.placeholder.com/400x250/0066cc/ffffff?text=Product+Strategy',
            link: '#'
        },
        {
            id: 2,
            category: 'books',
            title: 'Product Management Excellence: From Vision to Execution',
            titleFa: 'تعالی مدیریت محصول: از ویژن تا اجرا',
            description: 'My comprehensive book covering the entire product management lifecycle, from initial ideation to successful product launch and scaling.',
            descriptionFa: 'کتاب جامع من که کل چرخه حیات مدیریت محصول را از ایده‌پردازی اولیه تا راه‌اندازی موفق محصول پوشش می‌دهد.',
            date: '2023-12-01',
            readTime: '280 pages',
            views: 3500,
            tags: ['Product Management', 'Leadership', 'Strategy'],
            image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Product+Management+Book',
            link: '#'
        },
        // Add more sample data...
    ];
    
    // Initialize display
    applyFilters();
}

// Utility functions
function getCurrentLanguage() {
    return document.documentElement.getAttribute('lang') || 'en';
}

function getCategoryName(category, lang) {
    const categories = {
        articles: { en: 'Article', fa: 'مقاله' },
        books: { en: 'Book', fa: 'کتاب' },
        research: { en: 'Research', fa: 'تحقیق' },
        tutorials: { en: 'Tutorial', fa: 'آموزش' }
    };
    return categories[category]?.[lang] || category;
}

function getActionIcon(category) {
    const icons = {
        articles: 'fa-book-open',
        books: 'fa-download',
        research: 'fa-microscope',
        tutorials: 'fa-play'
    };
    return icons[category] || 'fa-book-open';
}

function getActionText(category, lang) {
    const texts = {
        articles: { en: 'Read Article', fa: 'مطالعه مقاله' },
        books: { en: 'Download Book', fa: 'دانلود کتاب' },
        research: { en: 'View Research', fa: 'مشاهده تحقیق' },
        tutorials: { en: 'Start Tutorial', fa: 'شروع آموزش' }
    };
    return texts[category]?.[lang] || texts.articles[lang];
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const currentLang = getCurrentLanguage();
    
    if (currentLang === 'fa') {
        return date.toLocaleDateString('fa-IR');
    } else {
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function addRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function updateFilterUI() {
    const resultCount = filteredArticles.length;
    const totalCount = articlesData.length;
    
    // You can add result count display here if needed
    console.log(`Showing ${resultCount} of ${totalCount} articles`);
}

function initializeArticlesGrid() {
    // Set up intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe articles as they're added
    const articlesGrid = document.getElementById('articlesGrid');
    if (articlesGrid) {
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('article-card')) {
                        observer.observe(node);
                    }
                });
            });
        });
        
        mutationObserver.observe(articlesGrid, { childList: true });
    }
}