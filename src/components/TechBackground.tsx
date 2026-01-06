import React from "react";

const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600" />
      
      {/* Animated Mesh Gradient Orbs */}
      <div className="absolute top-[-50%] left-[-25%] w-[100%] h-[100%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-50%] right-[-25%] w-[100%] h-[100%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[25%] left-[50%] w-[50%] h-[50%] bg-blue-300/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating Glowing Ring */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-400/10 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-blue-300/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      
      {/* Particle Dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-40 right-40 w-3 h-3 bg-white/15 rounded-full animate-[float_8s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-[float_7s_ease-in-out_infinite_2s]" />
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-white/15 rounded-full animate-[float_9s_ease-in-out_infinite_0.5s]" />
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/10 rounded-full animate-[float_10s_ease-in-out_infinite_1.5s]" />
      
      {/* Grid Pattern */}
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
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite]" />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-blue-600/30" />
    </div>
  );
};

export default TechBackground;

