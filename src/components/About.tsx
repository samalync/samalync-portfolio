import React, { memo, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Sparkles, X } from "lucide-react";
import {
  CompanyMember,
  coreTeamMembers,
  getMemberName,
  getMemberRole,
  getMemberSummary,
  traineeMembers,
} from "@/data/teamMembers";
import { useLanguage } from "@/i18n";

const teamStats = [
  {
    value: "10+",
    label: "Projects Completed",
    accent: "from-cyan-600 to-blue-600",
    border: "border-cyan-100",
    background: "from-cyan-50 to-white",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    accent: "from-purple-600 to-pink-600",
    border: "border-purple-100",
    background: "from-purple-50 to-white",
  },
  {
    value: "24/7",
    label: "Support Available",
    accent: "from-blue-600 to-indigo-600",
    border: "border-blue-100",
    background: "from-blue-50 to-white",
  },
] as const;

type TeamMemberCardProps = {
  member: CompanyMember;
  onSelect: (member: CompanyMember) => void;
  badgeLabel?: string;
  language: "en" | "ar";
};

const TeamMemberCard = memo(({ member, onSelect, badgeLabel, language }: TeamMemberCardProps) => {
  const hasLinks = Boolean(member.linkedin || member.behance);
  const memberName = getMemberName(member, language);

  return (
    <Card
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg cursor-pointer"
      onClick={() => onSelect(member)}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-cyan-50 via-blue-50/80 to-white" />

      {badgeLabel && (
        <div className="absolute left-6 top-6 z-20 inline-flex items-center rounded-full border border-cyan-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
          {badgeLabel}
        </div>
      )}

      <CardContent className="relative z-10 p-8 text-center">
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          {member.avatar.startsWith("/") ? (
            <img
              src={member.avatar}
              alt={memberName}
              width={128}
              height={128}
              className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-md">
              {member.avatar}
            </div>
          )}

          {hasLinks && (
            <div className="absolute -bottom-2 -right-2 flex items-center gap-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-sm transition-colors duration-200 hover:bg-[#005885]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}

              {member.behance && (
                <a
                  href={member.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1769FF] text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
                  onClick={(event) => event.stopPropagation()}
                >
                  <span className="text-sm font-semibold">B</span>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">{memberName}</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              {getMemberRole(member, language)}
            </p>
          </div>

          <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">
            {getMemberSummary(member, language)}
          </p>
        </div>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70" />
      </CardContent>
    </Card>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

const AboutStats = memo(({ labels }: { labels: readonly string[] }) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
    {teamStats.map((stat, index) => (
      <div
        key={stat.label}
        className={`rounded-3xl border ${stat.border} bg-gradient-to-br ${stat.background} p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md`}
      >
        <div className={`bg-gradient-to-r ${stat.accent} bg-clip-text text-5xl font-bold text-transparent`}>
          {stat.value}
        </div>
        <div className="mt-4 text-lg font-medium text-slate-600">{labels[index] ?? stat.label}</div>
        <div className={`mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${stat.accent}`} />
      </div>
    ))}
  </div>
));

AboutStats.displayName = "AboutStats";

const About = memo(() => {
  const [selectedMember, setSelectedMember] = useState<CompanyMember | null>(null);
  const { language, t } = useLanguage();
  const about = t("about");
  const isModalOpen = Boolean(selectedMember);
  const handleSelectMember = useCallback((member: CompanyMember) => {
    setSelectedMember(member);
  }, []);
  const closeMemberModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  useEffect(() => {
    if (!isModalOpen || typeof document === "undefined") {
      return;
    }

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isModalOpen]);

  const selectedMemberModal = selectedMember && typeof document !== "undefined"
    ? createPortal(
        <div
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-slate-950/82 p-4 backdrop-blur-sm"
          onClick={closeMemberModal}
        >
          <div className="flex min-h-full items-center justify-center">
            <div
              className="relative z-[101] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeMemberModal}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-200 hover:bg-slate-200"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex flex-col items-center space-y-6 p-10 text-center">
                {selectedMember.avatar.startsWith("/") ? (
                  <img
                    src={selectedMember.avatar}
                    alt={getMemberName(selectedMember, language)}
                    width={192}
                    height={192}
                    className="mb-2 h-48 w-48 rounded-full border-4 border-blue-100 object-cover shadow-md"
                    decoding="async"
                  />
                ) : (
                  <div className="mb-2 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-5xl font-extrabold text-white shadow-md">
                    {selectedMember.avatar}
                  </div>
                )}
                <h2 className="text-3xl font-extrabold text-blue-900">{getMemberName(selectedMember, language)}</h2>
                <p className="mb-2 text-lg font-semibold text-blue-700">{getMemberRole(selectedMember, language)}</p>
                <p className="mb-4 text-base leading-relaxed text-slate-700">{getMemberSummary(selectedMember, language)}</p>
                <div className="mt-2 flex justify-center space-x-4">
                  {selectedMember.linkedin && (
                    <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-sm transition-colors duration-200 hover:bg-[#005885]">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {selectedMember.behance && (
                    <a href={selectedMember.behance} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1769FF] text-white shadow-sm transition-opacity duration-200 hover:opacity-90">
                      <span className="text-lg font-semibold text-white">B</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <section id="about" className="performance-section py-20 bg-white relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-200/20">
            <span className="text-sm font-medium text-cyan-600 tracking-wide">{about.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800 bg-clip-text text-transparent leading-tight">
            {about.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              {about.intro}
            </p>
          </div>
        </div>

        <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              {about.core}
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">{about.coreTitle}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                {about.coreIntro}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center self-start rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            {coreTeamMembers.length} {about.teamMembers}
          </div>
        </div>

        <div className="mx-auto mb-16 flex max-w-7xl flex-wrap justify-center gap-8">
          {coreTeamMembers.map((member) => (
            <div key={member.name} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.34rem)]">
              <TeamMemberCard
                member={member}
                onSelect={handleSelectMember}
                language={language}
              />
            </div>
          ))}
        </div>

        {traineeMembers.length > 0 && (
          <div className="mx-auto mb-20 max-w-7xl rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-[1px] shadow-lg">
            <div className="rounded-[calc(2rem-1px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                    {about.training}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white">{about.trainingTitle}</h3>
                    <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                      {about.trainingIntro}
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  {traineeMembers.length} {about.trainees}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {traineeMembers.map((member) => (
                  <div key={member.name} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                    <TeamMemberCard
                      member={member}
                      onSelect={handleSelectMember}
                      badgeLabel={about.trainee}
                      language={language}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Company Stats */}
        <AboutStats labels={about.stats} />
      </div>

      {selectedMemberModal}
    </section>
  );
});

About.displayName = "About";

export default About;
