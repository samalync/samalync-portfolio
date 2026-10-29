import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/config/site";

type PageMeta = {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
};

const setMeta = (attribute: "name" | "property", key: string, content: string | null) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (content === null) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = href;
};

/**
 * Per-route title, description, canonical and social tags.
 * Search engines that run JavaScript pick these up; link-preview bots only see index.html.
 */
export const usePageMeta = ({ title, description, image = DEFAULT_OG_IMAGE, noindex = false }: PageMeta) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "robots", noindex ? "noindex" : null);
    setCanonical(url);
  }, [description, image, noindex, pathname, title]);
};
