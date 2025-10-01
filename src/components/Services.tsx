import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Globe, Cpu, Palette } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Software Solutions for Enterprises",
      details: "Cross-platform mobile applications built with cutting-edge technologies.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Specialized Development Teams",
      details: "Responsive, scalable web applications tailored to your business needs.",
    },
    {
      icon: Cpu,
      title: "Backend & APIs",
      description: "Agility Management",
      details: "Backend development, API development, and robust API development services.",
    },
    {
      icon: Palette,
      title: "Graphic Design", 
      description: "Integration and Solutions",
      details: "Graphic design, logo design, and branding services.",
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