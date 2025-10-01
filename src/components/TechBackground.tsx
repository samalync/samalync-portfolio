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
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary/5 rounded-full animate-pulse"></div>
        
        {/* Medium Circles */}
        <div className="absolute top-1/3 left-10 w-64 h-64 border border-accent/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-secondary/8 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Small Floating Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary/25 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        {/* Hexagon Patterns */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border border-primary/5 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        {/* Code-like Lines */}
        <div className="absolute top-40 left-20">
          <div className="space-y-2 opacity-5">
            <div className="h-1 w-20 bg-primary rounded"></div>
            <div className="h-1 w-16 bg-accent rounded ml-4"></div>
            <div className="h-1 w-24 bg-secondary rounded"></div>
            <div className="h-1 w-12 bg-primary rounded ml-8"></div>
          </div>
        </div>
        
        <div className="absolute bottom-40 right-20 rotate-180">
          <div className="space-y-2 opacity-5">
            <div className="h-1 w-20 bg-primary rounded"></div>
            <div className="h-1 w-16 bg-accent rounded ml-4"></div>
            <div className="h-1 w-24 bg-secondary rounded"></div>
            <div className="h-1 w-12 bg-primary rounded ml-8"></div>
          </div>
        </div>
        
        {/* Binary Pattern */}
        <div className="absolute top-60 right-40 opacity-5 text-primary text-xs font-mono leading-loose">
          01001000<br/>
          01100101<br/>
          01101100<br/>
          01101100<br/>
          01101111
        </div>
        
        {/* Circuit Board Lines */}
        <div className="absolute bottom-1/4 left-1/3">
          <svg width="200" height="100" className="opacity-5">
            <path
              d="M10,50 L50,50 L50,20 L100,20 L100,80 L150,80 L190,80"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="50" cy="50" r="3" fill="hsl(var(--accent))" />
            <circle cx="100" cy="20" r="2" fill="hsl(var(--secondary))" />
            <circle cx="150" cy="80" r="2" fill="hsl(var(--primary))" />
          </svg>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechBackground;