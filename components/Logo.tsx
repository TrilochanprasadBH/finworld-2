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
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-3">
        {/* Custom SVG replicating the "FW" Monogram in Circle */}
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Navy Arc (Top of F) */}
            <path d="M50 10C72.0914 10 90 27.9086 90 50H75C75 36.1929 63.8071 25 50 25C36.1929 25 25 36.1929 25 50H10C10 27.9086 27.9086 10 50 10Z" fill={primaryColor} />
            {/* Middle Vertical Bar (Stem of F/W) */}
            <path d="M25 35H40V75H25V35Z" fill={primaryColor} />
            {/* Right Cyan Curve (Part of W) */}
            <path d="M55 50H70C70 61.0457 61.0457 70 50 70V85C69.33 85 85 69.33 85 50H90C90 72.0914 72.0914 90 50 90V75C55 75 55 50 55 50Z" fill={accentColor} />
            {/* Lower Cyan Vertical (Bottom of W) */}
             <path d="M55 35H70V50H55V35Z" fill={accentColor} />
        </svg>
        
        <span className={`font-sans font-bold text-4xl tracking-tight ${textColor}`}>
          FinWorld
        </span>
      </div>
      <span className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ml-[60px] -mt-1 ${taglineColor}`}>
        Securing Your World
      </span>
    </div>
  );
};

export default Logo;