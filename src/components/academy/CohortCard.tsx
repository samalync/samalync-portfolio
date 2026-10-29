import React from "react";
import { ArrowRight } from "lucide-react";
import PersonAvatar from "@/components/shared/PersonAvatar";
import { SmartLink, tappableCard } from "@/components/shared/SmartLink";
import { CohortBadges, CohortFacts, getCohortFacts } from "@/components/academy/CohortMeta";
import { communityUrl, getCohortCards, type Cohort } from "@/data/academy";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

const PREVIEW_SIZE = 6;

type CohortCardProps = {
  cohort: Cohort;
  /** full = /academy (facts + avatar preview), compact = homepage teaser. */
  variant?: "full" | "compact";
  headingLevel?: "h3" | "h4";
};

/**
 * A cohort as ONE link: its page when it has one, otherwise the waitlist.
 * Nothing inside is interactive; "Open →" is a visual affordance only.
 */
const CohortCard: React.FC<CohortCardProps> = ({ cohort, variant = "full", headingLevel: Heading = "h3" }) => {
  const { language, t } = useLanguage();
  const academy = t("academy");
  const title = cohort.title[language];
  const isWaitlist = cohort.enrollment === "waitlist";
  const isCompact = variant === "compact";
  const facts = getCohortFacts(cohort, language, academy);
  // Compact cards show one fact: the expected end for a running cohort, otherwise the start.
  const keyFact = cohort.status === "active" ? facts[1] : facts[0];

  const action = cohort.hasPage ? fill(academy.viewCohort, { cohort: title }) : academy.joinWaitlist;
  const statusText = [
    academy.status[cohort.status],
    cohort.phase ? academy.phase[cohort.phase] : cohort.enrollment !== "closed" && academy.enrollment[cohort.enrollment],
  ]
    .filter(Boolean)
    .join(", ");

  // Upcoming cohorts with published trainees get a small, decorative avatar preview (no count).
  const preview =
    !isCompact && cohort.status === "upcoming" && cohort.hasPage ? getCohortCards(cohort, language).slice(0, PREVIEW_SIZE) : [];

  return (
    <SmartLink
      href={cohort.hasPage ? `/academy/${cohort.slug}` : communityUrl}
      subject={cohort.hasPage ? undefined : fill(academy.waitlistSubjectCohort, { cohort: title })}
      aria-label={`${title}: ${statusText}. ${action}`}
      className={cn(
        tappableCard,
        "flex h-full flex-col",
        isCompact ? "p-5 sm:p-6" : "p-6 sm:p-8",
        cohort.status === "active" ? "border-cyan-300 ring-1 ring-cyan-200" : "border-slate-200",
        isWaitlist && "border-dashed bg-slate-50/60"
      )}
    >
      <div className={cn("flex items-center gap-4", isCompact ? "mb-4" : "mb-5")}>
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-lg font-bold text-white shadow-md"
          aria-hidden="true"
        >
          {String(cohort.number).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <Heading className={cn("font-bold text-slate-900", isCompact ? "text-xl" : "text-2xl")}>{title}</Heading>
          <p className="text-sm text-slate-500">{cohort.track[language]}</p>
        </div>
      </div>

      <CohortBadges cohort={cohort} className={isCompact ? "mb-4" : "mb-6"} />

      {isCompact ? (
        <p className="mb-5 text-sm leading-relaxed text-slate-600">
          {isWaitlist ? cohort.description[language] : `${keyFact.label}: ${keyFact.value}`}
        </p>
      ) : isWaitlist ? (
        <p className="mb-6 text-base leading-relaxed text-slate-600">{cohort.description[language]}</p>
      ) : (
        <CohortFacts facts={facts} className="mb-6" />
      )}

      {preview.length > 0 && (
        <div className="mb-6 flex items-center gap-3" aria-hidden="true">
          <span className="flex [&>*+*]:-ms-3">
            {preview.map((person) => (
              <PersonAvatar key={person.id} avatar={person.avatar} name="" size={40} className="border-2" />
            ))}
          </span>
          <span className="text-sm font-semibold text-slate-700">{academy.meetTrainees}</span>
        </div>
      )}

      <span
        className="mt-auto inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-blue-800"
        aria-hidden="true"
      >
        {action}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </span>
    </SmartLink>
  );
};

export default CohortCard;
