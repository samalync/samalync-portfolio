import React, { useMemo, useState } from "react";
import { Code, Sparkles, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeader, { CountChip } from "@/components/shared/SectionHeader";
import { PersonGrid } from "@/components/shared/PersonCard";
import ProfileModal from "@/components/shared/ProfileModal";
import { CtaButton } from "@/components/shared/Cta";
import { coreTeam, people, toTeamCard, type PersonCardData } from "@/data/people";
import { activeCohorts, getCohortCards } from "@/data/academy";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLanguage } from "@/i18n";

const Team: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<PersonCardData | null>(null);
  const { language, t } = useLanguage();
  const teamText = t("teamPage");
  const aboutText = t("about");
  const currentCohort = activeCohorts[0];

  usePageMeta(t("meta").team);

  const coreCards = useMemo(() => coreTeam.map((person) => toTeamCard(person, language)), [language]);
  const traineeCards = useMemo(
    () => (currentCohort ? getCohortCards(currentCohort, language) : []),
    [currentCohort, language]
  );

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

            {traineeCards.length > 0 && (
              <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-[1px] shadow-lg">
                <div className="rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_42%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(3,7,18,0.94))] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                  <SectionHeader
                    size="md"
                    align="start"
                    tone="dark"
                    eyebrow={teamText.traineeTrack}
                    eyebrowIcon={<Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />}
                    title={teamText.traineeTitle}
                    intro={teamText.traineeIntro}
                    aside={
                      <CountChip tone="dark">
                        {traineeCards.length} {aboutText.trainees}
                      </CountChip>
                    }
                    className="mb-10"
                  />

                  <PersonGrid people={traineeCards} onSelect={setSelectedPerson} badge={aboutText.trainee} />

                  <div className="mt-10 flex justify-center">
                    <CtaButton href={`/academy/${currentCohort.slug}`} variant="light">
                      {teamText.academyLink}
                    </CtaButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group rounded-3xl border border-blue-100/60 bg-gradient-to-br from-white/90 to-blue-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Users className="h-6 w-6" />
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                  {people.length}
                </div>
                <div className="mt-4 text-lg font-medium text-gray-600">{teamText.people}</div>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-16" />
              </div>
              <div className="group rounded-3xl border border-cyan-100/60 bg-gradient-to-br from-white/90 to-cyan-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <Code className="h-6 w-6" />
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                  {coreCards.length}
                </div>
                <div className="mt-4 text-lg font-medium text-gray-600">{teamText.specialists}</div>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-16" />
              </div>
              <div className="group rounded-3xl border border-indigo-100/60 bg-gradient-to-br from-white/90 to-indigo-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                  {traineeCards.length}
                </div>
                <div className="mt-4 text-lg font-medium text-gray-600">{teamText.activeTrainees}</div>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />

      <Footer />
    </div>
  );
};

export default Team;
