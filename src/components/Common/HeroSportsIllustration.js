import React from 'react';

/**
 * Capa gráfica sobre un fondo con gradiente (sin rectángulo): formas orgánicas + balón.
 */
const HeroSportsIllustration = ({
  primary = '#1565c0',
  primaryDark = '#0d47a1',
  accent = '#00acc1',
  className,
}) => (
  <svg
    className={className}
    viewBox="0 0 520 320"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Deportes"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="heroOrb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
      </linearGradient>
      <radialGradient id="heroGlow" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
        <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ballGrad" x1="25%" y1="15%" x2="85%" y2="90%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e1f5fe" />
      </linearGradient>
      <filter id="groundSoft" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
      </filter>
      <filter id="ballGlow">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#fff" floodOpacity="0.7" />
      </filter>
    </defs>

    {/* Orbes flotantes (no rectángulos) */}
    <ellipse cx="420" cy="72" rx="120" ry="100" fill="url(#heroOrb)" opacity="0.9" />
    <circle cx="96" cy="210" r="72" fill="url(#heroGlow)" />
    <path
      d="M 48 48 Q 180 8 280 88 T 460 52"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeOpacity="0.35"
      strokeLinecap="round"
    />
    <path
      d="M 32 120 C 140 80 240 140 360 100 S 500 160 488 220"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeOpacity="0.2"
      strokeLinecap="round"
    />

    {/* Anillo dinámico */}
    <ellipse
      cx="310"
      cy="158"
      rx="118"
      ry="102"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.2"
      strokeOpacity="0.22"
      transform="rotate(-12 310 158)"
    />

    {/* Silueta jugador — formas limpias */}
    <g filter="url(#groundSoft)" opacity="0.28">
      <ellipse cx="300" cy="200" rx="108" ry="26" fill="#000" />
    </g>
    <g>
      <ellipse cx="332" cy="88" rx="26" ry="24" fill={primaryDark} fillOpacity="0.5" />
      <path
        d="M 308 118 L 292 178 L 276 228 L 294 234 L 310 188 L 324 172 L 352 232 L 374 222 L 348 158 L 336 118 Z"
        fill="#ffffff"
        fillOpacity="0.95"
      />
      <path d="M 308 118 L 324 172 L 348 158 L 336 118 Z" fill={accent} fillOpacity="0.9" />
      <path
        d="M 292 178 L 276 228 L 262 242 L 282 248 L 294 234 Z"
        fill={primaryDark}
        fillOpacity="0.25"
      />
      <path d="M 352 232 L 374 222 L 382 248 L 358 254 Z" fill={primaryDark} fillOpacity="0.25" />
    </g>

    {/* Balón + halo */}
    <g transform="translate(168, 128)" filter="url(#ballGlow)">
      <circle r="36" fill="url(#ballGrad)" stroke="#fff" strokeWidth="2.2" strokeOpacity="0.65" />
      <path
        d="M -10 -6 L 12 -6 L 16 10 L 0 22 L -16 10 Z"
        fill={primary}
        fillOpacity="0.28"
      />
      <circle r="44" fill="none" stroke="#fff" strokeWidth="1" strokeOpacity="0.25" />
    </g>

    {/* Destellos */}
    <circle cx="140" cy="64" r="4" fill="#fff" opacity="0.65" />
    <circle cx="460" cy="200" r="3" fill="#fff" opacity="0.45" />
    <circle cx="72" cy="156" r="2.5" fill="#fff" opacity="0.5" />
    <path
      d="M 400 240 l 8 -22 l 8 22 l -22 -8 l 22 -8 z"
      fill="#fff"
      opacity="0.2"
    />
  </svg>
);

export default HeroSportsIllustration;
