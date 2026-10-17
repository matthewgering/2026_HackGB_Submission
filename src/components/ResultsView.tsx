import React from 'react';
import { CatMascot } from './CatMascot';
import { Difficulty, UserSessionAnswer } from '../types';
import {
  RotateCcw,
  LogOut,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';

interface ResultsViewProps {
  score: number;
  totalQuestions: number; // 10
  difficulty: Difficulty;
  answers: UserSessionAnswer[];
  onPlayAgain: () => void;
  onExit: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  score,
  totalQuestions = 10,
  difficulty,
  answers,
  onPlayAgain,
  onExit,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  // Exact personalized score-based recommendations from Vader requested by user
  const getVaderRecommendation = (score: number) => {
    if (score >= 9) {
      return 'Outstanding work! You have strong phishing detection skills. Continue verifying links and sender domains, even when messages appear trustworthy.';
    }
    if (score >= 7) {
      return 'Great job! You are effective at spotting phishing attempts. Focus on carefully inspecting domains and unexpected requests.';
    }
    if (score >= 5) {
      return 'Good effort. You identified many threats correctly, but should continue practicing with more sophisticated phishing scenarios.';
    }
    return 'Keep practicing. Phishing attacks rely on small mistakes. Pay close attention to sender addresses, urgency tactics, and suspicious links.';
  };

  const recommendation = getVaderRecommendation(score);

  const difficultyLabels: Record<Difficulty, string> = {
    easy: 'Easy (Beginner)',
    medium: 'Medium (Intermediate)',
    hard: 'Hard (Advanced)',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-8 px-4 sm:px-6 select-none flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Top Header Card */}
        <div className="p-6 sm:p-8 text-center bg-gradient-to-b from-blue-50/70 to-white border-b border-slate-100 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-blue-600" /> Training Session Complete
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Security Assessment Results
          </h1>

          {/* Three Required Key Metrics: Final Score, Percentage, Difficulty */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mt-6">
            {/* Final Score (X/10) */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Final Score</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-1">
                {score} <span className="text-sm font-normal text-slate-400">/ {totalQuestions}</span>
              </div>
            </div>

            {/* Percentage Score */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Percentage Score</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">
                {percentage}%
              </div>
            </div>

            {/* Difficulty Played */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Difficulty Played</div>
              <div className="text-base sm:text-lg font-bold text-slate-800 capitalize mt-2">
                {difficultyLabels[difficulty]}
              </div>
            </div>
          </div>
        </div>

        {/* Personalized Cybersecurity Recommendation Section from Vader (displayed alongside Vader) */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50/80 border-2 border-blue-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              {/* Vader Mascot alongside recommendation as training coach */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="p-1.5 rounded-2xl bg-white shadow-sm border border-blue-100">
                  <CatMascot
                    size="md"
                    mood={score >= 7 ? 'happy' : 'detective'}
                    showHat={score < 7}
                  />
                </div>
                <span className="mt-1.5 text-xs font-bold text-blue-900 tracking-wide">
                  Coach Vader
                </span>
              </div>

              {/* Recommendation message bubble */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Personalized Recommendation
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Vader's Cybersecurity Assessment
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  "{recommendation}"
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown of 10 Emails */}
          <div>
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Session Review (10 Emails)
            </h2>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden text-xs sm:text-sm">
              {answers.map((ans, idx) => (
                <div
                  key={ans.emailId}
                  className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {ans.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Email #{idx + 1}: {ans.emailSubject}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Your answer: <strong className="capitalize">{ans.userChoice}</strong> • Actual: <strong className="capitalize">{ans.actualStatus}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 self-end sm:self-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                        ans.isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {ans.isCorrect ? 'Correct (+1)' : 'Missed'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* End Options: Two Buttons (Play Again & Exit Application) */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Play Again */}
            <button
              onClick={onPlayAgain}
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Play Again</span>
            </button>

            {/* Exit Application */}
            <button
              onClick={onExit}
              className="w-full py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-98 text-slate-700 hover:text-slate-900 font-bold text-base border border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Exit Application</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
