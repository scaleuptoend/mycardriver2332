
import React from 'react';

interface LogoProps {
  className?: string;
  grayscale?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 md:h-14 w-auto", grayscale = false }) => {
  const logoUrl = "https://i.postimg.cc/xTZKntgQ/Elite-refurb-(2).png";
  
  return (
    <div className={`flex items-center justify-center ${grayscale ? 'grayscale opacity-70' : ''}`}>
      <img 
        src={logoUrl} 
        alt="MyCar Driver Chennai" 
        className={`${className} object-contain`}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            const fallback = document.createElement('div');
            fallback.className = 'flex items-center font-black text-xl md:text-2xl tracking-tighter';
            fallback.innerHTML = '<span style="color: #3c5c7d">MyCar</span><span style="color: #f48120; margin-left: 4px">Driver</span>';
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
};

export default React.memo(Logo);