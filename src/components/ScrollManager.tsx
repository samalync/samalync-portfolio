import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the #hash target after navigation, or to the top on a new page. */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    // Wait a frame so the target page has rendered.
    const frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // scrollIntoView honours the html scroll-padding-top, so targets clear the fixed header.
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
