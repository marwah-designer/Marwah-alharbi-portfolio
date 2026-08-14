import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

interface NavProps {
  onNavClick?: (section: string) => void
}

export const Navigation: React.FC<NavProps> = ({ onNavClick }) => {
  const { language, setLanguage, isArabic } = useLanguage()
  const t = translations[language]

  const handleNavClick = (section: string) => {
    onNavClick?.(section)
  }

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container-md flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="brand-mark" aria-label="Marwah Alharbi logo">
            MA
          </div>
        <img
  src="/images/My visual identaty/logo 500-01.png"
  alt="Marwah Alharbi logo"
  className="h-14 w-14 object-contain"
/>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => handleNavClick('home')} className="nav-link text-sm uppercase tracking-[0.18em]">
            {t.nav.home}
          </button>
          <button onClick={() => handleNavClick('work')} className="nav-link text-sm uppercase tracking-[0.18em]">
            {t.nav.work}
          </button>
          <button onClick={() => handleNavClick('about')} className="nav-link text-sm uppercase tracking-[0.18em]">
            {t.nav.about}
          </button>
          <button onClick={() => handleNavClick('contact')} className="nav-link text-sm uppercase tracking-[0.18em]">
            {t.nav.contact}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden rounded-full bg-neutral-100 p-1 sm:flex">
            <button
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-[0.7rem] font-medium transition-all duration-300 ${
                language === 'en' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`rounded-full px-3 py-1 text-[0.7rem] font-medium transition-all duration-300 ${
                language === 'ar' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              العربية
            </button>
          </div>

          <button className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 transition-opacity hover:opacity-60 md:hidden">
            <span className="h-0.5 w-5 bg-neutral-900"></span>
            <span className="h-0.5 w-5 bg-neutral-900"></span>
            <span className="h-0.5 w-5 bg-neutral-900"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
