import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ShoppingBag } from "lucide-react";

const Partnerships: React.FC = () => {
  const partners = [
    {
      image: "/v.png",
      icon: Play,
      name: "Viewesta",
      description: "African Streaming Platform",
      details:
        "Viewesta is a leading African streaming platform delivering premium entertainment content across the continent. We're proud to partner with Viewesta in bringing innovative digital experiences to African audiences.",
    },
    // {
    //   icon: ShoppingBag,
    //   name: "Sudan Mart",
    //   description: "Delivery Service",
    //   details:
    //     "Sudan Mart is a comprehensive delivery service for goods and food based in Sudan. We partner with them to enhance their digital logistics and ensure seamless delivery experiences for their customers.",
    // },
  ];

  return (
    <section id="partnerships" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with innovative companies to deliver exceptional digital solutions and expand our reach across diverse markets.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group hover:card-shadow-hover transition-all duration-300 card-shadow border-0 bg-card/80 backdrop-blur-sm w-full sm:w-[320px] md:w-[400px]"
            >
              <CardContent className="p-8 text-center space-y-6">
                {partner.image ? (
                  <div className="w-full h-32 flex items-center justify-center mb-4">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : partner.icon ? (
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                ) : null}

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-accent font-medium">
                    {partner.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {partner.details}
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

export default Partnerships;

