// Every person appears exactly once here. Core team roles live on `team`;
// training roles live on cohort memberships in ./academy.ts.
// Keep this file free of React and "@/" imports: vite.config.ts imports it at build time.

export type Lang = "en" | "ar";

export type TeamRole = {
  role: string;
  roleAr?: string;
  summary: string;
  summaryAr?: string;
  isCoFounder: boolean;
};

export type Person = {
  id: string;
  name: string;
  nameAr?: string;
  /** Image path under /public, or initials as a fallback. */
  avatar: string;
  linkedin?: string;
  behance?: string;
  /** Present only for core team members. Array order is display order. */
  team?: TeamRole;
};

/** What PersonCard and ProfileModal render, already localized. */
export type PersonCardData = {
  id: string;
  name: string;
  role: string;
  summary: string;
  avatar: string;
  linkedin?: string;
  behance?: string;
};

export const people: Person[] = [
  // ─── Core team ──────────────────────────────────────────────────────────────
  {
    id: "yassin-abuarki",
    name: "Yassin Abuarki",
    nameAr: "ياسين أبوعركي",
    avatar: "/avatars/me.webp?v=20260729",
    linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/",
    team: {
      role: "Chief Executive Officer (CEO) & Founder",
      roleAr: "الرئيس التنفيذي والمؤسس",
      isCoFounder: false,
      summary:
        "Yassin combines hands-on technical expertise in Flutter with executive leadership. As CEO, he defines Samalync's strategic direction, oversees operations, and leads business growth while ensuring delivery excellence across projects. Technical expertise: Mobile and cross-platform development (Flutter). Leadership strengths: Strategic planning, project oversight, company leadership, and stakeholder management.",
      summaryAr:
        "يجمع ياسين بين الخبرة التقنية العملية في Flutter  والقيادة التنفيذية. بصفته الرئيس التنفيذي، يحدد التوجه الاستراتيجي لسامالينك، ويشرف على العمليات، ويقود نمو الأعمال مع ضمان جودة التنفيذ في المشاريع. خبرته التقنية تشمل تطوير تطبيقات الموبايل ومتعددة المنصات، وتشمل نقاط قوته التخطيط الاستراتيجي وإدارة المشاريع وقيادة الشركة والتعامل مع أصحاب المصلحة.",
    },
  },
  {
    id: "baraa-abuarki",
    name: "Baraa Abuarki",
    nameAr: "براء أبوعركي",
    avatar: "/baraa.png?v=20260729",
    linkedin: "https://www.linkedin.com/in/elbaraa-abuaraki/",
    team: {
      role: "Senior Full-Stack Engineering",
      roleAr: "مهندس برمجيات متكامل أول",
      isCoFounder: false,
      summary:
        "Baraa is a Senior Software Engineer with over 11 years of experience across the software development lifecycle, working across web, mobile, backend, frontend, APIs, databases, and cloud technologies. He has extensive experience designing, developing, and scaling software solutions, with a strong focus on architecture, performance, maintainability, and solving complex technical challenges. Baraa brings broad technical expertise and a practical engineering mindset to building reliable, scalable, and production-ready software.",
      summaryAr:
        "براء مهندس برمجيات أول يتمتع بخبرة تزيد عن 11 عامًا في مختلف مراحل دورة تطوير البرمجيات، مع خبرة واسعة في تطوير الويب والموبايل والأنظمة الخلفية والواجهات الأمامية وواجهات البرمجة وقواعد البيانات والتقنيات السحابية. يمتلك خبرة قوية في تصميم وتطوير وتوسعة الحلول البرمجية، مع تركيز على هندسة الأنظمة والأداء وقابلية الصيانة وحل التحديات التقنية المعقدة. يجمع براء بين الخبرة التقنية الواسعة والعقلية الهندسية العملية لبناء برمجيات موثوقة وقابلة للتوسع وجاهزة لبيئات الإنتاج.",
    },
  },
  // {
  //   id: "mohamed-babiker",
  //   name: "Mohamed Babiker",
  //   nameAr: "محمد بابكر",
  //   avatar: "/avatars/mohamed-babiker.webp?v=20260729",
  //   linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/",
  //   team: {
  //     role: "Senior Full-Stack Engineering",
  //     roleAr: "مهندس برمجيات متكامل أول",
  //     isCoFounder: false,
  //     summary:
  //       "Mohamed is a senior full-stack engineering contributor with strong experience in React, React Native, Node.js, TypeScript, and PostgreSQL. He has contributed to scalable web and mobile solutions, supporting RESTful API design, microservices architecture, database optimization, and cloud infrastructure including AWS, Vercel, and Docker. Mohamed brings clarity and structure to complex technical requirements through clean, maintainable code.",
  //     summaryAr:
  //       "محمد مهندس برمجيات متكامل أول يتمتع بخبرة قوية في React وReact Native وNode.js وTypeScript وPostgreSQL. ساهم في حلول ويب وموبايل قابلة للتوسع، ودعم تصميم واجهات REST وبنى الخدمات المصغرة وتحسين قواعد البيانات والبنية السحابية مثل AWS وVercel وDocker. يقدم محمد وضوحا وتنظيما للمتطلبات التقنية المعقدة عبر كود نظيف وقابل للصيانة.",
  //   },
  // },
  {
    // TODO(confirm): spelling "Mougahed" vs "Mogahed" not yet confirmed; kept as previously published.
    id: "mougahed-abdalla",
    name: "Mougahed Abdalla",
    nameAr: "مجاهد عبدالله",
    avatar: "/mogahed.png?v=20260729",
    linkedin:
      "https://www.linkedin.com/in/mougahed-m-017b661b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    team: {
      role: "Senior DevOps Engineer",
      roleAr: "مهندس DevOps أول",
      isCoFounder: false,
      summary:
        "Mougahed is a senior DevOps engineer focused on reliable delivery pipelines, cloud infrastructure, automation, and scalable production operations.",
      summaryAr:
        "مجاهد مهندس DevOps أول يركز على موثوقية مسارات التسليم والبنية التحتية السحابية والأتمتة وعمليات الإنتاج القابلة للتوسع.",
    },
  },
  {
    id: "ibrahim-abubakr",
    name: "Ibrahim Abubakr",
    nameAr: "ابراهيم أبوبكر",
    avatar: "/avatars/ibrahim.webp?v=20260729",
    linkedin: "https://www.linkedin.com/in/ibrahim-abubaker-4055112a1/",
    team: {
      role: "Flutter Mobile Developer",
      roleAr: "مطور تطبيقات موبايل Flutter",
      isCoFounder: false,
      summary:
        "Ibrahim is a Flutter mobile developer focused on building polished, responsive cross-platform mobile applications with Dart and Flutter. He contributes to product interfaces and mobile experiences that are reliable, smooth, and user-friendly.",
      summaryAr:
        "ابراهيم مطور تطبيقات موبايل Flutter يركز على بناء تطبيقات موبايل متعددة المنصات ومتجاوبة باستخدام Dart وFlutter. يساهم في واجهات المنتجات وتجارب الموبايل لتكون موثوقة وسلسة وسهلة الاستخدام.",
    },
  },
  {
    id: "mohammed-salah",
    name: "Mohammed Salah",
    nameAr: "محمد صلاح",
    avatar: "/avatars/mohammed-salah.webp?v=20260729",
    linkedin: "https://www.linkedin.com/in/mohammed-salahelden-hassan-647b6128a/",
    team: {
      role: "Flutter Mobile Developer",
      roleAr: "مطور تطبيقات موبايل Flutter",
      isCoFounder: false,
      summary:
        "Mohammed is a Flutter mobile developer building cross-platform mobile applications with Dart and Flutter. He contributes to product interfaces and mobile experiences that are responsive, reliable, and comfortable to use.",
      summaryAr:
        "محمد مطور تطبيقات موبايل Flutter يبني تطبيقات متعددة المنصات باستخدام Dart وFlutter. يساهم في واجهات المنتجات وتجارب الموبايل لتكون متجاوبة وموثوقة ومريحة في الاستخدام.",
    },
  },
  {
    // TODO(confirm): "Khamis" vs "Khamees". Previously listed under both spellings; using the core-team spelling until confirmed.
    id: "mustafa-khamis",
    name: "Mustafa Khamis",
    nameAr: "مصطفى خميس",
    avatar: "/avatars/mustafa.webp?v=20260729",
    linkedin: "https://www.linkedin.com/in/mustafa-kh-hassan-b26ab5370/",
    team: {
      role: "Frontend Development",
      roleAr: "تطوير الواجهات الأمامية",
      isCoFounder: false,
      summary:
        "Mustafa is a frontend development contributor focused on building responsive and user-friendly digital experiences. He is contributing to web applications using React, HTML, CSS, and JavaScript. His work emphasizes usability, performance, and clean interface design across platforms.",
      summaryAr:
        "مصطفى مساهم في تطوير الواجهات الأمامية يركز على بناء تجارب رقمية متجاوبة وسهلة الاستخدام. يساهم في تطبيقات الويب باستخدام React وHTML وCSS وJavaScript، ويركز عمله على سهولة الاستخدام والأداء وتصميم الواجهات النظيف عبر المنصات.",
    },
  },
  {
    id: "nancy-kwizera-teta",
    name: "Nancy Kwizera Teta",
    nameAr: "نانسي كويزيرا تيتا",
    avatar: "/avatars/nancy-kwizera-teta.webp?v=20260729",
    linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/",
    team: {
      role: "Backend & AI/ML Engineering",
      roleAr: "هندسة الأنظمة الخلفية والذكاء الاصطناعي",
      isCoFounder: false,
      summary:
        "Nancy is a backend and AI/ML engineering contributor with experience in Flask, Node.js, Python, TypeScript, JavaScript, and database systems. She has contributed to backend APIs and data-driven components, supporting machine learning integration and scalable backend architectures within project-based collaborations.",
      summaryAr:
        "نانسي مساهمة في هندسة الأنظمة الخلفية والذكاء الاصطناعي وتعلم الآلة، ولديها خبرة في Flask وNode.js وPython وTypeScript وJavaScript وأنظمة قواعد البيانات. ساهمت في واجهات الأنظمة الخلفية والمكونات المعتمدة على البيانات، ودعمت دمج تعلم الآلة وبنى خلفية قابلة للتوسع ضمن تعاونات قائمة على المشاريع.",
    },
  },
  {
    id: "hozaifa-tarig",
    name: "Hozaifa Tarig",
    nameAr: "حذيفة طارق",
    avatar: "/avatars/hozaifa.webp?v=20260729",
    team: {
      role: "Graphic Designer",
      roleAr: "مصمم جرافيك",
      isCoFounder: false,
      summary:
        "Hozaifa is a graphic designer crafting brand visuals, marketing materials, and digital assets for Samalync and its clients, pairing a strong sense of layout and typography with an eye for consistent, on-brand visual systems.",
      summaryAr:
        "حذيفة مصمم جرافيك يعمل على الهوية البصرية والمواد التسويقية والأصول الرقمية لسامالينك وعملائها، ويجمع بين حس قوي في التنسيق والخطوط ودقة في بناء أنظمة بصرية متناسقة ومعبرة عن العلامة.",
    },
  },
  // {
  //   id: "ghufran-osama",
  //   name: "Ghufran Osama",
  //   nameAr: "غفران أسامة",
  //   avatar: "/avatars/ghufran.webp?v=20260729",
  //   team: {
  //     role: "Graphic Design",
  //     roleAr: "التصميم الجرافيكي",
  //     isCoFounder: false,
  //     summary:
  //       "Ghufran is a talented graphic designer who specializes in creating visually compelling designs for branding, marketing materials, and digital experiences. With a keen eye for aesthetics and a passion for visual storytelling, Ghufran brings creativity and precision to every project, ensuring that our visual communications effectively represent the Samalync brand and engage our audience.",
  //     summaryAr:
  //       "غفران مصممة جرافيك موهوبة متخصصة في إنشاء تصاميم بصرية جذابة للهوية والمواد التسويقية والتجارب الرقمية. تمتلك ذوقا بصريا عاليا وشغفا بالسرد البصري، وتضيف الإبداع والدقة إلى كل مشروع لضمان أن تعبر اتصالاتنا البصرية عن علامة سامالينك بفاعلية وتجذب جمهورنا.",
  //   },
  // },
  {
    id: "mohammed-yasser",
    name: "Mohammed Yasser",
    nameAr: "محمد ياسر",
    avatar: "/avatars/mo-yasser.webp?v=20260729",
    team: {
      role: "Media Coordinator",
      roleAr: "منسق إعلامي",
      isCoFounder: false,
      summary:
        "Mohammed joins Samalync Solutions as our media coordinator. He is responsible for documenting our company sessions, meetings, and events through high-quality photos and videos, helping us capture and preserve our key moments and activities.",
      summaryAr:
        "ينضم محمد إلى سامالينك منسقا إعلاميا، وهو مسؤول عن توثيق جلسات الشركة واجتماعاتها وفعالياتها عبر صور وفيديوهات عالية الجودة، بما يساعدنا على التقاط لحظاتنا وأنشطتنا المهمة والحفاظ عليها.",
    },
  },

  // ─── Academy trainees (no core team role) ──────────────────────────────────
  {
    id: "ahmed-abdelhakeem",
    name: "Ahmed Abdelhakeem",
    nameAr: "أحمد عبدالحكيم",
    avatar: "/avatars/ahmed-hakeem.webp?v=20260729",
    linkedin: "https://www.linkedin.com/in/ahmed-abdelhakim-mohamed-2b71073a2/",
    behance: "https://www.behance.net/ahmedhakeem18/",
  },
  {
    id: "muhammed-mustafa",
    name: "Muhammed Mustafa",
    nameAr: "محمد مصطفى",
    avatar: "/avatars/md-mustafa.webp?v=20260729",
  },
  {
    id: "nawaf-abubakr",
    name: "Nawaf Abubakr",
    nameAr: "نواف أبوبكر",
    avatar: "/avatars/nawaf.webp?v=20260729",
  },
  {
    id: "mazin-abdelkhalig",
    name: "Mazin Abdelkhalig",
    nameAr: "مازن عبدالخالق",
    avatar: "/avatars/mazin.webp?v=20260729",
  },
  {
    id: "amro-sayed",
    name: "Amro Sayed",
    nameAr: "عمرو سيد",
    avatar: "/avatars/amro.webp?v=20260729",
  },
  {
    id: "mustafa-hashim",
    name: "Mustafa Hashim",
    nameAr: "مصطفى هاشم",
    avatar: "/avatars/mustafa-hashim.webp?v=20260729",
  },
  {
    id: "kamal-bakri",
    name: "Kamal Bakri",
    nameAr: "كمال بكري",
    avatar: "/avatars/kamal.webp?v=20260729",
  },
];

const peopleById = new Map(people.map((person) => [person.id, person]));

export const getPerson = (id: string) => peopleById.get(id);

export type TeamMember = Person & { team: TeamRole };

export const coreTeam = people.filter((person): person is TeamMember => Boolean(person.team));

export const formatRoleText = (team: TeamRole) => {
  const hasCoFounderInRole = /co-?founder/i.test(team.role);

  if (team.isCoFounder && !hasCoFounderInRole) {
    return `${team.role} & Co-Founder`;
  }

  return team.role;
};

export const getPersonName = (person: Person, language: Lang) =>
  language === "ar" && person.nameAr ? person.nameAr : person.name;

export const toTeamCard = (person: TeamMember, language: Lang): PersonCardData => ({
  id: person.id,
  name: getPersonName(person, language),
  role: language === "ar" && person.team.roleAr ? person.team.roleAr : formatRoleText(person.team),
  summary: language === "ar" && person.team.summaryAr ? person.team.summaryAr : person.team.summary,
  avatar: person.avatar,
  linkedin: person.linkedin,
  behance: person.behance,
});
