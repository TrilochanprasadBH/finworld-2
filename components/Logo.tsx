import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  // Use Brand Navy/Cyan or White/Cyan based on context
  const primaryColor = light ? "#ffffff" : "#002F55"; 
  const accentColor = "#0090D4"; // Brand Cyan
  
  const textColor = light ? "text-white" : "text-brand-navy"; 
  const taglineColor = light ? "text-zinc-400" : "text-brand-cyan";

  return (
    <div className={`flex items-center ${className}`}>
      {/* mark */}
      <img src="/finworld_logo.png" alt="FinWorld logo" className="h-12 w-auto object-contain" />

      {/* wordmark + tagline */}
      <div className="flex flex-col ml-3">
        <span className={`font-sans font-bold text-2xl md:text-4xl tracking-tight ${textColor}`}>
          FinWorld
        </span>
        <span className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] mt-1 ${taglineColor} hidden sm:block`}>
          Securing Your World
        </span>
      </div>
    </div>
  );
};

export default Logo;