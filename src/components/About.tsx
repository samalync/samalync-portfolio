import React, { memo, useCallback, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, X } from "lucide-react";

type CompanyMember = {
  name: string;
  role: string;
  isCoFounder: boolean;
  summary: string;
  avatar: string;
  linkedin?: string;
  behance?: string;
};

const companyMembers: CompanyMember[] = [
  {
    name: "Yassin AbuArki",
    role: "Chief Executive Officer (CEO) & Founder",
    isCoFounder: false,
    summary: "Yassin combines hands-on technical expertise in Flutter and React Native with executive leadership. As CEO, he defines Samalync’s strategic direction, oversees operations, and leads business growth while ensuring delivery excellence across projects. Technical expertise: Mobile and cross-platform development (Flutter, React Native). Leadership strengths: Strategic planning, project oversight, company leadership, and stakeholder management.",
    avatar: "/me.jpg",
    linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/",
  },
  {
    name: "Mohamed Babiker",
    role: "Senior Full-Stack Engineering",
    isCoFounder: false,
    summary: "Mohamed is a senior full-stack engineering contributor with strong experience in React, React Native, Node.js, TypeScript, and PostgreSQL. He has contributed to scalable web and mobile solutions, supporting RESTful API design, microservices architecture, database optimization, and cloud infrastructure including AWS, Vercel, and Docker. Mohamed brings clarity and structure to complex technical requirements through clean, maintainable code.",
    avatar: "/mohamed-babiker.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/",
  },
  {
    name: "Muhammed Salah",
    role: "Frontend, Mobile Development",
    isCoFounder: false,
    summary: "Muhammed is a frontend and mobile development contributor focused on building responsive and user-friendly digital experiences. He has contributed to web applications using React, HTML, CSS, and JavaScript, as well as cross-platform mobile solutions using Flutter and Dart. His work emphasizes usability, performance, and clean interface design across platforms.",
    avatar: "/muhammed-salah.jpg",
    linkedin: "https://www.linkedin.com/in/mohammed-salahelden-647b6128a",
  },
  {
    name: "Nancy Kwizera Teta",
    role: "Backend & AI/ML Engineering",
    isCoFounder: false,
    summary: "Nancy is a backend and AI/ML engineering contributor with experience in Flask, Node.js, Python, TypeScript, JavaScript, and database systems. She has contributed to backend APIs and data-driven components, supporting machine learning integration and scalable backend architectures within project-based collaborations.",
    avatar: "/nancy-kwizera-teta.jpg",
    linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/",
  },
  {
    name: "Ghufran Osama",
    role: "Graphic Design",
    isCoFounder: false,
    summary: "Ghufran is a talented graphic designer who specializes in creating visually compelling designs for branding, marketing materials, and digital experiences. With a keen eye for aesthetics and a passion for visual storytelling, Ghufra brings creativity and precision to every project, ensuring that our visual communications effectively represent the Samalync brand and engage our audience.",
    avatar: "/ghufran.png",
    linkedin: "",
    behance: "",
  },
  {
    name: "Ahmed Abdelhakeem",
    role: "UI/UX Design Intern",
    isCoFounder: false,
    summary: "Ahmed is a UI/UX Design intern contributing to user research, prototyping, and crafting intuitive interfaces that improve user experience.",
    avatar: "/ahmed-hakeem.png",
    linkedin: "https://www.linkedin.com/in/ahmed-abdelhakim-mohamed-2b71073a2/",
    behance: "https://www.behance.net/ahmedhakeem18/",
  },
];

const teamStats = [
  {
    value: "10+",
    label: "Projects Completed",
    accent: "from-cyan-600 to-blue-600",
    border: "border-cyan-100",
    background: "from-cyan-50 to-white",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    accent: "from-purple-600 to-pink-600",
    border: "border-purple-100",
    background: "from-purple-50 to-white",
  },
  {
    value: "24/7",
    label: "Support Available",
    accent: "from-blue-600 to-indigo-600",
    border: "border-blue-100",
    background: "from-blue-50 to-white",
  },
] as const;

const formatRoleText = (member: CompanyMember) => {
  const hasCoFounderInRole = /co-?founder/i.test(member.role);

  if (member.isCoFounder && !hasCoFounderInRole) {
    return `${member.role} & Co-Founder`;
  }

  return member.role;
};

type TeamMemberCardProps = {
  member: CompanyMember;
  index: number;
  onSelect: (member: CompanyMember) => void;
};

const TeamMemberCard = memo(({ member, index, onSelect }: TeamMemberCardProps) => {
  const hasLinks = Boolean(member.linkedin || member.behance);

  return (
    <Card
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg cursor-pointer"
      style={{ animation: `fadeInUp 0.55s ease-out ${index * 0.08}s both` }}
      onClick={() => onSelect(member)}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-cyan-50 via-blue-50/80 to-white" />

      <CardContent className="relative z-10 p-8 text-center">
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          {member.avatar.startsWith("/") ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-md">
              {member.avatar}
            </div>
          )}

          {hasLinks && (
            <div className="absolute -bottom-2 -right-2 flex items-center gap-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-sm transition-colors duration-200 hover:bg-[#005885]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}

              {member.behance && (
                <a
                  href={member.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1769FF] text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
                  onClick={(event) => event.stopPropagation()}
                >
                  <span className="text-sm font-semibold">B</span>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              {formatRoleText(member)}
            </p>
          </div>

          <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">
            {member.summary}
          </p>
        </div>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70" />
      </CardContent>
    </Card>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

const AboutStats = memo(() => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
    {teamStats.map((stat) => (
      <div
        key={stat.label}
        className={`rounded-3xl border ${stat.border} bg-gradient-to-br ${stat.background} p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md`}
      >
        <div className={`bg-gradient-to-r ${stat.accent} bg-clip-text text-5xl font-bold text-transparent`}>
          {stat.value}
        </div>
        <div className="mt-4 text-lg font-medium text-slate-600">{stat.label}</div>
        <div className={`mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${stat.accent}`} />
      </div>
    ))}
  </div>
));

AboutStats.displayName = "AboutStats";

const About = memo(() => {
  const [selectedMember, setSelectedMember] = useState<CompanyMember | null>(null);
  const handleSelectMember = useCallback((member: CompanyMember) => {
    setSelectedMember(member);
  }, []);
  const closeMemberModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  return (
    <section id="about" className="performance-section py-20 bg-white relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-cyan-600 tracking-wide">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800 bg-clip-text text-transparent leading-tight">
            Meet Our Team
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              We are a software company delivering innovative mobile, web, and design solutions, backed by experienced leadership and a network of skilled independent contributors and collaborators.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {companyMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              onSelect={handleSelectMember}
            />
          ))}
        </div>

        {/* Company Stats */}
        <AboutStats />
      </div>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/72 p-4"
          onClick={closeMemberModal}
        >
          <div
            className="relative z-[101] max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMemberModal}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-200 hover:bg-slate-200"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center text-center p-10 space-y-6">
              {selectedMember.avatar.startsWith("/") ? (
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="mb-2 h-48 w-48 rounded-full border-4 border-blue-100 object-cover shadow-md"
                  decoding="async"
                />
              ) : (
                <div className="mb-2 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-5xl font-extrabold text-white shadow-md">
                  {selectedMember.avatar}
                </div>
              )}
              <h2 className="text-3xl font-extrabold text-blue-900">{selectedMember.name}</h2>
              <p className="mb-2 text-lg font-semibold text-blue-700">{formatRoleText(selectedMember)}</p>
              <p className="mb-4 text-base leading-relaxed text-slate-700">{selectedMember.summary}</p>
              <div className="flex space-x-4 justify-center mt-2">
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-sm transition-colors duration-200 hover:bg-[#005885]">
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
                {selectedMember.behance && (
                  <a href={selectedMember.behance} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1769FF] text-white shadow-sm transition-opacity duration-200 hover:opacity-90">
                    <span className="text-white text-lg font-semibold">B</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

About.displayName = "About";

export default About;
