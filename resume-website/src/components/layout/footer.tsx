import Link from 'next/link'
import { Mail, Linkedin, MessageCircle, MapPin } from 'lucide-react'
import { profileData } from '@/lib/data'

export function Footer() {
  const { contact } = profileData

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
              {profileData.name}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 font-persian">
              {profileData.title}
            </p>
            <p className="text-sm text-secondary-500 dark:text-secondary-400 font-persian">
              {profileData.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
              لینک‌های سریع
            </h3>
            <div className="space-y-2">
              <Link 
                href="/about" 
                className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-persian"
              >
                درباره من
              </Link>
              <Link 
                href="/articles" 
                className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-persian"
              >
                مقالات
              </Link>
              <Link 
                href="/books" 
                className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-persian"
              >
                کتاب‌ها
              </Link>
              <Link 
                href="/videos" 
                className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-persian"
              >
                ویدیوها
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
              تماس با من
            </h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center space-x-reverse space-x-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="font-english text-sm">{contact.email}</span>
              </a>
              
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="font-english text-sm">LinkedIn</span>
              </a>
              
              {contact.telegram && (
                <a 
                  href={`https://t.me/${contact.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-reverse space-x-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-english text-sm">{contact.telegram}</span>
                </a>
              )}
              
              <div className="flex items-center space-x-reverse space-x-3 text-secondary-600 dark:text-secondary-300">
                <MapPin className="h-4 w-4" />
                <span className="font-persian text-sm">{contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700">
          <p className="text-center text-sm text-secondary-500 dark:text-secondary-400 font-persian">
            © {new Date().getFullYear()} {profileData.name}. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}