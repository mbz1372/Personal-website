import Image from 'next/image'
import Link from 'next/link'
import {
  Download,
  Mail,
  Linkedin,
  MessageCircle,
  MapPin,
  ExternalLink,
  Calendar,
  Building,
  Award,
} from 'lucide-react'
import { profileData } from '@/lib/data'

export default function HomePage() {
  const { name, title, bio, resumeUrl, contact, experiences, certificates } = profileData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 dark:text-white font-persian">
                  {name}
                </h1>
                <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-persian">
                  {title}
                </p>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed font-persian">
                  {bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-reverse space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200 group"
                >
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                  <span className="font-english text-sm">{contact.email}</span>
                </a>
                
                <a 
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-reverse space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200 group"
                >
                  <Linkedin className="h-5 w-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                  <span className="font-english text-sm">LinkedIn</span>
                </a>
                
                {contact.telegram && (
                  <a 
                    href={`https://t.me/${contact.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-all duration-200 group"
                  >
                    <MessageCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                    <span className="font-english text-sm">{contact.telegram}</span>
                  </a>
                )}
                
                <div className="flex items-center space-x-reverse space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                  <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-persian text-sm">{contact.location}</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <a 
                href={resumeUrl}
                download
                className="inline-flex items-center space-x-reverse space-x-3 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span className="font-persian">دانلود رزومه</span>
              </a>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-primary-100 dark:border-primary-900/20 shadow-2xl">
                  <Image
                    src="/images/profile-placeholder.jpg"
                    alt={name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full opacity-50 animate-bounce-gentle"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-200 dark:bg-accent-800 rounded-full opacity-50 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4 font-persian">
              تجربیات کاری
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 font-persian">
              مسیر حرفه‌ای من در حوزه مدیریت محصول
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-4 md:right-1/2 md:transform md:translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 
                      ? 'md:flex-row-reverse' 
                      : 'md:flex-row'
                  } flex-col md:space-x-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute right-2 md:right-1/2 md:transform md:translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 
                      ? 'md:text-right md:pr-12' 
                      : 'md:text-left md:pl-12'
                  } mr-12 md:mr-0`}>
                    <div className="card card-hover animate-slide-in">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-secondary-900 dark:text-white font-persian">
                            {experience.position}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium font-persian">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-reverse space-x-2 text-sm text-secondary-500 dark:text-secondary-400">
                          <Calendar className="h-4 w-4" />
                          <span className="font-persian">{experience.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-secondary-600 dark:text-secondary-300 mb-4 font-persian">
                        {experience.description}
                      </p>
                      
                      {experience.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-english"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {experience.location && (
                        <div className="flex items-center space-x-reverse space-x-2 mt-3 text-sm text-secondary-500 dark:text-secondary-400">
                          <Building className="h-4 w-4" />
                          <span className="font-persian">{experience.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4 font-persian">
              گواهینامه‌ها
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 font-persian">
              مدارک و گواهینامه‌های حرفه‌ای
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="card card-hover animate-scale-in group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-reverse space-x-3 flex-1">
                      <Award className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-secondary-900 dark:text-white font-english group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {certificate.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium font-english">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>
                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400">
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-english">{new Date(certificate.date).toLocaleDateString('fa-IR')}</span>
                    </div>
                    {certificate.credentialId && (
                      <span className="font-english text-xs">#{certificate.credentialId}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-persian">
            آماده همکاری هستم
          </h2>
          <p className="text-xl mb-8 opacity-90 font-persian">
            برای پروژه‌های جدید و فرصت‌های همکاری با من تماس بگیرید
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center space-x-reverse space-x-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-primary-50 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <span className="font-persian">بیشتر بدانید</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
