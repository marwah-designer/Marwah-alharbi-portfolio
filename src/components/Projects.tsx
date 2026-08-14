import React, { useMemo, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { projects } from '../data/projects'
import { translations } from '../data/translations'
const getImagePath = (imagePath: string) => {
  if (!imagePath) return ''

  const basePath = window.location.hostname.endsWith('github.io')
    ? '/Marwah-alharbi-portfolio/'
    : '/'

  return `${basePath}${imagePath.replace(/^\/+/, '')}`
}
const filterDefinitions = [
  'all',
  'branding',
  'packaging',
  'social-media',
  'advertising',
  'print',
  'product',
  'personal-branding',
  'large-format',
] as const

const getProjectPalette = (projectId: string) => {
  const palettes = [
    ['#F7F4F4', '#EADADD', '#D7B1B7'],
    ['#F9F5F6', '#E8D5D9', '#CFAAB1'],
    ['#F7F4F4', '#E2D8DA', '#BFA6AB'],
    ['#FFFFFF', '#F3E8EA', '#D7B1B7'],
    ['#F8F6F6', '#E7DDDF', '#C8AEB4'],
    ['#F9F4F5', '#EADFE1', '#D7B1B7'],
  ]

  const index =
    projectId
      .split('')
      .reduce((total, char) => total + char.charCodeAt(0), 0) %
    palettes.length

  const [start, mid, end] = palettes[index]

  return {
    background: `linear-gradient(135deg, ${start} 0%, ${mid} 50%, ${end} 100%)`,
  }
}

const matchesFilter = (
  project: (typeof projects)[number],
  filter: string,
) => {
  if (filter === 'all') {
    return true
  }

  const filterMap: Record<string, string[]> = {
    branding: ['branding', 'identity', 'logo', 'city-branding'],
    packaging: ['packaging'],
    'social-media': ['social-media', 'instagram', 'digital', 'marketing'],
    advertising: ['advertising'],
    print: ['print', 'large-format', 'mural'],
    product: [
      'product',
      'fragrance',
      'perfume',
      'essential-oils',
      'coffee',
    ],
    'personal-branding': ['personal-branding'],
    'large-format': ['large-format', 'mural', 'wall'],
  }

  const activeTags = filterMap[filter] ?? [filter]

  return project.tags.some((tag) => activeTags.includes(tag))
}

export const Projects: React.FC = () => {
  const { language, isArabic } = useLanguage()
  const t = translations[language]

  const [activeFilter, setActiveFilter] =
    useState<(typeof filterDefinitions)[number]>('all')

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null)

  const filters = [
    { id: 'all', label: t.work.filter.all },
    { id: 'branding', label: t.work.filter.branding },
    { id: 'packaging', label: t.work.filter.packaging },
    { id: 'social-media', label: t.work.filter.socialMedia },
    { id: 'advertising', label: t.work.filter.advertising },
    { id: 'print', label: t.work.filter.print },
    { id: 'product', label: t.work.filter.productDesign },
    {
      id: 'personal-branding',
      label: t.work.filter.personalBranding,
    },
    {
      id: 'large-format',
      label: t.work.filter.largeFormat,
    },
  ] as const

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter((project) =>
      matchesFilter(project, activeFilter),
    )

    return [...filtered].sort((a, b) => a.order - b.order)
  }, [activeFilter])

  const getProjectImages = (
    project: (typeof projects)[number],
  ) => {
    if (project.images && project.images.length > 0) {
      return project.images
    }

    return project.image ? [project.image] : []
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section
        className="section-padding bg-[var(--background)]"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className="container-md">
          <div className="mb-12 lg:mb-16">
            <h2>{t.work.title}</h2>
          </div>

          <div className="mb-12 lg:mb-16">
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`project-filter ${
                    activeFilter === filter.id
                      ? 'project-filter--active'
                      : ''
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => {
              const imageSrc = getImagePath(project.image)
              const [title, description, category] =
                language === 'en'
                  ? [
                      project.titleEn,
                      project.descriptionEn,
                      project.categoryEn,
                    ]
                  : [
                      project.titleAr,
                      project.descriptionAr,
                      project.categoryAr,
                    ]

              return (
                <article
                  key={project.id}
                  className="project-card"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div
                    className="project-media"
                    style={getProjectPalette(project.id)}
                  >
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={title}
                        className="project-image"
                        loading="lazy"
                        onError={(event) => {
                          const target = event.currentTarget
                          target.style.display = 'none'

                          const parent = target.parentElement

                          if (parent) {
                            parent.classList.add(
                              'project-media--fallback',
                            )
                          }
                        }}
                      />
                    ) : null}

                    <div className="project-media__overlay">
                      <span>{category}</span>
                      <strong>{title}</strong>
                    </div>
                  </div>

                  <div className="project-card__content">
                    <p className="project-card__meta">
                      {category}
                    </p>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    <button
                      type="button"
                      className="project-link"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>{t.work.viewProject}</span>

                      <span className="project-link__arrow">
                        {isArabic ? '←' : '→'}
                      </span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={closeProject}
        >
          <div
            className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--background)] p-5 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-6">
              <div className="min-w-0">
                <p className="mb-2 text-sm text-[var(--text)]">
                  {language === 'en'
                    ? selectedProject.categoryEn
                    : selectedProject.categoryAr}
                </p>

                <h2 className="text-3xl sm:text-4xl">
                  {language === 'en'
                    ? selectedProject.titleEn
                    : selectedProject.titleAr}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeProject}
                aria-label={language === 'en' ? 'Close' : 'إغلاق'}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--soft)] bg-white text-xl text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                ×
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {getProjectImages(selectedProject).map(
                (image, imageIndex) => (
                  <div
                    key={`${selectedProject.id}-${imageIndex}`}
                    className="overflow-hidden rounded-[1.5rem] border border-[var(--soft)] bg-white"
                  >
                    <img
                      src={getImagePath(image)}
                      alt={
                        language === 'en'
                          ? `${selectedProject.titleEn} ${imageIndex + 1}`
                          : `${selectedProject.titleAr} ${imageIndex + 1}`
                      }
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-base leading-relaxed text-[var(--text)] sm:text-lg">
                {language === 'en'
                  ? selectedProject.descriptionEn
                  : selectedProject.descriptionAr}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
