import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About: React.FC = () => {
  const companyMembers = [
    {
      name: "Yassin AbuArki",
      role: "Chief Executive Officer (CEO) & Project Manager",
      isCoFounder: true,
      summary: "Yassin combines technical expertise in Flutter and React Native with executive leadership. As CEO, he drives strategic vision, oversees operations, and leads growth. Technical skills: mobile development, cross-platform. Executive skills: strategic planning, company leadership, stakeholder management.",
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
      role: "Chief Financial Officer (CFO) & Product Manager",
      isCoFounder: true,
      summary: "Isaac combines backend expertise with financial acumen. As CFO, he manages financial planning, budgeting, and resource allocation. Technical skills: backend development, database architecture, API design. Executive skills: financial forecasting, risk management, investment strategy.",
      avatar: "/ishimwe-isaac.jpg",
      linkedin: "https://rw.linkedin.com/in/ishimwe-isaac-6062b421a"
    },
    {
      name: "Mohamed Babiker",
      role: "Senior Full-Stack Developer",
      isCoFounder: false,
      summary: "Mohamed is an accomplished full-stack developer specializing in React, React Native, Node.js, TypeScript, and PostgreSQL. He builds scalable applications with expertise in RESTful API design, microservices architecture, database optimization, and cloud infrastructure (AWS, Vercel, Docker). Mohamed transforms complex business requirements into elegant, maintainable code.",
      avatar: "/mohamed-babiker.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-sufyan-x/"
    },
    {
      name: "Nancy Kwizera Teta",
      role: "Backend and AI/ML Developer",
      isCoFounder: false,
      summary: "Nancy is a highly skilled backend and AI/ML developer specializing in Flask, Node.js, Python, TypeScript, JavaScript, and database management. She develops intelligent, data-driven systems with strong expertise in API design, machine learning integration, and scalable backend architecture.",
      avatar: "/nancy-kwizera-teta.jpg",
      linkedin: "https://www.linkedin.com/in/nancy-teta-kwizera-43a49432b/"
    },
    {
      name: "Muhammed Salah",
      role: "Frontend & Mobile Developer",
      isCoFounder: false,
      summary: "Muhammed is a dynamic frontend and mobile developer who brings digital experiences to life across web and mobile platforms. With expertise in React, HTML, CSS, and JavaScript for web development, combined with Flutter and Dart for cross-platform mobile applications, he creates seamless, responsive, and user-friendly interfaces that engage users and drive business success.",
      avatar: "/muhammed-salah.jpg",
      linkedin: "https://www.linkedin.com/in/mohammed-salahelden-647b6128a"
    },
    {
      name: "Kibongo Simon Peter",
      role: "Senior Full-Stack Developer & UI/UX Designer",
      isCoFounder: false,
      summary: "Kibongo specializes in crafting digital experiences that are both functional and aesthetically pleasing. With a strong foundation in UI/UX design and expertise in web development, he builds high-performance websites and mobile applications that are scalable and reliable. Technical skills: UI/UX Design (Figma, Adobe Photoshop, Adobe Illustrator), Web Development (React.js, Node.js, Express.js, Flask, TypeScript, MongoDB, MySQL, PostgreSQL), Mobile Development (React Native).",
      avatar: "/kibongo-simon-peter.webp",
      linkedin: "https://www.linkedin.com/in/kibongo/"
    },
    {
      name: "Ishimwe Pacific",
      role: "Frontend Developer & Graphic Designer",
      isCoFounder: false,
      summary: "Ishimwe Pacific is a creative frontend developer and graphic designer who combines technical expertise with artistic vision. He specializes in building modern, responsive web applications using React, Tailwind CSS, HTML, CSS, and JavaScript. With strong proficiency in Figma for UI/UX design and graphic design, he creates visually appealing interfaces that are both beautiful and functional. His skills bridge the gap between design and development, ensuring pixel-perfect implementations.",
      avatar: "/ishimwe-paccy.jpg",
      linkedin: "https://www.linkedin.com/in/ishimwe-pacific/"
    }
  ];

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
              className="w-32 h-32 rounded-full object-cover border-2 border-primary group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
              {member.avatar}
            </div>
          )}
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] transition-colors duration-200"
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
              {member.role.includes("&") ? (
                <>
                  <p className="text-accent font-medium">
                    {member.role.split("&")[0].trim()}
                  </p>
                  <p className="text-accent font-medium">
                    & {member.role.split("&")[1].trim()}{member.isCoFounder ? " & Co-Founder" : ""}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-accent font-medium">
                    {member.role}
                  </p>
                  {member.isCoFounder && (
                    <p className="text-accent font-medium">
                      & Co-Founder
                    </p>
                  )}
                </>
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
              We are a company of creative developers specializing in mobile, web, Graphic Design. 
              We aim to provide reliable solutions to help our clients succeed.
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