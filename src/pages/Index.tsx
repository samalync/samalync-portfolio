import React from "react";
import TechBackground from "@/components/TechBackground";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import SelectedClients from "@/components/SelectedClients";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedServiceSubject, setSelectedServiceSubject] = React.useState<string>("");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedServiceSubject(serviceTitle);
    scrollToContact();
  };

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <TechBackground />
      <Header onGetOfferClick={scrollToContact} />
      
      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-8 text-center overflow-hidden bg-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Existing Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-cyan-400/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-indigo-400/10 rounded-full blur-2xl animate-orb-pulse"></div>

          {/* Additional Floating Orbs */}
          <div className="absolute top-1/6 right-1/3 w-56 h-56 bg-green-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 left-1/6 w-72 h-72 bg-pink-500/6 rounded-full blur-3xl animate-float-delayed" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-2/3 right-1/6 w-44 h-44 bg-yellow-400/10 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-36 h-36 bg-teal-400/12 rounded-full blur-2xl animate-orb-pulse" style={{ animationDelay: '2.5s' }}></div>

          {/* Moving Particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-particle-drift"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/25 rounded-full animate-particle-drift-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-particle-drift" style={{ animationDelay: '7s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-white/35 rounded-full animate-particle-drift-delayed" style={{ animationDelay: '9s' }}></div>
          <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-white/25 rounded-full animate-particle-drift" style={{ animationDelay: '11s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-particle-drift-delayed" style={{ animationDelay: '13s' }}></div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/5 left-1/3 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform rotate-45 animate-rotate-float"></div>
          <div className="absolute bottom-1/5 right-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/25 to-indigo-400/25 animate-geometric-move"></div>
          <div className="absolute top-2/5 right-1/5 w-20 h-20 bg-gradient-to-br from-green-400/15 to-blue-400/15 transform rotate-45 animate-rotate-float-delayed"></div>
          <div className="absolute bottom-2/5 left-2/5 w-14 h-14 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 animate-geometric-move-delayed"></div>
          <div className="absolute top-3/5 left-1/6 w-18 h-18 bg-gradient-to-br from-teal-400/18 to-purple-400/18 transform rotate-45 animate-rotate-float" style={{ animationDelay: '5s' }}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Animated Badge */}
          <div className="animate-fade-in-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="block">Transform Your</span>
            <span className="text-blue-200">Digital Vision</span>
            <span className="block">Into Reality</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            We craft innovative software solutions and stunning mobile applications
            that propel your business into the future.
          </p>

          {/* Feature Pills */}
          <div className="animate-fade-in-up flex flex-wrap justify-center gap-3 mb-10" style={{ animationDelay: '0.3s' }}>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm text-sm font-medium">
              Fast Delivery
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm text-sm font-medium">
              Premium Quality
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm text-sm font-medium">
              Secure & Scalable
            </span>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
            >
              <span className="text-lg">Start Your Project</span>
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-blue-200 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm mt-1">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
              <div className="text-blue-200 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">99%</div>
              <div className="text-blue-200 text-sm mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      <Services onServiceClick={handleServiceClick} />
      <Portfolio />
      <About />
      <SelectedClients />
      <Partnerships />
      <Contact initialSubject={selectedServiceSubject} />
      <Footer />
    </div>
  );
};

export default Index;
