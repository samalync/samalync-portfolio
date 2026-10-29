import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { formatCohortStart } from "@/components/academy/CohortMeta";
import { tappableCard } from "@/components/shared/SmartLink";
import { nextCohort } from "@/data/academy";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Compact, fully clickable Academy card used on About and Team instead of a trainee grid. */
const AcademyTeaser: React.FC<{ className?: string }> = ({ className }) => {
  const { language, t } = useLanguage();
  const academy = t("academy");
  const teaser = academy.teaser;
  const date = nextCohort ? formatCohortStart(nextCohort, language, academy) : academy.tba;

  return (
    <Link
      to="/academy"
      aria-label={`${academy.eyebrow}: ${teaser.title}. ${teaser.action}`}
      className={cn(
        tappableCard,
        "flex flex-col gap-6 border-transparent bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 p-6 text-white hover:border-cyan-300 sm:flex-row sm:items-center sm:p-8",
        className
      )}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20" aria-hidden="true">
        <GraduationCap className="h-7 w-7 text-cyan-200" />
      </span>
      <span className="min-w-0 flex-1 space-y-2">
        <span className="block text-sm font-semibold text-cyan-200">{academy.eyebrow}</span>
        <span className="block text-xl font-bold leading-snug sm:text-2xl">{teaser.title}</span>
        <span className="block text-sm leading-relaxed text-blue-100">{fill(teaser.text, { date })}</span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-white" aria-hidden="true">
        {teaser.action}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
};

export default AcademyTeaser;
