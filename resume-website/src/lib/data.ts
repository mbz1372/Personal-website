import { ProfileData, AboutData, Article, Book, Video } from '@/types'

export const profileData: ProfileData = {
  name: 'محمد بهنام ذوالفقاری',
  title: 'Product Manager',
  bio: 'مدیر محصول با تجربه در توسعه محصولات دیجیتال و مدیریت تیم‌های متنوع. متخصص در تحلیل بازار، طراحی تجربه کاربری، و استراتژی محصول.',
  profileImage: '/images/profile.jpg',
  resumeUrl: '/downloads/resume.pdf',
  contact: {
    email: 'mbzolfaghari@example.com',
    linkedin: 'https://linkedin.com/in/mbzolfaghari',
    telegram: '@mbzolfaghari',
    phone: '+98 912 345 6789',
    location: 'تهران، ایران'
  },
  experiences: [
    {
      id: '1',
      company: 'Tech Solutions Co.',
      position: 'Senior Product Manager',
      duration: '2 سال',
      startDate: '2022-01-01',
      description: 'مدیریت محصولات دیجیتال و هدایت تیم‌های توسعه برای ایجاد راه‌حل‌های نوآورانه',
      technologies: ['Product Strategy', 'User Research', 'Agile', 'Scrum'],
      location: 'تهران'
    },
    {
      id: '2',
      company: 'Digital Innovation Ltd.',
      position: 'Product Manager',
      duration: '3 سال',
      startDate: '2019-01-01',
      endDate: '2021-12-31',
      description: 'توسعه و بهبود محصولات موبایل با تمرکز بر تجربه کاربری',
      technologies: ['Mobile Products', 'UX/UI Design', 'Analytics', 'A/B Testing'],
      location: 'تهران'
    },
    {
      id: '3',
      company: 'StartupHub',
      position: 'Junior Product Manager',
      duration: '2 سال',
      startDate: '2017-01-01',
      endDate: '2018-12-31',
      description: 'مدیریت محصول در محیط استارتاپ و یادگیری اصول مدیریت محصول',
      technologies: ['MVP Development', 'Market Research', 'Customer Development'],
      location: 'تهران'
    }
  ],
  certificates: [
    {
      id: '1',
      title: 'Certified Product Manager',
      issuer: 'Product Management Institute',
      date: '2023-06-15',
      credentialId: 'PM-2023-001',
      credentialUrl: 'https://pmi.org/verify/PM-2023-001'
    },
    {
      id: '2',
      title: 'Agile Product Management',
      issuer: 'Scrum Alliance',
      date: '2022-03-20',
      credentialId: 'SA-APM-2022',
      credentialUrl: 'https://scrumalliance.org/verify'
    },
    {
      id: '3',
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2021-11-10',
      credentialId: 'GA-2021-BZ',
      credentialUrl: 'https://analytics.google.com/verify'
    }
  ]
}

export const aboutData: AboutData = {
  biography: `
    من محمد بهنام ذوالفقاری هستم، یک مدیر محصول با بیش از ۶ سال تجربه در صنعت تکنولوژی. 
    تخصص من در زمینه توسعه محصولات دیجیتال، تحلیل بازار، و مدیریت تیم‌های متنوع است.
    
    در طول مسیر حرفه‌ای خود، موفق به راه‌اندازی و بهبود محصولات مختلفی شده‌ام که میلیون‌ها کاربر از آن‌ها استفاده می‌کنند.
    
    علاقه‌مند به نوآوری، یادگیری مداوم، و ایجاد محصولاتی هستم که زندگی مردم را بهتر کنند.
  `,
  skills: {
    hard: [
      'Product Strategy',
      'Market Research',
      'User Experience Design',
      'Data Analysis',
      'Agile & Scrum',
      'A/B Testing',
      'Product Roadmapping',
      'Stakeholder Management',
      'SQL',
      'Google Analytics',
      'Figma',
      'Jira'
    ],
    soft: [
      'Leadership',
      'Communication',
      'Problem Solving',
      'Critical Thinking',
      'Team Management',
      'Negotiation',
      'Presentation',
      'Time Management'
    ],
    languages: [
      { name: 'فارسی', level: 'Native' },
      { name: 'English', level: 'Advanced' },
      { name: 'عربی', level: 'Intermediate' }
    ]
  },
  personalityTraits: [
    'خلاق و نوآور',
    'تحلیلگر قوی',
    'رهبر الهام‌بخش',
    'متعهد به کیفیت',
    'یادگیرنده مادام‌العمر',
    'تیم‌پلیر'
  ],
  funFacts: [
    'عاشق قهوه و کتاب‌خوانی هستم',
    'در اوقات فراغت عکاسی می‌کنم',
    'به مدیتیشن و یوگا علاقه دارم',
    'بیش از ۱۰۰ کتاب در سال می‌خوانم',
    'عاشق سفر و کشف فرهنگ‌های جدید هستم'
  ]
}

export const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'آینده مدیریت محصول در عصر هوش مصنوعی',
    slug: 'future-of-product-management-ai',
    date: '2024-01-15',
    tags: ['Product Management', 'AI', 'Future'],
    previewImage: '/images/articles/ai-product-management.jpg',
    description: 'بررسی تأثیر هوش مصنوعی بر نقش مدیر محصول و مهارت‌های موردنیاز آینده',
    content: `# آینده مدیریت محصول در عصر هوش مصنوعی

هوش مصنوعی به سرعت در حال تغییر شیوه کار ما در حوزه مدیریت محصول است...`,
    readTime: 5
  },
  {
    id: '2',
    title: 'چگونه تحقیقات کاربر را موثر انجام دهیم؟',
    slug: 'effective-user-research',
    date: '2023-12-20',
    tags: ['User Research', 'UX', 'Product'],
    previewImage: '/images/articles/user-research.jpg',
    description: 'راهنمای جامع برای انجام تحقیقات کاربر که منجر به بهبود محصول می‌شود',
    content: `# چگونه تحقیقات کاربر را موثر انجام دهیم؟

تحقیقات کاربر یکی از ارکان اصلی توسعه محصولات موفق است...`,
    readTime: 8
  }
]

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'راهنمای جامع مدیریت محصول',
    author: 'محمد بهنام ذوالفقاری',
    coverImage: '/images/books/product-management-guide.jpg',
    description: 'کتابی جامع درباره اصول و روش‌های مدیریت محصول برای مبتدیان تا حرفه‌ای‌ها',
    downloadUrl: '/downloads/product-management-guide.pdf',
    publishDate: '2023-09-15',
    category: 'Product Management'
  },
  {
    id: '2',
    title: 'کتاب‌های پیشنهادی برای مدیران محصول',
    author: 'Various Authors',
    coverImage: '/images/books/recommended-books.jpg',
    description: 'مجموعه‌ای از بهترین کتاب‌های حوزه مدیریت محصول که هر مدیر محصولی باید بخواند',
    previewUrl: '/books/recommended-reading',
    publishDate: '2023-08-01',
    category: 'Reading List'
  }
]

export const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'مبانی مدیریت محصول در ۱۰ دقیقه',
    description: 'آموزش سریع مفاهیم کلیدی مدیریت محصول برای تازه‌کارها',
    thumbnail: '/images/videos/product-basics.jpg',
    videoUrl: 'https://youtube.com/watch?v=example1',
    duration: '10:30',
    category: 'آموزشی',
    date: '2024-01-10',
    isYoutube: true
  },
  {
    id: '2',
    title: 'مصاحبه: چگونه مدیر محصول شوم؟',
    description: 'گفتگو درباره مسیر ورود به حوزه مدیریت محصول و مهارت‌های موردنیاز',
    thumbnail: '/images/videos/career-path.jpg',
    videoUrl: 'https://youtube.com/watch?v=example2',
    duration: '25:15',
    category: 'مصاحبه',
    date: '2023-12-15',
    isYoutube: true
  }
]