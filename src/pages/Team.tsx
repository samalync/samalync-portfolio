import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, X, ExternalLink, Award, Code, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<typeof companyMembers[0] | null>(null);
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);

  const companyMembers = [
    {
      name: "Yassin AbuArki",
      role: "Chief Executive Officer (CEO) & Co-Founder",
      isCoFounder: true,
      summary: "Yassin combines hands-on technical expertise in Flutter and React Native with executive leadership. As CEO, he defines Samalync's strategic direction, oversees operations, and leads business growth while ensuring delivery excellence across projects. Technical expertise: Mobile and cross-platform development (Flutter, React Native). Leadership strengths: Strategic planning, project oversight, company leadership, and stakeholder management.",
      avatar: "/image copy 2.png",
      linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/"
    },
    {
      name: "Mazin Magdi",
      role: "Chief Growth & Innovation Officer, Co-Founder",
      isCoFounder: true,
      summary: "Mazin leads Samalync's growth & innovation services. He is responsible for market expansion, customer acquisition, and the development of AI-driven solutions. Technical skills: AI/ML, Graphic design, web development. Executive skills: growth strategy, market expansion, product innovation, competitive positioning.",
      avatar: "/image copy 3.png",
      linkedin: "https://www.linkedin.com/in/mazinmagdi/?originalSubdomain=rw"
    },
    {
      name: "Mohamed Babiker",
      role: "Senior Full-Stack Engineering",
      isCoFounder: false,
      summary: "Mohamed is a senior full-stack engineering contributor with strong experience in React, React Native, Node.js, TypeScript, and PostgreSQL. He has contributed to scalable web and mobile solutions, supporting RESTful API design, microservices architecture, database optimization, and cloud infrastructure including AWS, Vercel, and Docker. Mohamed brings clarity and structure to complex technical requirements through clean, maintainable code.",
      avatar: "/mohamed-babiker.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/"
    },
    {
      name: "Muhammed Salah",
      role: "Frontend, Mobile Development",
      isCoFounder: false,
      summary: "Muhammed is a frontend and mobile development contributor focused on building responsive and user-friendly digital experiences. He has contributed to web applications using React, HTML, CSS, and JavaScript, as well as cross-platform mobile solutions using Flutter and Dart. His work emphasizes usability, performance, and clean interface design across platforms.",
      avatar: "/muhammed-salah.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-salahelden-647b6128a"
    },
    {
      name: "Nancy Kwizera Teta",
      role: "Backend & AI/ML Engineering",
      isCoFounder: false,
      summary: "Nancy is a backend and AI/ML engineering contributor with experience in Flask, Node.js, Python, TypeScript, JavaScript, and database systems. She has contributed to backend APIs and data-driven components, supporting machine learning integration and scalable backend architectures within project-based collaborations.",
      avatar: "/nancy-kwizera-teta.jpg",
      linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/"
    },
    {
      name: "Ghufran Osama",
      role: "Graphic Design",
      isCoFounder: false,
      summary: "Ghufran is a talented graphic designer who specializes in creating visually compelling designs for branding, marketing materials, and digital experiences. With a keen eye for aesthetics and a passion for visual storytelling, Ghufra brings creativity and precision to every project, ensuring that our visual communications effectively represent the Samalync brand and engage our audience.",
      avatar: "/ghufran.png",
      linkedin: "",
      behance: ""
    },
    {
      name: "Ahmed Abdelhakeem",
      role: "UI/UX Design Intern",
      isCoFounder: false,
      summary: "Ahmed is a UI/UX Design intern contributing to user research, prototyping, and crafting intuitive interfaces that improve user experience.",
      avatar: "/ahmed-hakeem.png",
      linkedin: "https://www.linkedin.com/in/ahmed-abdelhakim-mohamed-2b71073a2/",
      behance: "https://www.behance.net/ahmedhakeem18/"
    },
  ];

  const formatRoleText = (member: typeof companyMembers[0]) => {
    const hasCoFounderInRole = /co-?founder/i.test(member.role);

    if (member.isCoFounder && !hasCoFounderInRole) {
      return `${member.role} & Co-Founder`;
    }

    return member.role;
  };

  const handleGetOfferClick = () => {
    // Navigate to contact section or handle offer request
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onGetOfferClick={handleGetOfferClick} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-600 tracking-wide">OUR TEAM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              We are a diverse team of talented individuals united by our passion for technology and innovation. Each member brings unique expertise and perspectives that drive our success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {companyMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden backdrop-blur-xl bg-slate-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2 rounded-3xl"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
              onClick={() => setSelectedMember(member)}
            >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="p-8 text-center space-y-6 relative z-10">
                  {/* Avatar or Photo */}
                  <div className="relative mx-auto flex items-center justify-center">
                    {member.avatar.startsWith("/") ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className={`w-36 h-36 rounded-full border-4 border-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 ${
                          member.name === "Hirwa Shingiro Bertrand"
                            ? "object-cover"
                            : "object-cover"
                        }`}
                        style={member.name === "Hirwa Shingiro Bertrand" ? { objectPosition: "center 60%" } : undefined}
                      />
                    ) : (
                      <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                        {member.avatar}
                      </div>
                    )}

                    {/* Avatar glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {(member.linkedin || member.behance || member.name === "Hirwa Shingiro Bertrand") && (
                      <div className="absolute -bottom-3 -right-3 flex items-center space-x-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <Linkedin className="h-5 w-5 text-white" />
                          </a>
                        )}

                        {member.behance && member.name === "Ahmed Abdelhakeem" && (
                          <a
                            href={member.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#1769FF] rounded-full flex items-center justify-center hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <span className="text-white text-sm font-semibold">B</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                        {member.name}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
                          {formatRoleText(member)}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 line-clamp-4">
                      {member.summary}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group text-center space-y-4 p-8 bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">9+</div>
              <div className="text-gray-600 font-medium text-lg">Team Members</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="group text-center space-y-4 p-8 bg-gradient-to-br from-white/80 to-cyan-50/50 backdrop-blur-sm rounded-3xl border border-cyan-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-gray-600 font-medium text-lg">Projects Completed</div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="group text-center space-y-4 p-8 bg-gradient-to-br from-white/80 to-indigo-50/50 backdrop-blur-sm rounded-3xl border border-indigo-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-600 font-medium text-lg">Client Satisfaction</div>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-[2px] flex items-center justify-center z-[100] p-4 animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-blue-200 relative animate-scaleIn z-[101]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex flex-col items-center text-center p-10 space-y-6">
              {selectedMember.avatar.startsWith("/") ? (
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setEnlargedPhoto(selectedMember.avatar)}
                >
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-2xl object-cover mb-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm bg-white/90 px-3 py-1 rounded-full">Click to enlarge</span>
                  </div>
                </div>
              ) : (
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-extrabold shadow-2xl mb-2">
                  {selectedMember.avatar}
                </div>
              )}
              <h2 className="text-3xl font-extrabold text-blue-900 drop-shadow-lg">{selectedMember.name}</h2>
              <p className="text-lg text-blue-700 font-semibold mb-2">{formatRoleText(selectedMember)}</p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{selectedMember.summary}</p>
              <div className="flex space-x-4 justify-center mt-2">
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] transition-all duration-300 shadow-lg">
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                )}
                {selectedMember.behance && (
                  <a href={selectedMember.behance} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1769FF] rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-lg">
                    <span className="text-white text-lg font-semibold">B</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Photo Modal */}
      {enlargedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[200] p-4 animate-fadeIn"
          onClick={() => setEnlargedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full z-[201]">
            <button
              onClick={() => setEnlargedPhoto(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <img
              src={enlargedPhoto}
              alt="Enlarged photo"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Team;
