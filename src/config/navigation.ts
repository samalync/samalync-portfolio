import type { To } from "react-router-dom";
import type { TranslationMap } from "@/i18n";

type NavKey = keyof TranslationMap["header"]["nav"];

/** "section" items live on the home page; "route" items are their own pages. */
export type NavItem =
  | { key: NavKey; kind: "section"; id: string }
  | { key: NavKey; kind: "route"; to: string };

export const headerNav: NavItem[] = [
  { key: "home", kind: "route", to: "/" },
  { key: "services", kind: "section", id: "services" },
  { key: "projects", kind: "section", id: "portfolio" },
  { key: "academy", kind: "route", to: "/academy" },
  { key: "team", kind: "route", to: "/team" },
  { key: "contact", kind: "section", id: "contact" },
];

export const footerNav: NavItem[] = [
  { key: "home", kind: "route", to: "/" },
  { key: "services", kind: "section", id: "services" },
  { key: "projects", kind: "section", id: "portfolio" },
  { key: "academy", kind: "route", to: "/academy" },
  { key: "about", kind: "section", id: "about" },
  { key: "team", kind: "route", to: "/team" },
  { key: "partnerships", kind: "section", id: "partnerships" },
  { key: "clients", kind: "section", id: "selected-clients" },
  { key: "contact", kind: "section", id: "contact" },
];

export const navTarget = (item: NavItem): To =>
  item.kind === "route" ? item.to : { pathname: "/", hash: `#${item.id}` };

/** Highlights route items (except Home) when the current path is inside them. */
export const isNavItemActive = (item: NavItem, pathname: string) =>
  item.kind === "route" && item.to !== "/" && (pathname === item.to || pathname.startsWith(`${item.to}/`));

export const CONTACT_TARGET: To = { pathname: "/", hash: "#contact" };
