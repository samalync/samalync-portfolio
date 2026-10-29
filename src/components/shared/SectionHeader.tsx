import React from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: string;
  intro?: string;
  as?: "h1" | "h2" | "h3";
  /** lg = page/section title, md = sub-section title. */
  size?: "lg" | "md";
  align?: "center" | "start";
  tone?: "light" | "dark";
  /** Extra content beside the heading (e.g. a count chip). */
  aside?: React.ReactNode;
  id?: string;
  className?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowIcon,
  title,
  intro,
  as: Heading = "h2",
  size = "lg",
  align = "center",
  tone = "light",
  aside,
  id,
  className,
}) => {
  const isDark = tone === "dark";
  const isCenter = align === "center";

  const eyebrowClass =
    size === "lg"
      ? cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-wide rtl:tracking-normal",
          isDark ? "border border-white/15 bg-white/10 text-cyan-100" : "border border-blue-200/40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600"
        )
      : cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] rtl:tracking-normal",
          isDark ? "border border-cyan-400/20 bg-white/5 text-cyan-100" : "border border-slate-200 bg-slate-50 text-slate-600"
        );

  const headingClass =
    size === "lg"
      ? cn(
          "text-4xl font-bold leading-tight md:text-5xl lg:text-6xl",
          isDark ? "text-white" : "bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text pb-1 text-transparent"
        )
      : cn("text-3xl font-bold", isDark ? "text-white" : "text-slate-900");

  const introClass =
    size === "lg"
      ? cn("max-w-3xl text-xl font-light leading-relaxed", isCenter && "mx-auto", isDark ? "text-slate-300" : "text-gray-600")
      : cn("max-w-2xl text-base leading-relaxed", isCenter && "mx-auto", isDark ? "text-slate-300" : "text-slate-600");

  const body = (
    <div className={cn(size === "lg" ? "space-y-6" : "space-y-4", isCenter ? "text-center" : "text-start")}>
      {eyebrow && (
        <div className={eyebrowClass}>
          {eyebrowIcon}
          {eyebrow}
        </div>
      )}
      <div className="space-y-2">
        <Heading id={id} className={headingClass}>
          {title}
        </Heading>
        {intro && <p className={introClass}>{intro}</p>}
      </div>
    </div>
  );

  if (!aside) {
    return <div className={className}>{body}</div>;
  }

  return (
    <div className={cn("flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", className)}>
      {body}
      <div className="self-start lg:self-end">{aside}</div>
    </div>
  );
};

/** Small rounded count chip used beside sub-section headers. */
export const CountChip: React.FC<{ children: React.ReactNode; tone?: "light" | "dark" }> = ({ children, tone = "light" }) => (
  <div
    className={cn(
      "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold",
      tone === "dark" ? "border border-white/10 bg-white/5 text-slate-200" : "border border-cyan-100 bg-cyan-50 text-cyan-700"
    )}
  >
    {children}
  </div>
);

export default SectionHeader;
