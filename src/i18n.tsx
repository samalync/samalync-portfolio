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
        "Meet the core team leading delivery across engineering, product, and design.",
      core: "Core Team",
      coreTitle: "Specialists building the company forward",
      coreIntro: "The people shaping strategy, product delivery, engineering, and brand execution across Samalync.",
      coreMembers: "core members",
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
        description: "Meet the Samalync core team leading engineering, product, and design.",
      },
      academy: {
        title: "SamaLYNC Academy | Mobile Development Program (Dart + Flutter)",
        description:
          "A six-month Mobile Development Program run inside a software company in Kigali: learn Dart and Flutter mostly online, then work on a team project with Git/GitHub, code reviews and task tracking.",
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
      eyebrow: "SamaLYNC Academy",
      heroTitle: "A training program run inside a working software company",
      heroSubtitle: "Our Mobile Development Program takes you from the basics of Dart to a Flutter team project.",
      heroFacts: ["6 months", "Dart + Flutter", "Mostly online · Kigali"],
      heroChip: "{cohort} starts {date}",
      heroChipFull: "{cohort} starts {date} · seats full",
      joinWaitlist: "Join the waitlist",
      joinWaitlistFor: "Join the waitlist ({cohort})",
      joinCommunity: "Join the community",
      seeCohorts: "See cohorts",
      open: "Open",
      programEyebrow: "THE PROGRAM",
      programTitle: "What the program is",
      programParagraphs: [
        "The Mobile Development Program is built for beginners. You start with the basics of programming in Dart and move step by step to building apps with Flutter.",
        "The path is simple: learn, practice, build, collaborate and demonstrate. Each stage ends with something you made yourself, and the last two months are a team project.",
        "The training is run by a software company in Kigali, so you learn the tools and habits of a software team: Git and GitHub, code reviews and task tracking.",
      ],
      audienceEyebrow: "WHO IT'S FOR",
      audienceTitle: "Who it's for",
      audience: [
        { title: "Beginners", text: "Never written code? The program starts from zero." },
        { title: "University students", text: "Add practical app-building skills to what you study." },
        { title: "Young graduates", text: "Build skills and a portfolio you can show." },
        { title: "A little programming experience", text: "Fill the gaps and learn to work the way a team does." },
      ],
      audienceNote: "No background required, but effort is.",
      benefitsEyebrow: "WHAT YOU GET",
      benefitsTitle: "What you get",
      benefitsIntro: "Tap a card to read more.",
      benefits: [
        {
          title: "Real Flutter skills",
          summary: "Dart and Flutter from the basics to complete apps.",
          details: "You learn by building: screens, navigation, forms, data from APIs, and handling loading and error states.",
        },
        {
          title: "Portfolio projects",
          summary: "Work you can show, built by you.",
          details: "Assignments and the team project give you code and apps you can present, with your own contribution visible in your GitHub history.",
        },
        {
          title: "GitHub and teamwork experience",
          summary: "Branches, pull requests and reviews.",
          details: "You use Git and GitHub throughout. In the team project you collaborate through pull requests and code reviews.",
        },
        {
          title: "Completion certificate",
          summary: "For trainees who meet the completion requirements.",
          details: "The certificate is awarded to trainees who meet the completion requirements, including the team project.",
        },
        {
          title: "Work like a software team",
          summary: "Requirements, tasks, reviews, demos.",
          details: "The team project follows the workflow of a software team: understanding requirements, breaking work into tasks, tracking progress, reviewing code and presenting the result.",
        },
      ],
      disclaimer: "Outcomes depend on each trainee's effort, attendance and project quality.",
      tracksEyebrow: "TRACKS",
      tracksTitle: "Tracks",
      tracksIntro: "Mobile development is running now. Other tracks are planned and will open only once the model is proven.",
      trackStatus: { active: "Active", planned: "Planned, not scheduled" },
      trackActiveAction: "See the roadmap",
      trackPlannedAction: "Tell us you're interested",
      trackInterestSubject: "Samalync Academy: interested in the {track} track",
      roadmapEyebrow: "ROADMAP",
      roadmapTitle: "Six months, month by month",
      roadmapIntro: "Four months of learning, then two months on a team project. Tap a month to see its topics.",
      roadmapBadge: "Planned roadmap, may be refined",
      monthLabel: "Month {n}",
      phaseMonths: { learning: "Months 1–4", practical: "Months 5–6" },
      formatEyebrow: "FORMAT",
      formatTitle: "How it runs",
      formatText: "Mostly online, with planned in-person sessions in Kigali. Schedule shared with accepted trainees.",
      cohortsEyebrow: "INTAKES",
      cohortsTitle: "Cohorts",
      cohortsIntro: "Each intake is a cohort that goes through the six-month path together.",
      status: { active: "Active", upcoming: "Upcoming", graduated: "Completed" },
      phase: { learning: "Learning phase", practical: "Practical phase" },
      enrollment: { open: "Applications open", full: "Seats full", waitlist: "Waitlist open", closed: "Enrollment closed" },
      startLabel: "Start",
      endLabel: "End",
      tba: "TBA",
      expectedAround: "Expected around {date}",
      seatsLabel: "Seats",
      seatsCount: "{n} seats",
      viewCohort: "View {cohort}",
      meetTrainees: "Meet the trainees",
      waitlistSubject: "Samalync Academy: join the waitlist",
      waitlistSubjectCohort: "Samalync Academy: join the waitlist for {cohort}",
      waitlistSubjectFrom: "Samalync Academy: join the waitlist (from the {cohort} page)",
      communitySubject: "Samalync Academy: join the community",
      successEyebrow: "HOW WE MEASURE SUCCESS",
      successTitle: "How we measure success",
      successIntro: "We look at what trainees actually do.",
      success: [
        { title: "Attendance and assignments", text: "Showing up and completing the work, week after week." },
        { title: "Project quality", text: "How well the code and the app work, and how clearly they are explained." },
        { title: "Trainee feedback", text: "What trainees tell us about the program, used to improve it." },
        { title: "Completed projects", text: "Projects taken from requirements to a working result and presented." },
      ],
      communityEyebrow: "COMMUNITY",
      communityTitle: "Stay close to the Academy",
      communityText: "Join the community to hear about upcoming cohorts, registration dates and Academy news.",
      workEyebrow: "TRAINEE WORK",
      workTitle: "What our trainees built",
      workIntro: "A selection of projects built by Samalync Academy trainees.",
      viewProject: "View project",
      faqEyebrow: "FAQ",
      faqTitle: "Frequently asked questions",
      finalTitle: "Want to join the next cohort?",
      finalText: "Join the waitlist for Cohort 3 and be the first to know when registration opens.",
      backToAcademy: "Back to Academy",
      membersTitle: "{cohort} trainees",
      membersIntro: "Select a card to see the profile.",
      membersHidden: "Trainee profiles for this cohort are not published yet.",
      applyNow: "Apply now",
      cohortCtaTitle: "Interested in the Academy?",
      cohortCtaText: "Join the waitlist to hear first about upcoming cohorts.",
      aboutAcademy: "About the Academy",
      traineeBadge: "Trainee",
      home: {
        title: "Learn to build real apps, inside a working software company",
        subtitle: "Starting with mobile development. More tracks as the model is proven.",
        // "{date}" is filled from the Cohort 2 data.
        stats: [
          { value: "6 months", label: "Program length" },
          { value: "2 cohorts", label: "Cohort 1 active · Cohort 2 upcoming" },
          { value: "Seats full", label: "Cohort 2 · {date}" },
          { value: "Mobile · Flutter", label: "First track" },
        ],
        cohortsHeading: "Cohorts",
        explore: "Explore the Academy",
        proofTitle: "Cohort 1, now in its practical phase",
        meetCohort1: "Meet Cohort 1",
        openProfile: "Open profile: {name}",
      },
      teaser: {
        title: "Learn to build real apps, inside a working software company",
        text: "Our Mobile Development Program (Dart + Flutter) runs inside the company. Cohort 1 is in its practical phase; Cohort 2 starts {date}.",
        action: "Explore the Academy",
      },
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
      intro: "تعرف على الفريق الأساسي الذي يقود التنفيذ في الهندسة والمنتج والتصميم.",
      core: "الفريق الأساسي",
      coreTitle: "متخصصون يدفعون الشركة للأمام",
      coreIntro: "الأشخاص الذين يشكلون الاستراتيجية وتنفيذ المنتج والهندسة والهوية في سامالينك.",
      coreMembers: "أعضاء أساسيون",
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
        description: "تعرف على الفريق الأساسي في سامالينك الذي يقود الهندسة والمنتج والتصميم.",
      },
      academy: {
        title: "أكاديمية سامالينك | برنامج تطوير تطبيقات الموبايل (Dart + Flutter)",
        description:
          "برنامج لتطوير تطبيقات الموبايل مدته ستة أشهر تديره شركة برمجيات في كيغالي: تعلّم Dart وFlutter عن بُعد غالبا، ثم اعمل على مشروع جماعي باستخدام Git/GitHub ومراجعات الكود وتتبّع المهام.",
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
    // NEEDS NATIVE REVIEW: Academy copy below is Modern Standard Arabic written for review.
    academy: {
      eyebrow: "أكاديمية سامالينك",
      heroTitle: "برنامج تدريبي تديره شركة برمجيات عاملة",
      heroSubtitle: "يأخذك برنامج تطوير تطبيقات الموبايل من أساسيات Dart إلى مشروع جماعي باستخدام Flutter.",
      heroFacts: ["6 أشهر", "Dart + Flutter", "عن بُعد غالبا · كيغالي"],
      heroChip: "{cohort} تبدأ في {date}",
      heroChipFull: "{cohort} تبدأ في {date} · المقاعد مكتملة",
      joinWaitlist: "انضم إلى قائمة الانتظار",
      joinWaitlistFor: "انضم إلى قائمة الانتظار ({cohort})",
      joinCommunity: "انضم إلى المجتمع",
      seeCohorts: "استعرض الدفعات",
      open: "عرض",
      programEyebrow: "البرنامج",
      programTitle: "ما هو البرنامج",
      programParagraphs: [
        "صُمّم برنامج تطوير تطبيقات الموبايل للمبتدئين. تبدأ بأساسيات البرمجة بلغة Dart، ثم تنتقل خطوة بخطوة إلى بناء التطبيقات باستخدام Flutter.",
        "المسار واضح: تتعلّم، ثم تتدرّب، ثم تبني، ثم تتعاون، ثم تعرض ما أنجزته. تنتهي كل مرحلة بعمل أنجزته بنفسك، والشهران الأخيران مخصّصان لمشروع جماعي.",
        "تدير التدريبَ شركةُ برمجيات في كيغالي، لذلك تتعلّم أدوات فرق البرمجيات وعاداتها: Git وGitHub ومراجعات الكود وتتبّع المهام.",
      ],
      audienceEyebrow: "لمن البرنامج",
      audienceTitle: "لمن هذا البرنامج",
      audience: [
        { title: "المبتدئون", text: "لم تكتب سطرا من الكود من قبل؟ يبدأ البرنامج من الصفر." },
        { title: "طلاب الجامعات", text: "أضف إلى دراستك مهارات عملية في بناء التطبيقات." },
        { title: "الخريجون الجدد", text: "ابنِ مهارات ومعرض أعمال تستطيع عرضه." },
        { title: "أصحاب الخبرة البسيطة في البرمجة", text: "سُدّ الثغرات وتعلّم العمل بطريقة الفرق." },
      ],
      audienceNote: "لا تُشترط خلفية سابقة، لكن الجهد شرط أساسي.",
      benefitsEyebrow: "ماذا ستحصل عليه",
      benefitsTitle: "ماذا ستحصل عليه",
      benefitsIntro: "اضغط على أي بطاقة لقراءة المزيد.",
      benefits: [
        {
          title: "مهارات Flutter حقيقية",
          summary: "Dart وFlutter من الأساسيات حتى تطبيقات متكاملة.",
          details: "تتعلّم بالبناء: الشاشات والتنقل والنماذج والبيانات القادمة من واجهات API والتعامل مع حالات التحميل والأخطاء.",
        },
        {
          title: "مشاريع لمعرض أعمالك",
          summary: "أعمال من إنجازك تستطيع عرضها.",
          details: "تمنحك التكليفات والمشروع الجماعي كودا وتطبيقات يمكنك تقديمها، مع مساهمتك الظاهرة في سجل GitHub الخاص بك.",
        },
        {
          title: "خبرة في GitHub والعمل الجماعي",
          summary: "الفروع وطلبات الدمج والمراجعات.",
          details: "تستخدم Git وGitHub طوال البرنامج، وفي المشروع الجماعي تتعاون عبر طلبات الدمج (Pull requests) ومراجعات الكود.",
        },
        {
          title: "شهادة إتمام",
          summary: "للمتدربين الذين يستوفون متطلبات الإتمام.",
          details: "تُمنح الشهادة للمتدربين الذين يستوفون متطلبات الإتمام، بما في ذلك المشروع الجماعي.",
        },
        {
          title: "اعمل كفريق برمجيات",
          summary: "متطلبات ومهام ومراجعات وعروض.",
          details: "يتبع المشروع الجماعي سير عمل فرق البرمجيات: فهم المتطلبات، وتقسيم العمل إلى مهام، ومتابعة التقدّم، ومراجعة الكود، وعرض النتيجة.",
        },
      ],
      disclaimer: "تعتمد النتائج على جهد كل متدرب وحضوره وجودة مشروعه.",
      tracksEyebrow: "المسارات",
      tracksTitle: "المسارات",
      tracksIntro: "مسار تطوير تطبيقات الموبايل قائم الآن. المسارات الأخرى مخطط لها، ولن تُفتح إلا بعد أن يثبت النموذج نجاحه.",
      trackStatus: { active: "قائم", planned: "مخطط له، دون موعد" },
      trackActiveAction: "عرض الخطة الدراسية",
      trackPlannedAction: "أخبرنا باهتمامك",
      trackInterestSubject: "أكاديمية سامالينك: مهتم بمسار {track}",
      roadmapEyebrow: "الخطة الدراسية",
      roadmapTitle: "ستة أشهر، شهرا بشهر",
      roadmapIntro: "أربعة أشهر للتعلّم، ثم شهران لمشروع جماعي. اضغط على أي شهر لعرض موضوعاته.",
      roadmapBadge: "خطة مبدئية، قابلة للتحديث",
      monthLabel: "الشهر {n}",
      phaseMonths: { learning: "الأشهر 1–4", practical: "الأشهر 5–6" },
      formatEyebrow: "شكل البرنامج",
      formatTitle: "كيف يسير البرنامج",
      formatText: "معظمه عن بُعد، مع جلسات حضورية مخطط لها في كيغالي. يُشارَك الجدول مع المتدربين المقبولين.",
      cohortsEyebrow: "الدفعات",
      cohortsTitle: "الدفعات",
      cohortsIntro: "كل دفعة تسير معا في المسار نفسه لمدة ستة أشهر.",
      status: { active: "قائمة", upcoming: "قادمة", graduated: "مكتملة" },
      phase: { learning: "مرحلة التعلّم", practical: "المرحلة العملية" },
      enrollment: { open: "التسجيل مفتوح", full: "المقاعد مكتملة", waitlist: "قائمة الانتظار مفتوحة", closed: "التسجيل مغلق" },
      startLabel: "البداية",
      endLabel: "النهاية",
      tba: "يُحدَّد لاحقا",
      expectedAround: "متوقع في حدود {date}",
      seatsLabel: "المقاعد",
      seatsCount: "{n} مقعدا",
      viewCohort: "عرض {cohort}",
      meetTrainees: "تعرّف على المتدربين",
      waitlistSubject: "أكاديمية سامالينك: الانضمام إلى قائمة الانتظار",
      waitlistSubjectCohort: "أكاديمية سامالينك: الانضمام إلى قائمة انتظار {cohort}",
      waitlistSubjectFrom: "أكاديمية سامالينك: الانضمام إلى قائمة الانتظار (من صفحة {cohort})",
      communitySubject: "أكاديمية سامالينك: الانضمام إلى المجتمع",
      successEyebrow: "كيف نقيس النجاح",
      successTitle: "كيف نقيس النجاح",
      successIntro: "ننظر إلى ما ينجزه المتدربون فعلا.",
      success: [
        { title: "الحضور والتكليفات", text: "الالتزام بالحضور وإنجاز العمل أسبوعا بعد أسبوع." },
        { title: "جودة المشروع", text: "مدى جودة الكود والتطبيق، ووضوح شرحهما." },
        { title: "آراء المتدربين", text: "ما يخبرنا به المتدربون عن البرنامج، ونستخدمه لتحسينه." },
        { title: "المشاريع المكتملة", text: "مشاريع انتقلت من المتطلبات إلى نتيجة تعمل، ثم عُرضت." },
      ],
      communityEyebrow: "المجتمع",
      communityTitle: "ابقَ قريبا من الأكاديمية",
      communityText: "انضم إلى المجتمع لتعرف عن الدفعات القادمة ومواعيد التسجيل وأخبار الأكاديمية.",
      workEyebrow: "أعمال المتدربين",
      workTitle: "ماذا بنى متدربونا",
      workIntro: "مجموعة مختارة من المشاريع التي بناها متدربو أكاديمية سامالينك.",
      viewProject: "عرض المشروع",
      faqEyebrow: "الأسئلة الشائعة",
      faqTitle: "الأسئلة الشائعة",
      finalTitle: "هل ترغب في الانضمام إلى الدفعة القادمة؟",
      finalText: "انضم إلى قائمة انتظار الدفعة الثالثة لتكون أول من يعلم عند فتح التسجيل.",
      backToAcademy: "العودة إلى الأكاديمية",
      membersTitle: "متدربو {cohort}",
      membersIntro: "اختر أي بطاقة لعرض الملف الشخصي.",
      membersHidden: "لم تُنشر ملفات متدربي هذه الدفعة بعد.",
      applyNow: "قدّم الآن",
      cohortCtaTitle: "مهتم بالأكاديمية؟",
      cohortCtaText: "انضم إلى قائمة الانتظار لتعرف أولا عن الدفعات القادمة.",
      aboutAcademy: "عن الأكاديمية",
      traineeBadge: "متدرب",
      home: {
        title: "تعلّم بناء تطبيقات حقيقية داخل شركة برمجيات عاملة",
        subtitle: "نبدأ بتطوير تطبيقات الموبايل، وتُضاف مسارات أخرى حين يثبت النموذج نجاحه.",
        stats: [
          { value: "6 أشهر", label: "مدة البرنامج" },
          { value: "دفعتان", label: "الأولى قائمة · الثانية قادمة" },
          { value: "المقاعد مكتملة", label: "الدفعة الثانية · {date}" },
          { value: "موبايل · Flutter", label: "المسار الأول" },
        ],
        cohortsHeading: "الدفعات",
        explore: "اكتشف الأكاديمية",
        proofTitle: "الدفعة الأولى، الآن في المرحلة العملية",
        meetCohort1: "تعرّف على الدفعة الأولى",
        openProfile: "عرض الملف الشخصي: {name}",
      },
      teaser: {
        title: "تعلّم بناء تطبيقات حقيقية داخل شركة برمجيات عاملة",
        text: "برنامج تطوير تطبيقات الموبايل (Dart + Flutter) يُدار داخل الشركة. الدفعة الأولى في مرحلتها العملية، والدفعة الثانية تبدأ في {date}.",
        action: "اكتشف الأكاديمية",
      },
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
