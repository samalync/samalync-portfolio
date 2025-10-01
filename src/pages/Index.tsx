import React from "react";
import TechBackground from "@/components/TechBackground";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TextType from "@/components/TextType";

const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-8 text-center">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          {/* Tech Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Floating Tech Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Circuit Lines */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-blue-400/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-blue-400/10 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
            
            {/* Tech Dots */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-400/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            
            {/* Binary Code */}
            <div className="absolute top-40 right-40 text-blue-400/10 text-xs font-mono">
              01001000<br/>
              01100101<br/>
              01101100<br/>
              01101100<br/>
              01101111
            </div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <TextType
            text={[
              "Welcome to SAMALYNC.",
              "Software Solutions.",
              "Mobile App Development.",
              "We build apps, websites.",
              "And designs that help..",
              "Your business grow.",
            ]}
            typingSpeed={70}
            pauseDuration={1400}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight"
            textColors={["#ffffff"]}
          />
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
          At Samalync, your vision becomes powerful digital reality.
          </p>
          
          {/* Start Your Project Button */}
          <div className="mt-8">
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
