# وب‌سایت شخصی محمد بهنام ذوالفقاری | Personal Resume Website

یک وب‌سایت شخصی مدرن و ریسپانسیو برای نمایش رزومه، مقالات، کتاب‌ها و ویدیوها با پشتیبانی کامل از زبان فارسی و قابلیت تغییر تم روشن/تاریک.

A modern, fully responsive personal resume website built with Next.js, TypeScript, and Tailwind CSS, featuring full RTL support for Persian language and dark/light mode switching.

## ✨ ویژگی‌ها | Features

- 🎨 **طراحی مدرن و زیبا** - Modern and elegant design
- 📱 **کاملاً ریسپانسیو** - Fully responsive for all devices
- 🌐 **پشتیبانی RTL** - Complete RTL support for Persian
- 🌙 **تم روشن/تاریک** - Dark/Light mode toggle
- ⚡ **عملکرد بالا** - Fast loading and optimized performance
- 🔍 **بهینه‌سازی SEO** - SEO optimized with meta tags
- 📝 **پشتیبانی Markdown** - Markdown support for articles
- 🎯 **انیمیشن‌های روان** - Smooth animations and transitions
- 📂 **مدیریت محتوا** - Easy content management with local files

## 🚀 صفحات | Pages

### 🏠 صفحه اصلی | Homepage
- نمایش اطلاعات شخصی و تصویر پروفایل
- تایم‌لاین تجربیات کاری
- اطلاعات تماس و لینک‌های اجتماعی
- گواهینامه‌ها و مدارک
- دکمه دانلود رزومه

### 👤 درباره من | About
- بیوگرافی کامل
- مهارت‌های تخصصی و نرم
- ویژگی‌های شخصیتی
- نکات جالب شخصی

### 📝 مقالات | Articles
- نمایش مقالات در قالب blog
- فیلتر بر اساس تگ‌ها
- پشتیبانی کامل از Markdown
- محاسبه زمان مطالعه

### 📚 کتاب‌ها | Books
- نمایش کتاب‌ها در قالب گالری
- امکان دانلود و پیش‌نمایش
- دسته‌بندی کتاب‌ها
- آمار و اطلاعات

### 🎥 ویدیوها | Videos
- نمایش ویدیوها با thumbnail
- پشتیبانی از YouTube
- فیلتر بر اساس دسته‌بندی
- ویدیو ویژه

## 🛠️ تکنولوژی‌ها | Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Dark/Light mode switching
- **Lucide React** - Beautiful icons
- **Vazirmatn Font** - Persian font support
- **Gray Matter** - Markdown frontmatter parsing
- **Remark** - Markdown processing

## 🏃‍♂️ نصب و راه‌اندازی | Installation & Setup

### پیش‌نیازها | Prerequisites
- Node.js 18+ 
- npm or yarn

### نصب | Installation

```bash
# کلون کردن پروژه
git clone https://github.com/your-username/resume-website.git
cd resume-website

# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev
```

سایت روی آدرس `http://localhost:3000` در دسترس خواهد بود.

### ساخت برای production | Production Build

```bash
# ساخت پروژه
npm run build

# اجرای سرور production
npm start
```

## 📁 ساختار پروژه | Project Structure

```
resume-website/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/
│   │   ├── articles/
│   │   ├── books/
│   │   ├── videos/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # React components
│   │   ├── layout/            # Layout components
│   │   ├── providers/         # Context providers
│   │   ├── sections/          # Page sections
│   │   └── ui/               # UI components
│   ├── lib/                   # Utilities and data
│   └── types/                 # TypeScript types
├── content/                   # Content files
│   ├── articles/             # Markdown articles
│   ├── books/                # Book information
│   └── videos/               # Video information
├── public/                   # Static assets
│   ├── images/
│   └── downloads/
└── package.json
```

## ⚙️ پیکربندی | Configuration

### تغییر اطلاعات شخصی | Updating Personal Information

اطلاعات شخصی در فایل `src/lib/data.ts` قرار دارند:

```typescript
export const profileData: ProfileData = {
  name: 'نام شما',
  title: 'عنوان شغلی',
  bio: 'توضیحات کوتاه',
  // ...
}
```

### افزودن مقالات | Adding Articles

مقالات جدید را در پوشه `content/articles/` با فرمت Markdown اضافه کنید:

```markdown
---
title: "عنوان مقاله"
slug: "article-slug"
date: "2024-01-01"
tags: ["tag1", "tag2"]
description: "توضیحات مقاله"
---

محتوای مقاله...
```

### تنظیم تم‌ها | Theme Customization

رنگ‌ها و تم‌ها در فایل `tailwind.config.ts` قابل تغییر هستند.

## 🚀 استقرار | Deployment

### Vercel (پیشنهادی | Recommended)

```bash
# نصب Vercel CLI
npm i -g vercel

# استقرار
vercel
```

### سایر پلتفرم‌ها | Other Platforms

پروژه با تمام پلتفرم‌های پشتیبان Next.js سازگار است:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 سفارشی‌سازی | Customization

### تغییر فونت‌ها | Changing Fonts

فونت‌ها در فایل `src/app/layout.tsx` تعریف شده‌اند. برای تغییر فونت فارسی، لینک CDN در layout را تغییر دهید.

### افزودن صفحات جدید | Adding New Pages

1. پوشه جدیدی در `src/app/` ایجاد کنید
2. فایل `page.tsx` را اضافه کنید
3. مسیر جدید را به navigation در `src/components/layout/navbar.tsx` اضافه کنید

### تغییر انیمیشن‌ها | Customizing Animations

انیمیشن‌ها در فایل `src/app/globals.css` تعریف شده‌اند و قابل تغییر هستند.

## 📝 مجوز | License

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر فایل LICENSE را مطالعه کنید.

## 🤝 مشارکت | Contributing

برای مشارکت در این پروژه:

1. پروژه را Fork کنید
2. branch جدیدی ایجاد کنید
3. تغییرات خود را commit کنید
4. Pull Request ارسال کنید

## 📧 تماس | Contact

برای سوالات و پیشنهادات:
- Email: mbzolfaghari@example.com
- LinkedIn: [linkedin.com/in/mbzolfaghari](https://linkedin.com/in/mbzolfaghari)

---

ساخته شده با ❤️ توسط محمد بهنام ذوالفقاری | Made with ❤️ by Mohammad Behnam Zolfaghari
