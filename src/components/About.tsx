import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ChevronDown, ChevronUp } from "lucide-react";

const About: React.FC = () => {
  const [showMoreMembers, setShowMoreMembers] = useState(false);
  
  const teamMembers = [
    {
      name: "Yassin AbuArki",
      role: "Co-Founder, Team Lead & Mobile Developer",
      summary: "Yassin is a mobile developer passionate about transforming user needs into smooth, practical, and engaging app experiences. As a Team Lead, he guides the development team, shaping product vision and ensuring the delivery of high-quality software across platforms.",
      avatar: "/image copy 2.png",
      linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/"
    },
    {
      name: "Mazin Magdi",
      role: "Co-Founder, Product Designer & Web Developer",
      summary: "Mazin designs intuitive user interfaces and engaging visual experiences. As a product designer he leads the design process from concept to delivery, ensuring products are innovative, user-friendly, and visually consistent.",
      avatar: "/image copy 3.png",
      linkedin: "https://www.linkedin.com/in/mazinmagdi/?originalSubdomain=rw"
    },
    {
      name: "Ishimwe Isaac",
      role: "Co-Founder & Backend Developer",
      summary: "Isaac builds and maintains robust backend systems and databases. He ensures every solution is stable, secure, and scalable, forming a strong foundation for the team's products.",
      avatar: "/image copy 4.png",
      linkedin: "https://rw.linkedin.com/in/ishimwe-isaac-6062b421a"
    },
    {
      name: "Mohamed Babiker",
      role: "Full-Stack Developer",
      summary: "Mohamed builds responsive web and mobile applications using React, React Native, and Node.js. Skilled in TypeScript, PostgreSQL, and scalable API design, he ensures every product is efficient, secure, and production-ready.",
      avatar: "/mohamed-babiker.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/"
    }
  ];

  const firstThreeMembers = teamMembers.slice(0, 3);
  const remainingMembers = teamMembers.slice(3);

  const renderMemberCard = (member: typeof teamMembers[0], index: number) => (
    <Card 
      key={index}
      className="group card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden flex-shrink-0 w-80"
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
            <p className="text-accent font-medium">
              {member.role}
            </p>
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

        {/* Desktop: Horizontal Scroll (All Members) */}
        <div className="hidden md:flex gap-6 overflow-x-auto pb-4 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
          {teamMembers.map((member, index) => renderMemberCard(member, index))}
        </div>

        {/* Mobile: First 3 Members - Vertical Layout */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            {firstThreeMembers.map((member, index) => (
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
                      <p className="text-accent font-medium">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Members Button (Mobile Only) */}
          {remainingMembers.length > 0 && (
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setShowMoreMembers(!showMoreMembers)}
                variant="outline"
                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
              >
                {showMoreMembers ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    View Less Members
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    View More Members
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Remaining Members (Mobile - Shown when button clicked) */}
          {showMoreMembers && remainingMembers.length > 0 && (
            <div className="flex flex-col gap-6 mt-6">
              {remainingMembers.map((member, index) => (
                <Card 
                  key={index + 3}
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
                        <p className="text-accent font-medium">
                          {member.role}
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.summary}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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