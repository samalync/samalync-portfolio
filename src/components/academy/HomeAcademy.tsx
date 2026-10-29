import { memo, useMemo, useState } from "react";
import { Link, type To } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import PersonAvatar from "@/components/shared/PersonAvatar";
import ProfileModal from "@/components/shared/ProfileModal";
import { CtaButton } from "@/components/shared/Cta";
import { tappableCard } from "@/components/shared/SmartLink";
import CohortCard from "@/components/academy/CohortCard";
import { formatCohortStart } from "@/components/academy/CohortMeta";
import { activeCohorts, cohorts, communityUrl, getCohortCards, nextCohort } from "@/data/academy";
import type { PersonCardData } from "@/data/people";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";

const PROOF_SIZE = 8;

// Destinations for the four stat widgets, in the order of academy.home.stats.
const statTargets: To[] = [
  { pathname: "/academy", hash: "#roadmap" },
  { pathname: "/academy", hash: "#cohorts" },
  nextCohort ? `/academy/${nextCohort.slug}` : { pathname: "/academy", hash: "#cohorts" },
  { pathname: "/academy", hash: "#tracks" },
];

/** Homepage Academy section: the program first, Cohort 1 trainees as a small proof strip. */
const HomeAcademy = memo(() => {
  const [selectedPerson, setSelectedPerson] = useState<PersonCardData | null>(null);
  const { language, t } = useLanguage();
  const academy = t("academy");
  const home = academy.home;
  const pilot = activeCohorts[0];
  const nextStart = nextCohort ? formatCohortStart(nextCohort, language, academy) : academy.tba;

  const proof = useMemo(() => (pilot ? getCohortCards(pilot, language).slice(0, PROOF_SIZE) : []), [pilot, language]);

  return (
    <section id="academy" aria-labelledby="home-academy" className="performance-section relative overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader id="home-academy" eyebrow={academy.eyebrow} title={home.title} intro={home.subtitle} className="mb-14" />

        {/* Stat widgets: each one is a link */}
        <ul className="mx-auto mb-14 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
          {home.stats.map((stat, index) => {
            const label = fill(stat.label, { date: nextStart });

            return (
              <li key={stat.value}>
                <Link
                  to={statTargets[index]}
                  aria-label={`${stat.value}: ${label}`}
                  className={`${tappableCard} flex h-full flex-col justify-between gap-3 border-slate-200 p-5 sm:p-6`}
                >
                  <span className="text-2xl font-extrabold leading-tight text-blue-900 sm:text-3xl">{stat.value}</span>
                  <span className="flex items-end justify-between gap-2 text-sm text-slate-600">
                    <span>{label}</span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Cohorts */}
        <h3 className="sr-only">{home.cohortsHeading}</h3>
        <ol className="mx-auto mb-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {cohorts.map((cohort) => (
            <li key={cohort.id}>
              <CohortCard cohort={cohort} variant="compact" headingLevel="h4" />
            </li>
          ))}
        </ol>

        <div className="mb-14 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <CtaButton href="/academy">{home.explore}</CtaButton>
          <CtaButton href={communityUrl} subject={academy.communitySubject} variant="outline" icon="none">
            {academy.joinCommunity}
          </CtaButton>
        </div>

        {/* Proof strip: supporting, not leading */}
        {pilot && proof.length > 0 && (
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 text-center sm:flex-row sm:justify-between sm:text-start">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-700">{home.proofTitle}</p>
              <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {proof.map((person) => (
                  <li key={person.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedPerson(person)}
                      aria-haspopup="dialog"
                      aria-label={fill(home.openProfile, { name: person.name })}
                      className="block rounded-full outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      <PersonAvatar avatar={person.avatar} name="" size={44} className="border-2" lazy />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to={`/academy/${pilot.slug}`}
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-xl px-3 font-semibold text-primary outline-none hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              {home.meetCohort1}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        )}

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-slate-500">{academy.disclaimer}</p>
      </div>

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </section>
  );
});

HomeAcademy.displayName = "HomeAcademy";

export default HomeAcademy;
