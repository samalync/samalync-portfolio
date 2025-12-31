import React from "react";

const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Static Geometric Elements */}
      <div className="absolute inset-0">
        {/* Binary Pattern */}
        <div className="absolute top-60 right-40 opacity-5 text-primary text-xs font-mono leading-loose">
          01001000<br/>
          01100101<br/>
          01101100<br/>
          01101100<br/>
          01101111
        </div>
      </div>
    </div>
  );
};

export default TechBackground;
