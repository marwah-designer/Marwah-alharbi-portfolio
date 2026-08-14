export const translations = {
  en: {
    nav: {
      home: 'Home',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },

    hero: {
      name: 'Marwah Alharbi',
      title: 'Graphic Designer',
      bio: 'Graphic designer passionate about creating simple, elegant, and contemporary visual solutions. I combine clear ideas, thoughtful composition, and attention to detail to transform concepts into meaningful designs that communicate effectively and support the identity of each project.',
      ctaPrimary: 'View My Work',
      ctaSecondary: "Let's Work Together",
    },

    work: {
      title: 'My Work',
      subtitle: '',
      filter: {
        all: 'All',
        branding: 'Branding',
        packaging: 'Packaging',
        socialMedia: 'Social Media',
        advertising: 'Advertising',
        print: 'Print',
        productDesign: 'Product Design',
        personalBranding: 'Personal Branding',
        largeFormat: 'Large Format',
      },
      viewProject: 'View Project',
      caseStudy: 'Case Study',
    },

    about: {
      title: 'About Me',
      intro:
        "Hello! I'm Marwah Alharbi, a graphic designer based in Medina, Saudi Arabia.",
      bio: "I'm passionate about creating visual solutions that are simple, elegant, and contemporary. With a strong foundation in design fundamentals, I focus on combining clear concepts with thoughtful composition and meticulous attention to detail.",
      responsibilities:
        'Visual Identities • Logo Design • Packaging & Product Design • Print & Social Media • Marketing Materials • Presentations',
      services: 'Services',
      software: 'Software & Tools',
      tools: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Canva',
        'Procreate',
      ],
      location: 'Medina, Saudi Arabia',
      contact: "Let's Connect",
    },

    contact: {
      title: "Let's Work Together",
      subtitle: 'Have a project, opportunity, or collaboration in mind?',
      message: 'Get in touch.',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      emailAddress: 'marwah-harbi@hotmail.com',
      phoneNumber: '+966 54 662 9767',
    },

    footer: {
      name: 'Marwah Alharbi — Graphic Designer',
      location: 'Medina, Saudi Arabia',
      copyright: '© 2026 Marwah Alharbi. All rights reserved.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      work: 'أعمالي',
      about: 'عني',
      contact: 'تواصل',
    },

    hero: {
      name: 'مروه الحربي',
      title: 'مصممة جرافيك',
      bio: 'مصممة جرافيك شغوفة بصناعة حلول بصرية بسيطة وراقية وعصرية، أحرص فيها على الجمع بين الفكرة الواضحة والتكوين المتوازن والاهتمام بالتفاصيل، لتحويل الأفكار إلى تصاميم مؤثرة تخدم هوية كل مشروع وتوصل رسالته بوضوح.',
      ctaPrimary: 'اطلع على أعمالي',
      ctaSecondary: 'لنعمل معًا',
    },

    work: {
      title: 'أعمالي',
      subtitle: '',
      filter: {
        all: 'الكل',
        branding: 'الهوية البصرية',
        packaging: 'تصميم التغليف',
        socialMedia: 'وسائل التواصل',
        advertising: 'الإعلانات',
        print: 'الطباعة',
        productDesign: 'تصميم المنتج',
        personalBranding: 'الهوية الشخصية',
        largeFormat: 'الطباعة الكبيرة',
      },
      viewProject: 'عرض المشروع',
      caseStudy: 'دراسة الحالة',
    },

    about: {
      title: 'عني',
      intro:
        'مرحباً! أنا مروه الحربي، مصممة جرافيك من المدينة المنورة، المملكة العربية السعودية.',
      bio: 'أمتلك شغفًا بتحويل الأفكار إلى تصاميم بصرية تعكس هوية العلامة التجارية وتحقق أهدافها. أؤمن أن التصميم الجيد هو وسيلة بصرية تُحدث فرقًا.',
      responsibilities:
        'الهويات البصرية • تصميم الشعارات • التغليف وتصميم المنتج • الطباعة ووسائل التواصل • مواد التسويق • العروض التقديمية',
      services: 'الخدمات',
      software: 'البرامج والأدوات',
      tools: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Canva',
        'Procreate',
      ],
      location: 'المدينة المنورة، المملكة العربية السعودية',
      contact: 'لنتواصل',
    },

    contact: {
      title: 'لنعمل معًا',
      subtitle: 'لديك مشروع أو فرصة عمل أو تعاون؟',
      message: 'يسعدني التواصل معك.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      whatsapp: 'واتس آب',
      linkedin: 'لينكد إن',
      instagram: 'إنستاجرام',
      emailAddress: 'marwah-harbi@hotmail.com',
      phoneNumber: '+966 54 662 9767',
    },

    footer: {
      name: 'مروه الحربي — مصممة جرافيك',
      location: 'المدينة المنورة، المملكة العربية السعودية',
      copyright: '© 2026 مروه الحربي. جميع الحقوق محفوظة.',
    },
  },
}

export type Translations = typeof translations.en