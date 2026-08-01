import React, { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n";
import { BriefcaseBusiness, HeartHandshake, Truck } from "lucide-react";

type ClientVisual = {
  coverImage?: string;
  icon?: React.ComponentType<{ className?: string }>;
  accent?: string;
};

const SelectedClients: React.FC = memo(() => {
  const { t } = useLanguage();
  const clientsText = t("clients");
  const clientVisuals: ClientVisual[] = [
    {
      coverImage: "/pet-bait.png",
    },
    {
      icon: Truck,
      accent: "text-blue-700",
    },
    {
      icon: HeartHandshake,
      accent: "text-rose-600",
    },
    {
      icon: BriefcaseBusiness,
      accent: "text-indigo-700",
    },
  ];
  const clients = clientsText.items.map((client, index) => ({
    ...client,
    ...clientVisuals[index],
  }));

  return (
    <section id="selected-clients" className="performance-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-600 tracking-wide">{clientsText.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
            {clientsText.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            {clientsText.intro}
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="group h-full w-full overflow-hidden border border-gray-200 bg-gray-100 card-shadow transition-all duration-300 hover:card-shadow-hover"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                {client.coverImage ? (
                  <img
                    src={client.coverImage}
                    alt={`${client.name} cover`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gray-100 ${client.accent} transition-transform duration-300 group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    {client.icon && <client.icon className="h-12 w-12" />}
                    <span className="text-2xl font-bold tracking-[0.14em]">{client.name}</span>
                  </div>
                )}
              </div>

              <CardContent className="px-8 pb-8 pt-4 text-center space-y-4">
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
});

SelectedClients.displayName = "SelectedClients";

export default SelectedClients;
