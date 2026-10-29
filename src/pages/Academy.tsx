import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  Code2,
  FolderGit2,
  GitPullRequest,
  GraduationCap,
  Laptop,
  MapPin,
  MessageSquare,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ExpandableCard from "@/components/shared/ExpandableCard";
import { CtaBanner, CtaButton } from "@/components/shared/Cta";
import { SmartLink, tappableCard } from "@/components/shared/SmartLink";
import CohortCard from "@/components/academy/CohortCard";
import { formatCohortStart } from "@/components/academy/CohortMeta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  academyFaq,
  cohorts,
  communityUrl,
  nextCohort,
  roadmap,
  traineeProjects,
  tracks,
  waitlistCohort,
  type AcademyTrack,
  type CohortPhase,
} from "@/data/academy";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

const audienceIcons: LucideIcon[] = [Sparkles, BookOpen, GraduationCap, Code2];
const benefitIcons: LucideIcon[] = [Smartphone, FolderGit2, GitPullRequest, Award, Users];
const successIcons: LucideIcon[] = [CalendarCheck, ClipboardCheck, MessageSquare, Rocket];
const trackIcons: Record<string, LucideIcon> = { mobile: Smartphone, web: Laptop, backend: Server };
const phases: CohortPhase[] = ["learning", "practical"];

const iconBadge = (Icon: LucideIcon, tone: "blue" | "cyan" = "blue") => (
  <span
    className={cn(
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-md",
      tone === "blue" ? "bg-gradient-to-br from-blue-600 to-cyan-500" : "bg-gradient-to-br from-cyan-600 to-teal-500"
    )}
    aria-hidden="true"
  >
    <Icon className="h-5 w-5" />
  </span>
);

/** Active track jumps to the roadmap; planned tracks open the contact form with a prefilled subject. */
const TrackCard: React.FC<{ track: AcademyTrack }> = ({ track }) => {
  const { language, t } = useLanguage();
  const academy = t("academy");
  const Icon = trackIcons[track.id] ?? Code2;
  const isActive = track.status === "active";
  const title = track.title[language];
  const action = isActive ? academy.trackActiveAction : academy.trackPlannedAction;

  return (
    <SmartLink
      href={isActive ? "#roadmap" : ""}
      subject={isActive ? undefined : fill(academy.trackInterestSubject, { track: track.shortName[language] })}
      aria-label={`${title}: ${academy.trackStatus[track.status]}. ${action}`}
      className={cn(
        tappableCard,
        "flex h-full flex-col p-6",
        isActive ? "border-cyan-300 ring-1 ring-cyan-200" : "border-dashed border-slate-300 bg-slate-50 opacity-80 hover:opacity-100"
      )}
    >
      <span className="mb-5 flex items-center justify-between gap-3">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-2xl",
            isActive ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md" : "bg-slate-200 text-slate-500"
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-semibold",
            isActive ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-slate-300 bg-white text-slate-600"
          )}
        >
          {academy.trackStatus[track.status]}
        </span>
      </span>
      <span className={cn("block text-xl font-bold", isActive ? "text-slate-900" : "text-slate-600")}>{title}</span>
      <span className="mt-2 block text-sm leading-relaxed text-slate-600">{track.description[language]}</span>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary" aria-hidden="true">
        {action}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </span>
    </SmartLink>
  );
};

/** Mobile-only bottom bar; hides once the final CTA (or anything after it) is on screen. */
const StickyCommunityBar: React.FC<{ endRef: React.RefObject<HTMLElement> }> = ({ endRef }) => {
  const academy = useLanguage().t("academy");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const target = endRef.current;
      setHidden(Boolean(target && target.getBoundingClientRect().top < window.innerHeight));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [endRef]);

  return (
    <div
      data-sticky-cta
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-300 motion-reduce:transition-none md:hidden",
        hidden && "pointer-events-none translate-y-full"
      )}
      aria-hidden={hidden}
    >
      <CtaButton href={communityUrl} subject={academy.communitySubject} className="w-full">
        {academy.joinCommunity}
      </CtaButton>
    </div>
  );
};

const Academy: React.FC = () => {
  const { language, t } = useLanguage();
  const academy = t("academy");
  const finalRef = useRef<HTMLElement>(null);

  usePageMeta(t("meta").academy);

  const waitlistTitle = waitlistCohort?.title[language];
  const waitlistSubject = waitlistTitle ? fill(academy.waitlistSubjectCohort, { cohort: waitlistTitle }) : academy.waitlistSubject;
  const waitlistLabel = waitlistTitle ? fill(academy.joinWaitlistFor, { cohort: waitlistTitle }) : academy.joinWaitlist;
  const heroChip =
    nextCohort &&
    fill(nextCohort.enrollment === "full" ? academy.heroChipFull : academy.heroChip, {
      cohort: nextCohort.title[language],
      date: formatCohortStart(nextCohort, language, academy),
    });

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
          chip={heroChip}
          actions={
            <>
              <CtaButton href={communityUrl} subject={waitlistSubject} variant="light">
                {waitlistLabel}
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

        {/* 2. What the program is */}
        <section id="program" aria-labelledby="academy-program" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader id="academy-program" eyebrow={academy.programEyebrow} title={academy.programTitle} className="mb-10" />
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-700">
              {academy.programParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Who it's for */}
        <section id="audience" aria-labelledby="academy-audience" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader id="academy-audience" eyebrow={academy.audienceEyebrow} title={academy.audienceTitle} className="mb-12" />
            <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {academy.audience.map((item, index) => (
                <li key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4">{iconBadge(audienceIcons[index] ?? Sparkles)}</div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base font-semibold text-blue-900">{academy.audienceNote}</p>
          </div>
        </section>

        {/* 4. What you get */}
        <section id="benefits" aria-labelledby="academy-benefits" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="academy-benefits"
              eyebrow={academy.benefitsEyebrow}
              title={academy.benefitsTitle}
              intro={academy.benefitsIntro}
              className="mb-12"
            />
            <ul className="mx-auto grid max-w-6xl items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
              {academy.benefits.map((benefit, index) => (
                <li key={benefit.title}>
                  <ExpandableCard title={benefit.title} summary={benefit.summary} icon={iconBadge(benefitIcons[index] ?? Award)}>
                    <p className="text-sm leading-relaxed">{benefit.details}</p>
                  </ExpandableCard>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-500">{academy.disclaimer}</p>
          </div>
        </section>

        {/* 5. Tracks */}
        <section id="tracks" aria-labelledby="academy-tracks" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="academy-tracks"
              eyebrow={academy.tracksEyebrow}
              title={academy.tracksTitle}
              intro={academy.tracksIntro}
              className="mb-12"
            />
            <ul className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
              {tracks.map((track) => (
                <li key={track.id}>
                  <TrackCard track={track} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Roadmap */}
        <section id="roadmap" aria-labelledby="academy-roadmap" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="academy-roadmap"
              eyebrow={academy.roadmapEyebrow}
              title={academy.roadmapTitle}
              intro={academy.roadmapIntro}
              className="mb-6"
            />
            <p className="mb-12 flex justify-center">
              <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                {academy.roadmapBadge}
              </span>
            </p>

            <div className="mx-auto max-w-5xl space-y-10">
              {phases.map((phase) => {
                const practical = phase === "practical";

                return (
                  <div key={phase}>
                    <h3 className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className={cn("text-2xl font-bold", practical ? "text-cyan-800" : "text-blue-900")}>{academy.phase[phase]}</span>
                      <span className="text-sm font-semibold text-slate-500">{academy.phaseMonths[phase]}</span>
                    </h3>
                    <ol className="grid items-start gap-4 md:grid-cols-2">
                      {roadmap
                        .filter((step) => step.phase === phase)
                        .map((step) => (
                          <li key={step.id}>
                            <ExpandableCard
                              headingLevel="h4"
                              eyebrow={fill(academy.monthLabel, { n: step.month })}
                              title={step.title[language]}
                              summary={step.summary[language]}
                              className={practical ? "bg-cyan-50/40" : undefined}
                            >
                              <ul className="space-y-2 text-sm">
                                {step.topics[language].map((topic) => (
                                  <li key={topic} className="flex items-start gap-2">
                                    <span
                                      className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", practical ? "bg-cyan-600" : "bg-blue-600")}
                                      aria-hidden="true"
                                    />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </ExpandableCard>
                          </li>
                        ))}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Format */}
        <section id="format" aria-labelledby="academy-format" className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-start">
              {iconBadge(MapPin, "cyan")}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700 rtl:tracking-normal">{academy.formatEyebrow}</p>
                <h2 id="academy-format" className="mt-1 text-2xl font-bold text-slate-900">
                  {academy.formatTitle}
                </h2>
                <p className="mt-2 leading-relaxed text-slate-600">{academy.formatText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Cohorts */}
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
                <li key={cohort.id}>
                  <CohortCard cohort={cohort} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 9. How we measure success */}
        <section id="success" aria-labelledby="academy-success" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="academy-success"
              eyebrow={academy.successEyebrow}
              title={academy.successTitle}
              intro={academy.successIntro}
              className="mb-12"
            />
            <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {academy.success.map((item, index) => (
                <li key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4">{iconBadge(successIcons[index] ?? Rocket, "cyan")}</div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. Community */}
        <section id="community" aria-labelledby="academy-community" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 text-center md:flex-row md:justify-between md:p-10 md:text-start">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700 rtl:tracking-normal">{academy.communityEyebrow}</p>
                <h2 id="academy-community" className="text-3xl font-bold text-slate-900">
                  {academy.communityTitle}
                </h2>
                <p className="max-w-xl leading-relaxed text-slate-600">{academy.communityText}</p>
              </div>
              <CtaButton href={communityUrl} subject={academy.communitySubject} className="w-full shrink-0 md:w-auto">
                {academy.joinCommunity}
              </CtaButton>
            </div>
          </div>
        </section>

        {/* 11. What trainees built (hidden until traineeProjects has entries) */}
        {traineeProjects.length > 0 && (
          <section id="work" aria-labelledby="academy-work" className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader id="academy-work" eyebrow={academy.workEyebrow} title={academy.workTitle} intro={academy.workIntro} className="mb-14" />
              <ul className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {traineeProjects.map((project) => {
                  const projectTitle = language === "ar" && project.titleAr ? project.titleAr : project.title;
                  const description = language === "ar" && project.descriptionAr ? project.descriptionAr : project.description;
                  const body = (
                    <>
                      <img
                        src={project.screenshot}
                        alt=""
                        className="aspect-video w-full rounded-t-3xl bg-slate-100 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="block space-y-2 p-6">
                        <span className="block text-lg font-bold text-slate-900">{projectTitle}</span>
                        <span className="block text-sm leading-relaxed text-slate-600">{description}</span>
                        {project.url && (
                          <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary" aria-hidden="true">
                            {academy.viewProject}
                            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                          </span>
                        )}
                      </span>
                    </>
                  );

                  return (
                    <li key={project.title}>
                      {project.url ? (
                        <SmartLink
                          href={project.url}
                          aria-label={`${projectTitle}. ${academy.viewProject}`}
                          className={cn(tappableCard, "h-full overflow-hidden border-slate-200")}
                        >
                          {body}
                        </SmartLink>
                      ) : (
                        <div className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* 12. FAQ */}
        <section id="faq" aria-labelledby="academy-faq" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader id="academy-faq" eyebrow={academy.faqEyebrow} title={academy.faqTitle} className="mb-12" />
            <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white px-6 shadow-sm sm:px-8">
              {academyFaq.map((item, index) => (
                <AccordionItem key={item.question.en} value={`faq-${index}`} className="last:border-b-0">
                  <AccordionTrigger className="min-h-[44px] gap-4 py-5 text-start text-lg font-semibold text-slate-900 hover:no-underline">
                    {item.question[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-slate-600">{item.answer[language]}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 13. Final CTA */}
        <section ref={finalRef} id="join" className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CtaBanner
              className="mx-auto max-w-5xl"
              title={academy.finalTitle}
              text={academy.finalText}
              primary={{ label: waitlistLabel, href: communityUrl, subject: waitlistSubject }}
              secondary={{ label: academy.seeCohorts, href: "#cohorts" }}
            />
          </div>
        </section>
      </main>

      <StickyCommunityBar endRef={finalRef} />

      <Footer />
    </div>
  );
};

export default Academy;
