export type CompanyMemberGroup = "team" | "trainee";

export type CompanyMember = {
  name: string;
  nameAr?: string;
  role: string;
  roleAr?: string;
  isCoFounder: boolean;
  summary: string;
  summaryAr?: string;
  avatar: string;
  group: CompanyMemberGroup;
  linkedin?: string;
  behance?: string;
};

export const companyMembers: CompanyMember[] = [
  {
    name: "Yassin AbuArki",
    nameAr: "ياسين أبوعركي",
    role: "Chief Executive Officer (CEO) & Founder",
    roleAr: "الرئيس التنفيذي والمؤسس",
    isCoFounder: false,
    summary:
      "Yassin combines hands-on technical expertise in Flutter with executive leadership. As CEO, he defines Samalync's strategic direction, oversees operations, and leads business growth while ensuring delivery excellence across projects. Technical expertise: Mobile and cross-platform development (Flutter). Leadership strengths: Strategic planning, project oversight, company leadership, and stakeholder management.",
    summaryAr:
      "يجمع ياسين بين الخبرة التقنية العملية في Flutter  والقيادة التنفيذية. بصفته الرئيس التنفيذي، يحدد التوجه الاستراتيجي لسامالينك، ويشرف على العمليات، ويقود نمو الأعمال مع ضمان جودة التنفيذ في المشاريع. خبرته التقنية تشمل تطوير تطبيقات الموبايل ومتعددة المنصات، وتشمل نقاط قوته التخطيط الاستراتيجي وإدارة المشاريع وقيادة الشركة والتعامل مع أصحاب المصلحة.",
    avatar: "/me.jpg",
    group: "team",
    linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/",
  },
  {
    name: "Mohamed Babiker",
    nameAr: "محمد بابكر",
    role: "Senior Full-Stack Engineering",
    roleAr: "مهندس برمجيات متكامل أول",
    isCoFounder: false,
    summary:
      "Mohamed is a senior full-stack engineering contributor with strong experience in React, React Native, Node.js, TypeScript, and PostgreSQL. He has contributed to scalable web and mobile solutions, supporting RESTful API design, microservices architecture, database optimization, and cloud infrastructure including AWS, Vercel, and Docker. Mohamed brings clarity and structure to complex technical requirements through clean, maintainable code.",
    summaryAr:
      "محمد مهندس برمجيات متكامل أول يتمتع بخبرة قوية في React وReact Native وNode.js وTypeScript وPostgreSQL. ساهم في حلول ويب وموبايل قابلة للتوسع، ودعم تصميم واجهات REST وبنى الخدمات المصغرة وتحسين قواعد البيانات والبنية السحابية مثل AWS وVercel وDocker. يقدم محمد وضوحا وتنظيما للمتطلبات التقنية المعقدة عبر كود نظيف وقابل للصيانة.",
    avatar: "/mohamed-babiker.jpg",
    group: "team",
    linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/",
  },
  {
    name: "Mustafa Khamis",
    nameAr: "مصطفى خميس",
    role: "Frontend Development",
    roleAr: "تطوير الواجهات الأمامية",
    isCoFounder: false,
    summary:
      "Mustafa is a frontend development contributor focused on building responsive and user-friendly digital experiences. He is contributing to web applications using React, HTML, CSS, and JavaScript. His work emphasizes usability, performance, and clean interface design across platforms.",
    summaryAr:
      "مصطفى مساهم في تطوير الواجهات الأمامية يركز على بناء تجارب رقمية متجاوبة وسهلة الاستخدام. يساهم في تطبيقات الويب باستخدام React وHTML وCSS وJavaScript، ويركز عمله على سهولة الاستخدام والأداء وتصميم الواجهات النظيف عبر المنصات.",
    avatar: "/mustafa.png",
    group: "team",
    linkedin: "https://www.linkedin.com/in/mustafa-kh-hassan-b26ab5370/",
  },
  {
    name: "Nancy Kwizera Teta",
    nameAr: "نانسي كويزيرا تيتا",
    role: "Backend & AI/ML Engineering",
    roleAr: "هندسة الأنظمة الخلفية والذكاء الاصطناعي",
    isCoFounder: false,
    summary:
      "Nancy is a backend and AI/ML engineering contributor with experience in Flask, Node.js, Python, TypeScript, JavaScript, and database systems. She has contributed to backend APIs and data-driven components, supporting machine learning integration and scalable backend architectures within project-based collaborations.",
    summaryAr:
      "نانسي مساهمة في هندسة الأنظمة الخلفية والذكاء الاصطناعي وتعلم الآلة، ولديها خبرة في Flask وNode.js وPython وTypeScript وJavaScript وأنظمة قواعد البيانات. ساهمت في واجهات الأنظمة الخلفية والمكونات المعتمدة على البيانات، ودعمت دمج تعلم الآلة وبنى خلفية قابلة للتوسع ضمن تعاونات قائمة على المشاريع.",
    avatar: "/nancy-kwizera-teta.jpg",
    group: "team",
    linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/",
  },
  {
    name: "Ghufran Osama",
    nameAr: "غفران أسامة",
    role: "Graphic Design",
    roleAr: "التصميم الجرافيكي",
    isCoFounder: false,
    summary:
      "Ghufran is a talented graphic designer who specializes in creating visually compelling designs for branding, marketing materials, and digital experiences. With a keen eye for aesthetics and a passion for visual storytelling, Ghufran brings creativity and precision to every project, ensuring that our visual communications effectively represent the Samalync brand and engage our audience.",
    summaryAr:
      "غفران مصممة جرافيك موهوبة متخصصة في إنشاء تصاميم بصرية جذابة للهوية والمواد التسويقية والتجارب الرقمية. تمتلك ذوقا بصريا عاليا وشغفا بالسرد البصري، وتضيف الإبداع والدقة إلى كل مشروع لضمان أن تعبر اتصالاتنا البصرية عن علامة سامالينك بفاعلية وتجذب جمهورنا.",
    avatar: "/ghufran.png",
    group: "team",
    linkedin: "",
    behance: "",
  },
  {
    name: "Ahmed Abdelhakeem",
    nameAr: "أحمد عبدالحكيم",
    role: "UI/UX & Flutter Development Trainee",
    roleAr: "متدرب تصميم UI/UX وتطوير Flutter",
    isCoFounder: false,
    summary:
      "Ahmed is a UI/UX and Flutter development trainee contributing to user research, interface design, prototyping, and cross-platform product experiences that feel intuitive and polished.",
    summaryAr:
      "أحمد متدرب في تصميم UI/UX وتطوير Flutter، يساهم في أبحاث المستخدم وتصميم الواجهات والنمذجة وتجارب المنتجات متعددة المنصات لتكون بديهية ومتقنة.",
    avatar: "/ahmed-hakeem.png",
    group: "trainee",
    linkedin: "https://www.linkedin.com/in/ahmed-abdelhakim-mohamed-2b71073a2/",
    behance: "https://www.behance.net/ahmedhakeem18/",
  },
  {
    name: "Muhammed Mustafa",
    nameAr: "محمد مصطفى",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Muhammed is a Flutter development trainee supporting cross-platform mobile experiences with Dart and Flutter, helping turn ideas into smooth, responsive app interfaces.",
    summaryAr:
      "محمد متدرب في تطوير Flutter يدعم تجارب الموبايل متعددة المنصات باستخدام Dart وFlutter، ويساعد على تحويل الأفكار إلى واجهات تطبيقات سلسة ومتجاوبة.",
    avatar: "/md-mustafa.jpg",
    group: "trainee",
  },
  {
    name: "Nawaf Abubakr",
    nameAr: "نواف أبوبكر",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Nawaf is a Flutter development trainee building cross-platform mobile skills with Dart and Flutter, contributing to responsive app interfaces and polished user experiences.",
    summaryAr:
      "نواف متدرب في تطوير Flutter يطوّر مهاراته في تطبيقات الموبايل متعددة المنصات باستخدام Dart وFlutter، ويساهم في واجهات متجاوبة وتجارب مستخدم مصقولة.",
    avatar: "/nawaf.png",
    group: "trainee",
  },
  {
    name: "Hozaifa Tarig",
    nameAr: "حذيفة طارق",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Hozaifa is a Flutter development trainee building practical mobile development skills with Dart and Flutter while contributing to responsive, user-friendly app interfaces.",
    summaryAr:
      "حذيفة متدرب في تطوير Flutter يطوّر مهارات عملية في تطوير تطبيقات الموبايل باستخدام Dart وFlutter، ويساهم في بناء واجهات تطبيقات متجاوبة وسهلة الاستخدام.",
    avatar: "/hozaifa.png",
    group: "trainee",
  },
  {
    name: "Mazin Abdelkhalig",
    nameAr: "مازن عبدالخالق",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Mazin is a Flutter development trainee focused on learning cross-platform mobile development and helping create polished, reliable app experiences.",
    summaryAr:
      "مازن متدرب في تطوير Flutter يركز على تعلم تطوير تطبيقات الموبايل متعددة المنصات والمساهمة في إنشاء تجارب تطبيقات متقنة وموثوقة.",
    avatar: "/mazin.png",
    group: "trainee",
  },
  {
    name: "Amro Sayed",
    nameAr: " عمرو سيد",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Amro is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
    summaryAr:
      "عمرو متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
    avatar: "/amro.png",
    group: "trainee",
  },
  {
    name: "Ibrahim Abubakr",
    nameAr: "ابراهيم أبوبكر",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Ibrahim is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
    summaryAr:
      "ابراهيم متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
    avatar: "/ibrahim.png",
    group: "trainee",
  },
    {
    name: "Mustafa Hashim",
    nameAr: "مصطفى هاشم",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Mustafa is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
    summaryAr:
      "ابراهيم متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
    avatar: "/mustafa-hashim.png",
    group: "trainee",
  },
   {
    name: "Mohammed Salah",
    nameAr: "محمد صلاح",
    role: "Flutter Development Trainee",
    roleAr: "متدرب تطوير Flutter",
    isCoFounder: false,
    summary:
      "Mohammed is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
    summaryAr:
      "محمد متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
    avatar: "/mohammed-salah.png",
    group: "trainee",
  },
];

export const coreTeamMembers = companyMembers.filter((member) => member.group === "team");

export const traineeMembers = companyMembers.filter((member) => member.group === "trainee");

export const formatRoleText = (member: CompanyMember) => {
  const hasCoFounderInRole = /co-?founder/i.test(member.role);

  if (member.isCoFounder && !hasCoFounderInRole) {
    return `${member.role} & Co-Founder`;
  }

  return member.role;
};

export const getMemberName = (member: CompanyMember, language: "en" | "ar") =>
  language === "ar" && member.nameAr ? member.nameAr : member.name;

export const getMemberRole = (member: CompanyMember, language: "en" | "ar") =>
  language === "ar" && member.roleAr ? member.roleAr : formatRoleText(member);

export const getMemberSummary = (member: CompanyMember, language: "en" | "ar") =>
  language === "ar" && member.summaryAr ? member.summaryAr : member.summary;
