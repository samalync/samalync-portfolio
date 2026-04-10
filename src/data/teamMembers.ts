export type CompanyMemberGroup = "team" | "trainee";

export type CompanyMember = {
  name: string;
  role: string;
  isCoFounder: boolean;
  summary: string;
  avatar: string;
  group: CompanyMemberGroup;
  linkedin?: string;
  behance?: string;
};

export const companyMembers: CompanyMember[] = [
  {
    name: "Yassin AbuArki",
    role: "Chief Executive Officer (CEO) & Founder",
    isCoFounder: false,
    summary:
      "Yassin combines hands-on technical expertise in Flutter and React Native with executive leadership. As CEO, he defines Samalync's strategic direction, oversees operations, and leads business growth while ensuring delivery excellence across projects. Technical expertise: Mobile and cross-platform development (Flutter, React Native). Leadership strengths: Strategic planning, project oversight, company leadership, and stakeholder management.",
    avatar: "/me.jpg",
    group: "team",
    linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/",
  },
  {
    name: "Mohamed Babiker",
    role: "Senior Full-Stack Engineering",
    isCoFounder: false,
    summary:
      "Mohamed is a senior full-stack engineering contributor with strong experience in React, React Native, Node.js, TypeScript, and PostgreSQL. He has contributed to scalable web and mobile solutions, supporting RESTful API design, microservices architecture, database optimization, and cloud infrastructure including AWS, Vercel, and Docker. Mohamed brings clarity and structure to complex technical requirements through clean, maintainable code.",
    avatar: "/mohamed-babiker.jpg",
    group: "team",
    linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/",
  },
  {
    name: "Mustafa Khamis",
    role: "Frontend Development",
    isCoFounder: false,
    summary:
      "Mustafa is a frontend development contributor focused on building responsive and user-friendly digital experiences. He is contributing to web applications using React, HTML, CSS, and JavaScript. His work emphasizes usability, performance, and clean interface design across platforms.",
    avatar: "/mustafa.png",
    group: "team",
    linkedin: "https://www.linkedin.com/in/mustafa-kh-hassan-b26ab5370/",
  },
  {
    name: "Nancy Kwizera Teta",
    role: "Backend & AI/ML Engineering",
    isCoFounder: false,
    summary:
      "Nancy is a backend and AI/ML engineering contributor with experience in Flask, Node.js, Python, TypeScript, JavaScript, and database systems. She has contributed to backend APIs and data-driven components, supporting machine learning integration and scalable backend architectures within project-based collaborations.",
    avatar: "/nancy-kwizera-teta.jpg",
    group: "team",
    linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/",
  },
  {
    name: "Ghufran Osama",
    role: "Graphic Design",
    isCoFounder: false,
    summary:
      "Ghufran is a talented graphic designer who specializes in creating visually compelling designs for branding, marketing materials, and digital experiences. With a keen eye for aesthetics and a passion for visual storytelling, Ghufran brings creativity and precision to every project, ensuring that our visual communications effectively represent the Samalync brand and engage our audience.",
    avatar: "/ghufran.png",
    group: "team",
    linkedin: "",
    behance: "",
  },
  {
    name: "Ahmed Abdelhakeem",
    role: "UI/UX & Flutter Development Trainee",
    isCoFounder: false,
    summary:
      "Ahmed is a UI/UX and Flutter development trainee contributing to user research, interface design, prototyping, and cross-platform product experiences that feel intuitive and polished.",
    avatar: "/ahmed-hakeem.png",
    group: "trainee",
    linkedin: "https://www.linkedin.com/in/ahmed-abdelhakim-mohamed-2b71073a2/",
    behance: "https://www.behance.net/ahmedhakeem18/",
  },
  {
    name: "Muhammed Mustafa",
    role: "Flutter Development Trainee",
    isCoFounder: false,
    summary:
      "Muhammed is a Flutter development trainee supporting cross-platform mobile experiences with Dart and Flutter, helping turn ideas into smooth, responsive app interfaces.",
    avatar: "/md-mustafa.jpg",
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
