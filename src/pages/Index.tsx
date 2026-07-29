import React from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import SelectedClients from "@/components/SelectedClients";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n";

const Index = () => {
  const [selectedServiceSubject, setSelectedServiceSubject] = React.useState<string>("");
  const { t } = useLanguage();
  const hero = t("hero");

  const scrollToContact = React.useCallback(() => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleServiceClick = React.useCallback((serviceTitle: string) => {
    setSelectedServiceSubject(serviceTitle);
    scrollToContact();
  }, [scrollToContact]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Header onGetOfferClick={scrollToContact} />
      
      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-8 text-center overflow-hidden bg-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-24 left-[10%] h-2 w-2 rounded-full bg-white/30 md:animate-particle-drift" />
          <div className="absolute right-[16%] top-40 hidden h-3 w-3 rounded-full bg-white/20 md:block md:animate-particle-drift-delayed" />
          <div className="absolute bottom-28 left-[28%] hidden h-1.5 w-1.5 rounded-full bg-white/25 lg:block lg:animate-particle-drift" />

          <div className="absolute left-[20%] top-[18%] hidden h-14 w-14 rotate-45 bg-gradient-to-br from-blue-300/20 to-cyan-300/10 lg:block lg:animate-rotate-float" />
          <div className="absolute bottom-[20%] right-[24%] hidden h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/15 to-indigo-300/15 lg:block lg:animate-geometric-move" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Animated Badge */}
          <div className="animate-fade-in-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {hero.available}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="block">{hero.title1}</span>
            <span className="text-blue-200">{hero.title2}</span>
            <span className="block">{hero.title3}</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {hero.subtitle}
          </p>

          {/* Feature Pills */}
          <div className="animate-fade-in-up flex flex-wrap justify-center gap-3 mb-10" style={{ animationDelay: '0.3s' }}>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              {hero.fast}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              {hero.quality}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              {hero.secure}
            </span>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
            >
              <span className="text-lg">{hero.cta}</span>
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-blue-200 text-sm mt-1">{hero.stats[0]}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm mt-1">{hero.stats[1]}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
              <div className="text-blue-200 text-sm mt-1">{hero.stats[2]}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">99%</div>
              <div className="text-blue-200 text-sm mt-1">{hero.stats[3]}</div>
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
