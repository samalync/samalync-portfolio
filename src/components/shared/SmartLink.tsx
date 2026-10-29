import React from "react";
import { Link } from "react-router-dom";
import { CONTACT_TARGET } from "@/config/navigation";

export const isExternalHref = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

type SmartLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** External URL (new tab), internal path or "#id". Empty = the contact section. */
  href?: string;
  /** Prefills the contact form's subject when the link falls back to the contact section. */
  subject?: string;
};

/** One link element for every destination the site uses: external, internal, or the contact form. */
export const SmartLink = React.forwardRef<HTMLAnchorElement, SmartLinkProps>(({ href, subject, children, ...rest }, ref) => {
  if (href && isExternalHref(href)) {
    return (
      <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link ref={ref} to={href || CONTACT_TARGET} state={!href && subject ? { subject } : undefined} {...rest}>
      {children}
    </Link>
  );
});

SmartLink.displayName = "SmartLink";

/**
 * Full-surface tappable card: hover lift, focus ring, press feedback, 44px minimum target.
 * Use on the single <a>/<Link> that wraps the whole card; keep everything inside non-interactive.
 */
export const tappableCard =
  "group relative block min-h-[44px] rounded-3xl border bg-white text-start shadow-sm outline-none transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100";
