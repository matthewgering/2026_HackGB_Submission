import React, { useState } from 'react';
import { EmailItem } from '../types';
import {
  ArrowLeft,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Paperclip,
  Check,
  X,
  ExternalLink,
  Info,
  Clock,
  User,
  AlertOctagon,
  Copy,
} from 'lucide-react';

interface EmailDetailViewProps {
  email: EmailItem;
  emailIndex: number; // 0 to 9
  totalEmails: number; // 10
  onBackToInbox: () => void;
  onAnswer: (choice: 'real' | 'fake') => void;
}

export const EmailDetailView: React.FC<EmailDetailViewProps> = ({
  email,
  emailIndex,
  totalEmails = 10,
  onBackToInbox,
  onAnswer,
}) => {
  const [hoveredUrl, setHoveredUrl] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopySender = () => {
    navigator.clipboard.writeText(email.senderEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none text-slate-800">
      {/* Top Header Bar */}
      <header className="bg-[#0078d4] text-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToInbox}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Inbox</span>
          </button>
          <div className="h-4 w-px bg-blue-400/50"></div>
          <span className="text-xs font-semibold text-blue-100">
            Evaluating Message {emailIndex + 1} of {totalEmails}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-200 hidden sm:inline">PhishTrainer Email Inspector</span>
        </div>
      </header>

      {/* Main Reading Canvas */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-3 sm:p-6 flex flex-col">
        {/* Email Container Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex-1 flex flex-col">
          {/* Email Header Zone */}
          <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50/50">
            {/* Subject */}
            <h1 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
              {email.subject}
            </h1>

            {/* Sender & Recipient Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm border border-blue-200 shrink-0">
                  {email.senderName.charAt(0).toUpperCase()}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {email.senderName}
                    </span>
                    <button
                      onClick={handleCopySender}
                      className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded border border-slate-200 font-mono transition-colors cursor-pointer"
                      title="Click to copy exact sender address"
                    >
                      <span>{email.senderEmail}</span>
                      {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                    </button>
                  </div>

                  <div className="text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>To: <strong className="text-slate-700">{email.recipientEmail}</strong></span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {email.dateStr}, {email.timeStr}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Hint Badge */}
              <div className="sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                  <span>Inspect carefully before deciding</span>
                </span>
              </div>
            </div>

            {/* Attachment preview if any */}
            {email.attachmentName && (
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs bg-slate-100/70 p-2.5 rounded-lg border">
                <Paperclip className="w-4 h-4 text-slate-500" />
                <span className="font-semibold text-slate-700">{email.attachmentName}</span>
                <span className="text-slate-400">({email.attachmentSize})</span>
                <span className="ml-auto text-[11px] font-medium text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                  Untrusted File
                </span>
              </div>
            )}
          </div>

          {/* Email Body Zone */}
          <div className="p-4 sm:p-8 flex-1 bg-white overflow-y-auto">
            {/* Interactive simulated HTML body */}
            <div
              className="prose max-w-none text-slate-800"
              dangerouslySetInnerHTML={{ __html: email.bodyHtml }}
            />

            {/* Simulated Link Inspector Bar if the email has clickable links */}
            {email.hoverLinks && email.hoverLinks.length > 0 && (
              <div className="mt-8 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  Link Inspection Tool (Hover or tap to check destination URL):
                </div>
                <div className="flex flex-wrap gap-2">
                  {email.hoverLinks.map((link, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredUrl(link.destinationUrl)}
                      onMouseLeave={() => setHoveredUrl(null)}
                      className="text-xs bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 p-2 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-blue-700">{link.displayText}</div>
                      <div className="text-[11px] font-mono text-slate-500 mt-0.5 break-all">
                        Destination: <span className={link.isDeceptive ? 'text-rose-600 font-bold' : 'text-emerald-700 font-bold'}>{link.destinationUrl}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Floating Hover URL status bar (like a web browser status bar) */}
          {hoveredUrl && (
            <div className="bg-slate-900 text-white text-xs px-4 py-1.5 font-mono flex items-center gap-2 border-t border-slate-800 animate-in fade-in duration-100">
              <ExternalLink className="w-3 h-3 text-amber-400" />
              <span>Link target: <strong>{hoveredUrl}</strong></span>
            </div>
          )}

          {/* --- ANSWER BUTTONS: TWO LARGE BUTTONS (REAL / FAKE) --- */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                What is your cybersecurity assessment?
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {/* REAL BUTTON */}
              <button
                onClick={() => onAnswer('real')}
                className="group relative flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border border-emerald-500"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span>Real</span>
                <span className="text-xs bg-emerald-700/60 font-normal px-2 py-0.5 rounded text-emerald-100">
                  Legitimate
                </span>
              </button>

              {/* FAKE BUTTON */}
              <button
                onClick={() => onAnswer('fake')}
                className="group relative flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-rose-600 hover:bg-rose-700 active:scale-98 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border border-rose-500"
              >
                <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <X className="w-5 h-5 text-white" />
                </div>
                <span>Fake</span>
                <span className="text-xs bg-rose-700/60 font-normal px-2 py-0.5 rounded text-rose-100">
                  Phishing Scam
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
