import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon-only';
  lightMode?: boolean; // Changes the text color between white and charcoal
}

export default function Logo({ className = "w-16 h-16", variant = "full", lightMode = false }: LogoProps) {
  const goldGradientId = `gold-grad-${variant}-${lightMode ? 'light' : 'dark'}`;
  const textColor = lightMode ? '#ffffff' : '#121212';
  const accentColor = '#b8913c'; // gold-500 standard brand gold

  if (variant === 'icon-only') {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={goldGradientId} x1="30" y1="30" x2="170" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f4edd9" />
            <stop offset="30%" stopColor="#e7daaf" />
            <stop offset="70%" stopColor="#b8913c" />
            <stop offset="100%" stopColor="#9e782f" />
          </linearGradient>
        </defs>

        {/* Diamond at the top */}
        <path
          d="M100 25 L125 45 L115 45 L100 25 Z"
          fill={`url(#${goldGradientId})`}
          opacity="0.8"
        />
        <path
          d="M100 25 L75 45 L85 45 L100 25 Z"
          fill={`url(#${goldGradientId})`}
          opacity="0.8"
        />
        {/* Full Diamond */}
        <path
          d="M100 20 L135 45 L100 90 L65 45 Z"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="3.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Diamond Facets */}
        <path
          d="M65 45 L135 45 M100 20 L100 90 M82 45 L100 90 L118 45 M100 20 L82 45 M100 20 L118 45"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Mustache */}
        <path
          d="M100 120 C94 115 88 111 76 111 C60 111 50 120 40 118 C46 122 56 127 68 125 C82 122 93 125 100 130 C107 125 118 122 132 125 C144 127 154 122 160 118 C150 120 140 111 124 111 C112 111 106 115 100 120 Z"
          fill={lightMode ? '#e4e4e4' : '#1f1f1f'}
        />

        {/* Crossed Scissors & Comb */}
        {/* Comb (diagonal from bottom-left to top-right) */}
        <g transform="translate(100, 145) rotate(-35) translate(-100, -145)">
          <rect
            x="45"
            y="142"
            width="110"
            height="8"
            rx="2"
            fill={`url(#${goldGradientId})`}
          />
          {Array.from({ length: 28 }).map((_, i) => (
            <line
              key={i}
              x1={50 + i * 3.6}
              y1="150"
              x2={50 + i * 3.6}
              y2="162"
              stroke={`url(#${goldGradientId})`}
              strokeWidth="1.2"
            />
          ))}
        </g>

        {/* Scissors (diagonal from bottom-right to top-left) */}
        <g transform="translate(100, 145) rotate(35) translate(-100, -145)">
          {/* Blades */}
          <path
            d="M100 145 L160 142 M100 145 L160 148"
            stroke={`url(#${goldGradientId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Shaft */}
          <line
            x1="100"
            y1="145"
            x2="70"
            y2="145"
            stroke={`url(#${goldGradientId})`}
            strokeWidth="3.5"
          />
          {/* Rings */}
          <circle
            cx="58"
            cy="137"
            r="12"
            stroke={`url(#${goldGradientId})`}
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="58"
            cy="153"
            r="12"
            stroke={`url(#${goldGradientId})`}
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="100"
            cy="145"
            r="2"
            fill={textColor}
          />
        </g>
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-3.5 ${className}`}>
        {/* Mini version of the brand symbols */}
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${goldGradientId}-compact`} x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f4edd9" />
              <stop offset="40%" stopColor="#e7daaf" />
              <stop offset="80%" stopColor="#b8913c" />
              <stop offset="100%" stopColor="#9e782f" />
            </linearGradient>
          </defs>

          {/* Golden Diamond */}
          <path
            d="M50 12 L72 26 L50 48 L28 26 Z"
            stroke={`url(#${goldGradientId}-compact)`}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M28 26 L72 26 M50 12 L50 48 M40 26 L50 48 L60 26"
            stroke={`url(#${goldGradientId}-compact)`}
            strokeWidth="1"
          />

          {/* Barber Mustache */}
          <path
            d="M50 62 C47 59 44 57 38 57 C30 57 25 61 20 60 C23 62 28 65 34 64 C41 62 46 64 50 67 C54 64 59 62 66 64 C72 65 77 62 80 60 C75 61 70 57 62 57 C56 57 53 59 50 62 Z"
            fill={lightMode ? '#ffffff' : '#121212'}
          />

          {/* Crossed Scissors/Comb mini indicator */}
          <path
            d="M32 78 L68 78 M36 74 L64 82"
            stroke={`url(#${goldGradientId}-compact)`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex flex-col">
          <span
            className="font-serif text-lg sm:text-xl tracking-[0.25em] font-bold uppercase transition-colors"
            style={{ color: textColor }}
          >
            Almaz
          </span>
          <span className="font-sans text-[0.55rem] tracking-[0.45em] text-gold-500 uppercase font-bold">
            Friseursalon
          </span>
        </div>
      </div>
    );
  }

  // Full, glorious flyer style visual brand artwork
  return (
    <div className={`flex flex-col items-center justify-center text-center p-4 ${className}`}>
      <svg
        viewBox="0 0 320 320"
        className="w-full max-w-[280px] h-auto drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${goldGradientId}-full`} x1="40" y1="40" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fffcf5" />
            <stop offset="15%" stopColor="#f4edd9" />
            <stop offset="45%" stopColor="#e7daaf" />
            <stop offset="70%" stopColor="#b8913c" />
            <stop offset="100%" stopColor="#9e782f" />
          </linearGradient>
        </defs>

        {/* 1. Golden Diamond at Top */}
        <g transform="translate(160, 50)">
          {/* Outline diamond */}
          <path
            d="M0 -30 L40 -5 L0 35 L-40 -5 Z"
            stroke={`url(#${goldGradientId}-full)`}
            strokeWidth="3"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner Facet details */}
          <path
            d="M-40 -5 L40 -5 M0 -30 L0 35 M-21 -5 L0 35 L21 -5 M0 -30 L-21 -5 M0 -30 L21 -5"
            stroke={`url(#${goldGradientId}-full)`}
            strokeWidth="1.2"
          />
          {/* Soft inner glow elements */}
          <polygon points="0,-30 21,-5 0,35" fill={`url(#${goldGradientId}-full)`} opacity="0.08" />
          <polygon points="0,-30 -21,-5 0,35" fill={`url(#${goldGradientId}-full)`} opacity="0.08" />
        </g>

        {/* 2. Swirly Decor Ornaments Left & Right */}
        <g transform="translate(160, 115)">
          {/* Left Swirl */}
          <path
            d="M-60 -15 C-80 -25 -100 -20 -105 -5 C-108 5 -100 12 -92 5 C-85 -2 -90 -12 -98 -10"
            stroke={`url(#${goldGradientId}-full)`}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <line x1="-92" y1="3" x2="-45" y2="3" stroke={`url(#${goldGradientId}-full)`} strokeWidth="1.5" />
          
          {/* Right Swirl */}
          <path
            d="M60 -15 C80 -25 100 -20 105 -5 C108 5 100 12 92 5 C85 -2 90 -12 98 -10"
            stroke={`url(#${goldGradientId}-full)`}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <line x1="45" y1="3" x2="92" y2="3" stroke={`url(#${goldGradientId}-full)`} strokeWidth="1.5" />
        </g>

        {/* 3. Elegantly Written ALMAZ Title */}
        <text
          x="160"
          y="155"
          textAnchor="middle"
          fill={lightMode ? '#ffffff' : '#1a1a1a'}
          fontSize="46"
          fontWeight="bold"
          fontFamily="Playfair Display, serif"
          letterSpacing="0.12em"
          className="select-none font-serif"
        >
          ALMAZ
        </text>

        {/* 4. Elegant Double lines under text */}
        <line x1="60" y1="172" x2="260" y2="172" stroke={`url(#${goldGradientId}-full)`} strokeWidth="2.5" />
        <line x1="80" y1="177" x2="240" y2="177" stroke={`url(#${goldGradientId}-full)`} strokeWidth="1" />

        {/* 5. Iconic Handlebar Mustache */}
        <path
          d="M160 212 C152 205 142 198 122 198 C96 198 80 211 64 208 C74 215 90 223 110 219 C132 214 149 219 160 227 C171 219 188 214 210 219 C230 223 246 215 256 208 C240 211 224 198 198 198 C178 198 168 205 160 212 Z"
          fill={lightMode ? '#f5f5f5' : '#1c1c1c'}
        />

        {/* 6. Precision Crossed Gold Scissors and Comb */}
        <g transform="translate(160, 255)">
          {/* Comb (angled -30deg) */}
          <g transform="rotate(-30)">
            {/* Comb Spine */}
            <rect
              x="-60"
              y="-17"
              width="120"
              height="7"
              rx="2.5"
              fill={`url(#${goldGradientId}-full)`}
            />
            {/* Comb Teeth */}
            {Array.from({ length: 32 }).map((_, i) => (
              <line
                key={i}
                x1={-54 + i * 3.4}
                y1="-10"
                x2={-54 + i * 3.4}
                y2="2"
                stroke={`url(#${goldGradientId}-full)`}
                strokeWidth="1.2"
              />
            ))}
          </g>

          {/* Scissors (angled 30deg) */}
          <g transform="rotate(30)">
            {/* Left loop */}
            <circle
              cx="-45"
              cy="-8"
              r="10"
              stroke={`url(#${goldGradientId}-full)`}
              strokeWidth="2.5"
              fill="none"
            />
            {/* Right loop */}
            <circle
              cx="-45"
              cy="8"
              r="10"
              stroke={`url(#${goldGradientId}-full)`}
              strokeWidth="2.5"
              fill="none"
            />
            {/* Connector Shafts */}
            <path
              d="M-35 -5 L-10 0 M-35 5 L-10 0"
              stroke={`url(#${goldGradientId}-full)`}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Pivot screw */}
            <circle cx="-10" cy="0" r="1.8" fill={lightMode ? '#ffffff' : '#121212'} />
            {/* Blades */}
            <path
              d="M-10 0 L50 -3 M-10 0 L50 3"
              stroke={`url(#${goldGradientId}-full)`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
      
      {variant === 'full' && (
        <p className="text-[10px] tracking-[0.45em] text-gold-500 font-bold uppercase mt-4 font-sans select-none">
          FRISING & BARBER ARTISTRY
        </p>
      )}
    </div>
  );
}
