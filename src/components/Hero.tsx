import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

interface HeroProps {
  onViewWork: () => void
  onContact: () => void
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onContact,
}) => {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  return (
    <section
      className="hero-section"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container-md">
        <div className="hero-grid">

          <div className="hero-copy">

            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="brand-mark brand-mark--small">
                MA
              </span>

              <span className="text-[0.68rem] font-medium uppercase tracking-[0.28rem] text-neutral-600">
                {language === 'en'
                  ? 'Graphic Designer'
                  : 'مصممة جرافيك'}
              </span>
            </div>

            <div className="space-y-6">

              <p className="eyebrow text-neutral-600">
                {language === 'en'
                  ? 'Medina • Saudi Arabia'
                  : 'المدينة المنورة • السعودية'}
              </p>

              <h1>
                {t.hero.name}
              </h1>

              <h2 className="max-w-xl text-2xl font-medium text-neutral-600 sm:text-3xl lg:text-[2.2rem]">
                {t.hero.title}
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                {t.hero.bio}
              </p>

            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                type="button"
                onClick={onViewWork}
                className="btn-primary"
              >
                {t.hero.ctaPrimary}
              </button>

              <button
                type="button"
                onClick={onContact}
                className="btn-secondary"
              >
                {t.hero.ctaSecondary}
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}