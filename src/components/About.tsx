import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { services, tools } from '../data/projects'
import { translations } from '../data/translations'

export const About: React.FC = () => {
  const { language, isArabic } = useLanguage()
  const t = translations[language]
  return (
    <section
      className="section-padding"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container-md">
        <div className="mb-12 lg:mb-16">
          <p className="eyebrow mb-4">
            {language === 'en' ? 'About Me' : 'عني'}
          </p>

          <h2>
            {language === 'en' ? 'About Me' : 'عني'}
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="about-copy">
            <p className="mb-4 font-serif text-3xl font-bold text-neutral-900 lg:text-4xl">
              {language === 'en'
                ? 'Marwah Alharbi'
                : 'مروة الحربي'}
            </p>

            <p className="mb-6 text-xl font-medium text-neutral-900 lg:text-2xl">
              {language === 'en'
                ? 'Graphic Designer from Madinah'
                : 'مصممة جرافيك من المدينة المنورة'}
            </p>

            <p className="text-lg leading-relaxed text-neutral-700 lg:text-xl">
              {language === 'en'
                ? 'I am passionate about turning ideas into visual designs that reflect brand identity and achieve its goals. I believe good design is a visual medium that makes a difference.'
                : 'أمتلك شغفًا بتحويل الأفكار إلى تصاميم بصرية تعكس هوية العلامة التجارية وتحقق أهدافها. أؤمن أن التصميم الجيد هو وسيلة بصرية تُحدث فرقًا.'}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
            <img
              src="/images/My visual identaty/Marwah's sticker mockup.png"
              alt="Marwah Alharbi visual identity"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="about-copy">

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <h3 className="mb-8 font-serif text-2xl font-bold text-neutral-900 lg:text-3xl">
                {t.about.services}
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {services.map((service, idx) => (
                  <div key={idx} className="service-item">
                    <span className="service-item__dot"></span>
                    <span>
                      {language === 'en'
                        ? service.enName
                        : service.arName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="about-sidebar">
            <div className="about-panel">
              <p className="section-label">
                {t.about.software}
              </p>

              <div className="tool-list">
                {tools.map((tool, idx) => (
                  <span key={idx} className="tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-panel">
              <p className="section-label">
                {language === 'en' ? 'Location' : 'الموقع'}
              </p>

              <p className="text-lg font-medium text-neutral-900">
                {t.about.location}
              </p>
            </div>

            <div className="about-panel about-panel--highlight">
              <p className="section-label">
                {t.about.contact}
              </p>

              <button
                type="button"
                className="btn-primary w-full justify-center"
              >
                {t.contact.title}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}