# وبسایت شخصی محمدباقر ذوالفقاری
# Mohammad Bagher Zolfaghari - Personal Portfolio Website

یک وبسایت شخصی مدرن و ریسپانسیو با پشتیبانی دوزبانه (فارسی/انگلیسی) برای نمایش نمونه کارها، رزومه و اطلاعات تماس.

A modern, responsive personal portfolio website with bilingual support (Persian/English) to showcase portfolio, resume, and contact information.

## ✨ ویژگی‌ها / Features

### 🌟 اصلی / Main Features
- **ریسپانسیو** / Fully Responsive Design
- **دوزبانه** / Bilingual Support (Persian/English)
- **مدرن** / Modern UI/UX Design
- **انیمیشن‌ها** / Smooth Animations
- **SEO بهینه** / SEO Optimized

### 📋 بخش‌ها / Sections
- **صفحه اصلی** / Hero Section with introduction
- **درباره من** / About section with skills showcase
- **رزومه** / Resume with timeline layout
- **نمونه کارها** / Portfolio with filtering capabilities
- **تماس** / Contact form and information

### 🛠 فناوری‌ها / Technologies
- **HTML5** - ساختار معنایی / Semantic structure
- **CSS3** - استایل‌دهی مدرن / Modern styling with CSS Grid & Flexbox
- **JavaScript** - عملکردهای تعاملی / Interactive functionality
- **Font Awesome** - آیکون‌ها / Icons
- **Google Fonts** - فونت‌های فارسی و انگلیسی / Persian & English fonts

## 🚀 شروع سریع / Quick Start

### 1. دانلود فایل‌ها / Download Files
```bash
# Clone or download the project files
# فایل‌های پروژه را دانلود کنید
```

### 2. شخصی‌سازی / Customization
اطلاعات شخصی خود را در فایل‌های زیر به‌روزرسانی کنید:

Update your personal information in the following files:

#### `index.html`
```html
<!-- اطلاعات شخصی / Personal Information -->
<h1 class="hero-title">سلام، من [نام شما] هستم</h1>
<h2 class="hero-subtitle">[عنوان شغلی شما]</h2>

<!-- اطلاعات تماس / Contact Information -->
<p>your.email@example.com</p>
<p>+98 912 345 6789</p>
<p>تهران، ایران</p>
```

#### `styles.css`
```css
/* تغییر رنگ‌های اصلی / Change primary colors */
:root {
    --primary-color: #2563eb;  /* رنگ اصلی */
    --secondary-color: #1e40af; /* رنگ ثانویه */
    --accent-color: #3b82f6;    /* رنگ تاکیدی */
}
```

### 3. اضافه کردن تصاویر / Adding Images
تصاویر زیر را اضافه کنید:

Add the following images:

- `profile-placeholder.jpg` - عکس پروفایل / Profile picture (300x300px)
- `project1-placeholder.jpg` - پروژه اول / First project (400x250px)
- `project2-placeholder.jpg` - پروژه دوم / Second project (400x250px)
- `project3-placeholder.jpg` - پروژه سوم / Third project (400x250px)

### 4. اضافه کردن رزومه / Adding Resume
فایل PDF رزومه خود را با نام `cv.pdf` در پوشه اصلی قرار دهید.

Place your resume PDF file named `cv.pdf` in the root directory.

## 📱 نحوه استفاده / How to Use

### ناوبری / Navigation
- **منوی موبایل** / Mobile menu with hamburger button
- **اسکرول نرم** / Smooth scrolling between sections
- **تغییر زبان** / Language toggle button

### فیلتر نمونه کارها / Portfolio Filtering
```javascript
// اضافه کردن پروژه جدید / Adding new project
<div class="portfolio-item" data-category="web">
    <!-- محتوای پروژه / Project content -->
</div>
```

### فرم تماس / Contact Form
فرم تماس شامل اعتبارسنجی و نمایش پیام‌های موفقیت/خطا است.

The contact form includes validation and success/error message display.

## 🎨 شخصی‌سازی پیشرفته / Advanced Customization

### تغییر فونت‌ها / Changing Fonts
```css
/* فونت فارسی / Persian font */
body[lang="fa"] {
    font-family: 'Vazirmatn', sans-serif;
}

/* فونت انگلیسی / English font */
body[lang="en"] {
    font-family: 'Inter', sans-serif;
}
```

### اضافه کردن انیمیشن‌های جدید / Adding New Animations
```css
/* انیمیشن سفارشی / Custom animation */
@keyframes customAnimation {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.custom-element {
    animation: customAnimation 0.6s ease;
}
```

### تغییر رنگ‌بندی / Color Scheme Modification
```css
:root {
    /* رنگ‌های اصلی / Primary colors */
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    
    /* رنگ‌های متن / Text colors */
    --text-dark: #your-color;
    --text-light: #your-color;
    
    /* رنگ‌های پس‌زمینه / Background colors */
    --bg-light: #your-color;
    --bg-white: #your-color;
}
```

## 📄 ساختار فایل‌ها / File Structure

```
portfolio-website/
├── index.html          # صفحه اصلی / Main HTML file
├── styles.css          # استایل‌ها / Styles
├── script.js           # جاوااسکریپت / JavaScript functionality
├── cv.pdf             # فایل رزومه / Resume PDF
├── README.md          # راهنما / Documentation
└── images/            # پوشه تصاویر / Images folder
    ├── profile-placeholder.jpg
    ├── project1-placeholder.jpg
    ├── project2-placeholder.jpg
    └── project3-placeholder.jpg
```

## 🌐 راه‌اندازی آنلاین / Online Deployment

### GitHub Pages
1. فایل‌ها را در مخزن GitHub آپلود کنید
2. در تنظیمات مخزن، GitHub Pages را فعال کنید
3. شاخه `main` را انتخاب کنید

### Netlify
1. فایل‌ها را در یک فولدر zip کنید
2. به Netlify بروید و فولدر را drag & drop کنید
3. لینک سایت آماده است

### Vercel
1. مخزن GitHub را به Vercel متصل کنید
2. دپلوی خودکار انجام می‌شود

## 🛠 عیب‌یابی / Troubleshooting

### مشکلات رایج / Common Issues

#### تصاویر نمایش داده نمی‌شوند
- مسیر فایل‌های تصویر را بررسی کنید
- نام فایل‌ها را با نام‌های مشخص شده تطبیق دهید

#### فونت‌های فارسی نمایش داده نمی‌شوند
- اتصال اینترنت برای بارگیری فونت‌ها را بررسی کنید
- فایل CSS را بررسی کنید

#### رنگ‌ها درست نمایش داده نمی‌شوند
- متغیرهای CSS در بخش `:root` را بررسی کنید

## 📞 پشتیبانی / Support

برای سوالات و پشتیبانی:
For questions and support:

- **ایمیل / Email**: your.email@example.com
- **لینکدین / LinkedIn**: [linkedin.com/in/mbzolfaghari](https://linkedin.com/in/mbzolfaghari)

## 📄 مجوز / License

این پروژه تحت مجوز MIT منتشر شده است.
This project is released under the MIT License.

## 🙏 تشکر / Acknowledgments

- **Font Awesome** برای آیکون‌ها / for icons
- **Google Fonts** برای فونت‌ها / for fonts
- **Vazirmatn** برای فونت فارسی / for Persian font

---

**نکته مهم**: این وبسایت یک قالب آماده است. تمام اطلاعات شخصی، تصاویر و محتوا باید با اطلاعات واقعی شما جایگزین شود.

**Important Note**: This website is a ready-to-use template. All personal information, images, and content should be replaced with your actual information.