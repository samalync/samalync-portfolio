import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ExpandableCardProps = {
  title: string;
  summary?: string;
  /** Small label above the title, e.g. "Month 3". */
  eyebrow?: string;
  icon?: React.ReactNode;
  headingLevel?: "h3" | "h4";
  className?: string;
  children: React.ReactNode;
};

/** Card whose header is a disclosure button (aria-expanded); the details show below it. */
const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  summary,
  eyebrow,
  icon,
  headingLevel: Heading = "h3",
  className,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className={cn(
        "rounded-3xl border bg-white shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-cyan-300 hover:shadow-md motion-reduce:transition-none",
        open ? "border-cyan-300 shadow-md" : "border-slate-200",
        className
      )}
    >
      <Heading>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex min-h-[44px] w-full items-start gap-4 rounded-3xl p-6 text-start outline-none transition-transform focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-500 active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100"
        >
          {icon}
          <span className="min-w-0 flex-1">
            {eyebrow && <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-cyan-700 rtl:tracking-normal">{eyebrow}</span>}
            <span className="block text-lg font-bold text-slate-900">{title}</span>
            {summary && <span className="mt-1 block text-sm leading-relaxed text-slate-600">{summary}</span>}
          </span>
          <ChevronDown
            className={cn("mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </Heading>
      <div id={panelId} hidden={!open} className="px-6 pb-6 text-slate-700">
        {children}
      </div>
    </div>
  );
};

export default ExpandableCard;
