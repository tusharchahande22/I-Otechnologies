import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon';
  theme?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  imgScale?: number; // Visual scale multiplier (e.g. 1.3) to make graphic bigger without altering layout height
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  imgScale = 1.35
}) => {
  // Compact layout heights that keep Navbar & parent containers locked to standard height
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const heightClass = heightMap[size];

  // Select image source
  const src = '/logo.png';

  return (
    <div className={`relative inline-flex items-center group/logo transition-transform duration-300 ${className}`}>
      {/* Soft blue glow effect on hover */}
      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 scale-90 group-hover/logo:scale-105" />

      <img
        src={src}
        alt="I&O Technologies - Inovance and Optivance"
        style={{ transform: `scale(${imgScale})`, transformOrigin: 'left center' }}
        className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover/logo:brightness-105 drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};
