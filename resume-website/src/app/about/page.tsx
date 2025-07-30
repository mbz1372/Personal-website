import { Brain, Heart, Lightbulb, Star, Globe, Award } from 'lucide-react'
import { aboutData } from '@/lib/data'

export const metadata = {
  title: 'درباره من | محمد بهنام ذوالفقاری',
  description: 'بیشتر درباره من، مهارت‌ها، و تجربیات حرفه‌ای بدانید',
}

export default function AboutPage() {
  const { biography, skills, personalityTraits, funFacts } = aboutData

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6 font-persian">
            درباره من
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 font-persian">
            بیشتر درباره من، مهارت‌ها، و تجربیات حرفه‌ای بدانید
          </p>
        </div>

        {/* Biography */}
        <section className="mb-16 animate-fade-in">
          <div className="card">
            <div className="flex items-center mb-6">
              <Heart className="h-6 w-6 text-primary-600 dark:text-primary-400 ml-3" />
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white font-persian">
                بیوگرافی
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-secondary-600 dark:text-secondary-300 font-persian leading-relaxed">
              {biography.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center mb-8">
            <Brain className="h-6 w-6 text-primary-600 dark:text-primary-400 ml-3" />
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white font-persian">
              مهارت‌ها
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hard Skills */}
            <div className="card card-hover">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-primary-600 dark:text-primary-400 ml-2" />
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
                  مهارت‌های تخصصی
                </h3>
              </div>
              <div className="space-y-2">
                {skills.hard.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-english ml-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card card-hover">
              <div className="flex items-center mb-4">
                <Heart className="h-5 w-5 text-accent-600 dark:text-accent-400 ml-2" />
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
                  مهارت‌های نرم
                </h3>
              </div>
              <div className="space-y-2">
                {skills.soft.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm font-english ml-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card card-hover">
              <div className="flex items-center mb-4">
                <Globe className="h-5 w-5 text-secondary-600 dark:text-secondary-400 ml-2" />
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white font-persian">
                  زبان‌ها
                </h3>
              </div>
              <div className="space-y-3">
                {skills.languages.map((language) => (
                  <div key={language.name} className="flex justify-between items-center">
                    <span className="font-persian text-secondary-900 dark:text-white">
                      {language.name}
                    </span>
                    <span className="text-sm px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 rounded font-english">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personality Traits */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center mb-8">
            <Star className="h-6 w-6 text-primary-600 dark:text-primary-400 ml-3" />
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white font-persian">
              ویژگی‌های شخصیتی
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalityTraits.map((trait, index) => (
              <div 
                key={trait}
                className="card card-hover text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="font-persian text-secondary-900 dark:text-white font-medium">
                  {trait}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        {funFacts && (
          <section className="animate-fade-in">
            <div className="flex items-center mb-8">
              <Lightbulb className="h-6 w-6 text-primary-600 dark:text-primary-400 ml-3" />
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white font-persian">
                نکات جالب درباره من
              </h2>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {funFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-reverse space-x-3 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-700/50 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-secondary-700 dark:text-secondary-300 font-persian">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="mt-16 text-center animate-slide-in">
          <div className="card bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 font-persian">
              آماده همکاری هستم
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 font-persian">
              اگر به دنبال یک مدیر محصول با تجربه و متعهد هستید، خوشحال می‌شوم با شما صحبت کنم.
            </p>
            <a 
              href="mailto:mbzolfaghari@example.com"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span className="font-persian">تماس با من</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}