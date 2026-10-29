import { memo, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import SectionHeader, { CountChip } from "@/components/shared/SectionHeader";
import { PersonGrid } from "@/components/shared/PersonCard";
import ProfileModal from "@/components/shared/ProfileModal";
import { CtaButton } from "@/components/shared/Cta";
import { coreTeam, toTeamCard, type PersonCardData } from "@/data/people";
import { activeCohorts, getCohortCards } from "@/data/academy";
import { useLanguage } from "@/i18n";

const teamStats = [
  {
    value: "10+",
    label: "Projects Completed",
    accent: "from-cyan-600 to-blue-600",
    border: "border-cyan-100",
    background: "from-cyan-50 to-white",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    accent: "from-purple-600 to-pink-600",
    border: "border-purple-100",
    background: "from-purple-50 to-white",
  },
  {
    value: "24/7",
    label: "Support Available",
    accent: "from-blue-600 to-indigo-600",
    border: "border-blue-100",
    background: "from-blue-50 to-white",
  },
] as const;

const AboutStats = memo(({ labels }: { labels: readonly string[] }) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
    {teamStats.map((stat, index) => (
      <div
        key={stat.label}
        className={`rounded-3xl border ${stat.border} bg-gradient-to-br ${stat.background} p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md`}
      >
        <div className={`bg-gradient-to-r ${stat.accent} bg-clip-text text-5xl font-bold text-transparent`}>
          {stat.value}
        </div>
        <div className="mt-4 text-lg font-medium text-slate-600">{labels[index] ?? stat.label}</div>
        <div className={`mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${stat.accent}`} />
      </div>
    ))}
  </div>
));

AboutStats.displayName = "AboutStats";

const About = memo(() => {
  const [selectedPerson, setSelectedPerson] = useState<PersonCardData | null>(null);
  const { language, t } = useLanguage();
  const about = t("about");
  const currentCohort = activeCohorts[0];

  const coreCards = useMemo(() => coreTeam.map((person) => toTeamCard(person, language)), [language]);
  const traineeCards = useMemo(
    () => (currentCohort ? getCohortCards(currentCohort, language) : []),
    [currentCohort, language]
  );

  return (
    <section id="about" className="performance-section py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader eyebrow={about.eyebrow} title={about.title} intro={about.intro} className="mb-20" />

        <SectionHeader
          as="h3"
          size="md"
          align="start"
          eyebrow={about.core}
          title={about.coreTitle}
          intro={about.coreIntro}
          aside={<CountChip>{coreCards.length} {about.teamMembers}</CountChip>}
          className="mx-auto mb-8 max-w-7xl"
        />

        <div className="mx-auto mb-16 max-w-7xl">
          <PersonGrid people={coreCards} onSelect={setSelectedPerson} />
        </div>

        {traineeCards.length > 0 && (
          <div className="mx-auto mb-20 max-w-7xl rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-[1px] shadow-lg">
            <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <SectionHeader
                as="h3"
                size="md"
                align="start"
                tone="dark"
                eyebrow={about.training}
                eyebrowIcon={<Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />}
                title={about.trainingTitle}
                intro={about.trainingIntro}
                aside={
                  <CountChip tone="dark">
                    {traineeCards.length} {about.trainees}
                  </CountChip>
                }
                className="mb-10"
              />

              <PersonGrid people={traineeCards} onSelect={setSelectedPerson} badge={about.trainee} />

              <div className="mt-10 flex justify-center">
                <CtaButton href="/academy" variant="light">
                  {about.academyLink}
                </CtaButton>
              </div>
            </div>
          </div>
        )}

        {/* Company Stats */}
        <AboutStats labels={about.stats} />
      </div>

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </section>
  );
});

About.displayName = "About";

export default About;
