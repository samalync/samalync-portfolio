import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import PersonAvatar from "@/components/shared/PersonAvatar";
import SocialLinks from "@/components/shared/SocialLinks";
import type { PersonCardData } from "@/data/people";
import { useLanguage } from "@/i18n";

type ProfileModalProps = {
  person: PersonCardData | null;
  onClose: () => void;
};

/** Accessible profile dialog (focus trap, Esc, scroll lock come from Radix Dialog). */
const ProfileModal: React.FC<ProfileModalProps> = ({ person, onClose }) => {
  const [enlarged, setEnlarged] = useState(false);
  const shared = useLanguage().t("shared");
  const hasPhoto = Boolean(person?.avatar.startsWith("/"));
  // Opened without a Dialog.Trigger, so Radix can't restore focus by itself; remember the opener.
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setEnlarged(false);
  }, [person?.id]);

  return (
    <Dialog open={Boolean(person)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        onOpenAutoFocus={() => {
          openerRef.current = document.activeElement as HTMLElement | null;
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          openerRef.current?.focus();
        }}
        className="max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-0 sm:rounded-3xl">
        {person &&
          (enlarged && hasPhoto ? (
            <div className="space-y-4 p-6 sm:p-8">
              <DialogTitle className="sr-only">{person.name}</DialogTitle>
              <DialogDescription className="sr-only">{shared.enlargedPhoto}</DialogDescription>
              <img
                src={person.avatar}
                alt={person.name}
                width={512}
                height={512}
                className="mx-auto max-h-[70vh] w-full max-w-[512px] rounded-2xl object-contain"
              />
              <button
                type="button"
                onClick={() => setEnlarged(false)}
                className="mx-auto flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {shared.backToProfile}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
              {hasPhoto ? (
                <button
                  type="button"
                  onClick={() => setEnlarged(true)}
                  className="group relative mb-2 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400"
                  aria-label={shared.clickToEnlarge}
                >
                  <PersonAvatar avatar={person.avatar} name={person.name} size={192} lazy={false} className="border-blue-100" />
                  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-950/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-blue-700">{shared.clickToEnlarge}</span>
                  </span>
                </button>
              ) : (
                <PersonAvatar avatar={person.avatar} name={person.name} size={192} className="mb-2" />
              )}
              <DialogTitle className="text-3xl font-extrabold text-blue-900">{person.name}</DialogTitle>
              <p className="text-lg font-semibold text-blue-700">{person.role}</p>
              <DialogDescription className="text-base leading-relaxed text-slate-700">{person.summary}</DialogDescription>
              <SocialLinks name={person.name} linkedin={person.linkedin} behance={person.behance} size="lg" className="mt-2" />
            </div>
          ))}
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
