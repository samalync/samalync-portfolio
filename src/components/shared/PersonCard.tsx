import React, { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import PersonAvatar from "@/components/shared/PersonAvatar";
import SocialLinks from "@/components/shared/SocialLinks";
import type { PersonCardData } from "@/data/people";

type PersonCardProps = {
  person: PersonCardData;
  onSelect: (person: PersonCardData) => void;
  badge?: string;
  headingLevel?: "h3" | "h4";
};

/** Team / trainee card. The whole card opens the profile; social links stay clickable on top. */
const PersonCard = memo(({ person, onSelect, badge, headingLevel: Heading = "h3" }: PersonCardProps) => (
  <Card className="group relative isolate h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg focus-within:border-cyan-300">
    <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-br from-cyan-50 via-blue-50/80 to-white" aria-hidden="true" />

    {badge && (
      <div className="absolute start-6 top-6 z-20 inline-flex items-center rounded-full border border-cyan-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm rtl:tracking-normal">
        {badge}
      </div>
    )}

    <CardContent className="p-8 text-center">
      <div className="relative mx-auto mb-6 w-fit">
        <PersonAvatar
          avatar={person.avatar}
          name={person.name}
          size={128}
          imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <SocialLinks
          name={person.name}
          linkedin={person.linkedin}
          behance={person.behance}
          className="absolute -bottom-2 -end-2 z-20"
        />
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <Heading className="text-2xl font-bold text-slate-900">
            <button
              type="button"
              onClick={() => onSelect(person)}
              aria-haspopup="dialog"
              className="after:absolute after:inset-0 after:z-10 after:rounded-3xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-cyan-500"
            >
              {person.name}
            </button>
          </Heading>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 rtl:tracking-normal">{person.role}</p>
        </div>

        {person.summary && <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">{person.summary}</p>}
      </div>

      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70" aria-hidden="true" />
    </CardContent>
  </Card>
));

PersonCard.displayName = "PersonCard";

/** Responsive centered grid of PersonCards (1 / 2 / 3 columns). */
export const PersonGrid: React.FC<{
  people: PersonCardData[];
  onSelect: (person: PersonCardData) => void;
  badge?: string;
}> = ({ people, onSelect, badge }) => (
  <ul className="flex flex-wrap justify-center gap-8">
    {people.map((person) => (
      <li key={person.id} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.34rem)]">
        <PersonCard person={person} onSelect={onSelect} badge={badge} />
      </li>
    ))}
  </ul>
);

export default PersonCard;
