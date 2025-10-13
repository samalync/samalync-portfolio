import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  const Projects = [
    "Mobile App Development",
    "Website Development", 
    "Backend & APIs",
    "Graphic Design",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://rw.linkedin.com/company/samalync-ltd", label: "Company LinkedIn" },
  ];

  const teamMembers = [
    { name: "Yassin Arki", role: "Co-Founder, Team Lead & Mobile Developer", linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/" },
    { name: "Mazin Magdi", role: "Co-Founder, Product Designer & Web Developer", linkedin: "https://www.linkedin.com/in/mazinmagdi/?originalSubdomain=rw" },
    { name: "Ishimwe Isaac", role: "Co-Founder & Backend Developer", linkedin: "https://rw.linkedin.com/in/ishimwe-isaac-6062b421a" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-background">SAMALYNC</h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                We are an experienced team specializing in developing mobile 
                applications, websites, and smart system solutions. We believe in 
                innovation and deliver technological solutions that help our clients grow 
                and achieve their goals efficiently and flexibly.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-background group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-background/70 hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Projects</h4>
            <div className="space-y-3">
              {Projects.map((service, index) => (
                <div key={index} className="text-background/70 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Our Team</h4>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-background font-medium text-sm">{member.name}</div>
                  <div className="text-background/70 text-xs">{member.role}</div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80 text-xs transition-colors"
                  >
                    <Linkedin className="h-3 w-3 mr-1" />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © 2025 SAMALYNC. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <span 
              className="text-background/40 text-sm cursor-not-allowed"
            >
              Privacy Policy
            </span>
            <span 
              className="text-background/40 text-sm cursor-not-allowed"
            >
              Terms of Service
            </span>
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="ghost"
              className="text-background/60 hover:text-accent hover:bg-background/10"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;