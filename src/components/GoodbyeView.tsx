import React from 'react';
import { CatMascot } from './CatMascot';
import { Shield, RotateCcw, Heart, CheckCircle2 } from 'lucide-react';

interface GoodbyeViewProps {
  onRestart: () => void;
}

export const GoodbyeView: React.FC<GoodbyeViewProps> = ({ onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 sm:p-6 select-none">
      <div className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-10 text-center">
        {/* Animated Waving Cat Mascot */}
        <div className="mb-4 flex justify-center">
          <CatMascot size="lg" mood="wave" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Thanks for practicing with PhishTrainer!
        </h1>

        <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-950 p-4 rounded-2xl text-sm font-medium">
          "Stay safe out there! Remember to always verify senders, examine link URLs, and think twice before clicking unfamiliar attachments."
          <div className="mt-2 text-xs text-blue-700 font-bold">— Vader, your security guide</div>
        </div>

        <div className="mt-6 space-y-2 text-left bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
          <div className="font-bold text-slate-800 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-2">
            <Shield className="w-3.5 h-3.5 text-blue-600" /> Key Security Habits
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Never provide passwords or MFA codes over email.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Confirm unexpected banking or wire requests by phone.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Report suspicious emails to your security team.</span>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={onRestart}
            className="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Start a New Training Session</span>
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          PhishTrainer Enterprise Cybersecurity Awareness Module
        </p>
      </div>
    </div>
  );
};
