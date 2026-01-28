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
    {
      name: "Khartoum Interfilm",
      description: "Marketing agency",
      coverImage: "/k.png",
      details:
        "Khartoum Interfilm is a creative marketing agency focused on storytelling, brand strategy, and creative campaigns across digital platforms. We partner to deliver standout marketing and visual experiences.",
    },
    {
      name: "Ozone Restaurant & Cafe",
      description: "Restaurant and dining establishment",
      coverImage: "/ozone.png",
      details:
        "Ozone Restaurant & Cafe offers exceptional dining experiences with diverse culinary options. We collaborate to enhance their digital presence and streamline their operations through innovative technology solutions.",
    },
  ];

  return (
    <section id="partnerships" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-green-600 tracking-wide">OUR PARTNERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            Partnerships
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            We collaborate with innovative companies to deliver exceptional digital solutions and expand our reach across diverse markets.
          </p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-8 flex-wrap xl:flex-nowrap">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group hover:card-shadow-hover transition-all duration-300 card-shadow border border-gray-200 bg-gray-100 w-full sm:w-[320px] md:w-[400px]"
            >
              {/* Card header area (kept consistent so cards align) */}
              {partner.coverImage ? (
                <div className="p-4">
                  <div className={`w-full h-44 overflow-hidden rounded-xl ${(index === 0 || index === 1 || index === 3) ? 'p-4 flex items-center justify-center bg-transparent' : ''}`}>
                    <img
                      src={partner.coverImage}
                      alt={`${partner.name} cover`}
                      className={(index === 0 || index === 1 || index === 3) ? 'max-h-full max-w-full object-contain' : 'h-full w-full object-cover'}
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
