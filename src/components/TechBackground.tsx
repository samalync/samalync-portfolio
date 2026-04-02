import React from "react";

const TechBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(96, 165, 250, 0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(34, 211, 238, 0.12), transparent 24%), linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #0f4c81 100%)",
        }}
      />

      <div className="absolute -top-28 left-[-10%] hidden h-[28rem] w-[28rem] rounded-full bg-blue-300/10 blur-[90px] md:block" />
      <div className="absolute bottom-[-8rem] right-[-12%] h-[22rem] w-[22rem] rounded-full bg-cyan-300/15 blur-[90px]" />
      <div className="absolute top-[18%] right-[18%] hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
      <div className="absolute bottom-[16%] left-[12%] hidden h-56 w-56 rounded-full border border-white/5 md:block" />

      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="absolute top-0 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-white/5 blur-[110px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-blue-950/20" />
    </div>
  );
};

export default TechBackground;
