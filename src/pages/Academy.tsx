import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, CheckCircle2, FolderGit2, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { CtaBanner, CtaButton } from "@/components/shared/Cta";
import PersonAvatar from "@/components/shared/PersonAvatar";
import { CohortBadges, CohortFacts, getCohortFacts } from "@/components/academy/CohortMeta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cohorts, communityUrl, getCohortCards, traineeProjects, type Cohort } from "@/data/academy";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

const benefitIcons = [Smartphone, FolderGit2, Building2, Award];

// Months 1-4 learning, 5-6 practical.
const timeline = [1, 2, 3, 4, 5, 6].map((month) => ({ month, practical: month > 4 }));

const PREVIEW_SIZE = 6;

const CohortCard: React.FC<{ cohort: Cohort }> = ({ cohort }) => {
  const { language, t } = useLanguage();
  const academy = t("academy");
  const title = cohort.title[language];
  const isWaitlist = cohort.enrollment === "waitlist";

  // Upcoming cohorts get an avatar preview; Cohort 1's card already shows its trainee count.
  const members = cohort.status === "upcoming" && cohort.hasPage ? getCohortCards(cohort, language) : [];
  const preview = members.slice(0, PREVIEW_SIZE);
  const hiddenCount = members.length - preview.length;

  return (
    <li
      className={cn(
        "flex flex-col rounded-3xl border bg-white p-6 shadow-sm transition-[box-shadow,border-color] duration-300 hover:shadow-lg sm:p-8",
        cohort.status === "active" ? "border-cyan-300 ring-1 ring-cyan-200" : "border-slate-200",
        isWaitlist && "border-dashed"
      )}
    >
      <div className="mb-5 flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-lg font-bold text-white shadow-md"
          aria-hidden="true"
        >
          {String(cohort.number).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{cohort.track[language]}</p>
        </div>
      </div>

      <CohortBadges cohort={cohort} className="mb-6" />

      {isWaitlist ? (
        <p className="mb-6 text-base leading-relaxed text-slate-600">{cohort.description[language]}</p>
      ) : (
        <CohortFacts facts={getCohortFacts(cohort, language, academy)} className="mb-6" />
      )}

      {preview.length > 0 && (
        <Link
          to={`/academy/${cohort.slug}`}
          className="mb-6 flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <span className="flex [&>*+*]:-ms-3" aria-hidden="true">
            {preview.map((person) => (
              <PersonAvatar key={person.id} avatar={person.avatar} name="" size={40} className="border-2 shadow-sm ring-0" />
            ))}
            {hiddenCount > 0 && (
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold text-slate-700">
                {fill(academy.moreTrainees, { n: hiddenCount })}
              </span>
            )}
          </span>
          <span className="text-sm font-semibold text-slate-800 hover:text-primary">{academy.meetTrainees}</span>
        </Link>
      )}

      <div className="mt-auto">
        {isWaitlist ? (
          <CtaButton href={communityUrl} subject={fill(academy.waitlistSubjectCohort, { cohort: title })} className="w-full">
            {academy.joinWaitlist}
          </CtaButton>
        ) : (
          cohort.hasPage && (
            <Link
              to={`/academy/${cohort.slug}`}
              className="inline-flex items-center gap-2 rounded-lg font-semibold text-primary hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              {fill(academy.viewCohort, { cohort: title })}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          )
        )}
      </div>
    </li>
  );
};

const Academy: React.FC = () => {
  const { language, t } = useLanguage();
  const academy = t("academy");

  usePageMeta(t("meta").academy);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 1. Hero */}
        <PageHero
          variant="navy"
          eyebrow={academy.eyebrow}
          title={academy.heroTitle}
          subtitle={academy.heroSubtitle}
          actions={
            <>
              <CtaButton href={communityUrl} subject={academy.waitlistSubject} variant="light">
                {academy.joinWaitlist}
              </CtaButton>
              <CtaButton href="#cohorts" variant="outline-light" icon="none">
                {academy.seeCohorts}
              </CtaButton>
            </>
          }
        >
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {academy.heroFacts.map((fact) => (
              <li key={fact} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 ring-1 ring-white/15">
                {fact}
              </li>
            ))}
          </ul>
        </PageHero>

        {/* 2. What you get */}
        <section aria-labelledby="academy-benefits" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="academy-benefits"
              eyebrow={academy.benefitsEyebrow}
              title={academy.benefitsTitle}
              intro={academy.benefitsIntro}
              className="mb-14"
            />
            <ul className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {academy.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index] ?? Award;

                return (
                  <li
                    key={benefit.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 3. How it works */}
        <section aria-labelledby="academy-how" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader id="academy-how" eyebrow={academy.howEyebrow} title={academy.howTitle} intro={academy.howIntro} className="mb-14" />

            <div className="mx-auto max-w-5xl">
              <div className="mb-8 grid grid-cols-6 gap-2" aria-hidden="true">
                {timeline.map(({ month, practical }) => (
                  <div key={month} className="space-y-2 text-center">
                    <div className={cn("h-2 rounded-full", practical ? "bg-cyan-500" : "bg-blue-600")} />
                    <span className="text-xs font-semibold text-slate-500">{fill(academy.monthShort, { n: month })}</span>
                  </div>
                ))}
              </div>

              <ol className="grid gap-6 md:grid-cols-3" aria-label={academy.timelineLabel}>
                {academy.phases.map((phase, index) => {
                  const practical = index === 1;

                  return (
                    <li
                      key={phase.title}
                      className={cn(
                        "rounded-3xl border bg-white p-8 shadow-sm",
                        practical ? "border-cyan-200" : "border-blue-200 md:col-span-2"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                          practical ? "bg-cyan-50 text-cyan-800" : "bg-blue-50 text-blue-800"
                        )}
                      >
                        {phase.months}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-slate-900">{phase.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600">{phase.description}</p>
                      <ul className="mt-6 space-y-3">
                        {phase.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-slate-700">
                            <CheckCircle2
                              className={cn("mt-0.5 h-5 w-5 shrink-0", practical ? "text-cyan-600" : "text-blue-600")}
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* 4. Cohorts */}
        <section id="cohorts" aria-labelledby="academy-cohorts" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="academy-cohorts"
              eyebrow={academy.cohortsEyebrow}
              title={academy.cohortsTitle}
              intro={academy.cohortsIntro}
              className="mb-14"
            />
            <ol className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cohorts.map((cohort) => (
                <CohortCard key={cohort.id} cohort={cohort} />
              ))}
            </ol>
          </div>
        </section>

        {/* 5. Selected work (hidden until traineeProjects has entries) */}
        {traineeProjects.length > 0 && (
          <section aria-labelledby="academy-work" className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader id="academy-work" eyebrow={academy.workEyebrow} title={academy.workTitle} intro={academy.workIntro} className="mb-14" />
              <ul className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {traineeProjects.map((project) => {
                  const projectTitle = language === "ar" && project.titleAr ? project.titleAr : project.title;
                  const description = language === "ar" && project.descriptionAr ? project.descriptionAr : project.description;

                  return (
                    <li key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                      <img
                        src={project.screenshot}
                        alt={projectTitle}
                        className="aspect-video w-full bg-slate-100 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="space-y-2 p-6">
                        <h3 className="text-lg font-bold text-slate-900">{projectTitle}</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary hover:text-blue-800"
                          >
                            {academy.viewProject}
                            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* 6. FAQ */}
        <section aria-labelledby="academy-faq" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader id="academy-faq" eyebrow={academy.faqEyebrow} title={academy.faqTitle} className="mb-12" />
            <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white px-6 shadow-sm sm:px-8">
              {academy.faq.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`} className="last:border-b-0">
                  <AccordionTrigger className="gap-4 py-5 text-start text-lg font-semibold text-slate-900 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-slate-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CtaBanner
              className="mx-auto max-w-5xl"
              title={academy.finalTitle}
              text={academy.finalText}
              primary={{ label: academy.joinWaitlist, href: communityUrl, subject: academy.waitlistSubject }}
              secondary={{ label: academy.seeCohorts, href: "#cohorts" }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academy;
