import type { Language } from "@/i18n";

const locale = (language: Language) => (language === "ar" ? "ar-u-nu-latn" : "en-GB");

/** Replaces {name} placeholders in a translation string. */
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));

/** Formats an ISO date (YYYY-MM-DD) without timezone drift. */
export const formatDate = (iso: string, language: Language) =>
  new Intl.DateTimeFormat(locale(language), { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  );

/** Formats an ISO month (YYYY-MM). */
export const formatMonth = (isoMonth: string, language: Language) =>
  new Intl.DateTimeFormat(locale(language), { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${isoMonth}-01T00:00:00Z`)
  );
