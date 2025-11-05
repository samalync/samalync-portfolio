import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Yassin AbuArki",
      role: "Chief Executive Officer (CEO)",
      isCoFounder: true,
      summary: "Yassin combines technical expertise in Flutter and React Native with executive leadership. As CEO, he drives strategic vision, oversees operations, and leads growth. Technical skills: mobile development, cross-platform. Executive skills: strategic planning, team leadership, stakeholder management.",
      avatar: "/image copy 2.png",
      linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/"
    },
    {
      name: "Mazin Magdi",
      role: "Chief Growth Officer (CGO)",
      isCoFounder: true,
      summary: "Mazin drives business growth through strategic design and innovation. As CGO, he leads market expansion and customer acquisition. Technical skills: UI/UX design, web development. Executive skills: growth strategy, market analysis, competitive positioning.",
      avatar: "/image copy 3.png",
      linkedin: "https://www.linkedin.com/in/mazinmagdi/?originalSubdomain=rw"
    },
    {
      name: "Ishimwe Isaac",
      role: "Chief Financial Officer (CFO)",
      isCoFounder: true,
      summary: "Isaac combines backend expertise with financial acumen. As CFO, he manages financial planning, budgeting, and resource allocation. Technical skills: backend development, database architecture, API design. Executive skills: financial forecasting, risk management, investment strategy.",
      avatar: "/image copy 4.png",
      linkedin: "https://rw.linkedin.com/in/ishimwe-isaac-6062b421a"
    },
    {
      name: "Mohamed Babiker",
      role: "Full-Stack Developer",
      isCoFounder: false,
      summary: "Mohamed is a versatile full-stack developer specializing in React, React Native, Node.js, TypeScript, and PostgreSQL. He builds scalable applications with expertise in RESTful API design, database optimization, and cloud deployment.",
      avatar: "/mohamed-babiker.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/"
    }
  ];

  const renderMemberCard = (member: typeof teamMembers[0], index: number) => (
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
              className="w-32 h-32 rounded-full object-cover border-2 border-primary group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
              {member.avatar}
            </div>
          )}
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] transition-colors duration-200"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </a>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {member.name}
            </h3>
            <div className="space-y-1">
              <p className="text-accent font-medium">
                {member.role}
              </p>
              {member.isCoFounder && (
                <p className="text-accent font-medium">
                  & Co-Founder
                </p>
              )}
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
              We are a team of creative developers specializing in mobile, web, Graphic Design. 
              We aim to provide reliable solutions to help our clients succeed.
            </p>
          </div>
        </div>

        {/* Desktop: Grid Layout (3 columns) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* Mobile: All Members - Vertical Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {teamMembers.map((member, index) => renderMemberCard(member, index))}
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