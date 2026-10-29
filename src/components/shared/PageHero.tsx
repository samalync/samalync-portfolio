import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** light = Team-style pastel hero, navy = deep blue hero (Academy). */
  variant?: "light" | "navy";
  /** Calls to action, rendered under the subtitle. */
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, variant = "light", actions, children }) => {
  if (variant === "light") {
    return (
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-16 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader as="h1" eyebrow={eyebrow} title={title} intro={subtitle} className="mb-16" />
          {actions && <div className="flex flex-wrap justify-center gap-4">{actions}</div>}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-blue-900 pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.35),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/30" aria-hidden="true" />

      <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-2xl">{subtitle}</p>}
        {actions && <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">{actions}</div>}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
