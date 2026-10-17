import React from 'react';
import { CatMascot } from './CatMascot';
import { ShieldCheck, HelpCircle } from 'lucide-react';

interface FloatingCatWidgetProps {
  score: number;
  totalQuestions: number;
  onOpenHelp: () => void;
  currentStep: string;
}

export const FloatingCatWidget: React.FC<FloatingCatWidgetProps> = ({
  score,
  totalQuestions = 10,
  onOpenHelp,
}) => {
  return (
    <aside
      aria-label="Cybersecurity Assistant"
      className="fixed bottom-4 right-4 z-40 flex items-end gap-3 select-none drop-shadow-xl"
    >
      {/* Current Score Display */}
      <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md rounded-2xl px-3.5 py-2 flex items-center gap-2 mb-1 transition-all hover:shadow-lg">
        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="text-xs font-semibold text-slate-700 whitespace-nowrap">
          <span>Correct: </span>
          <span className="text-blue-700 text-sm font-bold">{score}/{totalQuestions}</span>
        </div>
      </div>

      {/* Cat Mascot with Speech Bubble */}
      <div className="relative group cursor-pointer" onClick={onOpenHelp} title="Click Vader for Cybersecurity Help">
        {/* Floating Speech Bubble */}
        <div className="absolute -top-10 right-0 sm:right-2 transform -translate-y-1 animate-bubble-float pointer-events-none">
          <div className="relative bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-md border border-amber-400 whitespace-nowrap flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-slate-900" />
            <span>Click me for help!</span>
            {/* Bubble pointer triangle */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-amber-500 rotate-45 border-r border-b border-amber-400"></div>
          </div>
        </div>

        {/* 2D Animated Black Cat */}
        <div className="relative transition-transform duration-200 group-hover:scale-105 active:scale-95">
          <CatMascot size="sm" mood="idle" />
          
          {/* Subtle glow / hover ring */}
          <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </div>
    </aside>
  );
};
