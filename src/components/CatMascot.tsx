import React from 'react';

export interface CatMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mood?: 'idle' | 'happy' | 'detective' | 'alert' | 'wave';
  className?: string;
  showHat?: boolean;
}

export const CatMascot: React.FC<CatMascotProps> = ({
  size = 'md',
  mood = 'idle',
  className = '',
  showHat = false,
}) => {
  // Dimensions
  const sizeMap = {
    sm: { width: 72, height: 72 },
    md: { width: 110, height: 110 },
    lg: { width: 160, height: 160 },
    xl: { width: 220, height: 220 },
  };

  const { width, height } = sizeMap[size];

  return (
    <div
      className={`relative inline-block select-none transition-transform duration-300 ${className}`}
      style={{ width, height }}
      aria-label="Vader the Cybersecurity Black Cat"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Subtle gradient for cat sleek black fur */}
          <linearGradient id="blackCoat" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252830" />
            <stop offset="60%" stopColor="#15171e" />
            <stop offset="100%" stopColor="#0b0d12" />
          </linearGradient>

          {/* Realistic yellow-green (golden-lime) cat eye gradient for Vader */}
          <linearGradient id="eyeYellowGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#d9f99d" />
            <stop offset="65%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#65a30d" />
          </linearGradient>
        </defs>

        {/* --- SWISHING TAIL (Behind Body) --- */}
        <g className="animate-cat-tail">
          {/* Tail path with smooth curve */}
          <path
            d="M 38 122 C 18 120, 8 100, 16 82 C 22 68, 32 72, 28 84 C 24 94, 28 106, 42 112 Z"
            fill="url(#blackCoat)"
          />
          {/* White tip on tail for cute charm */}
          <path
            d="M 16 82 C 19 75, 27 72, 28 84 C 27 80, 23 78, 16 82 Z"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>

        {/* --- CAT BODY --- */}
        {/* Soft back shadow on body */}
        <ellipse cx="80" cy="116" rx="42" ry="34" fill="url(#blackCoat)" />

        {/* Chest Fluff (Subtle glossy highlight) */}
        <path
          d="M 72 100 C 76 108, 84 108, 88 100 C 86 112, 74 112, 72 100 Z"
          fill="#334155"
          opacity="0.4"
        />

        {/* --- FRONT PAWS --- */}
        {mood === 'wave' ? (
          <>
            {/* Left resting paw */}
            <ellipse cx="64" cy="144" rx="12" ry="8" fill="#1e222d" />
            {/* Waving Right Paw */}
            <g className="origin-bottom-right animate-bounce">
              <path
                d="M 104 114 C 114 104, 126 94, 134 100 C 138 104, 132 116, 120 122 Z"
                fill="url(#blackCoat)"
              />
              <ellipse cx="132" cy="100" rx="9" ry="7" fill="#1e222d" transform="rotate(-20 132 100)" />
              {/* Cute paw pads */}
              <circle cx="132" cy="100" r="3" fill="#f472b6" />
              <circle cx="128" cy="96" r="1.5" fill="#f472b6" />
              <circle cx="132" cy="94" r="1.5" fill="#f472b6" />
              <circle cx="136" cy="96" r="1.5" fill="#f472b6" />
            </g>
          </>
        ) : (
          <>
            {/* Left Paw */}
            <ellipse cx="64" cy="145" rx="12" ry="7" fill="#15171e" />
            <path d="M 58 147 C 58 143, 62 143, 62 147 M 66 147 C 66 143, 70 143, 70 147" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />

            {/* Right Paw */}
            <ellipse cx="96" cy="145" rx="12" ry="7" fill="#15171e" />
            <path d="M 90 147 C 90 143, 94 143, 94 147 M 98 147 C 98 143, 102 143, 102 147" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}

        {/* --- CAT EARS (with twitching keyframe) --- */}
        {/* Left Ear */}
        <g className="animate-cat-ear">
          <polygon points="46,58 32,20 66,38" fill="url(#blackCoat)" />
          {/* Inner Pink Ear */}
          <polygon points="48,52 38,28 62,40" fill="#f472b6" opacity="0.75" />
        </g>

        {/* Right Ear */}
        <g>
          <polygon points="114,58 128,20 94,38" fill="url(#blackCoat)" />
          {/* Inner Pink Ear */}
          <polygon points="112,52 122,28 98,40" fill="#f472b6" opacity="0.75" />
        </g>

        {/* --- CAT HEAD --- */}
        <ellipse cx="80" cy="62" rx="38" ry="32" fill="url(#blackCoat)" />

        {/* Cheek Tuft highlights */}
        <path d="M 42 66 C 36 68, 38 74, 44 76" stroke="#252830" strokeWidth="2" strokeLinecap="round" />
        <path d="M 118 66 C 124 68, 122 74, 116 76" stroke="#252830" strokeWidth="2" strokeLinecap="round" />

        {/* --- BLINKING EYES --- */}
        <g className="animate-cat-blink">
          {/* Left Eye */}
          <ellipse cx="64" cy="58" rx="8.5" ry="10" fill="url(#eyeYellowGreen)" />
          {/* Left Pupil (Vertical slit like a sleek black cat) */}
          <ellipse cx="64" cy="58" rx={mood === 'happy' ? 3 : 2.5} ry="8" fill="#0f172a" />
          {/* Eye Sparkle / Specular highlight */}
          <circle cx="62" cy="54" r="2.2" fill="#ffffff" />
          <circle cx="66" cy="61" r="1" fill="#ffffff" opacity="0.8" />

          {/* Right Eye */}
          <ellipse cx="96" cy="58" rx="8.5" ry="10" fill="url(#eyeYellowGreen)" />
          {/* Right Pupil */}
          <ellipse cx="96" cy="58" rx={mood === 'happy' ? 3 : 2.5} ry="8" fill="#0f172a" />
          {/* Eye Sparkle */}
          <circle cx="94" cy="54" r="2.2" fill="#ffffff" />
          <circle cx="98" cy="61" r="1" fill="#ffffff" opacity="0.8" />
        </g>

        {/* Happy eye crescents if celebrate/happy mood */}
        {mood === 'happy' && (
          <g>
            <path d="M 56 64 Q 64 68 72 64" stroke="#65a30d" strokeWidth="1.5" fill="none" />
            <path d="M 88 64 Q 96 68 104 64" stroke="#65a30d" strokeWidth="1.5" fill="none" />
          </g>
        )}

        {/* Inquisitive eyebrow if alert */}
        {mood === 'alert' && (
          <g>
            <path d="M 57 44 Q 64 41 71 45" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 89 45 Q 96 48 103 44" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        )}

        {/* --- NOSE & MOUTH --- */}
        {/* Tiny Pink Triangular Nose */}
        <polygon points="76,68 84,68 80,73" fill="#f472b6" />

        {/* Cute Cat Whiskers / Smile ("w" shape) */}
        <path
          d="M 80 73 L 80 77 M 74 77 Q 80 81 80 77 Q 80 81 86 77"
          stroke="#cbd5e1"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* White Whisker lines - Left */}
        <path d="M 54 70 L 32 68" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M 53 74 L 30 76" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M 54 78 L 34 83" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        {/* White Whisker lines - Right */}
        <path d="M 106 70 L 128 68" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M 107 74 L 130 76" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <path d="M 106 78 L 126 83" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        {/* --- DETECTIVE / SECURITY ACCESSORY --- */}
        {(showHat || mood === 'detective') && (
          <g transform="translate(48, 12)">
            {/* Fedora/Detective Hat Brim */}
            <ellipse cx="32" cy="24" rx="34" ry="7" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
            {/* Hat Crown */}
            <path
              d="M 14 22 C 16 8, 48 8, 50 22 Z"
              fill="#1e293b"
            />
            {/* Gold Ribbon band */}
            <path
              d="M 16 20 C 22 17, 42 17, 48 20"
              stroke="#fbbf24"
              strokeWidth="2.5"
              fill="none"
            />
          </g>
        )}

        {/* Happy stars if celebratory */}
        {mood === 'happy' && (
          <g>
            <path d="M 24 35 L 26 40 L 31 42 L 26 44 L 24 49 L 22 44 L 17 42 L 22 40 Z" fill="#fbbf24" opacity="0.8" />
            <path d="M 136 35 L 138 40 L 143 42 L 138 44 L 136 49 L 134 44 L 129 42 L 134 40 Z" fill="#fbbf24" opacity="0.8" />
          </g>
        )}
      </svg>
    </div>
  );
};
