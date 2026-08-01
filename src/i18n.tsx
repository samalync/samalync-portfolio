import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "ar";

type WidenTranslation<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly WidenTranslation<Item>[]
    : T extends object
      ? { readonly [Key in keyof T]: WidenTranslation<T[Key]> }
      : T;

export type TranslationMap = WidenTranslation<typeof translations.en>;

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  t: <K extends keyof TranslationMap>(key: K) => TranslationMap[K];
};

export const translations = {
  en: {
    header: {
      nav: {
        home: "Home",
        services: "Services",
        projects: "Projects",
        about: "About",
        partnerships: "Partnerships",
        clients: "Clients",
        contact: "Contact",
      },
      getOffer: "Get Offer",
      languageLabel: "Language",
      english: "EN",
      arabic: "AR",
    },
    hero: {
      available: "Available for Projects",
      title1: "Transform Your",
      title2: "Digital Vision",
      title3: "Into Reality",
      subtitle:
        "We craft innovative software solutions and stunning mobile applications that propel your business into the future.",
      fast: "Fast Delivery",
      quality: "Premium Quality",
      secure: "Secure & Scalable",
      cta: "Start Your Project",
      stats: ["Projects Completed", "Support Available", "Years Experience", "Client Satisfaction"],
    },
    services: {
      eyebrow: "WHAT WE DO",
      title: "Our Services",
      intro: "We provide comprehensive technology solutions to help your business grow and succeed in the digital world.",
      ctaQuestion: "Ready to transform your business with our expertise?",
      cta: "Scroll down to get started",
      items: [
        {
          title: "Software Solutions",
          description: "End-to-End Digital Systems",
          details:
            "We design and build complete software solutions from high-performance mobile and web applications to secure, scalable backend systems and APIs. Our focus is delivering reliable, future-ready products that grow with your business.",
        },
        {
          title: "AI & Automation",
          description: "Intelligent Process Optimization",
          details:
            "We implement AI-powered solutions and automation systems to streamline operations, enhance decision-making, and drive efficiency. From chatbots and predictive analytics to workflow automation, we help businesses leverage cutting-edge technology for competitive advantage.",
        },
        {
          title: "Graphic Design",
          description: "Distinct Visual Identity",
          details:
            "We craft logos, brand systems, and UI designs that communicate your brand's personality, ensure visual consistency, and elevate your presence across digital platforms.",
        },
        {
          title: "Marketing & Brand Strategy",
          description: "Growth-Driven Market Presence",
          details:
            "In collaboration with Khartoum Interfilem, we provide strategic marketing and branding services that help products reach the right audience, strengthen brand identity, and drive measurable growth across digital channels.",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT US",
      title: "Meet Our Team",
      intro:
        "We are a software company delivering innovative mobile, web, and design solutions, backed by experienced leadership and a network of skilled independent contributors and collaborators.",
      core: "Core Team",
      coreTitle: "Leadership, engineering, and design",
      coreIntro: "The people guiding strategy and delivering the product, design, and technical work behind Samalync.",
      teamMembers: "team members",
      training: "Training Program",
      trainingTitle: "Trainees growing with the team",
      trainingIntro:
        "A dedicated space for emerging designers and developers contributing to real products through UI/UX and Flutter work.",
      trainees: "Trainees",
      trainee: "Trainee",
      stats: ["Projects Completed", "Client Satisfaction", "Support Available"],
    },
    clients: {
      eyebrow: "SELECTED CLIENTS",
      title: "Selected Clients",
      intro: "We work with forward-thinking brands to build digital products that make a difference.",
      items: [
        {
          name: "Pet Bait",
          description: "On-demand Home Veterinary Service",
          details:
            "Pet Bait is a premium on-demand home veterinary service for pets, helping pet owners access trusted veterinary care from the comfort of home.",
        },
        {
          name: "Hemoola",
          description: "Connected Freight & Logistics Platform",
          details:
            "Hemoola connects shippers with drivers and carriers in one place, enabling them to post loads, negotiate terms, track deliveries, manage payments, and build trust through ratings.",
        },
        {
          name: "UMURANGA",
          description: "Partner Discovery Platform for Rwandans",
          details:
            "UMURANGA is a platform designed to help Rwandans find a spouse or compatible partner and build meaningful, lasting connections.",
        },
        {
          name: "RAMS",
          description: "Recruitment SaaS Platform",
          details:
            "RAMS is a Philippines-based recruitment platform connecting job seekers with opportunities in the UAE and the Middle East. Admins and agencies can post openings, while applicants can browse roles and apply directly through the platform.",
        },
      ],
    },
    partnerships: {
      eyebrow: "OUR PARTNERS",
      title: "Partnerships",
      intro: "We collaborate with innovative companies to deliver exceptional digital solutions and expand our reach across diverse markets.",
      items: [
        {
          name: "Viewesta",
          description: "African Streaming Platform",
          details:
            "Viewesta is a leading African streaming platform delivering premium entertainment content across the continent. We're proud to partner with Viewesta in bringing innovative digital experiences to African audiences.",
        },
        {
          name: "Sudan Mart",
          description: "On-demand delivery & last-mile logistics",
          details:
            "Sudan Mart is a fast and reliable delivery service for goods and food. We collaborate to build smooth ordering experiences, real-time updates, and scalable delivery operations.",
        },
        {
          name: "Khartoum Interfilm",
          description: "Marketing agency",
          details:
            "Khartoum Interfilm is a creative marketing agency focused on storytelling, brand strategy, and creative campaigns across digital platforms. We partner to deliver standout marketing and visual experiences.",
        },
        {
          name: "Ozone Restaurant & Cafe",
          description: "Restaurant and dining establishment",
          details:
            "Ozone Restaurant & Cafe offers exceptional dining experiences with diverse culinary options. We collaborate to enhance their digital presence and streamline their operations through innovative technology solutions.",
        },
      ],
    },
    portfolio: {
      eyebrow: "OUR WORK",
      title: "Projects",
      intro:
        "Explore our portfolio of successful projects that showcase our expertise in mobile development, web applications, and graphic design.",
      coreTitle: "Core Products",
      coreSubtitle: "Products built and owned by Samalync",
      websiteTitle: "Website Solutions",
      websiteSubtitle: "Business websites and digital experiences delivered for clients",
      brandTitle: "Brand Identity & Visual Design",
      brandSubtitle: "Logo design, brand systems, and graphic design work",
      teamTitle: "Projects by Team Members",
      teamSubtitle: "Work developed by individual team members, showcasing their breadth of experience",
      disclaimer:
        "This project was completed by one of our company members before the founding of Samalync, and it now forms part of our collective experience",
      aboutProject: "About This Project",
      features: "Key Features",
      technologies: "Technologies Used",
      role: "Role",
      outcome: "Outcome",
      screenshots: "Screenshots",
      brandVisuals: "Brand Visuals",
      previousImage: "Previous image",
      nextImage: "Next image",
      expandedView: "Expanded view",
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      title: "Contact Us",
      intro: "Ready to start your project? Get in touch with us and let's discuss how we can help bring your ideas to life.",
      sendTitle: "Send Message",
      sendIntro: "Ready to start your project? Let's discuss how we can help bring your ideas to life.",
      name: "Name *",
      namePlaceholder: "Your full name",
      email: "Email *",
      subject: "Subject",
      subjectPlaceholder: "Project inquiry, partnership, etc.",
      message: "Message *",
      messagePlaceholder: "Tell us about your project or how we can help you...",
      sending: "Sending...",
      send: "Send Message",
      error: "Error",
      required: "Please fill in all required fields.",
      invalidEmail: "Please enter a valid email address.",
      successTitle: "Message Sent!",
      success: "Your message has been sent successfully. We'll get back to you soon!",
      failed: "Failed to send message. Please try again or contact us directly.",
      panelTitle: "Get in Touch",
      panelIntro: "We'd love to hear from you. Whether you have a project in mind or need consultation, reach out anytime.",
      response: "We typically respond within 24 hours",
      info: {
        email: "Email",
        call: "Call",
        location: "Location",
        hours: "Working Hours",
        weekdays: "Monday - Friday",
      },
    },
    footer: {
      description:
        "We are a software company specializing in mobile applications, websites, and smart system solutions. Driven by innovation, we deliver technology solutions that help our clients grow and achieve their goals efficiently and flexibly.",
      quickLinks: "Quick Links",
      services: "Services",
      leadership: "Leadership",
      projects: ["Mobile App Development", "Website Development", "Backend & APIs", "Graphic Design"],
      role: "Chief Executive Officer (CEO)",
      linkedin: "LinkedIn Profile",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      backToTop: "Back to top",
    },
    teamPage: {
      eyebrow: "OUR TEAM",
      title: "Meet Our Team",
      intro:
        "Meet the core team leading delivery across engineering, product, and design, plus the trainees growing through hands-on UI/UX and Flutter work.",
      clickToEnlarge: "Click to enlarge",
      enlargedPhoto: "Enlarged photo",
      core: "Core Team",
      coreTitle: "Specialists building the company forward",
      coreIntro: "The people shaping strategy, product delivery, engineering, and brand execution across Samalync.",
      coreMembers: "core members",
      traineeTrack: "Trainee Track",
      traineeTitle: "Trainees in product, UX, and Flutter",
      traineeIntro: "This section highlights trainees separately so their growth, focus areas, and contributions are clear at a glance.",
      people: "People Across Samalync",
      specialists: "Core Team Specialists",
      activeTrainees: "Active Trainees",
    },
    notFound: {
      message: "Oops! Page not found",
      home: "Return to Home",
    },
  },
  ar: {
    header: {
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        projects: "المشاريع",
        about: "من نحن",
        partnerships: "الشراكات",
        clients: "العملاء",
        contact: "تواصل معنا",
      },
      getOffer: "اطلب عرضا",
      languageLabel: "اللغة",
      english: "EN",
      arabic: "AR",
    },
    hero: {
      available: "متاحون للمشاريع",
      title1: "حوّل",
      title2: "رؤيتك الرقمية",
      title3: "إلى واقع",
      subtitle: "نطوّر حلولا برمجية مبتكرة وتطبيقات موبايل مميزة تدفع أعمالك نحو المستقبل.",
      fast: "تسليم سريع",
      quality: "جودة عالية",
      secure: "آمن وقابل للتوسع",
      cta: "ابدأ مشروعك",
      stats: ["مشاريع مكتملة", "دعم متاح", "سنوات خبرة", "رضا العملاء"],
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "خدماتنا",
      intro: "نقدم حلولا تقنية متكاملة تساعد أعمالك على النمو والنجاح في العالم الرقمي.",
      ctaQuestion: "هل أنت مستعد لتحويل أعمالك بخبراتنا؟",
      cta: "مرر للأسفل للبدء",
      items: [
        {
          title: "حلول برمجية",
          description: "أنظمة رقمية متكاملة",
          details:
            "نصمم ونبني حلولا برمجية كاملة، من تطبيقات الموبايل والويب عالية الأداء إلى أنظمة خلفية وواجهات API آمنة وقابلة للتوسع. نركز على منتجات موثوقة وجاهزة للمستقبل تنمو مع أعمالك.",
        },
        {
          title: "الذكاء الاصطناعي والأتمتة",
          description: "تحسين ذكي للعمليات",
          details:
            "ننفذ حلولا مدعومة بالذكاء الاصطناعي وأنظمة أتمتة لتبسيط العمليات وتحسين اتخاذ القرار وزيادة الكفاءة. من روبوتات المحادثة والتحليلات التنبؤية إلى أتمتة سير العمل، نساعد الشركات على الاستفادة من التقنيات الحديثة.",
        },
        {
          title: "التصميم الجرافيكي",
          description: "هوية بصرية مميزة",
          details:
            "نصمم الشعارات وأنظمة الهوية وواجهات الاستخدام التي تعبر عن شخصية علامتك، وتحافظ على الاتساق البصري، وترفع حضورك عبر المنصات الرقمية.",
        },
        {
          title: "التسويق واستراتيجية العلامة",
          description: "حضور سوقي مدفوع بالنمو",
          details:
            "بالتعاون مع Khartoum Interfilem، نقدم خدمات تسويق وبناء علامة تساعد المنتجات على الوصول للجمهور المناسب، وتعزيز الهوية، وتحقيق نمو قابل للقياس عبر القنوات الرقمية.",
        },
      ],
    },
    about: {
      eyebrow: "من نحن",
      title: "تعرف على فريقنا",
      intro: "نحن شركة برمجيات تقدم حلولا مبتكرة للموبايل والويب والتصميم، مدعومة بقيادة خبيرة وشبكة من المساهمين والمتعاونين المستقلين المهرة.",
      core: "الفريق الأساسي",
      coreTitle: "قيادة وهندسة وتصميم",
      coreIntro: "الأشخاص الذين يقودون الاستراتيجية وينجزون أعمال المنتج والتصميم والتقنية في سامالينك.",
      teamMembers: "أعضاء الفريق",
      training: "برنامج التدريب",
      trainingTitle: "متدربون ينمون مع الفريق",
      trainingIntro: "مساحة مخصصة للمصممين والمطورين الصاعدين للمساهمة في منتجات حقيقية عبر تصميم UI/UX وتطوير Flutter.",
      trainees: "متدربون",
      trainee: "متدرب",
      stats: ["مشاريع مكتملة", "رضا العملاء", "دعم متاح"],
    },
    clients: {
      eyebrow: "عملاء مختارون",
      title: "عملاؤنا المختارون",
      intro: "نعمل مع علامات طموحة لبناء منتجات رقمية تصنع أثرا.",
      items: [
        {
          name: "Pet Bait",
          description: "خدمة بيطرية منزلية عند الطلب",
          details:
            "Pet Bait خدمة بيطرية منزلية مميزة عند الطلب للحيوانات الأليفة، تساعد أصحاب الحيوانات على الوصول إلى رعاية بيطرية موثوقة من المنزل.",
        },
        {
          name: "Hemoola",
          description: "منصة متكاملة للشحن والخدمات اللوجستية",
          details:
            "تربط Hemoola أصحاب الشحنات بالسائقين وشركات النقل في مكان واحد، وتتيح نشر الشحنات والتفاوض وتتبع عمليات التسليم وإدارة المدفوعات وبناء الثقة عبر التقييمات.",
        },
        {
          name: "UMURANGA",
          description: "منصة للعثور على شريك للروانديين",
          details:
            "UMURANGA منصة مصممة لمساعدة الروانديين على العثور على شريك حياة أو شريك متوافق وبناء علاقات هادفة ودائمة.",
        },
        {
          name: "RAMS",
          description: "منصة توظيف سحابية",
          details:
            "RAMS منصة توظيف سحابية مقرها الفلبين تربط الباحثين عن عمل بفرص وظيفية في الإمارات والشرق الأوسط. تتيح للمشرفين ووكالات التوظيف نشر الوظائف، وللمتقدمين تصفح الفرص والتقديم عليها مباشرة عبر المنصة.",
        },
      ],
    },
    partnerships: {
      eyebrow: "شركاؤنا",
      title: "الشراكات",
      intro: "نتعاون مع شركات مبتكرة لتقديم حلول رقمية استثنائية وتوسيع أثرنا عبر أسواق متنوعة.",
      items: [
        {
          name: "Viewesta",
          description: "منصة بث أفريقية",
          details:
            "Viewesta منصة بث أفريقية رائدة تقدم محتوى ترفيهيا مميزا في أنحاء القارة. نفخر بشراكتنا معها لتقديم تجارب رقمية مبتكرة للجمهور الأفريقي.",
        },
        {
          name: "Sudan Mart",
          description: "توصيل عند الطلب ولوجستيات الميل الأخير",
          details:
            "Sudan Mart خدمة توصيل سريعة وموثوقة للسلع والطعام. نتعاون معها لبناء تجارب طلب سلسة وتحديثات فورية وعمليات توصيل قابلة للتوسع.",
        },
        {
          name: "Khartoum Interfilm",
          description: "وكالة تسويق",
          details:
            "Khartoum Interfilm وكالة تسويق إبداعية تركز على السرد واستراتيجية العلامة والحملات الإبداعية عبر المنصات الرقمية. نتعاون لتقديم تجارب تسويقية وبصرية مميزة.",
        },
        {
          name: "Ozone Restaurant & Cafe",
          description: "مطعم ومقهى",
          details:
            "يقدم Ozone Restaurant & Cafe تجارب طعام مميزة بخيارات متنوعة. نتعاون معهم لتعزيز حضورهم الرقمي وتسهيل عملياتهم عبر حلول تقنية مبتكرة.",
        },
      ],
    },
    portfolio: {
      eyebrow: "أعمالنا",
      title: "المشاريع",
      intro: "استكشف مجموعة من مشاريعنا الناجحة التي تبرز خبرتنا في تطوير تطبيقات الموبايل وتطبيقات الويب والتصميم الجرافيكي.",
      coreTitle: "منتجات أساسية",
      coreSubtitle: "منتجات بُنيت وتملكها سامالينك",
      websiteTitle: "حلول المواقع",
      websiteSubtitle: "مواقع أعمال وتجارب رقمية نُفذت للعملاء",
      brandTitle: "الهوية البصرية والتصميم",
      brandSubtitle: "تصميم شعارات وأنظمة هوية وأعمال تصميم جرافيكي",
      teamTitle: "مشاريع أعضاء الفريق",
      teamSubtitle: "أعمال طورها أعضاء الفريق بشكل فردي وتعرض تنوع خبراتهم",
      disclaimer: "أُنجز هذا المشروع بواسطة أحد أعضاء شركتنا قبل تأسيس سامالينك، وهو الآن جزء من خبرتنا الجماعية",
      aboutProject: "عن هذا المشروع",
      features: "أهم الميزات",
      technologies: "التقنيات المستخدمة",
      role: "الدور",
      outcome: "النتيجة",
      screenshots: "لقطات الشاشة",
      brandVisuals: "العناصر البصرية للهوية",
      previousImage: "الصورة السابقة",
      nextImage: "الصورة التالية",
      expandedView: "عرض موسع",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "اتصل بنا",
      intro: "هل أنت مستعد لبدء مشروعك؟ تواصل معنا لنتحدث عن كيفية تحويل أفكارك إلى واقع.",
      sendTitle: "إرسال رسالة",
      sendIntro: "هل أنت مستعد لبدء مشروعك؟ دعنا نناقش كيف يمكننا مساعدتك في تحويل أفكارك إلى واقع.",
      name: "الاسم *",
      namePlaceholder: "اسمك الكامل",
      email: "البريد الإلكتروني *",
      subject: "الموضوع",
      subjectPlaceholder: "استفسار مشروع، شراكة، وغيرها",
      message: "الرسالة *",
      messagePlaceholder: "أخبرنا عن مشروعك أو كيف يمكننا مساعدتك...",
      sending: "جار الإرسال...",
      send: "إرسال الرسالة",
      error: "خطأ",
      required: "يرجى ملء كل الحقول المطلوبة.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      successTitle: "تم إرسال الرسالة!",
      success: "تم إرسال رسالتك بنجاح. سنعود إليك قريبا!",
      failed: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
      panelTitle: "ابق على تواصل",
      panelIntro: "يسعدنا سماعك. سواء كان لديك مشروع أو تحتاج إلى استشارة، تواصل معنا في أي وقت.",
      response: "عادة نرد خلال 24 ساعة",
      info: {
        email: "البريد الإلكتروني",
        call: "الهاتف",
        location: "الموقع",
        hours: "ساعات العمل",
        weekdays: "الاثنين - الجمعة",
      },
    },
    footer: {
      description:
        "نحن شركة برمجيات متخصصة في تطبيقات الموبايل والمواقع الإلكترونية وحلول الأنظمة الذكية. بدافع الابتكار، نقدم حلولا تقنية تساعد عملاءنا على النمو وتحقيق أهدافهم بكفاءة ومرونة.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      leadership: "القيادة",
      projects: ["تطوير تطبيقات الموبايل", "تطوير المواقع", "الأنظمة الخلفية وواجهات API", "التصميم الجرافيكي"],
      role: "الرئيس التنفيذي",
      linkedin: "ملف لينكدإن",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      backToTop: "العودة للأعلى",
    },
    teamPage: {
      eyebrow: "فريقنا",
      title: "تعرف على فريقنا",
      intro: "تعرف على الفريق الأساسي الذي يقود التنفيذ في الهندسة والمنتج والتصميم، إضافة إلى المتدربين الذين يطورون مهاراتهم عمليا في UI/UX وFlutter.",
      clickToEnlarge: "اضغط للتكبير",
      enlargedPhoto: "صورة مكبرة",
      core: "الفريق الأساسي",
      coreTitle: "متخصصون يدفعون الشركة للأمام",
      coreIntro: "الأشخاص الذين يشكلون الاستراتيجية وتنفيذ المنتج والهندسة والهوية في سامالينك.",
      coreMembers: "أعضاء أساسيون",
      traineeTrack: "مسار التدريب",
      traineeTitle: "متدربون في المنتج وتجربة المستخدم وFlutter",
      traineeIntro: "يعرض هذا القسم المتدربين بشكل منفصل لتوضيح نموهم ومجالات تركيزهم ومساهماتهم بسرعة.",
      people: "أفراد سامالينك",
      specialists: "متخصصو الفريق الأساسي",
      activeTrainees: "متدربون نشطون",
    },
    notFound: {
      message: "عذرا، الصفحة غير موجودة",
      home: "العودة إلى الرئيسية",
    },
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const isArabic = language === "ar";

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic,
      setLanguage,
      t: (key) => translations[language][key],
    }),
    [isArabic, language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
