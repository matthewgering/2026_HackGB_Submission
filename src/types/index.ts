export type Difficulty = 'easy' | 'medium' | 'hard';

export type AppStep = 'startup' | 'inbox' | 'email_view' | 'feedback' | 'results' | 'goodbye';

export interface EmailIndicator {
  title: string;
  description: string;
  isRedFlag: boolean; // true = phishing red flag, false = legitimate security marker
}

export interface EmailLink {
  displayText: string;
  destinationUrl: string;
  isDeceptive: boolean;
}

export interface EmailItem {
  id: string;
  senderName: string;
  senderEmail: string;
  senderAvatar?: string;
  recipientEmail: string;
  subject: string;
  dateStr: string;
  timeStr: string;
  isPhishing: boolean;
  category: 'security' | 'finance' | 'it' | 'hr' | 'shipping' | 'cloud' | 'internal';
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  bodyHtml: string;
  hoverLinks?: EmailLink[];
  attachmentName?: string;
  attachmentSize?: string;
  explanation: string;
  indicators: EmailIndicator[];
  difficulty: Difficulty;
}

export interface UserSessionAnswer {
  emailId: string;
  emailSubject: string;
  userChoice: 'real' | 'fake';
  isCorrect: boolean;
  actualStatus: 'real' | 'fake';
  explanation: string;
}

export interface PlaceholderEmail {
  id: string;
  senderName: string;
  subject: string;
  preview: string;
  dateStr: string;
  isRead: true;
}

