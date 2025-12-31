import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Palette, Megaphone, Bot } from "lucide-react";

type ServicesProps = {
  onServiceClick?: (serviceTitle: string) => void;
};

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services = [
    {
      icon: Cpu,
      title: "Software Solutions",
      description: "End-to-End Digital Systems",
      details:
        "We design and build complete software solutions — from high-performance mobile and web applications to secure, scalable backend systems and APIs. Our focus is delivering reliable, future-ready products that grow with your business.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      hoverGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent Process Optimization",
      details:
        "We implement AI-powered solutions and automation systems to streamline operations, enhance decision-making, and drive efficiency. From chatbots and predictive analytics to workflow automation, we help businesses leverage cutting-edge technology for competitive advantage.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      hoverGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Distinct Visual Identity",
      details:
        "We craft logos, brand systems, and UI designs that communicate your brand's personality, ensure visual consistency, and elevate your presence across digital platforms.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
      hoverGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Megaphone,
      title: "Marketing & Brand Strategy",
      description: "Growth-Driven Market Presence",
      details:
        "In collaboration with Khartoum Interfilem, we provide strategic marketing and branding services that help products reach the right audience, strengthen brand identity, and drive measurable growth across digital channels.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
      hoverGradient: "from-green-500/10 to-emerald-500/10"
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-600 tracking-wide">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/70 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => onServiceClick?.(service.title)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-current opacity-20 rounded-full animate-ping group-hover:animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-current opacity-30 rounded-full animate-ping group-hover:animate-pulse" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>

              <CardContent className="p-8 text-center space-y-6 relative z-10">
                <div className="relative">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.hoverGradient} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                    {service.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {service.details}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to transform your business with our expertise?</p>
          <div className="inline-flex items-center space-x-2 text-blue-600 font-medium">
            <span>Scroll down to get started</span>
            <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
