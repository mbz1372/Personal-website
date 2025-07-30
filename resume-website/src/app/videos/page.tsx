// import Image from 'next/image'
import { Play, Calendar, Clock, Filter, ExternalLink } from 'lucide-react'
import { sampleVideos } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'ویدیوها | محمد بهنام ذوالفقاری',
  description: 'مجموعه ویدیوها و محتوای آموزشی در حوزه مدیریت محصول',
}

export default function VideosPage() {
  const videos = sampleVideos

  // Get unique categories
  const categories = Array.from(new Set(videos.map(video => video.category).filter(Boolean)))

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6 font-persian">
            ویدیوها
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 font-persian">
            مجموعه ویدیوها و محتوای آموزشی در حوزه مدیریت محصول و تکنولوژی
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-primary-600 dark:text-primary-400 ml-2" />
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
                دسته‌بندی:
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-full font-persian text-sm hover:bg-primary-700 transition-colors">
                همه
              </button>
              {categories.map((category) => (
                <button 
                  key={category}
                  className="px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full font-persian text-sm hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="card card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative mb-4 overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-800">
                <div className="aspect-video flex items-center justify-center relative">
                  {/* Placeholder thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br from-secondary-200 to-secondary-300 dark:from-secondary-700 dark:to-secondary-600 flex items-center justify-center">
                    <Play className="h-16 w-16 text-secondary-500 dark:text-secondary-400" />
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {video.duration && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-black/80 text-white rounded text-xs font-english">
                        {video.duration}
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  {video.category && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-primary-600 text-white rounded text-xs font-persian">
                        {video.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white font-persian group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-secondary-600 dark:text-secondary-300 font-persian text-sm line-clamp-2">
                  {video.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-persian">{formatDate(video.date)}</span>
                  </div>
                  {video.duration && (
                    <div className="flex items-center space-x-reverse space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-english">{video.duration}</span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  {video.isYoutube ? (
                    <a 
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-reverse space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-persian">مشاهده در یوتیوب</span>
                    </a>
                  ) : (
                    <button className="w-full flex items-center justify-center space-x-reverse space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
                      <Play className="h-4 w-4" />
                      <span className="font-persian">پخش ویدیو</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {videos.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center">
                <Play className="h-12 w-12 text-secondary-400 dark:text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 font-persian">
                هنوز ویدیویی اضافه نشده
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                به زودی ویدیوهای جدید اضافه خواهند شد
              </p>
            </div>
          </div>
        )}

        {/* Featured Video Section */}
        {videos.length > 0 && (
          <section className="mt-16 animate-slide-in">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8 font-persian text-center">
              ویدیو ویژه
            </h2>
            <div className="card bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white font-persian">
                    {videos[0].title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                    {videos[0].description}
                  </p>
                  <div className="flex items-center space-x-reverse space-x-4 text-sm text-secondary-500 dark:text-secondary-400">
                    <div className="flex items-center space-x-reverse space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-persian">{formatDate(videos[0].date)}</span>
                    </div>
                    {videos[0].duration && (
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-english">{videos[0].duration}</span>
                      </div>
                    )}
                  </div>
                  <a 
                    href={videos[0].videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-reverse space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Play className="h-5 w-5" />
                    <span className="font-persian">مشاهده ویدیو</span>
                  </a>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center">
                    <Play className="h-20 w-20 text-secondary-400 dark:text-secondary-600" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="mt-16 animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-800">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                {videos.length}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                ویدیو موجود
              </p>
            </div>

            <div className="card text-center bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                {videos.filter(video => video.isYoutube).length}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 font-persian">
                ویدیوی یوتیوب
              </p>
            </div>

            <div className="card text-center bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border-accent-200 dark:border-accent-800">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent-600 rounded-full flex items-center justify-center">
                <Filter className="h-6 w-6 text-white" />
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

        {/* YouTube Channel CTA */}
        <section className="mt-16 animate-slide-in">
          <div className="card bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 font-persian">
              کانال یوتیوب من
            </h3>
            <p className="text-lg mb-6 opacity-90 font-persian">
              برای مشاهده ویدیوهای بیشتر و آخرین محتوای آموزشی، کانال یوتیوب من را دنبال کنید
            </p>
            <a 
              href="https://youtube.com/@mbzolfaghari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-reverse space-x-2 px-6 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-red-50 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="font-persian">مشاهده کانال</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}