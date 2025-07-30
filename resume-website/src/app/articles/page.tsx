import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import { sampleArticles } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'مقالات | محمد بهنام ذوالفقاری',
  description: 'مجموعه مقالات و نوشته‌های من در حوزه مدیریت محصول و تکنولوژی',
}

export default function ArticlesPage() {
  const articles = sampleArticles

  // Get all unique tags
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)))

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6 font-persian">
            مقالات
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 font-persian">
            نوشته‌های من در حوزه مدیریت محصول، تکنولوژی، و نوآوری
          </p>
        </div>

        {/* Tags Filter */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 font-persian">
            موضوعات:
          </h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-full font-english text-sm hover:bg-primary-700 transition-colors">
              همه
            </button>
            {allTags.map((tag) => (
              <button 
                key={tag}
                className="px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full font-english text-sm hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className="card card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Article Image */}
              {article.previewImage && (
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/images/articles/placeholder.jpg"
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}

              {/* Article Content */}
              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-english"
                    >
                      <Tag className="h-3 w-3 ml-1" />
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="text-xs text-secondary-500 dark:text-secondary-400 font-english">
                      +{article.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-secondary-900 dark:text-white font-persian group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-secondary-600 dark:text-secondary-300 font-persian line-clamp-3">
                  {article.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="flex items-center space-x-reverse space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-persian">{formatDate(article.date)}</span>
                    </div>
                    {article.readTime && (
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-persian">{article.readTime} دقیقه</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Read More Link */}
                <Link 
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center space-x-reverse space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group/link"
                >
                  <span className="font-persian">ادامه مطلب</span>
                  <ArrowLeft className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center">
                <Tag className="h-12 w-12 text-secondary-400 dark:text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 font-persian">
                هنوز مقاله‌ای منتشر نشده
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                به زودی مقالات جدید منتشر خواهند شد
              </p>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 animate-slide-in">
          <div className="card bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 font-persian">
              از آخرین مقالات باخبر شوید
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 font-persian">
              برای دریافت اطلاع از انتشار مقالات جدید، آدرس ایمیل خود را وارد کنید
            </p>
            <div className="max-w-md mx-auto flex space-x-reverse space-x-3">
              <input
                type="email"
                placeholder="آدرس ایمیل شما"
                className="flex-1 px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent font-persian"
                dir="ltr"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors font-persian">
                عضویت
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}