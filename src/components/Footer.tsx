import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ArrowUp, Facebook } from "lucide-react";
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
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582611531157", label: "Company Facebook" },
  ];

  const companyMembers = [
    { name: "Yassin Arki", role: "Chief Executive Officer (CEO)", isCoFounder: false, linkedin: "https://www.linkedin.com/in/yassin-arki-a91938254/" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  SAMALYNC SOLUTIONS LTD
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md text-lg">
                We are a software company specializing in mobile applications, websites, and smart system solutions. Driven by innovation, we deliver technology solutions that help our clients grow and achieve their goals efficiently and flexibly.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
            </h4>
            <nav className="space-y-4">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group block text-gray-300 hover:text-white transition-all duration-300 text-left relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white relative">
              Services
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
            </h4>
            <div className="space-y-4">
              {Projects.map((service, index) => (
                <div
                  key={index}
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Members */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white relative">
              Leadership
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
            </h4>
            <div className="space-y-6">
              {companyMembers.map((member, index) => (
                <div
                  key={index}
                  className="space-y-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="text-white font-semibold text-base">{member.name}</div>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div>{member.role}</div>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300 hover:scale-105"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative py-8">
          <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom Footer */}
          <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-sm font-medium">
              © 2025 SAMALYNC. All rights reserved.
            </div>

            <div className="flex items-center space-x-8">
              <span className="text-gray-500 text-sm cursor-not-allowed hover:text-gray-400 transition-colors duration-300">
                Privacy Policy
              </span>
              <span className="text-gray-500 text-sm cursor-not-allowed hover:text-gray-400 transition-colors duration-300">
                Terms of Service
              </span>
              <Button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 rounded-xl px-6 py-3"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
