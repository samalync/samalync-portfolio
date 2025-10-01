import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
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
    { label: "Products", id: "Projects" },
    { label: "Projects", id: "Projects" },
    { label: "About", id: "about" }
  ];

  const Projects = [
    "Mobile App Development",
    "Website Development", 
    "Backend & APIs",
    "Graphic Design",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-background">SAMALYNC</h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                Samalync is a startup software company specializing in developing mobile applications, 
                websites, and smart system solutions. We believe in innovation and provide our clients 
                with technological solutions that help them grow and achieve their goals efficiently and flexibly.
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
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © 2025 SAMALYNC. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              className="text-background/60 hover:text-accent text-sm transition-colors duration-200"
              onClick={() => scrollToSection("contact")}
            >
              Privacy Policy
            </button>
            <button 
              className="text-background/60 hover:text-accent text-sm transition-colors duration-200"
              onClick={() => scrollToSection("contact")}
            >
              Terms of Service
            </button>
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