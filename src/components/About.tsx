import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About: React.FC = () => {
  const companyMembers = [
    {
      name: "Yassin AbuArki",
      role: "Chief Executive Officer (CEO) & Co-Founder",
      isCoFounder: true,
      summary: "Yassin combines hands-on technical expertise in Flutter and React Native with executive leadership. As CEO, he defines Samalync’s strategic direction, oversees operations, and leads business growth while ensuring delivery excellence across projects. Technical expertise: Mobile and cross-platform development (Flutter, React Native). Leadership strengths: Strategic planning, project oversight, company leadership, and stakeholder management.",
      avatar: "/image copy 2.png",
      linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/"
    },
    {
      name: "Mazin Magdi",
      role: `Chief Growth & Innovation Officer, Co-Founder`,
      isCoFounder: true,
      summary: "Mazin leads Samalync’s growth & innovation services. He is responsible for market expansion, customer acquisition, and the development of AI-driven solutions. Technical skills: AI/ML, Graphic design, web development. Executive skills: growth strategy, market expansion, product innovation, competitive positioning.",
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
      name: "Ishimwe Pacific",
      role: "Frontend Development & Graphic Design",
      isCoFounder: false,
      summary: "Ishimwe Pacific is a frontend development and design contributor who blends technical execution with visual creativity. He has contributed to modern, responsive interfaces and design systems, helping bridge the gap between design and development. His work focuses on delivering visually consistent, functional, and well-structured user experiences.",
      avatar: "/ishimwe-paccy.jpg",
      linkedin: "https://www.linkedin.com/in/ishimwe-pacific/"
    },
    {
      name: "Nancy Kwizera Teta",
      role: "Backend & AI/ML Engineering",
      isCoFounder: false,
      summary: "Nancy is a backend and AI/ML engineering contributor with experience in Flask, Node.js, Python, TypeScript, JavaScript, and database systems. She has contributed to backend APIs and data-driven components, supporting machine learning integration and scalable backend architectures within project-based collaborations.",
      avatar: "/nancy-kwizera-teta.jpg",
      linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/"
    },
   
  ];

  const formatRoleText = (member: typeof companyMembers[0]) => {
  const hasCoFounderInRole = /co-?founder/i.test(member.role);

  if (member.isCoFounder && !hasCoFounderInRole) {
    return `${member.role} & Co-Founder`;
  }

  return member.role;
};


  const renderMemberCard = (member: typeof companyMembers[0], index: number) => (
    <Card 
      key={index}
      className="group card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden w-full"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
      }}
    >
      <CardContent className="p-6 text-center space-y-6">
        {/* Avatar or Photo */}
        <div className="relative mx-auto flex items-center justify-center">
          {member.avatar.startsWith("/") ? (
            <img
              src={member.avatar}
              alt={member.name}
              className={`w-32 h-32 rounded-full border-2 border-primary group-hover:scale-105 transition-transform duration-300 ${
                member.name === "Hirwa Shingiro Bertrand" 
                  ? "object-cover" 
                  : "object-cover"
              }`}
              style={member.name === "Hirwa Shingiro Bertrand" ? { objectPosition: "center 60%" } : undefined}
            />
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
              {member.avatar}
            </div>
          )}
          {(member.linkedin || member.name === "Hirwa Shingiro Bertrand") && (
            <a 
              href={member.linkedin || "#"}
              target={member.linkedin ? "_blank" : undefined}
              rel={member.linkedin ? "noopener noreferrer" : undefined}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] transition-colors duration-200"
              onClick={!member.linkedin ? (e) => e.preventDefault() : undefined}
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
          )}
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {member.name}
            </h3>
            <div className="space-y-1">
              <p className="text-accent font-medium">
                {formatRoleText(member)}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.summary}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a software company delivering innovative mobile, web, and design solutions, backed by experienced leadership and a network of skilled independent contributors and collaborators.
            </p>
          </div>
        </div>

        {/* Desktop: Grid Layout (responsive columns) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {companyMembers.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* Mobile: All Members - Vertical Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {companyMembers.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* Company Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-secondary">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;