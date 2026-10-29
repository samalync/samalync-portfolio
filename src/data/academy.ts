// Samalync Academy cohorts. Each cohort is data; pages are generated from it.
// Keep this file free of React and "@/" imports: vite.config.ts imports it to build sitemap.xml.
import { getPerson, getPersonName, type Lang, type PersonCardData } from "./people";

export type Localized = { en: string; ar: string };

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

// PLACEHOLDER: community / waitlist link (e.g. WhatsApp community or a form). While empty, CTAs fall back to the contact section.
export const communityUrl = "";

// PLACEHOLDER: "What our trainees built". The section is hidden while this array is empty.
export const traineeProjects: TraineeProject[] = [];

const flutterTrack: Localized = { en: "Flutter Mobile Development", ar: "تطوير تطبيقات الموبايل باستخدام Flutter" };

const flutterTrainee = { role: "Flutter Development Trainee", roleAr: "متدرب تطوير Flutter" };

export const cohorts: Cohort[] = [
  {
    id: "cohort-1",
    slug: "cohort-1",
    number: 1,
    title: { en: "Cohort 1", ar: "الدفعة الأولى" },
    track: flutterTrack,
    description: {
      en: "The first Samalync Academy cohort. After completing the learning phase, Cohort 1 trainees are now in the practical phase, building a real project with a real API inside the company.",
      ar: "الدفعة الأولى من أكاديمية سامالينك. بعد إتمام مرحلة التعلم، ينتقل متدربو الدفعة الأولى الآن إلى المرحلة العملية، حيث يبنون مشروعا حقيقيا يعتمد على واجهة API حقيقية داخل الشركة.",
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
      en: "Cohort 2 starts on 11 November 2026 and follows the full 6-month path: four months of learning, then two months of practical work on a real project inside the company. All seats are taken.",
      ar: "تبدأ الدفعة الثانية في 11 نوفمبر 2026 وتسير في المسار الكامل لمدة ستة أشهر: أربعة أشهر من التعلم، ثم شهران من العمل التطبيقي على مشروع حقيقي داخل الشركة. جميع المقاعد محجوزة.",
    },
    startDate: "2026-11-11",
    status: "upcoming",
    enrollment: "full",
    // PLACEHOLDER: seat count to confirm. seatsTaken stays undefined so only "Seats full" is shown.
    seatsTotal: 20,
    hasPage: true,
    // No members listed: no publication consent yet.
    members: [],
  },
  {
    id: "cohort-3",
    slug: "cohort-3",
    number: 3,
    title: { en: "Cohort 3", ar: "الدفعة الثالثة" },
    track: flutterTrack,
    description: {
      en: "Dates will be announced soon. Join the waitlist to hear first when registration opens.",
      ar: "سيتم الإعلان عن المواعيد قريبا. انضم إلى قائمة الانتظار لتكون أول من يعلم عند فتح التسجيل.",
    },
    status: "upcoming",
    enrollment: "waitlist",
    hasPage: false,
    members: [],
  },
];

export const getCohortBySlug = (slug: string | undefined) =>
  cohorts.find((cohort) => cohort.hasPage && cohort.slug === slug);

export const activeCohorts = cohorts.filter((cohort) => cohort.status === "active");

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
