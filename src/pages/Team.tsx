import React, { useState } from "react";
import { Code, Linkedin, Sparkles, Users, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CompanyMember,
  companyMembers,
  coreTeamMembers,
  formatRoleText,
  internMembers,
} from "@/data/teamMembers";

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<CompanyMember | null>(null);
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);

  const handleGetOfferClick = () => {
    // Navigate to contact section or handle offer request
    window.location.href = "/#contact";
  };

  const renderMemberCard = (member: CompanyMember, index: number, badgeLabel?: string) => (
    <div
      key={member.name}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl cursor-pointer"
      style={{
        animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
      }}
      onClick={() => setSelectedMember(member)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-white opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      {badgeLabel && (
        <div className="absolute left-6 top-6 z-20 inline-flex items-center rounded-full border border-cyan-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm backdrop-blur">
          {badgeLabel}
        </div>
      )}

      <div className="relative z-10 p-8 text-center space-y-6">
        <div className="relative mx-auto flex items-center justify-center">
          {member.avatar.startsWith("/") ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
            />
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-3xl font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#005885]"
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1769FF] shadow-lg transition-all duration-300 hover:scale-110 hover:opacity-90"
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
            <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent">
              {member.name}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              {formatRoleText(member)}
            </p>
          </div>

          <p className="line-clamp-4 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
            {member.summary}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-600 tracking-wide">OUR TEAM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Meet the core team leading delivery across engineering, product, and design, plus the interns growing through hands-on UI/UX and Flutter work.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                <Users className="h-4 w-4 text-cyan-600" />
                Core Team
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">Specialists building the company forward</h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                  The people shaping strategy, product delivery, engineering, and brand execution across Samalync.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center self-start rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              {coreTeamMembers.length} core members
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8">
            {coreTeamMembers.map((member, index) => (
              <div key={member.name} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.34rem)]">
                {renderMemberCard(member, index)}
              </div>
            ))}
          </div>

          {internMembers.length > 0 && (
            <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-[1px] shadow-[0_32px_80px_-32px_rgba(14,165,233,0.45)]">
              <div className="rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_42%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(3,7,18,0.94))] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      <Sparkles className="h-4 w-4 text-cyan-300" />
                      Intern Track
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-white">Interns in product, UX, and Flutter</h2>
                      <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                        This section highlights interns separately so their growth, focus areas, and contributions are clear at a glance.
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                    {internMembers.length} interns
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {internMembers.map((member, index) => (
                    <div key={member.name} className="w-full max-w-[24rem] md:w-[calc(50%-1rem)]">
                      {renderMemberCard(member, coreTeamMembers.length + index, "Intern")}
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
                {companyMembers.length}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-600">People Across Samalync</div>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-16" />
            </div>
            <div className="group rounded-3xl border border-cyan-100/60 bg-gradient-to-br from-white/90 to-cyan-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Code className="h-6 w-6" />
              </div>
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                {coreTeamMembers.length}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-600">Core Team Specialists</div>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-16" />
            </div>
            <div className="group rounded-3xl border border-indigo-100/60 bg-gradient-to-br from-white/90 to-indigo-50/70 p-8 text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                {internMembers.length}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-600">Active Interns</div>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-[2px] flex items-center justify-center z-[100] p-4 animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-blue-200 relative animate-scaleIn z-[101]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex flex-col items-center text-center p-10 space-y-6">
              {selectedMember.avatar.startsWith("/") ? (
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setEnlargedPhoto(selectedMember.avatar)}
                >
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-2xl object-cover mb-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm bg-white/90 px-3 py-1 rounded-full">Click to enlarge</span>
                  </div>
                </div>
              ) : (
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-extrabold shadow-2xl mb-2">
                  {selectedMember.avatar}
                </div>
              )}
              <h2 className="text-3xl font-extrabold text-blue-900 drop-shadow-lg">{selectedMember.name}</h2>
              <p className="text-lg text-blue-700 font-semibold mb-2">{formatRoleText(selectedMember)}</p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{selectedMember.summary}</p>
              <div className="flex space-x-4 justify-center mt-2">
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center hover:bg-[#005885] transition-all duration-300 shadow-lg">
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                )}
                {selectedMember.behance && (
                  <a href={selectedMember.behance} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1769FF] rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-lg">
                    <span className="text-white text-lg font-semibold">B</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Photo Modal */}
      {enlargedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[200] p-4 animate-fadeIn"
          onClick={() => setEnlargedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full z-[201]">
            <button
              onClick={() => setEnlargedPhoto(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <img
              src={enlargedPhoto}
              alt="Enlarged photo"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Team;
