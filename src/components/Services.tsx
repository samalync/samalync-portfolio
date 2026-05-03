import React, { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Palette, Megaphone, Bot } from "lucide-react";
import { useLanguage } from "@/i18n";

type ServicesProps = {
  onServiceClick?: (serviceTitle: string) => void;
};

const Services: React.FC<ServicesProps> = memo(({ onServiceClick }) => {
  const { t } = useLanguage();
  const servicesText = t("services");
  const services = [
    {
      icon: Cpu,
      ...servicesText.items[0],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      hoverGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Bot,
      ...servicesText.items[1],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      hoverGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Palette,
      ...servicesText.items[2],
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
      hoverGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Megaphone,
      ...servicesText.items[3],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
      hoverGradient: "from-green-500/10 to-emerald-500/10"
    },
  ];

  return (
    <section id="services" className="performance-section py-20 bg-slate-50 relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-600 tracking-wide">{servicesText.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            {servicesText.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {servicesText.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="animate-fade-in-up group relative overflow-hidden border border-slate-200/80 bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.28)] transition-[transform,box-shadow,border-color,background-color] duration-300 cursor-pointer transform-gpu hover:-translate-y-1.5 hover:border-blue-200/70 hover:shadow-[0_22px_48px_-20px_rgba(37,99,235,0.22)] motion-reduce:animate-none motion-reduce:transform-none motion-reduce:transition-none"
              onClick={() => onServiceClick?.(service.title)}
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: "both",
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
              <div className={`pointer-events-none absolute right-5 top-5 h-12 w-12 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-70`}></div>
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <CardContent className="relative z-10 flex h-full flex-col p-8 text-center space-y-6">
                <div className="relative">
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.hoverGradient} shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor} transition-transform duration-300 group-hover:scale-105`} />
                  </div>
                </div>

                <div className="space-y-4 flex-1">
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

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">{servicesText.ctaQuestion}</p>
          <div className="inline-flex items-center space-x-2 text-blue-600 font-medium">
            <span>{servicesText.cta}</span>
            <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
