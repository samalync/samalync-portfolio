// Samalync Academy cohorts, tracks, roadmap and FAQ. Pages are generated from this data.
// Keep this file free of React and "@/" imports: vite.config.ts imports it to build sitemap.xml.
// Arabic strings are Modern Standard Arabic and NEED NATIVE REVIEW before launch.
//
// Honesty rules for all copy here: Cohort 1 is a pilot in its practical phase (not graduated);
// other tracks are planned, not running; no job/internship promises, prices, schedules or trainer details.
import { getPerson, getPersonName, type Lang, type PersonCardData } from "./people";

export type Localized = { en: string; ar: string };
export type LocalizedList = { en: string[]; ar: string[] };

export type CohortStatus = "upcoming" | "active" | "graduated";
export type CohortPhase = "learning" | "practical";
export type CohortEnrollment = "open" | "full" | "waitlist" | "closed";

export type CohortMember = {
  personId: string;
  role: string;
  roleAr?: string;
  summary?: string;
  summaryAr?: string;
  /** Only consented members are shown publicly. */
  consented: boolean;
  projects?: { title: string; url?: string }[];
};

export type Cohort = {
  id: string;
  slug: string;
  number: number;
  title: Localized;
  track: Localized;
  description: Localized;
  /** ISO date (YYYY-MM-DD). Missing = shown as "TBA". */
  startDate?: string;
  /** false = only the month of startDate is shown publicly. */
  startDateConfirmed?: boolean;
  endDate?: string;
  /** ISO month (YYYY-MM) shown as "expected around …" while endDate is unknown. */
  expectedEnd?: string;
  status: CohortStatus;
  phase?: CohortPhase;
  enrollment: CohortEnrollment;
  seatsTotal?: number;
  /** Leave undefined to hide the number. */
  seatsTaken?: number;
  applyUrl?: string;
  /** false = card on /academy only, no /academy/:slug page and no sitemap entry. */
  hasPage: boolean;
  members: CohortMember[];
};

export type TraineeProject = {
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  /** Path under /public, ideally WebP around 1200px wide. */
  screenshot: string;
  url?: string;
};

// PLACEHOLDER: community / waitlist link (e.g. WhatsApp community or a form). While empty, CTAs fall back to the contact form with a prefilled subject.
export const communityUrl = "";

// PLACEHOLDER: "What our trainees built". The section is hidden while this array is empty.
export const traineeProjects: TraineeProject[] = [];

const flutterTrack: Localized = { en: "Flutter Mobile Development", ar: "تطوير تطبيقات الموبايل باستخدام Flutter" };

const flutterTrainee = { role: "Flutter Development Trainee", roleAr: "متدرب تطوير Flutter" };
const cohort2Trainee = { role: "Flutter Trainee", roleAr: "متدرب Flutter" };

export const cohorts: Cohort[] = [
  {
    id: "cohort-1",
    slug: "cohort-1",
    number: 1,
    title: { en: "Cohort 1", ar: "الدفعة الأولى" },
    track: flutterTrack,
    description: {
      en: "The pilot cohort of the Mobile Development Program. Trainees have completed the learning phase and are now in the practical phase: a team project built with Git/GitHub workflows, code reviews and task tracking.",
      ar: "الدفعة التجريبية الأولى من برنامج تطوير تطبيقات الموبايل. أتمّ المتدربون مرحلة التعلّم، وهم الآن في المرحلة العملية: مشروع جماعي يُبنى باستخدام سير عمل Git/GitHub ومراجعات الكود وتتبّع المهام.",
    },
    // TODO(confirm): Cohort 1 start date. Shown as "TBA" until filled.
    startDate: undefined,
    expectedEnd: "2026-11",
    status: "active",
    phase: "practical",
    enrollment: "closed",
    seatsTotal: 12,
    hasPage: true,
    // TODO(confirm): consent exceptions. All 12 are marked consented (already public on the site).
    members: [
      {
        personId: "ahmed-abdelhakeem",
        role: "UI/UX & Flutter Development Trainee",
        roleAr: "متدرب تصميم UI/UX وتطوير Flutter",
        summary:
          "Ahmed is a UI/UX and Flutter development trainee contributing to user research, interface design, prototyping, and cross-platform product experiences that feel intuitive and polished.",
        summaryAr:
          "أحمد متدرب في تصميم UI/UX وتطوير Flutter، يساهم في أبحاث المستخدم وتصميم الواجهات والنمذجة وتجارب المنتجات متعددة المنصات لتكون بديهية ومتقنة.",
        consented: true,
      },
      {
        personId: "muhammed-mustafa",
        ...flutterTrainee,
        summary:
          "Muhammed is a Flutter development trainee supporting cross-platform mobile experiences with Dart and Flutter, helping turn ideas into smooth, responsive app interfaces.",
        summaryAr:
          "محمد متدرب في تطوير Flutter يدعم تجارب الموبايل متعددة المنصات باستخدام Dart وFlutter، ويساعد على تحويل الأفكار إلى واجهات تطبيقات سلسة ومتجاوبة.",
        consented: true,
      },
      {
        personId: "mustafa-khamis",
        ...flutterTrainee,
        summary:
          "Mustafa is a Flutter development trainee building cross-platform mobile skills with Dart and Flutter, contributing to responsive app interfaces and polished user experiences.",
        summaryAr:
          "مصطفى متدرب في تطوير Flutter يطوّر مهاراته في تطبيقات الموبايل متعددة المنصات باستخدام Dart وFlutter، ويساهم في واجهات متجاوبة وتجارب مستخدم مصقولة.",
        consented: true,
      },
      {
        personId: "nancy-kwizera-teta",
        role: "Flutter Development Trainee",
        roleAr: "متدربة تطوير Flutter",
        summary:
          "Nancy is a Flutter development trainee building cross-platform mobile skills with Dart and Flutter, contributing to responsive app interfaces and polished user experiences.",
        summaryAr:
          "نانسي متدربة في تطوير Flutter تطوّر مهاراتها في تطبيقات الموبايل متعددة المنصات باستخدام Dart وFlutter، وتساهم في واجهات متجاوبة وتجارب مستخدم مصقولة.",
        consented: true,
      },
      {
        personId: "nawaf-abubakr",
        ...flutterTrainee,
        summary:
          "Nawaf is a Flutter development trainee building cross-platform mobile skills with Dart and Flutter, contributing to responsive app interfaces and polished user experiences.",
        summaryAr:
          "نواف متدرب في تطوير Flutter يطوّر مهاراته في تطبيقات الموبايل متعددة المنصات باستخدام Dart وFlutter، ويساهم في واجهات متجاوبة وتجارب مستخدم مصقولة.",
        consented: true,
      },
      {
        personId: "hozaifa-tarig",
        ...flutterTrainee,
        summary:
          "Hozaifa is a Flutter development trainee building practical mobile development skills with Dart and Flutter while contributing to responsive, user-friendly app interfaces.",
        summaryAr:
          "حذيفة متدرب في تطوير Flutter يطوّر مهارات عملية في تطوير تطبيقات الموبايل باستخدام Dart وFlutter، ويساهم في بناء واجهات تطبيقات متجاوبة وسهلة الاستخدام.",
        consented: true,
      },
      {
        personId: "mazin-abdelkhalig",
        ...flutterTrainee,
        summary:
          "Mazin is a Flutter development trainee focused on learning cross-platform mobile development and helping create polished, reliable app experiences.",
        summaryAr:
          "مازن متدرب في تطوير Flutter يركز على تعلم تطوير تطبيقات الموبايل متعددة المنصات والمساهمة في إنشاء تجارب تطبيقات متقنة وموثوقة.",
        consented: true,
      },
      {
        personId: "amro-sayed",
        ...flutterTrainee,
        summary:
          "Amro is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
        summaryAr:
          "عمرو متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
        consented: true,
      },
      {
        personId: "ibrahim-abubakr",
        ...flutterTrainee,
        summary:
          "Ibrahim is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
        summaryAr:
          "ابراهيم متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
        consented: true,
      },
      {
        personId: "mustafa-hashim",
        ...flutterTrainee,
        summary:
          "Mustafa is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
        summaryAr:
          "مصطفى متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
        consented: true,
      },
      {
        personId: "mohammed-salah",
        ...flutterTrainee,
        summary:
          "Mohammed is a Flutter development trainee developing mobile app skills with Dart and Flutter through hands-on product interface work.",
        summaryAr:
          "محمد متدرب في تطوير Flutter يطوّر مهارات تطبيقات الموبايل باستخدام Dart وFlutter عبر العمل العملي على واجهات المنتجات.",
        consented: true,
      },
      {
        personId: "kamal-bakri",
        ...flutterTrainee,
        summary:
          "Kamal is a Flutter development trainee building practical mobile development skills with Dart and Flutter while contributing to responsive, user-friendly app interfaces.",
        summaryAr:
          "كمال متدرب في تطوير Flutter يطوّر مهارات عملية في تطوير تطبيقات الموبايل باستخدام Dart وFlutter، ويساهم في بناء واجهات تطبيقات متجاوبة وسهلة الاستخدام.",
        consented: true,
      },
    ],
  },
  {
    id: "cohort-2",
    slug: "cohort-2",
    number: 2,
    title: { en: "Cohort 2", ar: "الدفعة الثانية" },
    track: flutterTrack,
    description: {
      en: "Cohort 2 starts in November 2026 and follows the full six-month path: four months of learning, then two months on a team project built with Git/GitHub workflows, code reviews and task tracking. All seats are taken.",
      ar: "تبدأ الدفعة الثانية في نوفمبر 2026 وتسير في المسار الكامل لمدة ستة أشهر: أربعة أشهر من التعلّم، ثم شهران في مشروع جماعي يُبنى باستخدام سير عمل Git/GitHub ومراجعات الكود وتتبّع المهام. جميع المقاعد محجوزة.",
    },
    // TODO(confirm): exact day. Only "November 2026" is shown until startDateConfirmed is true.
    startDate: "2026-11-11",
    startDateConfirmed: false,
    status: "upcoming",
    enrollment: "full",
    // seatsTaken stays undefined so only "Seats full" is shown.
    seatsTotal: 20,
    hasPage: true,
    // All 22 agreed to be listed; three chose not to publish a photo (initial shown instead).
    members: [
      { personId: "mustafa-rabie", ...cohort2Trainee, consented: true },
      { personId: "omer-mohammed", ...cohort2Trainee, consented: true },
      { personId: "elfadil-badr-elden", ...cohort2Trainee, consented: true },
      { personId: "abdelgafor-mohamed", ...cohort2Trainee, consented: true },
      { personId: "abubakr-basher", ...cohort2Trainee, consented: true },
      { personId: "wadah-mzamil", ...cohort2Trainee, consented: true },
      { personId: "mohammed-alrayeh", ...cohort2Trainee, consented: true },
      { personId: "meirgani-abaker", ...cohort2Trainee, consented: true },
      { personId: "mohammed-awad", ...cohort2Trainee, consented: true },
      { personId: "moumen-hassan", ...cohort2Trainee, consented: true },
      { personId: "nadir-jomma", ...cohort2Trainee, consented: true },
      { personId: "mohammed-faiz", ...cohort2Trainee, consented: true },
      { personId: "mazen-isam", ...cohort2Trainee, consented: true },
      { personId: "yazid-moawia", ...cohort2Trainee, consented: true },
      { personId: "moazar-mohamed", ...cohort2Trainee, consented: true },
      { personId: "mohamed-mozamil", ...cohort2Trainee, consented: true },
      { personId: "omer-abubakr", ...cohort2Trainee, consented: true },
      { personId: "qusai-tarig", ...cohort2Trainee, consented: true },
      { personId: "mohammed-alseddig", ...cohort2Trainee, consented: true },
      { personId: "esraa-borae", ...cohort2Trainee, consented: true },
      { personId: "tasabeeh-omer", ...cohort2Trainee, consented: true },
      { personId: "khansa-shihab", ...cohort2Trainee, consented: true },
    ],
  },
  {
    id: "cohort-3",
    slug: "cohort-3",
    number: 3,
    title: { en: "Cohort 3", ar: "الدفعة الثالثة" },
    track: flutterTrack,
    description: {
      en: "Dates are not set yet. Join the waitlist to hear first when registration opens.",
      ar: "لم تُحدَّد المواعيد بعد. انضم إلى قائمة الانتظار لتكون أول من يعلم عند فتح التسجيل.",
    },
    status: "upcoming",
    enrollment: "waitlist",
    hasPage: false,
    members: [],
  },
];

export type TrackStatus = "active" | "planned";

export type AcademyTrack = {
  id: string;
  title: Localized;
  /** Short name used in the contact subject, e.g. "interested in the Web track". */
  shortName: Localized;
  description: Localized;
  status: TrackStatus;
};

export const tracks: AcademyTrack[] = [
  {
    id: "mobile",
    title: { en: "Mobile Development", ar: "تطوير تطبيقات الموبايل" },
    shortName: { en: "Mobile", ar: "الموبايل" },
    description: {
      en: "Dart and Flutter, from programming basics to a team project.",
      ar: "Dart وFlutter، من أساسيات البرمجة حتى مشروع جماعي.",
    },
    status: "active",
  },
  {
    id: "web",
    title: { en: "Web Development", ar: "تطوير الويب" },
    shortName: { en: "Web", ar: "الويب" },
    description: {
      en: "Building web applications. Part of the longer-term plan; no dates yet.",
      ar: "بناء تطبيقات الويب. ضمن الخطة بعيدة المدى، ولا توجد مواعيد بعد.",
    },
    status: "planned",
  },
  {
    id: "backend",
    title: { en: "Backend Engineering", ar: "هندسة الأنظمة الخلفية (Backend)" },
    shortName: { en: "Backend", ar: "الأنظمة الخلفية" },
    description: {
      en: "Servers, APIs and databases. Part of the longer-term plan; no dates yet.",
      ar: "الخوادم وواجهات API وقواعد البيانات. ضمن الخطة بعيدة المدى، ولا توجد مواعيد بعد.",
    },
    status: "planned",
  },
];

export type RoadmapStep = {
  id: string;
  /** Months covered, e.g. [1] or [5]. */
  month: number;
  phase: CohortPhase;
  title: Localized;
  summary: Localized;
  topics: LocalizedList;
};

// Topic-level plan for the Mobile Development Program. Shown with a "may be refined" badge.
export const roadmap: RoadmapStep[] = [
  {
    id: "m1",
    month: 1,
    phase: "learning",
    title: { en: "Dart and programming fundamentals", ar: "Dart وأساسيات البرمجة" },
    summary: {
      en: "How programs work, written in Dart.",
      ar: "كيف تعمل البرامج، بلغة Dart.",
    },
    topics: {
      en: ["Variables, types and control flow", "Functions and collections", "Classes and objects", "Null safety"],
      ar: ["المتغيرات والأنواع والتحكم في التدفق", "الدوال والمجموعات", "الأصناف والكائنات", "الأمان من القيم الفارغة (Null safety)"],
    },
  },
  {
    id: "m2",
    month: 2,
    phase: "learning",
    title: { en: "Flutter and UI", ar: "Flutter وواجهات المستخدم" },
    summary: {
      en: "Building screens people can use.",
      ar: "بناء شاشات قابلة للاستخدام.",
    },
    topics: {
      en: ["Widgets", "Layouts", "Forms and input", "Navigation between screens"],
      ar: ["الودجات (Widgets)", "التخطيطات (Layouts)", "النماذج والإدخال", "التنقل بين الشاشات"],
    },
  },
  {
    id: "m3",
    month: 3,
    phase: "learning",
    title: { en: "App logic and data", ar: "منطق التطبيق والبيانات" },
    summary: {
      en: "Connecting the app to real data.",
      ar: "ربط التطبيق ببيانات حقيقية.",
    },
    topics: {
      en: ["Managing state", "APIs and HTTP", "JSON", "Asynchronous code", "Loading and error states"],
      ar: ["إدارة الحالة", "واجهات API وبروتوكول HTTP", "JSON", "البرمجة غير المتزامنة", "حالات التحميل والأخطاء"],
    },
  },
  {
    id: "m4",
    month: 4,
    phase: "learning",
    title: { en: "Professional practices", ar: "الممارسات المهنية" },
    summary: {
      en: "Habits that make code easy to work on.",
      ar: "عادات تجعل العمل على الكود أسهل.",
    },
    topics: {
      en: ["Clean code", "Git and GitHub", "Debugging", "Basic testing"],
      ar: ["الكود النظيف", "Git وGitHub", "تتبّع الأخطاء وإصلاحها", "أساسيات الاختبار"],
    },
  },
  {
    id: "m5",
    month: 5,
    phase: "practical",
    title: { en: "Team project: plan and build", ar: "المشروع الجماعي: التخطيط والبناء" },
    summary: {
      en: "Working as a team on one app.",
      ar: "العمل كفريق على تطبيق واحد.",
    },
    topics: {
      en: ["Understanding requirements", "Breaking work into tasks", "Collaborating on GitHub", "Task tracking"],
      ar: ["فهم المتطلبات", "تقسيم العمل إلى مهام", "التعاون عبر GitHub", "تتبّع المهام"],
    },
  },
  {
    id: "m6",
    month: 6,
    phase: "practical",
    title: { en: "Team project: review and present", ar: "المشروع الجماعي: المراجعة والعرض" },
    summary: {
      en: "Finishing the work and showing it.",
      ar: "إنهاء العمل وعرضه.",
    },
    topics: {
      en: ["Code review", "Finishing and polishing", "Presenting the result"],
      ar: ["مراجعة الكود", "الإنهاء والتحسين", "عرض النتيجة"],
    },
  },
];

export type FaqItem = { question: Localized; answer: Localized };

export const academyFaq: FaqItem[] = [
  {
    question: { en: "Who is the program for?", ar: "لمن هذا البرنامج؟" },
    answer: {
      en: "Beginners, university students, young graduates and people with a little programming experience. No background is required, but steady effort for the full six months is.",
      ar: "للمبتدئين وطلاب الجامعات والخريجين الجدد ومن لديهم خبرة بسيطة في البرمجة. لا تُشترط خلفية سابقة، لكن يُشترط الجهد المستمر طوال الأشهر الستة.",
    },
  },
  {
    question: { en: "Do I need a programming background?", ar: "هل أحتاج إلى خلفية في البرمجة؟" },
    answer: {
      en: "No. The program starts from the basics and builds up step by step. You will need a computer and a reliable internet connection.",
      ar: "لا. يبدأ البرنامج من الأساسيات ويتدرّج خطوة بخطوة. ستحتاج إلى جهاز كمبيوتر واتصال إنترنت مستقر.",
    },
  },
  {
    question: { en: "What is the format?", ar: "ما شكل البرنامج؟" },
    answer: {
      en: "Six months, mostly online, with planned in-person sessions in Kigali. Months 1–4 are for learning; months 5–6 are a team project built with Git/GitHub workflows, code reviews and task tracking. The schedule is shared with accepted trainees.",
      ar: "ستة أشهر، معظمها عن بُعد، مع جلسات حضورية مخطط لها في كيغالي. الأشهر 1–4 للتعلّم، والأشهر 5–6 لمشروع جماعي يُبنى باستخدام سير عمل Git/GitHub ومراجعات الكود وتتبّع المهام. يُشارَك الجدول مع المتدربين المقبولين.",
    },
  },
  {
    question: { en: "How do I get the certificate?", ar: "كيف أحصل على الشهادة؟" },
    answer: {
      en: "The completion certificate is awarded to trainees who meet the completion requirements, including the team project.",
      ar: "تُمنح شهادة الإتمام للمتدربين الذين يستوفون متطلبات الإتمام، بما في ذلك المشروع الجماعي.",
    },
  },
  {
    question: { en: "How do I apply?", ar: "كيف أتقدّم؟" },
    answer: {
      en: "Seats for Cohort 2 are full. Join the waitlist and we will contact you when registration for Cohort 3 opens.",
      ar: "مقاعد الدفعة الثانية مكتملة. انضم إلى قائمة الانتظار وسنتواصل معك عند فتح التسجيل للدفعة الثالثة.",
    },
  },
  {
    question: { en: "Does the program guarantee a job or internship?", ar: "هل يضمن البرنامج وظيفة أو تدريبا عمليا؟" },
    answer: {
      en: "No. We help you build skills and a portfolio. Opportunities depend on your skills and on what is available.",
      ar: "لا. نساعدك على بناء المهارات ومعرض أعمال، أما الفرص فتعتمد على مهاراتك وعلى ما هو متاح.",
    },
  },
  {
    question: { en: "Is the Academy only mobile?", ar: "هل الأكاديمية مقتصرة على الموبايل؟" },
    answer: {
      en: "Mobile comes first. Other tracks are planned, but not scheduled.",
      ar: "الموبايل أولا. هناك مسارات أخرى مخطط لها، لكن دون مواعيد محددة.",
    },
  },
];

export const getCohortBySlug = (slug: string | undefined) =>
  cohorts.find((cohort) => cohort.hasPage && cohort.slug === slug);

export const activeCohorts = cohorts.filter((cohort) => cohort.status === "active");

/** The next cohort with its own page (Cohort 2 today). */
export const nextCohort = cohorts.find((cohort) => cohort.status === "upcoming" && cohort.hasPage);

/** The cohort currently taking waitlist sign-ups (Cohort 3 today). */
export const waitlistCohort = cohorts.find((cohort) => cohort.enrollment === "waitlist");

/** Consented members joined with their person record, localized for PersonCard. */
export const getCohortCards = (cohort: Cohort, language: Lang): PersonCardData[] =>
  cohort.members
    .filter((member) => member.consented)
    .map((member) => {
      const person = getPerson(member.personId);
      if (!person) {
        throw new Error(`Unknown personId "${member.personId}" in ${cohort.id}`);
      }

      return {
        id: person.id,
        name: getPersonName(person, language),
        role: language === "ar" && member.roleAr ? member.roleAr : member.role,
        summary: (language === "ar" && member.summaryAr ? member.summaryAr : member.summary) ?? "",
        avatar: person.avatar,
        linkedin: person.linkedin,
        behance: person.behance,
      };
    });

export const cohortPaths = () => cohorts.filter((cohort) => cohort.hasPage).map((cohort) => `/academy/${cohort.slug}`);
