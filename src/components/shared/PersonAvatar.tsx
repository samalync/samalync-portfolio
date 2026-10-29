import React from "react";
import { cn } from "@/lib/utils";

type PersonAvatarProps = {
  avatar: string;
  name: string;
  size: number;
  className?: string;
  imgClassName?: string;
  lazy?: boolean;
};

/** Round avatar: image when `avatar` is a path, otherwise initials. */
const PersonAvatar: React.FC<PersonAvatarProps> = ({ avatar, name, size, className, imgClassName, lazy = true }) => {
  const style = { width: size, height: size };

  if (!avatar.startsWith("/")) {
    return (
      <div
        style={style}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-md",
          className
        )}
        aria-hidden="true"
      >
        {avatar}
      </div>
    );
  }

  return (
    <div style={style} className={cn("shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md", className)}>
      <img
        src={avatar}
        alt={name}
        width={size}
        height={size}
        className={cn("block h-full w-full object-cover", imgClassName)}
        loading={lazy ? "lazy" : undefined}
        decoding="async"
      />
    </div>
  );
};

export default PersonAvatar;
