import React, { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";
import { useLanguage } from "@/i18n";

const Partnerships: React.FC = memo(() => {
  const { t } = useLanguage();
  const partnershipsText = t("partnerships");
  const partners = [
    {
      ...partnershipsText.items[0],
      coverImage: "/partners/viewesta.webp",
    },
    {
      icon: Truck,
      coverImage: "/partners/sudan-mart.webp",
      ...partnershipsText.items[1],
    },
    {
      ...partnershipsText.items[2],
      coverImage: "/partners/khartoum-interfilm.webp",
    },
    {
      ...partnershipsText.items[3],
      coverImage: "/partners/ozone.webp",
    },
  ];

  return (
    <section id="partnerships" className="performance-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-200/20">
            <span className="text-sm font-medium text-green-600 tracking-wide">{partnershipsText.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            {partnershipsText.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            {partnershipsText.intro}
          </p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-8 flex-wrap xl:flex-nowrap">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group card-shadow border border-gray-200 bg-gray-100 w-full transition-shadow duration-200 hover:shadow-lg sm:w-[320px] md:w-[400px]"
            >
              {/* Card header area (kept consistent so cards align) */}
              {partner.coverImage ? (
                <div className="p-4">
                  <div className={`w-full h-44 overflow-hidden rounded-xl ${(index === 0 || index === 1 || index === 3) ? 'p-4 flex items-center justify-center bg-transparent' : ''}`}>
                    <img
                      src={partner.coverImage}
                      alt={`${partner.name} cover`}
                      width={400}
                      height={176}
                      className={(index === 0 || index === 1 || index === 3) ? 'max-h-full max-w-full object-contain' : 'h-full w-full object-cover'}
                      loading="lazy"
                      decoding="async"
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
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                    <partner.icon className="h-8 w-8 text-primary" />
                  </div>
                ) : null}

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
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
});

Partnerships.displayName = "Partnerships";

export default Partnerships;
