import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export const Contact: React.FC = () => {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  const contactLinks = [
    {
      label: t.contact.email,
      value: 'marwah-harbi@hotmail.com',
      href: 'mailto:marwah-harbi@hotmail.com',
      icon: '✉',
    },
    {
      label: t.contact.phone,
      value: '+966 54 662 9767',
      href: 'tel:+966546629767',
      icon: '☎',
    },
    {
      label: t.contact.whatsapp,
      value: '+966 54 662 9767',
      href: 'https://wa.me/966546629767',
      icon: 'W',
    },
    {
      label: t.contact.linkedin,
      value: 'Marwah Alharbi',
      href: 'https://www.linkedin.com/in/marwah-alharbi-933458247',
      icon: 'in',
    },
    {
      label: t.contact.instagram,
      value: '@marwahharbi',
      href: 'https://www.instagram.com/marwahharbi',
      icon: '📷',
    },
  ]

  return (
    <section className="section-padding bg-stone-50" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container-sm">
        <div className="mb-14 text-center lg:mb-16">
          <p className="eyebrow mb-4">{t.contact.title}</p>
          <h2>{t.contact.title}</h2>
          <p className="mt-6 text-lg text-neutral-600 lg:text-xl">{t.contact.subtitle}</p>
          <p className="mt-3 text-lg text-neutral-700 lg:text-xl">{t.contact.message}</p>
        </div>

        <div className="contact-grid">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
            >
              <span className="contact-card__icon">{link.icon}</span>
              <div>
                <p className="section-label">{link.label}</p>
                <p className="contact-card__value">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center lg:mt-16">
          <p className="mb-6 text-base text-neutral-600">
            {language === 'en'
              ? 'Feel free to reach out for any inquiries, collaborations, or project opportunities.'
              : 'لا تتردد في التواصل معي بخصوص أي استفسارات أو فرص تعاون أو مشاريع.'}
          </p>
          <a href="mailto:marwah-harbi@hotmail.com" className="btn-primary inline-flex">
            {language === 'en' ? 'Send Email' : 'إرسال بريد إلكتروني'}
          </a>
        </div>
      </div>
    </section>
  )
}
