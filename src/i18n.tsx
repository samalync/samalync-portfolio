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
        academy: "Academy",
        team: "Team",
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
      training: "Samalync Academy",
      trainingTitle: "Cohort 1 trainees",
      trainingIntro:
        "Trainees from the first cohort of Samalync Academy, now in the practical phase and working on a real project inside the company.",
      academyLink: "Explore the Academy",
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
          name: "Hemooltak",
          description: "Connected Freight & Logistics Platform",
          details:
            "Hemooltak connects shippers with drivers and carriers in one place, enabling them to post loads, negotiate terms, track deliveries, manage payments, and build trust through ratings.",
        },
        {
          name: "UMURANGA",
          description: "Partner Discovery Platform for Rwandans",
          details:
            "UMURANGA is a platform designed to help Rwandans find a spouse or compatible partner and build meaningful, lasting connections.",
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
        {
          name: "SSOS",
          description: "Sudanese Students Online Summit",
          details:
            "SSOS is a community for Sudanese students running online workshops, sessions, and learning programs. We partner with SSOS to support students with technical mentorship and hands-on training in software development and design.",
        },
        {
          name: "RAMS SaaS Platform",
          description: "Recruitment SaaS Platform",
          details:
            "RAMS SaaS Platform is a Philippines-based recruitment platform connecting job seekers with opportunities in the UAE and the Middle East. Admins and agencies can post openings, while applicants can browse roles and apply directly through the platform.",
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
      mailAppTitle: "Opening your email app",
      mailApp: "Your message is ready in your email app. Press send there to reach us at support@samalync.com.",
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
        "Meet the core team leading delivery across engineering, product, and design, together with the Cohort 1 trainees of Samalync Academy.",
      core: "Core Team",
      coreTitle: "Specialists building the company forward",
      coreIntro: "The people shaping strategy, product delivery, engineering, and brand execution across Samalync.",
      coreMembers: "core members",
      traineeTrack: "Samalync Academy",
      traineeTitle: "Cohort 1 trainees",
      traineeIntro: "The first Samalync Academy cohort, currently in the practical phase: building a real project with a real API inside the company.",
      academyLink: "View Cohort 1",
      people: "People Across Samalync",
      specialists: "Core Team Specialists",
      activeTrainees: "Active Trainees",
    },
    shared: {
      linkedin: "{name} on LinkedIn",
      behance: "{name} on Behance",
      clickToEnlarge: "Click to enlarge",
      enlargedPhoto: "Enlarged photo",
      backToProfile: "Back to profile",
      newTab: "opens in a new tab",
    },
    meta: {
      home: {
        title: "SAMALYNC - Software Solutions & Mobile App Development",
        description:
          "SAMALYNC specializes in mobile app development, web solutions, backend & APIs, and graphic design. Expert company delivering innovative technology solutions for businesses.",
      },
      team: {
        title: "Our Team | SAMALYNC",
        description: "Meet the Samalync core team and the Cohort 1 trainees of Samalync Academy.",
      },
      academy: {
        title: "Samalync Academy | Flutter training inside a software company",
        description:
          "A 6-month Flutter program run inside Samalync: learn mostly online with on-site sessions in Kigali, then build a real project with a real API.",
      },
      cohort: {
        title: "{cohort} | Samalync Academy",
        description: "{cohort} of Samalync Academy ({track}): status, dates and trainees.",
      },
      notFound: {
        title: "Page not found | SAMALYNC",
        description: "The page you are looking for does not exist.",
      },
    },
    academy: {
      eyebrow: "Samalync Academy",
      heroTitle: "A training program run inside a real software company.",
      heroSubtitle: "From zero to a working mobile developer.",
      heroFacts: ["6 months", "Flutter", "Online + on-site in Kigali"],
      joinWaitlist: "Join the waitlist",
      seeCohorts: "See cohorts",
      benefitsEyebrow: "WHY THE ACADEMY",
      benefitsTitle: "What you get",
      benefitsIntro: "The program is built around one goal: finishing it able to work as a mobile developer.",
      benefits: [
        {
          title: "Real Flutter skills",
          description: "Learn Dart and Flutter step by step, from the basics to building complete mobile apps the way they are built at work.",
        },
        {
          title: "Portfolio of real projects",
          description: "Finish with work you can show: apps and features you built yourself, not just course exercises.",
        },
        {
          title: "Experience inside a company",
          description: "Work alongside our team, with code reviews, deadlines and the tools a software company uses every day.",
        },
        {
          title: "Completion certificate",
          description: "Trainees who complete the program and its requirements receive a Samalync Academy completion certificate.",
        },
      ],
      howEyebrow: "HOW IT WORKS",
      howTitle: "A 6-month path",
      howIntro: "First you learn, then you apply what you learned on a real project inside the company.",
      phases: [
        {
          months: "Months 1–4",
          title: "Learning phase",
          description: "Flutter and Dart from the basics, mostly online, with on-site sessions in Kigali.",
          points: ["Mostly online", "On-site sessions in Kigali", "Flutter and Dart from the basics"],
        },
        {
          months: "Months 5–6",
          title: "Practical phase",
          description: "A real project with a real API, built inside the company alongside our team.",
          points: ["A real project", "A real API", "Inside the company, with our team"],
        },
      ],
      timelineLabel: "6-month program timeline",
      monthShort: "M{n}",
      cohortsEyebrow: "INTAKES",
      cohortsTitle: "Cohorts",
      cohortsIntro: "Each intake is a cohort that goes through the full 6-month path together.",
      status: { active: "Active", upcoming: "Upcoming", graduated: "Graduated" },
      phase: { learning: "Learning phase", practical: "Practical phase" },
      enrollment: { open: "Applications open", full: "Seats full", waitlist: "Waitlist open", closed: "Enrollment closed" },
      startLabel: "Start",
      endLabel: "End",
      tba: "TBA",
      expectedAround: "Expected around {date}",
      trackLabel: "Track",
      seatsLabel: "Seats",
      traineesLabel: "Trainees",
      seatsCount: "{n} seats",
      viewCohort: "View {cohort}",
      meetTrainees: "Meet the trainees",
      waitlistSubject: "Samalync Academy: join the waitlist",
      waitlistSubjectCohort: "Samalync Academy: join the waitlist for {cohort}",
      waitlistSubjectFrom: "Samalync Academy: join the waitlist (from the {cohort} page)",
      moreTrainees: "+{n}",
      workEyebrow: "TRAINEE WORK",
      workTitle: "What our trainees built",
      workIntro: "A selection of projects built by Samalync Academy trainees.",
      viewProject: "View project",
      faqEyebrow: "FAQ",
      faqTitle: "Frequently asked questions",
      faq: [
        {
          question: "Who is the Academy for?",
          answer:
            "For anyone who wants to become a mobile developer: students, people early in their careers, or anyone changing careers. What matters most is motivation and the time to commit to the full six months.",
        },
        {
          question: "Do I need a programming background?",
          answer:
            "No. The program starts from zero and builds up step by step. You will need a computer and a reliable internet connection for the online sessions.",
        },
        {
          question: "What are the schedule and format?",
          answer:
            "The program lasts six months. Months 1–4 are the learning phase, mostly online with on-site sessions in Kigali. Months 5–6 are the practical phase, working on a real project with a real API inside the company.",
        },
        {
          question: "How do I get the certificate?",
          answer:
            "The completion certificate is awarded to trainees who complete both phases of the program, including the practical project.",
        },
        {
          question: "How do I apply?",
          answer:
            "Seats for Cohort 2 are full. Join the waitlist using the button on this page and we will contact you when registration for Cohort 3 opens.",
        },
      ],
      finalTitle: "Want to join the next cohort?",
      finalText: "Join the waitlist and be the first to know when registration for the next cohort opens.",
      backToAcademy: "Back to Academy",
      membersTitle: "{cohort} trainees",
      membersIntro: "Select a card to see the full profile.",
      membersHidden: "Trainee profiles for this cohort are not published yet.",
      applyNow: "Apply now",
      cohortCtaTitle: "Interested in the Academy?",
      cohortCtaText: "Join the waitlist to hear first about upcoming cohorts.",
      aboutAcademy: "About the Academy",
      traineeBadge: "Trainee",
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
        academy: "الأكاديمية",
        team: "الفريق",
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
      training: "أكاديمية سامالينك",
      trainingTitle: "متدربو الدفعة الأولى",
      trainingIntro: "متدربو الدفعة الأولى في أكاديمية سامالينك، وهم الآن في المرحلة العملية يعملون على مشروع حقيقي داخل الشركة.",
      academyLink: "اكتشف الأكاديمية",
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
          name: "Hemooltak",
          description: "منصة متكاملة للشحن والخدمات اللوجستية",
          details:
            "تربط Hemooltak أصحاب الشحنات بالسائقين وشركات النقل في مكان واحد، وتتيح نشر الشحنات والتفاوض وتتبع عمليات التسليم وإدارة المدفوعات وبناء الثقة عبر التقييمات.",
        },
        {
          name: "UMURANGA",
          description: "منصة للعثور على شريك للروانديين",
          details:
            "UMURANGA منصة مصممة لمساعدة الروانديين على العثور على شريك حياة أو شريك متوافق وبناء علاقات هادفة ودائمة.",
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
        {
          name: "SSOS",
          description: "قمة الطلاب السودانيين أونلاين",
          details:
            "SSOS مجتمع للطلاب السودانيين يقدم ورش عمل وجلسات وبرامج تعليمية عبر الإنترنت. نتشارك مع SSOS لدعم الطلاب بالإرشاد التقني والتدريب العملي في تطوير البرمجيات والتصميم.",
        },
        {
          name: "RAMS SaaS Platform",
          description: "منصة توظيف سحابية",
          details:
            "RAMS SaaS Platform منصة توظيف سحابية مقرها الفلبين تربط الباحثين عن عمل بفرص وظيفية في الإمارات والشرق الأوسط. تتيح للمشرفين ووكالات التوظيف نشر الوظائف، وللمتقدمين تصفح الفرص والتقديم عليها مباشرة عبر المنصة.",
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
      mailAppTitle: "جارٍ فتح تطبيق البريد",
      mailApp: "رسالتك جاهزة في تطبيق البريد لديك. اضغط إرسال هناك لتصل إلينا على support@samalync.com.",
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
      intro: "تعرف على الفريق الأساسي الذي يقود التنفيذ في الهندسة والمنتج والتصميم، إلى جانب متدربي الدفعة الأولى في أكاديمية سامالينك.",
      core: "الفريق الأساسي",
      coreTitle: "متخصصون يدفعون الشركة للأمام",
      coreIntro: "الأشخاص الذين يشكلون الاستراتيجية وتنفيذ المنتج والهندسة والهوية في سامالينك.",
      coreMembers: "أعضاء أساسيون",
      traineeTrack: "أكاديمية سامالينك",
      traineeTitle: "متدربو الدفعة الأولى",
      traineeIntro: "الدفعة الأولى من أكاديمية سامالينك، وهي حاليا في المرحلة العملية: بناء مشروع حقيقي يعتمد على واجهة API حقيقية داخل الشركة.",
      academyLink: "عرض الدفعة الأولى",
      people: "أفراد سامالينك",
      specialists: "متخصصو الفريق الأساسي",
      activeTrainees: "متدربون نشطون",
    },
    // NEEDS NATIVE REVIEW: the `shared`, `meta` and `academy` Arabic copy below (written in MSA).
    shared: {
      linkedin: "حساب {name} على لينكدإن",
      behance: "أعمال {name} على Behance",
      clickToEnlarge: "اضغط للتكبير",
      enlargedPhoto: "صورة مكبرة",
      backToProfile: "العودة إلى الملف",
      newTab: "يفتح في نافذة جديدة",
    },
    meta: {
      home: {
        title: "سامالينك - حلول برمجية وتطوير تطبيقات الموبايل",
        description:
          "تتخصص سامالينك في تطوير تطبيقات الموبايل وحلول الويب والأنظمة الخلفية وواجهات API والتصميم الجرافيكي، وتقدم حلولا تقنية مبتكرة للشركات.",
      },
      team: {
        title: "فريقنا | سامالينك",
        description: "تعرف على الفريق الأساسي في سامالينك ومتدربي الدفعة الأولى في أكاديمية سامالينك.",
      },
      academy: {
        title: "أكاديمية سامالينك | تدريب Flutter داخل شركة برمجيات",
        description:
          "برنامج Flutter لمدة ستة أشهر داخل سامالينك: تعلّم معظمه عن بُعد مع جلسات حضورية في كيغالي، ثم ابنِ مشروعا حقيقيا يعتمد على واجهة API حقيقية.",
      },
      cohort: {
        title: "{cohort} | أكاديمية سامالينك",
        description: "{cohort} في أكاديمية سامالينك ({track}): الحالة والمواعيد والمتدربون.",
      },
      notFound: {
        title: "الصفحة غير موجودة | سامالينك",
        description: "الصفحة التي تبحث عنها غير موجودة.",
      },
    },
    academy: {
      eyebrow: "أكاديمية سامالينك",
      heroTitle: "برنامج تدريبي يُدار داخل شركة برمجيات حقيقية.",
      heroSubtitle: "من الصفر إلى مطوّر تطبيقات موبايل جاهز للعمل.",
      heroFacts: ["6 أشهر", "Flutter", "عن بُعد + جلسات حضورية في كيغالي"],
      joinWaitlist: "انضم إلى قائمة الانتظار",
      seeCohorts: "استعرض الدفعات",
      benefitsEyebrow: "لماذا الأكاديمية",
      benefitsTitle: "ماذا ستحصل عليه",
      benefitsIntro: "صُمم البرنامج حول هدف واحد: أن تُنهيه وأنت قادر على العمل مطوّرا لتطبيقات الموبايل.",
      benefits: [
        {
          title: "مهارات Flutter حقيقية",
          description: "تعلّم Dart وFlutter خطوة بخطوة، من الأساسيات حتى بناء تطبيقات موبايل متكاملة كما تُبنى في بيئة العمل.",
        },
        {
          title: "معرض أعمال من مشاريع حقيقية",
          description: "تُنهي البرنامج ولديك أعمال تستطيع عرضها: تطبيقات وميزات بنيتها بنفسك، وليست مجرد تمارين دراسية.",
        },
        {
          title: "خبرة داخل شركة",
          description: "تعمل إلى جانب فريقنا، مع مراجعة الكود والمواعيد النهائية والأدوات التي تستخدمها شركة البرمجيات يوميا.",
        },
        {
          title: "شهادة إتمام",
          description: "يحصل المتدربون الذين يُتمّون البرنامج ومتطلباته على شهادة إتمام من أكاديمية سامالينك.",
        },
      ],
      howEyebrow: "كيف يعمل البرنامج",
      howTitle: "مسار من ستة أشهر",
      howIntro: "تتعلم أولا، ثم تطبّق ما تعلمته على مشروع حقيقي داخل الشركة.",
      phases: [
        {
          months: "الأشهر 1–4",
          title: "مرحلة التعلم",
          description: "Flutter وDart من الأساسيات، معظمها عن بُعد مع جلسات حضورية في كيغالي.",
          points: ["معظم التعلم عن بُعد", "جلسات حضورية في كيغالي", "Flutter وDart من الأساسيات"],
        },
        {
          months: "الأشهر 5–6",
          title: "المرحلة العملية",
          description: "مشروع حقيقي يعتمد على واجهة API حقيقية، يُبنى داخل الشركة إلى جانب فريقنا.",
          points: ["مشروع حقيقي", "واجهة API حقيقية", "داخل الشركة مع فريقنا"],
        },
      ],
      timelineLabel: "مسار البرنامج على مدى ستة أشهر",
      monthShort: "ش{n}",
      cohortsEyebrow: "مواعيد الالتحاق",
      cohortsTitle: "الدفعات",
      cohortsIntro: "كل دفعة مجموعة من المتدربين تسير معا في المسار الكامل لمدة ستة أشهر.",
      status: { active: "نشطة", upcoming: "قادمة", graduated: "مكتملة" },
      phase: { learning: "مرحلة التعلم", practical: "المرحلة العملية" },
      enrollment: { open: "التسجيل مفتوح", full: "المقاعد مكتملة", waitlist: "قائمة الانتظار مفتوحة", closed: "التسجيل مغلق" },
      startLabel: "البداية",
      endLabel: "النهاية",
      tba: "يُعلن لاحقا",
      expectedAround: "متوقعة في حدود {date}",
      trackLabel: "المسار",
      seatsLabel: "المقاعد",
      traineesLabel: "المتدربون",
      seatsCount: "{n} مقعدا",
      viewCohort: "عرض {cohort}",
      meetTrainees: "تعرّف على المتدربين",
      waitlistSubject: "أكاديمية سامالينك: الانضمام إلى قائمة الانتظار",
      waitlistSubjectCohort: "أكاديمية سامالينك: الانضمام إلى قائمة انتظار {cohort}",
      waitlistSubjectFrom: "أكاديمية سامالينك: الانضمام إلى قائمة الانتظار (من صفحة {cohort})",
      moreTrainees: "+{n}",
      workEyebrow: "أعمال المتدربين",
      workTitle: "ماذا بنى متدربونا",
      workIntro: "مختارات من مشاريع بناها متدربو أكاديمية سامالينك.",
      viewProject: "عرض المشروع",
      faqEyebrow: "الأسئلة الشائعة",
      faqTitle: "أسئلة متكررة",
      faq: [
        {
          question: "لمن هذه الأكاديمية؟",
          answer:
            "لكل من يرغب في أن يصبح مطوّرا لتطبيقات الموبايل: الطلاب، ومن هم في بداية مسيرتهم المهنية، ومن يرغبون في تغيير مسارهم المهني. الأهم هو الحماس والقدرة على الالتزام طوال الأشهر الستة.",
        },
        {
          question: "هل أحتاج إلى خلفية في البرمجة؟",
          answer:
            "لا. يبدأ البرنامج من الصفر ويتدرج خطوة بخطوة. ستحتاج إلى جهاز حاسوب واتصال مستقر بالإنترنت لحضور الجلسات عن بُعد.",
        },
        {
          question: "ما الجدول الزمني وطريقة الدراسة؟",
          answer:
            "يستمر البرنامج ستة أشهر. الأشهر من الأول إلى الرابع هي مرحلة التعلم، وتتم معظمها عن بُعد مع جلسات حضورية في كيغالي. أما الشهران الخامس والسادس فهما المرحلة العملية، حيث تعمل على مشروع حقيقي يعتمد على واجهة API حقيقية داخل الشركة.",
        },
        {
          question: "كيف أحصل على الشهادة؟",
          answer: "تُمنح شهادة الإتمام للمتدربين الذين يُكملون مرحلتي البرنامج، بما في ذلك المشروع العملي.",
        },
        {
          question: "كيف أتقدم؟",
          answer:
            "مقاعد الدفعة الثانية مكتملة. انضم إلى قائمة الانتظار عبر الزر في هذه الصفحة، وسنتواصل معك عند فتح التسجيل للدفعة الثالثة.",
        },
      ],
      finalTitle: "هل ترغب في الانضمام إلى الدفعة القادمة؟",
      finalText: "انضم إلى قائمة الانتظار لتكون أول من يعلم عند فتح التسجيل للدفعة القادمة.",
      backToAcademy: "العودة إلى الأكاديمية",
      membersTitle: "متدربو {cohort}",
      membersIntro: "اختر أي بطاقة لعرض الملف الكامل.",
      membersHidden: "لم تُنشر ملفات متدربي هذه الدفعة بعد.",
      applyNow: "قدّم الآن",
      cohortCtaTitle: "مهتم بالأكاديمية؟",
      cohortCtaText: "انضم إلى قائمة الانتظار لتعرف أولا عن الدفعات القادمة.",
      aboutAcademy: "عن الأكاديمية",
      traineeBadge: "متدرب",
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
