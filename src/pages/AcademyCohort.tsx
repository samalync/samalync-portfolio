import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { PersonGrid } from "@/components/shared/PersonCard";
import ProfileModal from "@/components/shared/ProfileModal";
import { CtaBanner } from "@/components/shared/Cta";
import { CohortBadges, CohortFacts, getCohortFacts } from "@/components/academy/CohortMeta";
import { communityUrl, getCohortBySlug, getCohortCards, type Cohort } from "@/data/academy";
import type { PersonCardData } from "@/data/people";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";
import NotFound from "./NotFound";

const CohortView: React.FC<{ cohort: Cohort }> = ({ cohort }) => {
  const [selectedPerson, setSelectedPerson] = useState<PersonCardData | null>(null);
  const { language, t } = useLanguage();
  const academy = t("academy");
  const meta = t("meta").cohort;
  const title = cohort.title[language];
  const track = cohort.track[language];

  usePageMeta({
    title: fill(meta.title, { cohort: title }),
    description: fill(meta.description, { cohort: title, track }),
  });

  const members = useMemo(() => getCohortCards(cohort, language), [cohort, language]);
  const canApply = cohort.enrollment === "open" && Boolean(cohort.applyUrl);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Cohort header */}
        <section className="relative overflow-hidden bg-blue-900 pb-16 pt-28 text-white md:pt-32">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.2),transparent_45%),radial-gradient(circle_at_90%_90%,rgba(59,130,246,0.3),transparent_50%)]"
            aria-hidden="true"
          />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <Link
                to="/academy"
                className="mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-blue-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {academy.backToAcademy}
              </Link>

              <p className="mb-3 text-sm font-medium text-cyan-200">
                {academy.eyebrow} · {track}
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
              <CohortBadges cohort={cohort} className="mb-10" />
              <CohortFacts facts={getCohortFacts(cohort, language, academy)} tone="dark" className="sm:grid-cols-3" />
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl">{cohort.description[language]}</p>
          </div>
        </section>

        {/* Members (consented only) */}
        <section aria-labelledby="cohort-members" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {members.length > 0 ? (
              <>
                <SectionHeader
                  id="cohort-members"
                  size="md"
                  title={fill(academy.membersTitle, { cohort: title })}
                  intro={academy.membersIntro}
                  className="mx-auto mb-12 max-w-7xl"
                />
                <div className="mx-auto max-w-7xl">
                  <PersonGrid people={members} onSelect={setSelectedPerson} badge={academy.traineeBadge} />
                </div>
              </>
            ) : (
              <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <h2 id="cohort-members" className="mb-3 text-2xl font-bold text-slate-900">
                  {fill(academy.membersTitle, { cohort: title })}
                </h2>
                <p className="text-slate-600">{academy.membersHidden}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CtaBanner
              className="mx-auto max-w-5xl"
              title={academy.cohortCtaTitle}
              text={academy.cohortCtaText}
              primary={
                canApply
                  ? { label: academy.applyNow, href: cohort.applyUrl }
                  : { label: academy.joinWaitlist, href: communityUrl, subject: fill(academy.waitlistSubjectFrom, { cohort: title }) }
              }
              secondary={{ label: academy.aboutAcademy, href: "/academy" }}
            />
          </div>
        </section>
      </main>

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />

      <Footer />
    </div>
  );
};

const AcademyCohort: React.FC = () => {
  const { cohortSlug } = useParams();
  const cohort = getCohortBySlug(cohortSlug);

  if (!cohort) {
    return <NotFound />;
  }

  return <CohortView key={cohort.id} cohort={cohort} />;
};

export default AcademyCohort;
