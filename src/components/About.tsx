import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, User } from "lucide-react";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Yassin AbuArki",
      role: "Co-Founder, CEO & Mobile Developer",
      summary: "Yassin is a mobile developer focused on turning user needs into smooth, practical, and enjoyable app experiences. As CEO, he leads product vision and development to deliver high-quality applications that users love.",
      avatar: "/image copy 2.png"
    },
    {
      name: "Mazin Magdi",
      role: "Co-Founder, Web Developer & Graphic Designer",
      summary: "Mazin designs intuitive user interfaces and engaging visual experiences. He leads the design process from concept to delivery, ensuring products are innovative, user-friendly, and visually consistent.",
      avatar: "/image copy 3.png"
    },
    {
      name: "Ishimwe Isaac",
      role: "Co-Founder & Backend Developer",
      summary: "Isaac builds and maintains robust backend systems and databases. He ensures every solution is stable, secure, and scalable, forming a strong foundation for the team’s products.",
      avatar: "/image copy 4.png"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden"
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
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
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