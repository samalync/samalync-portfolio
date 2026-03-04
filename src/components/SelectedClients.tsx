import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";

const SelectedClients: React.FC = () => {
  const clients = [
    {
      icon: Home,
      name: "Hamima",
      description: "Domestic Service Platform",
      details:
        "Hamima is a domestic service platform connecting households with trusted home care and household services. We collaborate with Hamima to deliver a smooth, reliable experience for booking cleaning, maintenance, and other at-home services.",
    },
  ];

  return (
    <section id="selected-clients" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-600 tracking-wide">SELECTED CLIENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            Selected Clients
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            We work with forward-thinking brands to build digital products that make a difference.
          </p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-8 flex-wrap xl:flex-nowrap">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="group hover:card-shadow-hover transition-all duration-300 card-shadow border border-gray-200 bg-gray-100 w-full sm:w-[320px] md:w-[400px]"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <client.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-accent font-medium">
                    {client.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {client.details}
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

export default SelectedClients;
