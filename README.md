# Marwah Alharbi — Graphic Designer Portfolio

A modern, elegant personal portfolio website for Marwah Alharbi, a graphic designer based in Medina, Saudi Arabia.

## Features

- **Bilingual Support**: Full Arabic (RTL) and English (LTR) language switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Stack**: Built with React, Vite, and Tailwind CSS
- **Smooth Animations**: Subtle transitions and animations for premium feel
- **Project Showcase**: Curated portfolio projects with filtering capabilities
- **Contact Integration**: Direct links to email, phone, WhatsApp, LinkedIn, and Instagram
- **Accessible**: Semantic HTML and ARIA labels for accessibility

## Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.tsx    # Header with language switcher
│   ├── Hero.tsx          # Hero section
│   ├── Projects.tsx      # Projects grid with filters
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── contexts/             # React Context
│   └── LanguageContext.tsx
├── data/                 # Data files
│   ├── translations.ts   # English and Arabic content
│   └── projects.ts       # Project information
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Customization

### Language Switching

The language switcher is built into the navigation bar. The context manages the global language state, and all content is defined in `src/data/translations.ts`.

### Projects

Add or update projects in `src/data/projects.ts`. Each project can have multiple tags for filtering.

### Styling

Customize the color scheme, spacing, and typography in `tailwind.config.js`.

## Contact Information

- **Email**: marwah-harbi@hotmail.com
- **Phone**: +966 54 662 9767
- **WhatsApp**: +966 54 662 9767
- **LinkedIn**: https://www.linkedin.com/in/marwah-alharbi-933458247
- **Instagram**: https://www.instagram.com/marwahharbi

## License

© 2026 Marwah Alharbi. All rights reserved.
