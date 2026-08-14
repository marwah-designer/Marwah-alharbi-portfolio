import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export const Footer: React.FC = () => {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marwah-alharbi-933458247' },
    { label: 'Instagram', href: 'https://www.instagram.com/marwahharbi' },
    { label: 'Email', href: 'mailto:marwah-harbi@hotmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/966546629767' },
  ]

  return (
    <footer className="bg-neutral-950 py-16 text-white lg:py-20" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container-md">
        <div className="mb-12 grid gap-12 border-b border-neutral-800 pb-12 md:grid-cols-3 lg:gap-16 lg:pb-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="brand-mark brand-mark--small brand-mark--dark">MA</span>
              <span className="text-xs font-medium uppercase tracking-[0.28rem] text-neutral-400">
                {language === 'en' ? 'Portfolio' : 'المعرض'}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">{t.footer.name}</h3>
            <p className="mt-3 text-sm text-neutral-400">{t.footer.location}</p>
          </div>

          <div>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.28rem] text-neutral-500">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </p>
            <div className="space-y-3">
              <a href="#" className="footer-link">{translations[language].nav.work}</a>
              <a href="#" className="footer-link">{translations[language].nav.about}</a>
              <a href="#" className="footer-link">{translations[language].nav.contact}</a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.28rem] text-neutral-500">
              {language === 'en' ? 'Connect' : 'تواصل'}
            </p>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-neutral-500 lg:text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
