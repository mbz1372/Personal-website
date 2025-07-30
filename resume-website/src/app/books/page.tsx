// import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Download, ExternalLink, Calendar, User } from 'lucide-react'
import { sampleBooks } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'کتاب‌ها | محمد بهنام ذوالفقاری',
  description: 'مجموعه کتاب‌ها و منابع پیشنهادی در حوزه مدیریت محصول',
}

export default function BooksPage() {
  const books = sampleBooks

  // Get unique categories
  const categories = Array.from(new Set(books.map(book => book.category).filter(Boolean)))

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6 font-persian">
            کتاب‌ها
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 font-persian">
            مجموعه کتاب‌ها و منابع پیشنهادی در حوزه مدیریت محصول و تکنولوژی
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4 font-persian">
              دسته‌بندی:
            </h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-full font-persian text-sm hover:bg-primary-700 transition-colors">
                همه
              </button>
              {categories.map((category) => (
                <button 
                  key={category}
                  className="px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full font-english text-sm hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div 
              key={book.id}
              className="card card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Book Cover */}
              <div className="relative mb-4 overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-800">
                <div className="aspect-[3/4] flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-secondary-400 dark:text-secondary-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-reverse space-x-2">
                    {book.downloadUrl && (
                      <a 
                        href={book.downloadUrl}
                        download
                        className="p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-white dark:hover:bg-secondary-800 transition-colors"
                        title="دانلود کتاب"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    )}
                    {book.previewUrl && (
                      <Link 
                        href={book.previewUrl}
                        className="p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-white dark:hover:bg-secondary-800 transition-colors"
                        title="مشاهده کتاب"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                {book.category && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-primary-600 text-white rounded text-xs font-english">
                      {book.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Book Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white font-persian group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {book.title}
                </h3>

                <div className="flex items-center space-x-reverse space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
                  <User className="h-4 w-4" />
                  <span className="font-persian">{book.author}</span>
                </div>

                <p className="text-secondary-600 dark:text-secondary-300 font-persian text-sm line-clamp-3">
                  {book.description}
                </p>

                {book.publishDate && (
                  <div className="flex items-center space-x-reverse space-x-2 text-sm text-secondary-500 dark:text-secondary-400">
                    <Calendar className="h-4 w-4" />
                    <span className="font-persian">{formatDate(book.publishDate)}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-reverse space-x-2 pt-2">
                  {book.downloadUrl && (
                    <a 
                      href={book.downloadUrl}
                      download
                      className="flex-1 flex items-center justify-center space-x-reverse space-x-2 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span className="font-persian">دانلود</span>
                    </a>
                  )}
                  {book.previewUrl && (
                    <Link 
                      href={book.previewUrl}
                      className={`flex items-center justify-center space-x-reverse space-x-2 px-3 py-2 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg text-sm font-medium transition-colors ${
                        book.downloadUrl ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-persian">مشاهده</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {books.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-secondary-400 dark:text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 font-persian">
                هنوز کتابی اضافه نشده
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                به زودی کتاب‌های جدید اضافه خواهند شد
              </p>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <section className="mt-16 animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-800">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                {books.length}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                کتاب موجود
              </p>
            </div>

            <div className="card text-center bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border-accent-200 dark:border-accent-800">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent-600 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                {books.filter(book => book.downloadUrl).length}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                قابل دانلود
              </p>
            </div>

            <div className="card text-center bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-800/20 dark:to-secondary-700/20 border-secondary-200 dark:border-secondary-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary-600 rounded-full flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                {categories.length}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                دسته‌بندی
              </p>
            </div>
          </div>
        </section>

        {/* Reading List CTA */}
        <section className="mt-16 animate-slide-in">
          <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 font-persian">
              پیشنهاد کتاب
            </h3>
            <p className="text-lg mb-6 opacity-90 font-persian">
              کتاب مورد علاقه‌تان را برای اضافه شدن به این مجموعه پیشنهاد دهید
            </p>
            <a 
              href="mailto:mbzolfaghari@example.com?subject=پیشنهاد کتاب"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-bold hover:bg-primary-50 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span className="font-persian">ارسال پیشنهاد</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}