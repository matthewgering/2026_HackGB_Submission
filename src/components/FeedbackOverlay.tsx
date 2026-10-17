import React from 'react';
import { CatMascot } from './CatMascot';
import { EmailItem } from '../types';
import { CheckCircle2, XCircle, ArrowRight, ShieldAlert, ShieldCheck, Flag, AlertTriangle } from 'lucide-react';

interface FeedbackOverlayProps {
  email: EmailItem;
  userChoice: 'real' | 'fake';
  isCorrect: boolean;
  questionNumber: number; // 1 to 10
  totalQuestions: number; // 10
  onNextEmail: () => void;
}

export const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({
  email,
  userChoice,
  isCorrect,
  questionNumber,
  totalQuestions = 10,
  onNextEmail,
}) => {
  const isPhishing = email.isPhishing;
  const actualStatusStr = isPhishing ? 'Fake (Phishing)' : 'Real (Legitimate)';
  const userChoiceStr = userChoice === 'real' ? 'Real' : 'Fake';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        {/* Top Header Result Bar */}
        <div
          className={`p-6 text-white text-center flex flex-col items-center justify-center ${
            isCorrect
              ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
              : 'bg-gradient-to-r from-rose-600 to-amber-700'
          }`}
        >
          {/* Centered Black Cat Mascot */}
          <div className="relative mb-2">
            <CatMascot
              size="md"
              mood={isCorrect ? 'happy' : 'detective'}
              showHat={!isCorrect}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/20 text-white text-xs font-bold uppercase tracking-wider mb-2">
            Question {questionNumber} of {totalQuestions}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-8 h-8 text-emerald-200 shrink-0" />
                <span>You Got It Right!</span>
              </>
            ) : (
              <>
                <XCircle className="w-8 h-8 text-rose-200 shrink-0" />
                <span>Incorrect Assessment</span>
              </>
            )}
          </h2>

          <div className="mt-2 text-sm text-white/95 max-w-lg">
            <span>You selected <strong>{userChoiceStr}</strong>. </span>
            <span>This email was actually <strong className="underline underline-offset-2">{actualStatusStr}</strong>.</span>
          </div>
        </div>

        {/* Mascot Explanation Speech Bubble */}
        <div className="p-6 space-y-6">
          <div className="relative bg-blue-50 border border-blue-200 rounded-2xl p-4 text-slate-800 text-sm leading-relaxed">
            <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>Vader's Analysis</span>
            </div>
            <p>{email.explanation}</p>
          </div>

          {/* Specific Indicators / Clues */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Flag className="w-4 h-4 text-blue-600" />
              Key Clues & Indicators You Should Notice
            </h3>

            <div className="space-y-2.5">
              {email.indicators.map((ind, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                    ind.isRedFlag
                      ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                      : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {ind.isRedFlag ? (
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                    ) : (
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      <span>{ind.title}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                          ind.isRedFlag
                            ? 'bg-rose-200 text-rose-800'
                            : 'bg-emerald-200 text-emerald-800'
                        }`}
                      >
                        {ind.isRedFlag ? 'RED FLAG' : 'LEGITIMATE SIGN'}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-600 leading-normal">{ind.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button: Next Email / View Results */}
          <div className="pt-2">
            <button
              onClick={onNextEmail}
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{questionNumber < totalQuestions ? 'Next Email' : 'View Final Training Score'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
