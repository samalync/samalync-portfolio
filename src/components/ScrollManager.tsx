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
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
