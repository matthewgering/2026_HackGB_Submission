/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Difficulty, AppStep, EmailItem, UserSessionAnswer } from './types';
import { getEmailsForDifficulty, INBOX_PLACEHOLDER_EMAILS } from './data/emails';
import { StartupView } from './components/StartupView';
import { InboxView } from './components/InboxView';
import { EmailDetailView } from './components/EmailDetailView';
import { FeedbackOverlay } from './components/FeedbackOverlay';
import { ResultsView } from './components/ResultsView';
import { GoodbyeView } from './components/GoodbyeView';
import { FloatingCatWidget } from './components/FloatingCatWidget';
import { HelpModal } from './components/HelpModal';

export default function App() {
  const [appStep, setAppStep] = useState<AppStep>('startup');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [sessionEmails, setSessionEmails] = useState<EmailItem[]>(() => getEmailsForDifficulty('easy'));
  const [currentEmailIndex, setCurrentEmailIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<UserSessionAnswer[]>([]);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [lastUserChoice, setLastUserChoice] = useState<'real' | 'fake'>('real');
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean>(false);

  // Difficulty selection handler
  const handleSelectDifficulty = (selectedDifficulty: Difficulty) => {
    setDifficulty(selectedDifficulty);
    const emails = getEmailsForDifficulty(selectedDifficulty);
    setSessionEmails(emails);
    setCurrentEmailIndex(0);
    setScore(0);
    setAnswers([]);
    setAppStep('inbox');
  };

  // Open the active unread email from the inbox
  const handleOpenActiveEmail = () => {
    setAppStep('email_view');
  };

  // Back to inbox from email detail
  const handleBackToInbox = () => {
    setAppStep('inbox');
  };

  // User submits an answer (Real or Fake)
  const handleAnswer = (choice: 'real' | 'fake') => {
    const currentEmail = sessionEmails[currentEmailIndex];
    const isPhishing = currentEmail.isPhishing;
    const isCorrect = (choice === 'fake' && isPhishing) || (choice === 'real' && !isPhishing);

    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);
    setLastUserChoice(choice);
    setLastAnswerCorrect(isCorrect);

    const record: UserSessionAnswer = {
      emailId: currentEmail.id,
      emailSubject: currentEmail.subject,
      userChoice: choice,
      isCorrect,
      actualStatus: isPhishing ? 'fake' : 'real',
      explanation: currentEmail.explanation,
    };

    setAnswers((prev) => [...prev, record]);
    setAppStep('feedback');
  };

  // Next email button from feedback overlay
  const handleNextEmail = () => {
    if (currentEmailIndex + 1 < sessionEmails.length) {
      // Return to inbox where next unread email appears at top
      setCurrentEmailIndex((prev) => prev + 1);
      setAppStep('inbox');
    } else {
      // Completed all 10 emails
      setAppStep('results');
    }
  };

  // Play Again: returns to difficulty selection screen
  const handlePlayAgain = () => {
    setAppStep('startup');
  };

  // Exit Application: returns to simple goodbye screen
  const handleExit = () => {
    setAppStep('goodbye');
  };

  const currentEmail = sessionEmails[currentEmailIndex] || sessionEmails[0];

  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-slate-50 antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Startup Flow */}
      {appStep === 'startup' && (
        <StartupView onSelectDifficulty={handleSelectDifficulty} />
      )}

      {/* 2. Inbox View */}
      {appStep === 'inbox' && (
        <InboxView
          currentEmail={currentEmail}
          currentEmailIndex={currentEmailIndex}
          totalEmails={sessionEmails.length}
          difficulty={difficulty}
          placeholders={INBOX_PLACEHOLDER_EMAILS}
          onOpenActiveEmail={handleOpenActiveEmail}
          onOpenHelp={() => setIsHelpOpen(true)}
        />
      )}

      {/* 3. Email View */}
      {appStep === 'email_view' && (
        <EmailDetailView
          email={currentEmail}
          emailIndex={currentEmailIndex}
          totalEmails={sessionEmails.length}
          onBackToInbox={handleBackToInbox}
          onAnswer={handleAnswer}
        />
      )}

      {/* 4. Answer Feedback Full-Screen Overlay */}
      {appStep === 'feedback' && (
        <FeedbackOverlay
          email={currentEmail}
          userChoice={lastUserChoice}
          isCorrect={lastAnswerCorrect}
          questionNumber={currentEmailIndex + 1}
          totalQuestions={sessionEmails.length}
          onNextEmail={handleNextEmail}
        />
      )}

      {/* 5. Final Results Screen */}
      {appStep === 'results' && (
        <ResultsView
          score={score}
          totalQuestions={sessionEmails.length}
          difficulty={difficulty}
          answers={answers}
          onPlayAgain={handlePlayAgain}
          onExit={handleExit}
        />
      )}

      {/* 6. Goodbye Screen */}
      {appStep === 'goodbye' && (
        <GoodbyeView onRestart={() => setAppStep('startup')} />
      )}

      {/* Persistent Bottom-Right 2D Black Cat Mascot & Score (Shown on Inbox and Email View) */}
      {(appStep === 'inbox' || appStep === 'email_view') && (
        <FloatingCatWidget
          score={score}
          totalQuestions={sessionEmails.length}
          onOpenHelp={() => setIsHelpOpen(true)}
          currentStep={appStep}
        />
      )}

      {/* Help Panel Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        currentStep={appStep}
      />
    </div>
  );
}
