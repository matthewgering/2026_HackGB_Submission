import React, { useState } from 'react';
import { EmailItem, Difficulty, PlaceholderEmail } from '../types';
import {
  Inbox,
  Send,
  FileText,
  Archive,
  ShieldAlert,
  Trash2,
  Search,
  Filter,
  CheckCircle,
  Mail,
  MailOpen,
  ChevronDown,
  Paperclip,
  Star,
  Tag,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

interface InboxViewProps {
  currentEmail: EmailItem;
  currentEmailIndex: number; // 0 to 9
  totalEmails: number; // 10
  difficulty: Difficulty;
  placeholders: PlaceholderEmail[];
  onOpenActiveEmail: () => void;
  onOpenHelp: () => void;
}

export const InboxView: React.FC<InboxViewProps> = ({
  currentEmail,
  currentEmailIndex,
  totalEmails = 10,
  difficulty,
  placeholders,
  onOpenActiveEmail,
  onOpenHelp,
}) => {
  const [showToast, setShowToast] = useState(false);

  const handlePlaceholderClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const difficultyBadgeColor = {
    easy: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    medium: 'bg-blue-100 text-blue-800 border-blue-300',
    hard: 'bg-rose-100 text-rose-800 border-rose-300',
  }[difficulty];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none text-slate-800">
      {/* Toast for clicking placeholder emails */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 text-white text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>Only the top unread email is active for your training simulation.</span>
        </div>
      )}

      {/* --- ENTERPRISE TOP NAVIGATION (Outlook/Gmail hybrid) --- */}
      <header className="bg-[#0078d4] text-white h-13 px-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          {/* App Launcher grid icon */}
          <div className="w-8 h-8 rounded hover:bg-white/15 flex items-center justify-center cursor-pointer transition-colors">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-wide flex items-center gap-1.5">
              PhishTrainer <span className="font-normal text-blue-200 text-xs px-1.5 py-0.5 rounded bg-blue-800/60">Enterprise Mail</span>
            </span>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center bg-white/20 hover:bg-white/25 focus-within:bg-white focus-within:text-slate-800 transition-all rounded-md px-3 py-1.5 w-96 text-sm text-white placeholder-blue-200 focus-within:placeholder-slate-400">
          <Search className="w-4 h-4 mr-2.5 shrink-0 opacity-80" />
          <input
            type="text"
            placeholder="Search email, sender, or subject..."
            className="w-full bg-transparent border-none outline-none text-xs sm:text-sm"
            readOnly
          />
        </div>

        {/* User Profile & Security Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs bg-blue-800/80 px-2.5 py-1 rounded-full border border-blue-400/30">
            <Shield className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-blue-100 font-medium">Safe Mode On</span>
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-blue-600">
            <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 font-bold text-xs flex items-center justify-center border border-white/40">
              JS
            </div>
            <span className="text-xs font-medium hidden lg:inline-block">john.smith@company.com</span>
          </div>
        </div>
      </header>

      {/* --- SUBHEADER / RIBBON ACTION BAR --- */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="text-sm">Inbox</span>
            <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full text-[11px]">
              1 Unread
            </span>
          </div>

          <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>

          {/* Training Progress Pill */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-slate-500">Training Session:</span>
            <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Email {currentEmailIndex + 1} of {totalEmails}
            </span>
          </div>

          {/* Difficulty Badge */}
          <div className={`hidden md:inline-flex items-center px-2 py-0.5 rounded border text-[11px] font-bold uppercase tracking-wide ${difficultyBadgeColor}`}>
            Difficulty: {difficulty}
          </div>
        </div>

        {/* Filter / Sort tabs */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Focused</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button
            onClick={onOpenHelp}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition-colors cursor-pointer border border-blue-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>How to inspect</span>
          </button>
        </div>
      </div>

      {/* --- MAIN LAYOUT (Sidebar + Email List) --- */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR (Outlook style folders) */}
        <aside className="w-56 bg-slate-50 border-r border-slate-200 p-3 hidden md:flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            <button className="w-full text-left flex items-center justify-between px-3 py-2 rounded-lg bg-blue-100/70 text-blue-900 font-semibold text-xs border border-blue-200/60 shadow-xs">
              <div className="flex items-center gap-2.5">
                <Inbox className="w-4 h-4 text-blue-700" />
                <span>Inbox</span>
              </div>
              <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                1
              </span>
            </button>

            <button className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-200/50 text-xs transition-colors">
              <Send className="w-4 h-4 text-slate-400" />
              <span>Sent Items</span>
            </button>

            <button className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-200/50 text-xs transition-colors">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Drafts</span>
            </button>

            <button className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-200/50 text-xs transition-colors">
              <Archive className="w-4 h-4 text-slate-400" />
              <span>Archive</span>
            </button>

            <button className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-200/50 text-xs transition-colors">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>Phish Quarantine</span>
            </button>

            <button className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-200/50 text-xs transition-colors">
              <Trash2 className="w-4 h-4 text-slate-400" />
              <span>Deleted Items</span>
            </button>
          </div>

          {/* Quick Security Checklist in Sidebar */}
          <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Training Instructions</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              1. Click the <strong>top highlighted email</strong> to inspect.<br />
              2. Read headers & links.<br />
              3. Vote <strong>Real</strong> or <strong>Fake</strong>.
            </p>
          </div>
        </aside>

        {/* --- INBOX EMAIL LIST (Exactly 10 emails) --- */}
        <main className="flex-1 overflow-y-auto bg-white flex flex-col">
          {/* Email List Table Header */}
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-2 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Showing 10 Messages</span>
              <span className="text-slate-400">•</span>
              <span className="text-blue-600 font-bold">Top message is unread & active</span>
            </div>
            <span className="hidden sm:inline text-slate-400 text-[10px]">PhishTrainer Mail Client v2.4</span>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {/* 1. TOP EMAIL: UNREAD, HIGHLIGHTED, CLICKABLE */}
            <div
              onClick={onOpenActiveEmail}
              className="group relative bg-blue-50/75 hover:bg-blue-100/90 border-l-4 border-[#0078d4] p-3.5 sm:px-5 sm:py-4 transition-all cursor-pointer shadow-xs"
              title="Click to open active training email"
            >
              <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2.5">
                  {/* Unread blue dot */}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0078d4] shrink-0 animate-pulse"></span>
                  <Mail className="w-4 h-4 text-[#0078d4] shrink-0" />
                  <span className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-blue-900">
                    {currentEmail.senderName}
                  </span>
                  <span className="hidden lg:inline text-xs text-slate-500 font-normal">
                    &lt;{currentEmail.senderEmail}&gt;
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs uppercase tracking-wide">
                    New Message
                  </span>
                  <span className="text-xs font-semibold text-blue-900">{currentEmail.timeStr}</span>
                </div>
              </div>

              {/* Subject Line & Snippet Preview */}
              <div className="pl-5 sm:pl-7">
                <div className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors flex items-center gap-2">
                  <span>{currentEmail.subject}</span>
                  {currentEmail.attachmentName && (
                    <Paperclip className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </div>

                <div className="flex items-center justify-between mt-1.5 text-xs">
                  <p className="text-slate-600 line-clamp-1 max-w-xl font-medium">
                    Click to open and inspect this email before voting Real vs Fake...
                  </p>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                    Review Email ➔
                  </span>
                </div>
              </div>
            </div>

            {/* 2-10. THE REMAINING 9 EMAILS: READ, PLACEHOLDERS, NON-CLICKABLE */}
            {placeholders.slice(0, 9).map((item, idx) => (
              <div
                key={item.id}
                onClick={handlePlaceholderClick}
                className="group relative bg-white hover:bg-slate-50 border-l-4 border-transparent p-3 sm:px-5 sm:py-3 transition-colors cursor-default opacity-85"
                title="Visual placeholder email (already read)"
              >
                <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2.5">
                    {/* Empty placeholder dot for alignment */}
                    <span className="w-2.5 h-2.5 shrink-0"></span>
                    <MailOpen className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-normal text-slate-700 text-xs sm:text-sm">
                      {item.senderName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] text-slate-400">{item.dateStr}</span>
                  </div>
                </div>

                {/* Subject & Preview */}
                <div className="pl-5 sm:pl-7">
                  <div className="font-normal text-slate-800 text-xs sm:text-sm">
                    {item.subject}
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-1 mt-0.5">
                    {item.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Inbox Bottom Bar */}
          <div className="border-t border-slate-200 bg-slate-50 p-3 px-5 flex items-center justify-between text-xs text-slate-500">
            <span>Session Progress: Question {currentEmailIndex + 1} of 10</span>
            <span className="text-slate-400">All 10 questions must be completed for final scoring</span>
          </div>
        </main>
      </div>
    </div>
  );
};
