import React from "react";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n";
import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  name: string;
  linkedin?: string;
  behance?: string;
  size?: "sm" | "lg";
  className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ name, linkedin, behance, size = "sm", className }) => {
  const shared = useLanguage().t("shared");

  if (!linkedin && !behance) {
    return null;
  }

  const button = cn(
    "flex items-center justify-center rounded-full text-white shadow-sm transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2",
    size === "sm" ? "h-11 w-11" : "h-12 w-12"
  );

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={cn(button, "bg-[#0077B5]")} aria-label={fill(shared.linkedin, { name })}>
          <Linkedin className={size === "sm" ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true" />
        </a>
      )}
      {behance && (
        <a href={behance} target="_blank" rel="noopener noreferrer" className={cn(button, "bg-[#1769FF]")} aria-label={fill(shared.behance, { name })}>
          <span className={cn("font-semibold", size === "sm" ? "text-sm" : "text-lg")} aria-hidden="true">
            B
          </span>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
