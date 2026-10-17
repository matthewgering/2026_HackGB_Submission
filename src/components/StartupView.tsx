import React from 'react';
import { CatMascot } from './CatMascot';
import { Difficulty } from '../types';
import { ShieldCheck, Zap, AlertTriangle, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface StartupViewProps {
  onSelectDifficulty: (difficulty: Difficulty) => void;
}

export const StartupView: React.FC<StartupViewProps> = ({ onSelectDifficulty }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 sm:p-6 select-none">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-center p-6 sm:p-10">
        {/* Cat Mascot in the Center */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="relative">
            <CatMascot size="lg" mood="idle" showHat={true} />
            <div className="absolute -bottom-2 right-4 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Speech Bubble from Vader */}
          <div className="relative mt-3 max-w-md bg-blue-50 border border-blue-200 text-blue-950 px-5 py-3 rounded-2xl shadow-sm text-sm sm:text-base font-medium">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-50 border-t border-l border-blue-200 rotate-45"></div>
            <p>
              "Greetings! I'm <strong>Vader</strong>, your cybersecurity guide. Think you can spot deceptive phishing emails in a corporate inbox?"
            </p>
          </div>
        </div>

        {/* Title & Purpose */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Security Training
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome to <span className="text-blue-600">PhishTrainer</span>
          </h1>
          <p className="text-slate-600 text-sm mt-1.5 max-w-lg mx-auto">
            Test your cybersecurity instincts across a realistic enterprise email inbox. You'll evaluate 10 emails and learn to spot real vs fake messages.
          </p>
        </div>

        {/* Difficulty Selection */}
        <div className="space-y-3 mb-6 text-left">
          <div className="text-center font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
            Select Training Difficulty
          </div>

          {/* Easy */}
          <button
            onClick={() => onSelectDifficulty('easy')}
            className="w-full group p-4 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/40 transition-all flex items-center justify-between shadow-sm hover:shadow cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>Easy</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Beginner
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Obvious phishing indicators, fake lotteries, and easy-to-spot domain typos.
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </button>

          {/* Medium */}
          <button
            onClick={() => onSelectDifficulty('medium')}
            className="w-full group p-4 rounded-2xl border-2 border-slate-200 hover:border-blue-500 bg-white hover:bg-blue-50/40 transition-all flex items-center justify-between shadow-sm hover:shadow cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>Medium</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    Intermediate
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  More realistic phishing attempts, subtle brand spoofing, and sneaky link destinations.
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </button>

          {/* Hard */}
          <button
            onClick={() => onSelectDifficulty('hard')}
            className="w-full group p-4 rounded-2xl border-2 border-slate-200 hover:border-rose-500 bg-white hover:bg-rose-50/40 transition-all flex items-center justify-between shadow-sm hover:shadow cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>Hard</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                    Advanced
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Highly realistic spear phishing, CEO fraud/BEC, and subtle executive lookalikes.
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </button>
        </div>

        {/* Session Rule Note */}
        <div className="text-xs text-slate-400">
          Every training session contains <strong>exactly 10 emails</strong>. You will receive a final score and review at the end.
        </div>
      </div>
    </div>
  );
};
