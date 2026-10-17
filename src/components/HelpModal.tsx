import React from 'react';
import { CatMascot } from './CatMascot';
import { X, Search, ShieldAlert, AlertTriangle, Link2, Paperclip, CheckCircle2, UserCheck } from 'lucide-react';
import { AppStep } from '../types';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: AppStep;
}

export const HelpModal: React.FC<HelpModalProps> = ({
  isOpen,
  onClose,
  currentStep,
}) => {
  if (!isOpen) return null;

  // Step-specific advice from Vader the Cat
  const getStepGuidance = () => {
    switch (currentStep) {
      case 'inbox':
        return {
          title: 'Current Step: Reviewing the Inbox',
          advice:
            'You are in the simulated enterprise inbox. Exactly 10 emails are displayed. The top email is your active unread challenge! Click the top unread email to open and evaluate whether it is a legitimate message or a dangerous phishing scam.',
        };
      case 'email_view':
        return {
          title: 'Current Step: Analyzing the Email',
          advice:
            'Look closely at all parts of the email before pressing Real or Fake below! Check the sender address (not just the display name), look for artificial urgency or threats, inspect any attachments, and hover over the buttons to see where links really lead.',
        };
      case 'startup':
        return {
          title: 'Current Step: Selecting Difficulty',
          advice:
            'Pick your training challenge: Easy features obvious typos and spam, Medium includes realistic brand lookalikes, and Hard features sophisticated Business Email Compromise and spear phishing.',
        };
      case 'results':
        return {
          title: 'Current Step: Training Review',
          advice:
            'Review your final score and detailed breakdown of each email to reinforce what red flags to look for in your real corporate inbox.',
        };
      default:
        return {
          title: 'Cybersecurity Assistance',
          advice: 'Take your time to inspect every email. In the real world, a single hasty click can compromise an entire network!',
        };
    }
  };

  const guidance = getStepGuidance();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-700/80 border border-blue-400 flex items-center justify-center p-0.5">
              <CatMascot size="sm" mood="detective" showHat={true} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Vader's Cybersecurity Field Guide</h2>
              <p className="text-xs text-blue-200">Your AI Assistant Mascot & Phishing Detective</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            title="Close Help"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          {/* Current Step Callout */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 flex gap-3">
            <div className="shrink-0 mt-0.5">
              <Search className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-amber-900">{guidance.title}</h3>
              <p className="text-sm text-amber-800 mt-1 leading-relaxed">{guidance.advice}</p>
            </div>
          </div>

          {/* Core Phishing Detection Checklist */}
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
              <ShieldAlert className="w-5 h-5 text-blue-600" />
              6 Red Flags to Check on Every Email
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {/* Point 1 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  1. Sender Address vs Display Name
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Anyone can change their display name to "PayPal" or "CEO". Always inspect the actual email domain after the <code>@</code> symbol.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  2. Artificial Urgency & Panic
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  "Account deleted in 15 minutes!", "Urgent wire required!". Scammers create panic to prevent logical verification.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Link2 className="w-4 h-4 text-indigo-600" />
                  3. Hover Before Clicking Links
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Button text might say "View Document", but hovering exposes the real destination domain (e.g. <code>.tk</code> or fake subdomain).
                </p>
              </div>

              {/* Point 4 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Paperclip className="w-4 h-4 text-red-600" />
                  4. Suspicious Attachments
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Watch for double extensions like <code>Invoice.pdf.exe</code>, archive <code>.zip</code> files, or <code>.html</code> credential stealers.
                </p>
              </div>

              {/* Point 5 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  5. Generic Greetings & PII
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Scammers often use "Dear Valued Customer" or ask for passwords, PINs, or Social Security Numbers via email.
                </p>
              </div>

              {/* Point 6 */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-purple-600" />
                  6. Out-of-Band Verification
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  If an email asks to change bank account routing or wire money, always verify by calling the person via a known trusted phone number!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">PhishTrainer Enterprise Cybersecurity Module</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
