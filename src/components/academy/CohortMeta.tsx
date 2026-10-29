import React from "react";
import type { Cohort } from "@/data/academy";
import { useLanguage, type Language, type TranslationMap } from "@/i18n";
import { fill, formatDate, formatMonth } from "@/lib/format";
import { cn } from "@/lib/utils";

type AcademyText = TranslationMap["academy"];

const statusStyle: Record<Cohort["status"], string> = {
  active: "border-emerald-200 bg-emerald-50 text-emerald-800",
  upcoming: "border-blue-200 bg-blue-50 text-blue-800",
  graduated: "border-slate-200 bg-slate-100 text-slate-700",
};

const enrollmentStyle: Record<Cohort["enrollment"], string> = {
  open: "border-emerald-200 bg-emerald-50 text-emerald-800",
  full: "border-amber-200 bg-amber-50 text-amber-800",
  waitlist: "border-cyan-200 bg-cyan-50 text-cyan-800",
  closed: "border-slate-200 bg-slate-100 text-slate-700",
};

const badgeClass = "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold";

/** Status badge plus the phase (if running) or the enrollment state. */
export const CohortBadges: React.FC<{ cohort: Cohort; className?: string }> = ({ cohort, className }) => {
  const academy = useLanguage().t("academy");

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <span className={cn(badgeClass, statusStyle[cohort.status])}>
        {cohort.status === "active" && <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />}
        {academy.status[cohort.status]}
      </span>
      {cohort.phase ? (
        <span className={cn(badgeClass, "border-cyan-200 bg-cyan-50 text-cyan-800")}>{academy.phase[cohort.phase]}</span>
      ) : (
        cohort.enrollment !== "closed" && (
          <span className={cn(badgeClass, enrollmentStyle[cohort.enrollment])}>{academy.enrollment[cohort.enrollment]}</span>
        )
      )}
    </div>
  );
};

export type CohortFact = { label: string; value: string };

/** Start, end and seats/trainees, with "TBA" for unknown dates. */
export const getCohortFacts = (cohort: Cohort, language: Language, academy: AcademyText): CohortFact[] => {
  const start = cohort.startDate ? formatDate(cohort.startDate, language) : academy.tba;
  const end = cohort.endDate
    ? formatDate(cohort.endDate, language)
    : cohort.expectedEnd
      ? fill(academy.expectedAround, { date: formatMonth(cohort.expectedEnd, language) })
      : academy.tba;

  const facts: CohortFact[] = [
    { label: academy.startLabel, value: start },
    { label: academy.endLabel, value: end },
  ];

  const publicMembers = cohort.members.filter((member) => member.consented).length;

  // A full cohort shows "Seats full" (never a number), even once trainees are listed.
  if (cohort.enrollment === "full") {
    facts.push({ label: academy.seatsLabel, value: academy.enrollment.full });
  } else if (publicMembers > 0) {
    facts.push({ label: academy.traineesLabel, value: String(publicMembers) });
  } else if (cohort.seatsTotal) {
    facts.push({ label: academy.seatsLabel, value: fill(academy.seatsCount, { n: cohort.seatsTotal }) });
  }

  return facts;
};

export const CohortFacts: React.FC<{ facts: CohortFact[]; tone?: "light" | "dark"; className?: string }> = ({
  facts,
  tone = "light",
  className,
}) => (
  <dl className={cn("grid gap-3", className)}>
    {facts.map((fact) => (
      <div
        key={fact.label}
        className={cn(
          "rounded-2xl px-4 py-3",
          tone === "dark" ? "bg-white/10 ring-1 ring-white/15" : "bg-slate-50 ring-1 ring-slate-200"
        )}
      >
        <dt className={cn("text-xs font-semibold uppercase tracking-wider rtl:tracking-normal", tone === "dark" ? "text-blue-200" : "text-slate-500")}>
          {fact.label}
        </dt>
        <dd className={cn("mt-1 font-semibold", tone === "dark" ? "text-white" : "text-slate-900")}>{fact.value}</dd>
      </div>
    ))}
  </dl>
);
