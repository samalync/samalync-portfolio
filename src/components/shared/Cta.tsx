import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartLink, isExternalHref } from "@/components/shared/SmartLink";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

type CtaVariant = "primary" | "light" | "outline-light" | "outline";

const variantClass: Record<CtaVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  light: "bg-white text-primary hover:bg-blue-50",
  "outline-light": "border border-white/40 bg-transparent text-white hover:bg-white/10",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
};

type CtaButtonProps = {
  /** External URL (opens in a new tab), internal path, or "#id". Empty = contact section. */
  href?: string;
  /** Prefills the contact form's subject when the button falls back to the contact section. */
  subject?: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  icon?: "arrow" | "none";
  className?: string;
};

export const CtaButton: React.FC<CtaButtonProps> = ({ href, subject, children, variant = "primary", icon = "arrow", className }) => {
  const shared = useLanguage().t("shared");
  const classes = cn(
    "h-12 gap-2 rounded-xl px-6 text-base font-semibold transition-[color,background-color,transform] active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2",
    variantClass[variant],
    className
  );

  const external = Boolean(href && isExternalHref(href));

  return (
    <Button asChild className={classes}>
      <SmartLink href={href} subject={subject}>
        {children}
        {icon === "arrow" &&
          (external ? (
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          ))}
        {external && <span className="sr-only"> ({shared.newTab})</span>}
      </SmartLink>
    </Button>
  );
};

type CtaLink = { label: string; href?: string; subject?: string };

type CtaBannerProps = {
  title: string;
  text?: string;
  primary: CtaLink;
  secondary?: CtaLink;
  className?: string;
};

/** Deep blue call-to-action panel. */
export const CtaBanner: React.FC<CtaBannerProps> = ({ title, text, primary, secondary, className }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 px-6 py-12 text-center text-white shadow-xl sm:px-12 md:py-16",
      className
    )}
  >
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_55%)]"
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-2xl space-y-6">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="text-lg leading-relaxed text-blue-100">{text}</p>}
      <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
        <CtaButton href={primary.href} subject={primary.subject} variant="light">
          {primary.label}
        </CtaButton>
        {secondary && (
          <CtaButton href={secondary.href} subject={secondary.subject} variant="outline-light" icon="none">
            {secondary.label}
          </CtaButton>
        )}
      </div>
    </div>
  </div>
);
