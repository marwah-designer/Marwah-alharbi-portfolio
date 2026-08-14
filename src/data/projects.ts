export interface Project {
  id: string
  titleEn: string
  titleAr: string
  categoryEn: string
  categoryAr: string
  descriptionEn: string
  descriptionAr: string
  roleEn: string
  roleAr: string
  image: string
  images?: string[]
  tags: string[]
  isFeatured?: boolean
  type: 'case-study' | 'project' | 'gallery'
  order: number
}

export const projects: Project[] = [
  {
    id: 'gr-glorious-room',
    titleEn: 'GR — Glorious Room',
    titleAr: 'GR — جلوريوس روم',
    categoryEn: 'Packaging Design / Product Design',
    categoryAr: 'تصميم التغليف / تصميم المنتج',
    descriptionEn:
      'Glorious Room is a fragrance brand specializing in perfumes, body mists, multi-purpose fragrance sprays, colognes, and other fragrance products. I contributed to the visual development and packaging design of the brand\'s products.',
    descriptionAr:
      'علامة عطرية متخصصة في العطور، ورذاذ الجسم، وبخاخات العطور متعددة الاستخدامات، والكولونيا وغيرها من المنتجات العطرية. ساهمت في التطوير البصري وتصميم عبوات المنتجات.',
    roleEn:
      'Packaging design, Product label design, Sticker design, Die-cut adaptation, Typography, Color coordination, Print preparation, Mockup creation',
    roleAr:
      'تصميم العبوات، تصميم ملصقات المنتجات، تصميم الاستيكرات، تكييف الداي كات، تنسيق الخطوط، تنسيق الألوان، تجهيز الملفات للطباعة، إنشاء الموك أب',
    image: "/images/GR/perfumes/madini rose.png",
    images: [
      "/images/GR/Almadinah collection freshner/diecut amber alhojrah.png",
      "/images/GR/Almadinah collection freshner/diecut jenan taibah.png",
      "/images/GR/Almadinah collection freshner/diecut musk almadinah.png",
      "/images/GR/Almadinah collection freshner/Diecut oud alqubah.png",
      "/images/GR/Almadinah collection freshner/diecut ward almadinah.png",
      "/images/GR/Almadinah collection freshner/jenan+Amber mockup.png",
      "/images/GR/Almadinah collection freshner/musk mockup.png",
      "/images/GR/Almadinah collection freshner/oud mockup.png",
      "/images/GR/Almadinah collection freshner/ward mockup.png",
      "/images/GR/musk collections/كولكشن المسك.jpeg",
      "/images/GR/musk collections/مسك الرمان .jpeg",
      "/images/GR/musk collections/مسك الطهارة.jpeg",
      "/images/GR/musk collections/مسك سنشوال.jpeg",
      "/images/GR/perfumes/6.png",
      "/images/GR/perfumes/7.png",
      "/images/GR/perfumes/8.png",
      "/images/GR/perfumes/9.png",
      "/images/GR/perfumes/10.png",
      "/images/GR/perfumes/madini and others.png",
      "/images/GR/perfumes/madini rose.png",
    ],
    tags: ['packaging', 'product', 'fragrance', 'branding'],
    isFeatured: true,
    type: 'case-study',
    order: 1,
  },

  {
  id: 'jasmines',
  titleEn: 'Jasmines',
  titleAr: 'جاسمينز',
  categoryEn: 'Brand Identity & Ongoing Design',
  categoryAr: 'الهوية البصرية والتصميم المستمر',
  descriptionEn:
    'Jasmines is a coffee and hospitality project whose visual identity was developed from the ground up. I created the brand identity and continue to work with the project on ongoing visual materials and applications.',
  descriptionAr:
    'مشروع قهوة وضيافة تم تطوير هويته البصرية من الصفر. قمت بإنشاء الهوية البصرية والاستمرار في العمل على المواد والتطبيقات البصرية للمشروع.',
  roleEn:
    'Full visual identity development, Logo design, Color system, Typography, Visual elements, Cup design, Loyalty card, Printed materials, Social media design',
  roleAr:
    'تطوير الهوية البصرية الكاملة، تصميم الشعار، نظام الألوان، الخطوط، العناصر البصرية، تصميم الأكواب، بطاقة الولاء، المواد المطبوعة، تصميم وسائل التواصل',
  image: '/images/Jasmine Caffee/Jasmines Cups mockup.png',
  images: [
    '/images/Jasmine Caffee/Jasmines Cups mockup.png',
    '/images/Jasmine Caffee/JASMINES LOGO-0١.png',
    '/images/Jasmine Caffee/sweet box.jpeg',
    '/images/Jasmine Caffee/بطاقة الولاء صوره.png',
  ],
  tags: ['branding', 'identity', 'coffee', 'hospitality'],
  isFeatured: true,
  type: 'case-study',
  order: 2,
},

  {
    id: 'suhanda',
    titleEn: 'Suhanda',
    titleAr: 'سوهاندا',
    categoryEn: 'Packaging & Product Design',
    categoryAr: 'تصميم التغليف والمنتج',
    descriptionEn:
      'Suhanda is a brand under Khaled Hamed Bardisi Factory, specializing in essential oils and fragrance devices. The project includes packaging and product applications created for the brand.',
    descriptionAr:
      'علامة تجارية تابعة لمصنع خالد حامد برديسي، متخصصة في الزيوت العطرية وأجهزة التعطير. يتضمن المشروع تصميمات التغليف وتطبيقات المنتجات الخاصة بالعلامة التجارية.',
    roleEn:
      'Essential oil label design, Packaging design, Fragrance device box design, Custom packaging applications, Typography, Color coordination',
    roleAr:
      'تصميم ملصقات الزيوت العطرية، تصميم العبوات، تصميم صناديق أجهزة التعطير، تطبيقات التغليف المخصص، تنسيق الخطوط، تنسيق الألوان',
    image: "/images/suhanda/ستيكر سوهاندا العلبه البيضا.jpeg",
    images: [
      "/images/suhanda/بوكس اجهزة تعطير الجامعة الاسلامية.jpeg",
      "/images/suhanda/بوكس اجهزة تعطير جمعيةمجتمعي.jpeg",
      "/images/suhanda/بوكس اجهزة تعطير كيا.jpeg",
      "/images/suhanda/ستيكر العلبه الزرقا.jpeg",
      "/images/suhanda/ستيكر سوهاندا العلبه البيضا.jpeg",
    ],
    tags: ['packaging', 'product', 'essential-oils', 'fragrance'],
    isFeatured: true,
    type: 'case-study',
    order: 3,
  },

  {
    id: 'areekah-aljood',
    titleEn: 'عريكة الجود — Areekah Aljood',
    titleAr: 'عريكة الجود',
    categoryEn: 'Brand Identity & Packaging',
    categoryAr: 'الهوية البصرية والتغليف',
    descriptionEn:
      'Areekah Aljood is a family-run business specializing in traditional Southern Saudi areekah. The visual identity was developed around cultural references associated with Southern Saudi Arabia.',
    descriptionAr:
      'مشروع لأسر منتجة متخصصة في تقديم عريكة جنوب السعودية التقليدية. تم تطوير الهوية البصرية حول الإشارات الثقافية المرتبطة بجنوب المملكة.',
    roleEn:
      'Logo design, Visual identity, Business card design, Pattern development, Packaging design, Mockup presentation',
    roleAr:
      'تصميم الشعار، الهوية البصرية، تصميم بطاقة العمل، تطوير النمط، تصميم العبوات، عرض الموك أب',
    image: "/images/عريكة الجود/areekah aljood bag mockup.png",
    images: [
      "/images/عريكة الجود/areekah aljood bag mockup.png",
      "/images/عريكة الجود/Areekah aljood business card mockup.png",
    ],
    tags: ['branding', 'packaging', 'food', 'cultural'],
    isFeatured: true,
    type: 'case-study',
    order: 4,
  },

  {
    id: 'islamic-university-alsaqifa',
    titleEn: 'Islamic University',
    titleAr: 'الجامعة الإسلامية',
    categoryEn: 'Packaging & Product Design',
    categoryAr: 'تصميم التغليف والمنتج',
    descriptionEn:
      'A product packaging project created in collaboration with the Islamic University and Al-Saqifa. The project included a collection of fragrance and perfume products with coordinated visual applications.',
    descriptionAr:
      'مشروع لتغليف المنتجات تم إنشاؤه بالتعاون مع الجامعة الإسلامية والسقيفة. اشتمل المشروع على مجموعة من منتجات العطور مع تطبيقات بصرية منسقة.',
    roleEn:
      'Product packaging design, Fragrance spray sticker design, Tola packaging design, Perfume bottle packaging, Visual coordination',
    roleAr:
      'تصميم عبوات المنتجات، تصميم ملصقات بخاخ العطور، تصميم عبوات الطولة، تصميم عبوات زجاجات العطور، التنسيق البصري',
    image: "/images/الجامعة الاسلامية/mock up 1.png",
    images: [
      "/images/الجامعة الاسلامية/mock up 1.png",
      "/images/الجامعة الاسلامية/mock up 2.png",
      "/images/الجامعة الاسلامية/mock up 3.png",
      "/images/الجامعة الاسلامية/mock up 4.png",
      "/images/الجامعة الاسلامية/mock up 5.png",
      "/images/الجامعة الاسلامية/mock up 6.png",
      "/images/الجامعة الاسلامية/mock up 8.png",
      "/images/الجامعة الاسلامية/mockup 7.png",
    ],
    tags: ['packaging', 'fragrance', 'perfume', 'product'],
    isFeatured: true,
    type: 'case-study',
    order: 5,
  },

  {
    id: 'arzaq-plus',
    titleEn: 'Arzaq Plus',
    titleAr: 'أرزاق بلس',
    categoryEn: 'Digital Advertising / Promotional Content',
    categoryAr: 'الإعلانات الرقمية / المحتوى الترويجي',
    descriptionEn:
      'Arzaq Plus is a digital B2B platform serving cafes. I designed advertising and promotional content for the platform.',
    descriptionAr:
      'منصة رقمية B2B تخدم قطاع المقاهي. صممت محتوى إعلانيًا وترويجيًا للمنصة.',
    roleEn:
      'Social media design, Digital advertising, Promotional campaign design, Marketing content, Visual composition',
    roleAr:
      'تصميم وسائل التواصل الاجتماعي، الإعلانات الرقمية، تصميم الحملات الترويجية، المحتوى التسويقي، التكوين البصري',
    image: "/images/Arzaq plus applecation/ارزاق-0١.png",
    images: [
      "/images/Arzaq plus applecation/ارزاق-0١.png",
      "/images/Arzaq plus applecation/ارزاق-0٣.png",
      "/images/Arzaq plus applecation/ارزاق-0٤.png",
      "/images/Arzaq plus applecation/ارزاق-0٥.png",
      "/images/Arzaq plus applecation/ارزاق-0٦.png",
      "/images/Arzaq plus applecation/ارزاق-0٧.png",
      "/images/Arzaq plus applecation/ارزاق-0٨.png",
    ],
    tags: ['advertising', 'social-media', 'digital', 'marketing'],
    type: 'project',
    order: 6,
  },

  {
    id: 'my-visual-identity',
    titleEn: 'My Visual Identity',
    titleAr: 'هويتي البصرية',
    categoryEn: 'Personal Branding',
    categoryAr: 'الهوية الشخصية',
    descriptionEn:
      'A personal visual identity created for Marwah Alharbi, reflecting my design approach through a simple, elegant and contemporary visual language.',
    descriptionAr:
      'هوية بصرية شخصية تعكس نهجي في التصميم من خلال لغة بصرية بسيطة وراقية وعصرية.',
    roleEn:
      'Logo design, Visual identity system, Stationery design, Business card, Personal branding',
    roleAr:
      'تصميم الشعار، نظام الهوية البصرية، تصميم المطبوعات، بطاقة العمل، الهوية الشخصية',
    image: "/images/My visual identaty/Marwah's logo.png",
    images: [
      "/images/My visual identaty/Marwah's logo.png",
      "/images/My visual identaty/Marwah's bussines card mockup.png",
      "/images/My visual identaty/Marwah's sticker mockup.png",
    ],
    tags: ['personal-branding', 'identity', 'logo'],
    type: 'project',
    order: 7,
  },

  {
    id: 'rmb-perfume',
    titleEn: 'R.M.B Perfume',
    titleAr: 'R.M.B Perfume',
    categoryEn: 'Brand Identity Concept',
    categoryAr: 'مفهوم الهوية البصرية',
    descriptionEn:
      'An initial visual identity concept developed for a proposed perfume brand. The project explored how the identity could be applied across perfume packaging and printed materials.',
    descriptionAr:
      'مفهوم هوية بصرية أولي تم تطويره لعلامة عطور مقترحة. استكشف المشروع كيفية تطبيق الهوية عبر عبوات العطور والمواد المطبوعة.',
    roleEn:
      'Logo design, Initial visual identity, Perfume bottle application, Mockups, Identity presentation',
    roleAr:
      'تصميم الشعار، الهوية البصرية الأولية، تطبيق الهوية على زجاجة العطر، الموك أب، عرض الهوية',
    image: "/images/RMB Perfum/R.M.B identity-01.png",
    images: [
      "/images/RMB Perfum/R.M.B identity-01.png",
    ],
    tags: ['branding', 'fragrance', 'concept', 'identity'],
    type: 'project',
    order: 8,
  },

  {
    id: 'wall-mural-design',
    titleEn: 'Wall & Mural Design',
    titleAr: 'تصميم اللوحات الجدارية',
    categoryEn: 'Large-Format Design',
    categoryAr: 'تصميم الطباعة الكبيرة',
    descriptionEn:
      'A collection of proposed mural designs exploring wall printing and large-format visual applications.',
    descriptionAr:
      'مجموعة من تصاميم اللوحات الجدارية المقترحة، تستكشف توظيف العناصر البصرية في المساحات والجدران.',
    roleEn:
      'Concept and design, Large-format composition, Color selection, Print preparation, Mockup presentation',
    roleAr:
      'المفهوم والتصميم، التكوين كبير الحجم، اختيار الألوان، تجهيز الطباعة، عرض الموك أب',
    image: "/images/لوحات/black&white marble.png",
    images: [
      "/images/لوحات/black&white marble.png",
      "/images/لوحات/blue murals.png",
      "/images/لوحات/colorful modern.png",
      "/images/لوحات/desert murals.png",
      "/images/لوحات/navy blue mockup smaal size.png",
      "/images/لوحات/pink board.png",
      "/images/لوحات/stair mural 2.png",
    ],
    tags: ['large-format', 'mural', 'print', 'design'],
    type: 'gallery',
    order: 9,
  },

  {
    id: 'yanbu-city-identity',
    titleEn: 'Yanbu City Visual Identity',
    titleAr: 'هوية مدينة ينبع البصرية',
    categoryEn: 'City Branding Concept / Competition Entry',
    categoryAr: 'مفهوم هوية المدينة / مشاركة في المسابقة',
    descriptionEn:
      'A visual identity concept developed as an entry for a competition to select a visual identity for Yanbu City. The concept was developed around visual elements inspired by Yanbu.',
    descriptionAr:
      'مفهوم هوية بصرية تم تطويره كمشاركة في مسابقة لاختيار هوية بصرية لمدينة ينبع. تم تطوير المفهوم حول عناصر بصرية مستوحاة من ينبع.',
    roleEn:
      'Logo design, Color palette, Typography, Pattern development, Visual identity system',
    roleAr:
      'تصميم الشعار، لوحة الألوان، الخطوط، تطوير النمط، نظام الهوية البصرية',
    image: "/images/مسابقة هوية مدينة ينبع البصرية.png",
    images: [
      "/images/مسابقة هوية مدينة ينبع البصرية.png",
    ],
    tags: ['city-branding', 'competition', 'identity', 'concept'],
    type: 'project',
    order: 10,
  },

  {
    id: 'instagram-social-media',
    titleEn: 'Instagram — Selected Social Media Work',
    titleAr: 'إنستاجرام — أعمال وسائل التواصل المختارة',
    categoryEn: 'Social Media Design',
    categoryAr: 'تصميم وسائل التواصل',
    descriptionEn:
      'A collection of selected social media design work covering different projects and visual campaigns.',
    descriptionAr:
      'مجموعة من أعمال تصميم وسائل التواصل المختارة التي تغطي مشاريع وحملات بصرية متنوعة.',
    roleEn:
      'Social media content design, Visual branding, Campaign design, Digital content creation',
    roleAr:
      'تصميم محتوى وسائل التواصل، الهوية البصرية، تصميم الحملات، إنشاء المحتوى الرقمي',
    image: "/images/instagram accont/50.png",
    images: [
      "/images/instagram accont/38.png",
      "/images/instagram accont/50.png",
    ],
    tags: ['social-media', 'instagram', 'digital', 'marketing'],
    type: 'gallery',
    order: 11,
  },

  {
    id: 'miscellaneous-works',
    titleEn: 'Miscellaneous Works',
    titleAr: 'أعمال متنوعة',
    categoryEn: 'Selected Graphic Design',
    categoryAr: 'تصميم جرافيك مختار',
    descriptionEn:
      'A collection of previous graphic design projects covering different areas of visual communication and advertising.',
    descriptionAr:
      'مجموعة من مشاريع التصميم الجرافيكي السابقة تغطي مجالات مختلفة من الاتصال البصري والإعلانات.',
    roleEn:
      'Concept design, Visual creation, Advertising design, Brand identity support',
    roleAr:
      'تصميم المفهوم، الإنشاء البصري، تصميم الإعلانات، دعم الهوية البصرية',
    image: "/images/مشاريع متنوعة/Tea ads mockup.png",
    images: [
      "/images/مشاريع متنوعة/awareness Mockup.png",
      "/images/مشاريع متنوعة/Haibah marketing agency visual identaty.png",
      "/images/مشاريع متنوعة/Tea ads mockup.png",
    ],
    tags: ['advertising', 'print', 'identity', 'design'],
    type: 'gallery',
    order: 12,
  },
]

export const services = [
  {
    enName: 'Branding & Visual Identity',
    arName: 'الهوية البصرية والعلامة التجارية',
  },
  {
    enName: 'Logo Design',
    arName: 'تصميم الشعار',
  },
  {
    enName: 'Packaging Design',
    arName: 'تصميم التغليف',
  },
  {
    enName: 'Print Design',
    arName: 'تصميم الطباعة',
  },
  {
    enName: 'Social Media Design',
    arName: 'تصميم وسائل التواصل',
  },
  {
    enName: 'Marketing Materials',
    arName: 'مواد التسويق',
  },
  {
    enName: 'Presentation Design',
    arName: 'تصميم العروض التقديمية',
  },
  {
    enName: 'Illustration',
    arName: 'الرسوم التوضيحية',
  },
]

export const tools = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Canva',
  'Procreate',
]