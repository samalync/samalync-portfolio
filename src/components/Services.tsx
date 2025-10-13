import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Globe, Cpu, Palette } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-Platform Excellence",
      details: "We build fast, scalable mobile apps using modern frameworks to bring your ideas to life.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive Web Solutions",
      details: "Custom websites designed for performance, flexibility, and seamless user experiences.",
    },
    {
      icon: Cpu,
      title: "Backend & APIs",
      description: "Powerful System Core",
      details: "Secure, scalable backend systems and API integrations that keep your apps running smoothly.",
    },
    {
      icon: Palette,
      title: "Graphic Design", 
      description: "Creative Visual Identity",
      details: "Logos, branding, and UI designs that define your brand and elevate your digital presence.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:card-shadow-hover transition-all duration-300 card-shadow border-0 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-accent font-medium">
                    {service.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;