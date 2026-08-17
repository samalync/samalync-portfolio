import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Code, Linkedin, Sparkles, Users, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CompanyMember,
  coreTeamMembers,
  getMemberName,
  getMemberRole,
  getMemberSummary,
  traineeMembers,
  uniqueMemberCount,
} from "@/data/teamMembers";
import { useLanguage } from "@/i18n";

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<CompanyMember | null>(null);
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const teamText = t("teamPage");
  const aboutText = t("about");
  const isModalOpen = Boolean(selectedMember || enlargedPhoto);

  const handleGetOfferClick = () => {
    // Navigate to contact section or handle offer request
    window.location.href = "/#contact";
  };

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
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-slate-950/86 p-4 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div className="flex min-h-full items-center justify-center">
            <div
              className="relative z-[101] w-full max-w-2xl overflow-y-auto rounded-3xl border-4 border-blue-200 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow-md transition-colors duration-200 hover:bg-gray-200"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex flex-col items-center space-y-6 p-10 text-center">
                {selectedMember.avatar.startsWith("/") ? (
                  <div
                    className="group relative mb-2 h-48 w-48 shrink-0 cursor-pointer overflow-hidden rounded-full border-4 border-blue-400 shadow-2xl"
                    onClick={() => setEnlargedPhoto(selectedMember.avatar)}
                  >
                    <img
                      src={selectedMember.avatar}
                      alt={getMemberName(selectedMember, language)}
                      width={192}
                      height={192}
                      className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-blue-600">
                        {teamText.clickToEnlarge}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-2 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-5xl font-extrabold text-white shadow-2xl">
                    {selectedMember.avatar}
                  </div>
                )}
                <h2 className="text-3xl font-extrabold text-blue-900 drop-shadow-lg">{getMemberName(selectedMember, language)}</h2>
                <p className="mb-2 text-lg font-semibold text-blue-700">{getMemberRole(selectedMember, language)}</p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">{getMemberSummary(selectedMember, language)}</p>
                <div className="mt-2 flex justify-center space-x-4">
                  {selectedMember.linkedin && (
                    <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] shadow-lg transition-all duration-300 hover:bg-[#005885]">
                      <Linkedin className="h-6 w-6 text-white" />
                    </a>
                  )}
                  {selectedMember.behance && (
                    <a href={selectedMember.behance} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1769FF] shadow-lg transition-all duration-300 hover:opacity-90">
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

  const enlargedPhotoModal = enlargedPhoto && typeof document !== "undefined"
    ? createPortal(
        <div
          className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-slate-950/92 p-4 backdrop-blur-md"
          onClick={() => setEnlargedPhoto(null)}
        >
          <div className="flex min-h-full items-center justify-center">
            <div className="relative z-[201] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setEnlargedPhoto(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/30"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <img
                src={enlargedPhoto}
                alt={teamText.enlargedPhoto}
                width={768}
                height={768}
                className="max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  const renderMemberCard = (member: CompanyMember, index: number, badgeLabel?: string) => (
    <div
      key={member.name}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg cursor-pointer"
      onClick={() => setSelectedMember(member)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-white opacity-70" />

      {badgeLabel && (
        <div className="absolute left-6 top-6 z-20 inline-flex items-center rounded-full border border-cyan-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
          {badgeLabel}
        </div>
      )}

      <div className="relative z-10 p-8 text-center space-y-6">
        <div className="relative mx-auto flex items-center justify-center">
          {member.avatar.startsWith("/") ? (
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md">
              <img
                src={member.avatar}
                alt={getMemberName(member, language)}
                width={144}
                height={144}
                className="block h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-3xl font-bold text-white shadow-md transition-transform duration-200 group-hover:scale-105">
              {member.avatar}
            </div>
          )}

          {(member.linkedin || member.behance) && (
            <div className="absolute -bottom-3 -right-3 flex items-center space-x-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] shadow-md transition-transform duration-200 hover:scale-105"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              )}

              {member.behance && (
                <a
                  href={member.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1769FF] shadow-md transition-transform duration-200 hover:scale-105"
                  onClick={(event) => event.stopPropagation()}
                >
                  <span className="text-sm font-semibold text-white">B</span>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-700">
              {getMemberName(member, language)}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              {getMemberRole(member, language)}
            </p>
          </div>

          <p className="line-clamp-4 text-sm leading-relaxed text-gray-600">
            {getMemberSummary(member, language)}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onGetOfferClick={handleGetOfferClick} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200/20">
              <span className="text-sm font-medium text-blue-600 tracking-wide">{teamText.eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
              {teamText.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              {teamText.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="performance-section py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                <Users className="h-4 w-4 text-cyan-600" />
                {teamText.core}
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">{teamText.coreTitle}</h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                  {teamText.coreIntro}
                </p>
              </div>
            </div>
            <div className="inline-flex items-center self-start rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              {coreTeamMembers.length} {teamText.coreMembers}
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8">
            {coreTeamMembers.map((member, index) => (
              <div key={member.name} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.34rem)]">
                {renderMemberCard(member, index)}
              </div>
            ))}
          </div>

          {traineeMembers.length > 0 && (
            <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-[1px] shadow-lg">
              <div className="rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_42%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(3,7,18,0.94))] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      <Sparkles className="h-4 w-4 text-cyan-300" />
                      {teamText.traineeTrack}
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-white">{teamText.traineeTitle}</h2>
                      <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                        {teamText.traineeIntro}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                    {traineeMembers.length} {aboutText.trainees}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {traineeMembers.map((member, index) => (
                    <div key={member.name} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                      {renderMemberCard(member, coreTeamMembers.length + index, aboutText.trainee)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group rounded-3xl border border-blue-100/60 bg-gradient-to-br from-white/90 to-blue-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Users className="h-6 w-6" />
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                {uniqueMemberCount}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-600">{teamText.people}</div>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-16" />
            </div>
            <div className="group rounded-3xl border border-cyan-100/60 bg-gradient-to-br from-white/90 to-cyan-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Code className="h-6 w-6" />
              </div>
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                {coreTeamMembers.length}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-600">{teamText.specialists}</div>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-16" />
            </div>
            <div className="group rounded-3xl border border-indigo-100/60 bg-gradient-to-br from-white/90 to-indigo-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                {traineeMembers.length}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-600">{teamText.activeTrainees}</div>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-16" />
            </div>
          </div>
        </div>
      </section>

      {selectedMemberModal}
      {enlargedPhotoModal}

      <Footer />
    </div>
  );
};

export default Team;
