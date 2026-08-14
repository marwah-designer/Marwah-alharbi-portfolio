import React, { useRef } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navigation, Hero, Projects, About, Contact, Footer } from './components'

const AppContent: React.FC = () => {
  const workRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (section: string) => {
    switch (section) {
      case 'work':
        workRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleViewWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white">
      <Navigation onNavClick={handleNavClick} />
      <Hero onViewWork={handleViewWork} onContact={handleContact} />
      <div ref={workRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
