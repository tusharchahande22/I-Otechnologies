import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon';
  theme?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md'
}) => {
  // Height map based on size specifications
  // sm = ~52px height (as specifically requested for Navbar)
  const heightMap = {
    sm: 'h-[48px] sm:h-[52px]',
    md: 'h-[56px] sm:h-[64px]',
    lg: 'h-[72px] sm:h-[84px]',
    xl: 'h-[96px] sm:h-[110px]',
  };

  const heightClass = heightMap[size];

  // Select appropriate transparent image source based on theme
  const src = '/logo.png';

  return (
    <div className={`relative inline-flex items-center group/logo transition-transform duration-300 ${className}`}>
      {/* Soft blue glow effect on hover */}
      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 scale-90 group-hover/logo:scale-105" />

      <img
        src={src}
        alt="I&O Technologies - Inovance and Optivance"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover/logo:scale-[1.03] drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};
