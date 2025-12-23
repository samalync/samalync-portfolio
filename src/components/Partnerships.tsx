import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Truck } from "lucide-react";

const Partnerships: React.FC = () => {
  const partners = [
    {
      name: "Viewesta",
      description: "African Streaming Platform",
      coverImage: "/v.png",
      details:
        "Viewesta is a leading African streaming platform delivering premium entertainment content across the continent. We're proud to partner with Viewesta in bringing innovative digital experiences to African audiences.",
    },
    {
      icon: Truck,
      coverImage: "/sudan-mart.png",
      name: "Sudan Mart",
      description: "On-demand delivery & last‑mile logistics",
      details:
        "Sudan Mart is a fast and reliable delivery service for goods and food. We collaborate to build smooth ordering experiences, real-time updates, and scalable delivery operations.",
    },
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
              {/* Card header area (kept consistent so cards align) */}
              {partner.coverImage ? (
                <div className="p-4">
                  <div className={`w-full h-44 overflow-hidden rounded-xl ${index === 1 ? 'p-4 flex items-center justify-center bg-white' : ''}`}>
                    <img
                      src={partner.coverImage}
                      alt={`${partner.name} cover`}
                      className={index === 1 ? 'max-h-full max-w-full object-contain' : 'h-full w-full object-cover'}
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <div className="w-full h-44 overflow-hidden rounded-xl  from-primary/10 to-accent/10 flex items-center justify-center">
                    {partner.icon ? (
                      <div className="w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center">
                        <partner.icon className="h-8 w-8 text-primary" />
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              <CardContent className="p-8 text-center space-y-6">
                {/* Show icon in content only when there's no cover image and it's not the second card */}
                {(partner.icon && !(partner.coverImage || index === 1)) ? (
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
