import React, { useMemo, useState } from "react";
import { Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeader, { CountChip } from "@/components/shared/SectionHeader";
import { PersonGrid } from "@/components/shared/PersonCard";
import ProfileModal from "@/components/shared/ProfileModal";
import AcademyTeaser from "@/components/academy/AcademyTeaser";
import { coreTeam, toTeamCard, type PersonCardData } from "@/data/people";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLanguage } from "@/i18n";

const Team: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<PersonCardData | null>(null);
  const { language, t } = useLanguage();
  const teamText = t("teamPage");

  usePageMeta(t("meta").team);

  const coreCards = useMemo(() => coreTeam.map((person) => toTeamCard(person, language)), [language]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        <PageHero eyebrow={teamText.eyebrow} title={teamText.title} subtitle={teamText.intro} />

        {/* Team Members Grid */}
        <section className="performance-section py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              size="md"
              align="start"
              eyebrow={teamText.core}
              eyebrowIcon={<Users className="h-4 w-4 text-cyan-600" aria-hidden="true" />}
              title={teamText.coreTitle}
              intro={teamText.coreIntro}
              aside={<CountChip>{coreCards.length} {teamText.coreMembers}</CountChip>}
              className="mx-auto mb-10 max-w-7xl"
            />

            <div className="mx-auto max-w-7xl">
              <PersonGrid people={coreCards} onSelect={setSelectedPerson} />
            </div>

            {/* The Academy has its own pages; trainees are listed per cohort there. */}
            <AcademyTeaser className="mx-auto mt-16 max-w-5xl" />
          </div>
        </section>

      </main>

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />

      <Footer />
    </div>
  );
};

export default Team;
