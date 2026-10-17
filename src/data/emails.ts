import { EmailItem, PlaceholderEmail } from '../types';

export const EASY_EMAILS: EmailItem[] = [
  {
    id: 'easy-1',
    senderName: 'PayPal Security Team',
    senderEmail: 'service-security@paypa1-security-alert.net',
    recipientEmail: 'user@company.com',
    subject: 'URGENT: Your PayPal Account Has Been Suspended Immediately!!!',
    dateStr: 'Today',
    timeStr: '10:42 AM',
    isPhishing: true,
    category: 'finance',
    urgencyLevel: 'critical',
    hoverLinks: [
      {
        displayText: 'Log In and Verify Identity Now',
        destinationUrl: 'http://paypa1-update-auth-login.tk/account-recovery',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2d3748;">
        <div style="background-color: #003087; padding: 18px 24px; color: white; font-weight: bold; font-size: 20px; border-radius: 6px 6px 0 0;">
          PayPal Security Notification
        </div>
        <div style="border: 1px solid #e2e8f0; border-top: none; padding: 24px; background-color: #ffffff; border-radius: 0 0 6px 6px;">
          <h2 style="color: #c53030; font-size: 18px; margin-top: 0;">Dear Valued Customer,</h2>
          <p>We detected unauthorized activity from a strange IP address (IP: 194.26.29.11 Russia). Your account has been <strong>LOCKED</strong> to prevent fraudulent withdrawals.</p>
          <p style="background-color: #fff5f5; border-left: 4px solid #e53e3e; padding: 12px; margin: 16px 0; color: #9b2c2c;">
            <strong>ACTION REQUIRED:</strong> You must confirm your credit card and Social Security Number within <strong>15 MINUTES</strong> or your balance will be permanently seized.
          </p>
          <div style="margin: 28px 0; text-align: center;">
            <span class="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 cursor-pointer">
              Log In and Verify Identity Now
            </span>
          </div>
          <p style="font-size: 12px; color: #718096; margin-top: 24px;">
            Thank you for helping us keep PayPal safe.<br />
            Copyright © 1999-2026 Paypa1 Inc. All rights reserved.
          </p>
        </div>
      </div>
    `,
    explanation: 'This is an obvious phishing scam. The sender domain uses a number 1 ("paypa1"), creates artificial panic with a 15-minute countdown, uses generic greetings, and links to an untrusted .tk domain.',
    indicators: [
      {
        title: 'Mismatched Domain (paypa1-security-alert.net)',
        description: 'Notice the spelling with the number "1" instead of the letter "l". Legitimate PayPal emails come strictly from @paypal.com.',
        isRedFlag: true,
      },
      {
        title: 'Artificial Panic & Extreme Urgency',
        description: 'Threatens permanent loss of funds within 15 minutes. Scammers induce panic to bypass rational judgment.',
        isRedFlag: true,
      },
      {
        title: 'Suspicious Link Destination (.tk domain)',
        description: 'The button points to an unsecure HTTP address on a free Tokelau (.tk) top-level domain.',
        isRedFlag: true,
      },
      {
        title: 'Generic Greeting ("Dear Valued Customer")',
        description: 'Legitimate financial institutions greet you by your verified first and last name.',
        isRedFlag: true,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-2',
    senderName: 'Netflix Billing',
    senderEmail: 'info@mailer.netflix.com',
    recipientEmail: 'user@company.com',
    subject: 'Your Netflix invoice for October 2026',
    dateStr: 'Yesterday',
    timeStr: '4:15 PM',
    isPhishing: false,
    category: 'finance',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Manage Account',
        destinationUrl: 'https://www.netflix.com/youraccount',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <div style="background-color: #141414; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
          <span style="color: #e50914; font-size: 24px; font-weight: 900; letter-spacing: 2px;">NETFLIX</span>
        </div>
        <div style="border: 1px solid #e2e8f0; border-top: none; padding: 24px; background-color: #ffffff; border-radius: 0 0 6px 6px;">
          <h3 style="margin-top: 0; color: #111;">Thanks for your payment, John.</h3>
          <p>Here is your receipt for your monthly Netflix Premium plan subscription.</p>
          <div style="background-color: #f7fafc; padding: 16px; border-radius: 6px; margin: 20px 0; border: 1px solid #edf2f7;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #718096;">Plan</span>
              <strong>Premium Ultra HD (4 screens)</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #718096;">Billing Date</span>
              <span>October 16, 2026</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #718096;">Payment Method</span>
              <span>Visa ending in ****4291</span>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 12px 0;" />
            <div style="display: flex; justify-content: space-between; font-size: 18px;">
              <span>Total Paid</span>
              <strong style="color: #2b6cb0;">$22.99 USD</strong>
            </div>
          </div>
          <p style="font-size: 14px; color: #4a5568;">Need to update your payment details or change your plan? You can manage your membership settings anytime.</p>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 cursor-pointer">
              Manage Account
            </span>
          </div>
          <p style="font-size: 11px; color: #a0aec0; margin-top: 24px;">
            Questions? Visit the Netflix Help Center. This email was sent to john.smith@company.com.<br />
            Netflix International B.V.
          </p>
        </div>
      </div>
    `,
    explanation: 'This email is legitimate. The sender domain mailer.netflix.com is an authenticated subdomain of netflix.com, the customer is greeted by their real name, specific non-sensitive payment details (Visa ending in 4291) are shown, and all links point directly to netflix.com via HTTPS.',
    indicators: [
      {
        title: 'Authentic Subdomain (@mailer.netflix.com)',
        description: 'Netflix uses mailer.netflix.com for transactional billing emails. The parent domain is verified netflix.com.',
        isRedFlag: false,
      },
      {
        title: 'Personalized Greeting & Account Details',
        description: 'Addresses the user by name and references masked payment information without asking you to type credentials.',
        isRedFlag: false,
      },
      {
        title: 'HTTPS Links to Official Domain',
        description: 'Links direct to https://www.netflix.com/youraccount with valid SSL/TLS certificates.',
        isRedFlag: false,
      },
      {
        title: 'No Panic or Coercion',
        description: 'Standard informational receipt with calm, professional customer service language.',
        isRedFlag: false,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-3',
    senderName: 'Amazon Rewards Department',
    senderEmail: 'claim-winner@amazon-free-gift-card642.xyz',
    recipientEmail: 'user@company.com',
    subject: 'CONGRATULATIONS! You have been selected to win a $1,000 Amazon Gift Card!',
    dateStr: 'Yesterday',
    timeStr: '1:18 PM',
    isPhishing: true,
    category: 'shipping',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'CLAIM YOUR $1,000 VOUCHER HERE',
        destinationUrl: 'http://amazon-free-gift-card642.xyz/claim?id=winner',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background-color: #232f3e; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
          <h1 style="color: #ff9900; margin: 0; font-size: 26px;">amazon.com</h1>
        </div>
        <div style="border: 2px dashed #ff9900; padding: 24px; background-color: #fffdf5; border-radius: 0 0 6px 6px; text-align: center;">
          <h2 style="color: #c05621; font-size: 24px; margin-top: 0;">🎉 LUCKY WINNER NOTIFICATION 🎉</h2>
          <p style="font-size: 16px;">Dear lucky email user, your email address was randomly selected in our <strong>Customer Appreciation Sweepstakes 2026</strong>!</p>
          <div style="background-color: #ffeedb; padding: 16px; border-radius: 8px; margin: 16px auto; max-width: 400px;">
            <p style="margin: 0; font-size: 14px; color: #7b341e;">YOUR REWARD:</p>
            <p style="margin: 4px 0 0; font-size: 32px; font-weight: bold; color: #dd6b20;">$1,000.00 USD</p>
            <p style="margin: 4px 0 0; font-size: 12px; color: #9c4221;">Available: 1 of 3 Remaining</p>
          </div>
          <p style="color: #e53e3e; font-weight: bold;">Hurry! This voucher expires in 2 hours if left unclaimed.</p>
          <div style="margin: 24px 0;">
            <span class="inline-block px-8 py-4 bg-amber-500 text-gray-900 font-extrabold text-lg rounded-full shadow-lg hover:bg-amber-400 cursor-pointer">
              CLAIM YOUR $1,000 VOUCHER HERE
            </span>
          </div>
          <p style="font-size: 11px; color: #a0aec0;">* Requires filling out a quick verification survey and paying $1.95 shipping fee.</p>
        </div>
      </div>
    `,
    explanation: 'This is a classic prize lottery phishing scam. Amazon does not randomly give out $1,000 gift cards via suspicious .xyz domains. It tries to lure victims into providing credit card details for a fake shipping fee.',
    indicators: [
      {
        title: 'Bizarre Sender Domain (@amazon-free-gift-card642.xyz)',
        description: 'Notice the cheap .xyz domain packed with random numbers. Official Amazon emails come from @amazon.com.',
        isRedFlag: true,
      },
      {
        title: 'Too-Good-To-Be-True Prize',
        description: 'You cannot win a contest or sweepstakes you never entered. This is a trademark scam indicator.',
        isRedFlag: true,
      },
      {
        title: 'Hidden Fee / Survey Trap',
        description: 'The fine print asks for a credit card for a "$1.95 shipping fee", which signs victims up for recurring fraud charges.',
        isRedFlag: true,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-4',
    senderName: 'Google Drive Notifications',
    senderEmail: 'document-share@google-drive-direct-access.biz',
    recipientEmail: 'user@company.com',
    subject: 'Google Docs: "CONFIDENTIAL_SALARY_INCREASES_Q4.xlsx" shared with you',
    dateStr: '2 days ago',
    timeStr: '9:30 AM',
    isPhishing: true,
    category: 'cloud',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Open Document in Google Sheets',
        destinationUrl: 'http://google-drive-direct-access.biz/login-harvest.html',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #3c4043; max-width: 580px; margin: 0 auto; border: 1px solid #dadce0; border-radius: 8px; overflow: hidden;">
        <div style="padding: 16px 24px; border-bottom: 1px solid #dadce0; display: flex; align-items: center; gap: 12px;">
          <span style="font-weight: bold; font-size: 18px; color: #1a73e8;">Google Workspace</span>
        </div>
        <div style="padding: 24px; background: white;">
          <p style="font-size: 15px; margin-top: 0;"><strong>Executive Management</strong> has invited you to view the following sensitive spreadsheet:</p>
          <div style="display: flex; align-items: center; gap: 12px; background-color: #f1f3f4; padding: 14px; border-radius: 6px; margin: 18px 0;">
            <div style="background-color: #0f9d58; color: white; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 4px;">X</div>
            <div>
              <div style="font-weight: 600; color: #202124;">CONFIDENTIAL_SALARY_INCREASES_Q4.xlsx</div>
              <div style="font-size: 12px; color: #5f6368;">Spreadsheet · 2.4 MB</div>
            </div>
          </div>
          <p style="font-size: 13px; color: #d93025; font-weight: 500;">
            ⚠️ This document requires immediate review before the payroll lock on Friday.
          </p>
          <div style="margin: 24px 0;">
            <span class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 cursor-pointer">
              Open Document in Google Sheets
            </span>
          </div>
          <p style="font-size: 12px; color: #80868b;">You must sign in with your corporate Google credentials to decrypt this spreadsheet.</p>
        </div>
      </div>
    `,
    explanation: 'This is a phishing attempt using social engineering (salaries and bonuses) to entice users to click. Real Google Drive sharing notifications come from drive-shares-noreply@google.com, not .biz domains, and never claim a file requires password "decryption".',
    indicators: [
      {
        title: 'Deceptive Sender Domain (@google-drive-direct-access.biz)',
        description: 'Google Drive share notifications come exclusively from drive-shares-noreply@google.com.',
        isRedFlag: true,
      },
      {
        title: 'Emotional Bait (Salary Information)',
        description: 'Scammers frequently use topics like payroll, bonuses, or layoffs to provoke emotional clicks.',
        isRedFlag: true,
      },
      {
        title: 'Credential Harvesting Pretext',
        description: 'Asking users to enter their password to "decrypt" a standard spreadsheet is fraudulent.',
        isRedFlag: true,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-5',
    senderName: 'GitHub Security',
    senderEmail: 'notifications@github.com',
    recipientEmail: 'user@company.com',
    subject: '[GitHub] Dependabot alert: High severity vulnerability in lodash',
    dateStr: '2 days ago',
    timeStr: '11:05 AM',
    isPhishing: false,
    category: 'it',
    urgencyLevel: 'medium',
    hoverLinks: [
      {
        displayText: 'View Dependabot alert #14',
        destinationUrl: 'https://github.com/my-org/project/security/dependabot/14',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #24292f; border: 1px solid #d0d7de; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #f6f8fa; padding: 16px 20px; border-bottom: 1px solid #d0d7de;">
          <strong style="font-size: 16px;">GitHub Dependabot</strong>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <div style="display: inline-block; padding: 2px 8px; background-color: #cf222e; color: white; font-weight: 600; font-size: 12px; border-radius: 12px; margin-bottom: 12px;">
            High severity
          </div>
          <h2 style="font-size: 18px; margin-top: 0; color: #24292f;">Prototype Pollution in lodash</h2>
          <p style="font-size: 14px; color: #57606a;">
            Dependabot detected a vulnerability in <strong>my-org/web-service</strong> repository.<br />
            Affected package: <code>lodash (< 4.17.21)</code>
          </p>
          <div style="background-color: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px; padding: 12px; margin: 16px 0; font-family: monospace; font-size: 13px;">
            CVE-2021-23337: Command Injection in lodash template
          </div>
          <p style="font-size: 14px;">We recommend upgrading to version <code>4.17.21</code> or reviewing the automated pull request.</p>
          <div style="margin: 20px 0;">
            <span class="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 font-semibold rounded-md cursor-pointer text-sm">
              View Dependabot alert #14
            </span>
          </div>
          <p style="font-size: 12px; color: #57606a; margin-top: 24px; border-top: 1px solid #d0d7de; padding-top: 12px;">
            You are receiving this email because you are watching this repository. GitHub, Inc. · 88 Colin P Kelly Jr St · San Francisco, CA 94107
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine GitHub automated security alert. The sender address is notifications@github.com, links point to legitimate github.com security alerts, and no password or confidential input is requested.',
    indicators: [
      {
        title: 'Official GitHub Sender Address',
        description: 'Verified sender domain notifications@github.com with valid SPF and DKIM signatures.',
        isRedFlag: false,
      },
      {
        title: 'Authentic Technical Context',
        description: 'References legitimate CVE numbers, package versions, and repository watchers policy.',
        isRedFlag: false,
      },
      {
        title: 'Safe Link Target (github.com)',
        description: 'All links direct safely to official GitHub infrastructure via HTTPS.',
        isRedFlag: false,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-6',
    senderName: 'Bank of America Alerts',
    senderEmail: 'security-notify@bofa-security-update24.com',
    recipientEmail: 'user@company.com',
    subject: 'Bank of America: Security Alert - Unauthorized Login Detected in Moscow',
    dateStr: '3 days ago',
    timeStr: '8:44 AM',
    isPhishing: true,
    category: 'finance',
    urgencyLevel: 'critical',
    hoverLinks: [
      {
        displayText: 'Secure Your Bank Account Instantly',
        destinationUrl: 'http://bofa-security-update24.com/login.php?session=harvest',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background-color: #e31837; padding: 18px 24px; color: white; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 22px; font-weight: bold;">Bank of America</span>
        </div>
        <div style="border: 1px solid #cbd5e1; padding: 24px; background-color: #fff;">
          <h3 style="color: #e31837; margin-top: 0;">Unrecognized Login Detected</h3>
          <p>Dear Customer,</p>
          <p>We recently blocked an unauthorized sign-in attempt to your Online Banking profile:</p>
          <ul style="background-color: #f8fafc; padding: 16px 32px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <li><strong>Location:</strong> Moscow, Russian Federation</li>
            <li><strong>Device:</strong> Unknown Linux Workstation</li>
            <li><strong>Time:</strong> Today, 03:12:44 GMT</li>
          </ul>
          <p>To prevent unauthorized wire transfers, we have placed a temporary block. <strong>If you do not confirm your PIN and account credentials within 2 hours, your accounts will be permanently closed.</strong></p>
          <div style="margin: 24px 0; text-align: center;">
            <span class="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 cursor-pointer">
              Secure Your Bank Account Instantly
            </span>
          </div>
          <p style="font-size: 11px; color: #94a3b8;">Bank of America, N.A. Member FDIC. Equal Housing Lender. © 2026 Bank of America Corporation.</p>
        </div>
      </div>
    `,
    explanation: 'This is a high-pressure banking phishing email. Bank of America emails originate from @bankofamerica.com, not @bofa-security-update24.com. Legitimate banks never threaten to close your accounts within 2 hours or demand your PIN.',
    indicators: [
      {
        title: 'Fake Domain (@bofa-security-update24.com)',
        description: 'Notice the lookalike unofficial domain. Bank of America only sends from @bankofamerica.com.',
        isRedFlag: true,
      },
      {
        title: 'Threat of Permanent Closure',
        description: 'Extreme coercion claiming your account will be deleted within 2 hours if you do not click.',
        isRedFlag: true,
      },
      {
        title: 'Asking for PIN',
        description: 'Banks will never ask for your debit PIN, password, or full Social Security Number via an email link.',
        isRedFlag: true,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-7',
    senderName: 'UPS Quantum View',
    senderEmail: 'mcinfo@ups.com',
    recipientEmail: 'user@company.com',
    subject: 'UPS Ship Notification, Tracking Number 1Z9999999999999999',
    dateStr: '3 days ago',
    timeStr: '2:20 PM',
    isPhishing: false,
    category: 'shipping',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Track Package Details',
        destinationUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z9999999999999999',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; border: 1px solid #d1d5db; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #351c15; padding: 16px 20px; color: #ffb500; font-weight: bold; font-size: 20px;">
          UPS® Tracking
        </div>
        <div style="padding: 24px; background: white;">
          <h3 style="margin-top: 0; color: #351c15;">Your package is scheduled for delivery.</h3>
          <p style="font-size: 14px; color: #4b5563;">A shipment has been processed and is in transit to your designated address.</p>
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin: 18px 0;">
            <div style="margin-bottom: 8px;"><strong>Tracking Number:</strong> 1Z9999999999999999</div>
            <div style="margin-bottom: 8px;"><strong>Scheduled Delivery:</strong> Friday, October 23, 2026</div>
            <div><strong>Status:</strong> Departed UPS Facility, Louisville, KY</div>
          </div>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 cursor-pointer text-sm">
              Track Package Details
            </span>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 24px;">
            © 2026 United Parcel Service of America, Inc. UPS, the UPS brandmark, and the color brown are trademarks of United Parcel Service of America, Inc.
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine UPS tracking notification. The sender email is mcinfo@ups.com, the tracking link goes directly to ups.com, and no payment or personal credentials are asked for.',
    indicators: [
      {
        title: 'Authentic UPS Domain (@ups.com)',
        description: 'Verified sender domain from official UPS communication servers.',
        isRedFlag: false,
      },
      {
        title: 'Valid Tracking Link',
        description: 'Directs to the legitimate HTTPS tracking portal on ups.com.',
        isRedFlag: false,
      },
      {
        title: 'No Demands for Delivery Fees',
        description: 'Real package updates do not ask for unexpected credit card fees to release a package.',
        isRedFlag: false,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-8',
    senderName: 'Corporate IT Helpdesk',
    senderEmail: 'admin@it-company-desk-support.ru',
    recipientEmail: 'user@company.com',
    subject: 'IT HELPDESK: Mandatory Password Expiration in 1 Hour',
    dateStr: '4 days ago',
    timeStr: '7:55 AM',
    isPhishing: true,
    category: 'it',
    urgencyLevel: 'critical',
    hoverLinks: [
      {
        displayText: 'Keep Current Password & Revalidate',
        destinationUrl: 'http://it-company-desk-support.ru/harvest_passwords',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; border: 2px solid #ef4444; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #dc2626; padding: 14px 20px; color: white; font-weight: bold; font-size: 18px;">
          IT SERVICES - ACTION REQUIRED
        </div>
        <div style="padding: 20px; background-color: white;">
          <p>Attention Employee,</p>
          <p>Your Active Directory domain account password expires in <strong>60 minutes</strong>. If expired, you will lose access to all corporate email, VPN, and files.</p>
          <p>To retain your existing password without disruption, click below and authenticate with your current password and username:</p>
          <div style="margin: 20px 0;">
            <span class="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 cursor-pointer">
              Keep Current Password & Revalidate
            </span>
          </div>
          <p style="font-size: 12px; color: #64748b;">Internal Helpdesk Ticket #89921<br />IT Infrastructure Security Department</p>
        </div>
      </div>
    `,
    explanation: 'This is a malicious password harvesting attack. The sender address uses a foreign Russian top-level domain (.ru) rather than your internal company domain. Internal IT departments never ask you to click an external link to "keep" your current password.',
    indicators: [
      {
        title: 'Foreign Top-Level Domain (.ru)',
        description: 'The email address ends in .ru (Russia), which is an immediate red flag for internal company communications.',
        isRedFlag: true,
      },
      {
        title: 'Nonsensical "Keep Current Password" Option',
        description: 'Legitimate password expiration policies require creating a new password, never "revalidating" an old one.',
        isRedFlag: true,
      },
      {
        title: 'Unrealistic 1-Hour Deadline',
        description: 'Designed to provoke hasty compliance before you can ask an IT colleague.',
        isRedFlag: true,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-9',
    senderName: 'Slack Digest',
    senderEmail: 'feedback@slack.com',
    recipientEmail: 'user@company.com',
    subject: 'Weekly activity summary for your Slack workspace',
    dateStr: '4 days ago',
    timeStr: '9:00 AM',
    isPhishing: false,
    category: 'internal',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Open Workspace',
        destinationUrl: 'https://slack.com/workspace-signin',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1d1c1d; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4a154b; padding: 20px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 22px; font-weight: bold; letter-spacing: -0.5px;">Slack</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h2 style="font-size: 18px; margin-top: 0; color: #1d1c1d;">Here is your weekly recap</h2>
          <p style="color: #616061;">Your team exchanged 482 messages in public channels this past week.</p>
          <div style="background: #f8f8f8; border-radius: 8px; padding: 16px; margin: 16px 0; border: 1px solid #eaeaea;">
            <div style="margin-bottom: 8px;"><strong>Top channel:</strong> #engineering-general</div>
            <div style="margin-bottom: 8px;"><strong>Active teammates:</strong> 18 members</div>
            <div><strong>Mentions:</strong> 3 unread mentions waiting</div>
          </div>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-emerald-700 text-white font-medium rounded hover:bg-emerald-800 cursor-pointer">
              Open Workspace
            </span>
          </div>
          <p style="font-size: 12px; color: #616061;">Sent with ❤️ from Slack Technologies, LLC. 500 Howard Street, San Francisco, CA</p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine marketing and activity digest from Slack. The sender email feedback@slack.com is authentic, links lead to official slack.com endpoints, and there is no urgent call to action or credential demand.',
    indicators: [
      {
        title: 'Authentic Sender Domain (@slack.com)',
        description: 'Verified official Slack domain with correct authentication headers.',
        isRedFlag: false,
      },
      {
        title: 'Routine Informational Digest',
        description: 'Standard product engagement email with no panic or unusual requests.',
        isRedFlag: false,
      },
      {
        title: 'Safe Slack URL Destination',
        description: 'Directs to legitimate slack.com domains without redirections.',
        isRedFlag: false,
      },
    ],
    difficulty: 'easy',
  },
  {
    id: 'easy-10',
    senderName: 'Internal Human Resources',
    senderEmail: 'hr-department@hr-survey-portal-bonus.info',
    recipientEmail: 'user@company.com',
    subject: 'Mandatory Employee Engagement Survey - $50 Target Gift Card Included',
    dateStr: '5 days ago',
    timeStr: '11:15 AM',
    isPhishing: true,
    category: 'hr',
    urgencyLevel: 'medium',
    hoverLinks: [
      {
        displayText: 'Start Employee Survey & Claim Gift Card',
        destinationUrl: 'http://hr-survey-portal-bonus.info/form?id=ssn-survey',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2d3748; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #2b6cb0; padding: 18px 24px; color: white; font-weight: bold; font-size: 18px;">
          Employee Relations & People Operations
        </div>
        <div style="padding: 24px; background: white;">
          <p>Hello Team Member,</p>
          <p>As part of our annual workplace satisfaction review, executive leadership is giving away a <strong>$50 Target Gift Card</strong> to every employee who completes the 3-minute survey today.</p>
          <p>Please note: You will be asked to enter your <strong>Full Name, Date of Birth, and Social Security Number</strong> at the start of the survey to verify your employment eligibility and tax bonus reporting.</p>
          <div style="margin: 24px 0;">
            <span class="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 cursor-pointer">
              Start Employee Survey & Claim Gift Card
            </span>
          </div>
          <p style="font-size: 12px; color: #a0aec0;">Human Resources Benefits Committee</p>
        </div>
      </div>
    `,
    explanation: 'This is an identity theft phishing scam posing as internal HR. The domain (@hr-survey-portal-bonus.info) is external and newly registered. Legitimate corporate HR never asks for your Social Security Number on external survey forms.',
    indicators: [
      {
        title: 'Suspicious External Domain (.info)',
        description: 'Internal HR emails come from your official corporate domain, never third-party .info domains.',
        isRedFlag: true,
      },
      {
        title: 'Request for Sensitive PII (Social Security Number)',
        description: 'HR already possesses your SSN and employment records; asking for it on a survey is a major red flag.',
        isRedFlag: true,
      },
      {
        title: 'Gift Card Incentive Bait',
        description: 'Using financial incentives to entice quick compliance before critical thinking kicks in.',
        isRedFlag: true,
      },
    ],
    difficulty: 'easy',
  },
];

export const MEDIUM_EMAILS: EmailItem[] = [
  {
    id: 'med-1',
    senderName: 'DocuSign System Notification',
    senderEmail: 'dse@docus1gn-document-view.com',
    recipientEmail: 'user@company.com',
    subject: 'Please DocuSign: Mutual Non-Disclosure Agreement (NDA) - Project Falcon.pdf',
    dateStr: 'Today',
    timeStr: '9:12 AM',
    isPhishing: true,
    category: 'cloud',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'VIEW COMPLETED DOCUMENT',
        destinationUrl: 'https://docus1gn-document-view.com/auth/sign-in?id=92019',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #214376; padding: 18px 24px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 20px; font-weight: bold; letter-spacing: 1px;">DocuSign</span>
        </div>
        <div style="padding: 24px; background: white;">
          <p style="font-size: 15px; margin-top: 0;"><strong>Marcus Vance</strong> (Legal Operations) sent you a document to review and sign.</p>
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; margin: 18px 0;">
            <div style="font-weight: 600; color: #0f172a; margin-bottom: 4px;">Mutual Non-Disclosure Agreement (NDA) - Project Falcon.pdf</div>
            <div style="font-size: 13px; color: #64748b;">Status: Awaiting your electronic signature · Expires in 48 hours</div>
          </div>
          <p style="font-size: 14px; color: #334155;">Marcus Vance says: "Please review and sign this agreement before our sync today."</p>
          <div style="margin: 24px 0; text-align: center;">
            <span class="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded shadow hover:bg-amber-400 cursor-pointer">
              VIEW COMPLETED DOCUMENT
            </span>
          </div>
          <p style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            Do Not Share This Email. This email contains a secure link to DocuSign. © DocuSign, Inc. 221 Main St., Suite 1550, San Francisco, CA 94105
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a sophisticated brand spoofing attack. The email styling closely mimics DocuSign, but the sender domain has a subtle character substitution: "docus1gn" with a number 1 instead of an "l". Official DocuSign notifications always originate from @docusign.net or @docusign.com.',
    indicators: [
      {
        title: 'Typosquatted Domain (docus1gn instead of docusign)',
        description: 'Look very closely at the sender email: @docus1gn-document-view.com replaces the "l" with "1".',
        isRedFlag: true,
      },
      {
        title: 'Mismatched Official Infrastructure',
        description: 'Authentic DocuSign signing requests originate from @docusign.net or @docusign.com, never third-party dash-separated domains.',
        isRedFlag: true,
      },
      {
        title: 'Credential Harvesting Destination',
        description: 'The destination link leads to a cloned corporate login screen designed to steal your credentials.',
        isRedFlag: true,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-2',
    senderName: 'Microsoft 365 Message Center',
    senderEmail: 'microsoft-noreply@microsoft.com',
    recipientEmail: 'user@company.com',
    subject: 'MC892102: Service Update - Exchange Online security baseline improvements',
    dateStr: 'Today',
    timeStr: '11:30 AM',
    isPhishing: false,
    category: 'it',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Open in Microsoft 365 admin center',
        destinationUrl: 'https://admin.microsoft.com/#/MessageCenter/:/messages/MC892102',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #242424; border: 1px solid #e1dfdd; border-radius: 4px; overflow: hidden;">
        <div style="background-color: #0078d4; padding: 16px 20px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 18px; font-weight: 600;">Microsoft 365 admin center</span>
        </div>
        <div style="padding: 24px; background: white;">
          <div style="font-size: 13px; color: #605e5c; margin-bottom: 8px;">Major Update: Exchange Online</div>
          <h2 style="font-size: 20px; margin-top: 0; color: #242424;">MC892102: Security baseline update for outbound mail throttling</h2>
          <p style="font-size: 14px;">We are rolling out an updated security baseline to reduce tenant compromise risk. This update will automatically deploy to your tenant starting November 10, 2026.</p>
          <div style="background-color: #f3f2f1; padding: 14px; border-radius: 4px; margin: 18px 0;">
            <div style="font-weight: 600; font-size: 13px; margin-bottom: 4px;">How this affects your organization:</div>
            <div style="font-size: 13px; color: #323130;">No immediate admin action is required. Review existing custom connectors if you send bulk relay mail.</div>
          </div>
          <div style="margin: 20px 0;">
            <span class="inline-block px-4 py-2 bg-neutral-900 text-white font-medium rounded text-sm hover:bg-neutral-800 cursor-pointer">
              Open in Microsoft 365 admin center
            </span>
          </div>
          <p style="font-size: 11px; color: #a19f9d; margin-top: 24px;">
            Microsoft Corporation, One Microsoft Way, Redmond, WA 98052. You received this because you are a registered tenant administrator.
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine Microsoft 365 tenant administrative bulletin. The sender domain microsoft-noreply@microsoft.com is verified, the message ID follows standard Microsoft syntax (MC892102), and the button points directly to admin.microsoft.com with valid TLS.',
    indicators: [
      {
        title: 'Authentic Microsoft Domain (@microsoft.com)',
        description: 'Verified official domain with legitimate cryptographic signatures.',
        isRedFlag: false,
      },
      {
        title: 'Standard Administrative Language',
        description: 'Explicitly notes "No immediate admin action is required" instead of manufacturing artificial urgency.',
        isRedFlag: false,
      },
      {
        title: 'Direct Link to admin.microsoft.com',
        description: 'Points to the official Microsoft 365 Admin Portal with strict HTTPS.',
        isRedFlag: false,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-3',
    senderName: 'Accounting Department',
    senderEmail: 'billing@vendor-quickbooks-cloud.com',
    recipientEmail: 'user@company.com',
    subject: 'Overdue Invoice #INV-88219 - Final Notice Before Late Penalties',
    dateStr: 'Yesterday',
    timeStr: '2:40 PM',
    isPhishing: true,
    category: 'finance',
    urgencyLevel: 'high',
    attachmentName: 'Invoice_88219.pdf.exe',
    attachmentSize: '418 KB',
    hoverLinks: [
      {
        displayText: 'Review Invoice Online',
        destinationUrl: 'http://vendor-quickbooks-cloud.com/view-invoice.php?inv=88219',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #2ca01c; padding: 16px 20px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 20px; font-weight: bold;">QuickBooks Invoicing</span>
        </div>
        <div style="padding: 24px; background: white;">
          <p style="margin-top: 0;">Dear Accounts Payable,</p>
          <p>Please find attached your outstanding balance invoice <strong>#INV-88219</strong> in the amount of <strong>$4,820.00 USD</strong>. This bill is currently 14 days past due.</p>
          <div style="border: 1px dashed #cbd5e1; background: #f8fafc; padding: 14px; border-radius: 6px; margin: 16px 0;">
            <div style="font-size: 14px; font-weight: 600; color: #1e293b;">📎 Attached File: Invoice_88219.pdf.exe (418 KB)</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Please open the attached invoice to reconcile line items.</div>
          </div>
          <p style="font-size: 13px; color: #dc2626;">If payment is not received by 5:00 PM today, this file will be forwarded to our collections agency.</p>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 cursor-pointer">
              Review Invoice Online
            </span>
          </div>
          <p style="font-size: 11px; color: #94a3b8;">Sent via Intuit QuickBooks Online Cloud Service.</p>
        </div>
      </div>
    `,
    explanation: 'This email contains a dangerous double-extension attachment: "Invoice_88219.pdf.exe". Scammers disguise executable malware (.exe) by putting ".pdf" in the filename. The sender domain (@vendor-quickbooks-cloud.com) is also fake.',
    indicators: [
      {
        title: 'Dangerous Double-Extension (.pdf.exe)',
        description: 'Notice the attachment name ends with .exe! This is an executable Trojan program masquerading as a PDF.',
        isRedFlag: true,
      },
      {
        title: 'Impersonated QuickBooks Domain',
        description: 'Authentic Intuit QuickBooks emails come from @intuit.com or @quickbooks.com, not @vendor-quickbooks-cloud.com.',
        isRedFlag: true,
      },
      {
        title: 'Aggressive Collections Threat',
        description: 'Threatening same-day collections agency referral to panic users into running the attachment.',
        isRedFlag: true,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-4',
    senderName: 'LinkedIn Messages',
    senderEmail: 'messages-noreply@linkedin.com',
    recipientEmail: 'user@company.com',
    subject: 'Elena Rostova sent you a message: "Speaking invitation for Cybersecurity Summit"',
    dateStr: 'Yesterday',
    timeStr: '4:02 PM',
    isPhishing: false,
    category: 'internal',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Reply to Elena',
        destinationUrl: 'https://www.linkedin.com/messaging/thread/70192837189283/',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #181818; border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0a66c2; padding: 14px 20px; color: white;">
          <span style="font-size: 20px; font-weight: bold;">Linked<span style="background: white; color: #0a66c2; border-radius: 2px; padding: 0 4px; margin-left: 2px;">in</span></span>
        </div>
        <div style="padding: 24px; background: white;">
          <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 16px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: #0a66c2; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">ER</div>
            <div>
              <div style="font-weight: 600; color: #000000;">Elena Rostova</div>
              <div style="font-size: 13px; color: #666666;">Conference Director at TechSummit Global · 2nd degree connection</div>
            </div>
          </div>
          <div style="background: #f3f2ef; padding: 14px; border-radius: 6px; font-size: 14px; margin-bottom: 20px;">
            "Hi John, I noticed your extensive background in security infrastructure. We are finalizing our speaker panel for the West Coast Cybersecurity Summit in December and would love to have you present..."
          </div>
          <div>
            <span class="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 cursor-pointer text-sm">
              Reply to Elena
            </span>
          </div>
          <p style="font-size: 11px; color: #707070; margin-top: 24px; border-top: 1px solid #e0e0e0; padding-top: 12px;">
            This email was intended for John Smith. Learn why we included this. © 2026 LinkedIn Corporation.
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine LinkedIn direct message notification. The sender email is messages-noreply@linkedin.com, the message preview matches typical professional correspondence, and the button links directly to official linkedin.com messaging.',
    indicators: [
      {
        title: 'Authentic Sender Domain (@linkedin.com)',
        description: 'Directly verified from LinkedIn mail servers with valid DKIM and SPF checks.',
        isRedFlag: false,
      },
      {
        title: 'Legitimate Link Destination',
        description: 'Button points to https://www.linkedin.com/messaging/... with standard HTTPS.',
        isRedFlag: false,
      },
      {
        title: 'Personalized Profile Match',
        description: 'Reflects real recipient context without asking for login passwords or sensitive attachments.',
        isRedFlag: false,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-5',
    senderName: 'Google Cloud Storage Alert',
    senderEmail: 'storage-alert@google-mail-quota.com',
    recipientEmail: 'user@company.com',
    subject: 'Your Google Drive & Gmail storage is 98.4% full - Incoming emails will bounce',
    dateStr: '3 days ago',
    timeStr: '10:04 AM',
    isPhishing: true,
    category: 'cloud',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Add 50GB Free Storage Allocation',
        destinationUrl: 'http://google-mail-quota.com/storage/upgrade-auth.html',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Roboto, Arial, sans-serif; line-height: 1.6; color: #3c4043; border: 1px solid #dadce0; border-radius: 8px; overflow: hidden;">
        <div style="padding: 16px 20px; border-bottom: 1px solid #dadce0; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 18px; font-weight: bold; color: #ea4335;">Google One</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h3 style="margin-top: 0; color: #d93025;">Storage Almost Full (14.8 GB of 15 GB used)</h3>
          <p>Your Google Account storage is almost full. When your account reaches 100%, <strong>you will no longer be able to send or receive emails</strong>.</p>
          <div style="background-color: #f1f3f4; border-radius: 4px; height: 12px; width: 100%; overflow: hidden; margin: 16px 0;">
            <div style="background-color: #ea4335; height: 100%; width: 98%;"></div>
          </div>
          <p style="font-size: 13px; color: #5f6368;">As an enterprise courtesy, you can claim an additional 50GB storage upgrade free of charge by confirming your administrative credentials today.</p>
          <div style="margin: 22px 0;">
            <span class="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 cursor-pointer">
              Add 50GB Free Storage Allocation
            </span>
          </div>
          <p style="font-size: 11px; color: #80868b;">Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
        </div>
      </div>
    `,
    explanation: 'This is a quota warning phishing attack. The sender domain google-mail-quota.com is a third-party scam domain. Real Google One notifications come from googleone-noreply@google.com, and Google never provides free storage upgrades in exchange for entering admin credentials.',
    indicators: [
      {
        title: 'Spoofed Domain (@google-mail-quota.com)',
        description: 'Google never registers dash-separated external domains like google-mail-quota.com for notifications.',
        isRedFlag: true,
      },
      {
        title: 'Unrealistic "Free 50GB" Upgrade Lure',
        description: 'Offering free enterprise cloud storage if you verify passwords is an obvious credential trap.',
        isRedFlag: true,
      },
      {
        title: 'Disguised Web Destination',
        description: 'Hovering over the button reveals an unsecure HTTP destination on the spoofed domain.',
        isRedFlag: true,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-6',
    senderName: 'Zoom Video Communications',
    senderEmail: 'invites@zoom-meeting-recordings.us',
    recipientEmail: 'user@company.com',
    subject: 'You missed a scheduled meeting with VP of Operations (Audio recording available)',
    dateStr: '3 days ago',
    timeStr: '3:15 PM',
    isPhishing: true,
    category: 'it',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Listen to Cloud Recording (18 min)',
        destinationUrl: 'http://zoom-meeting-recordings.us/listen?token=session_harvest',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2d3748; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #0b5cff; padding: 16px 20px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 20px; font-weight: bold;">zoom</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h3 style="margin-top: 0; color: #1a202c;">Missed Zoom Meeting Summary</h3>
          <p>You were invited to a meeting that ended 20 minutes ago:</p>
          <div style="background: #f7fafc; border-left: 4px solid #0b5cff; padding: 14px; margin: 16px 0;">
            <div style="font-weight: 600;">Topic: Q4 Budget Realignment & Resource Allocation</div>
            <div style="font-size: 13px; color: #718096; margin-top: 4px;">Host: Robert Chen (VP Operations) · Duration: 18 minutes</div>
          </div>
          <p style="font-size: 14px;">The meeting host enabled cloud recording. You have been granted access to review the audio transcript and shared screens.</p>
          <div style="margin: 22px 0;">
            <span class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 cursor-pointer">
              Listen to Cloud Recording (18 min)
            </span>
          </div>
          <p style="font-size: 11px; color: #a0aec0;">Zoom Video Communications, Inc., 55 Almaden Blvd, Suite 600, San Jose, CA 95113</p>
        </div>
      </div>
    `,
    explanation: 'This phishing email exploits the fear of missing an important executive meeting ("FOMO"). The sender domain zoom-meeting-recordings.us uses a .us ccTLD instead of official zoom.us. The link leads to a cloned corporate SSO page.',
    indicators: [
      {
        title: 'Suspicious Domain (@zoom-meeting-recordings.us)',
        description: 'Zoom emails come from @zoom.us or @zoomgov.com, not hyphenated marketing domains.',
        isRedFlag: true,
      },
      {
        title: 'Executive Meeting Bait (Fear of Missing Out)',
        description: 'Fabricating a missed meeting with a VP creates anxiety and impulsiveness.',
        isRedFlag: true,
      },
      {
        title: 'Unauthenticated Recording Link',
        description: 'Hovering over the link shows an insecure destination crafted to harvest SSO logins.',
        isRedFlag: true,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-7',
    senderName: 'Apple Support',
    senderEmail: 'no_reply@email.apple.com',
    recipientEmail: 'user@company.com',
    subject: 'Your receipt from Apple for iCloud+ with 200 GB Storage',
    dateStr: '4 days ago',
    timeStr: '1:10 PM',
    isPhishing: false,
    category: 'finance',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Review your Apple Account subscriptions',
        destinationUrl: 'https://finance-app.itunes.apple.com/account/subscriptions',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #333; border: 1px solid #d2d2d7; border-radius: 8px; overflow: hidden; max-width: 580px; margin: 0 auto;">
        <div style="padding: 24px; background: white;">
          <div style="text-align: right; font-size: 13px; color: #86868b; margin-bottom: 12px;">Invoice: MQ8929104</div>
          <h1 style="font-size: 22px; margin-top: 0; font-weight: 600;">Receipt</h1>
          <p style="font-size: 14px; color: #515154;">Apple ID: user@company.com<br />Order Date: October 13, 2026</p>
          <div style="border-top: 1px solid #d2d2d7; border-bottom: 1px solid #d2d2d7; padding: 16px 0; margin: 18px 0;">
            <div style="display: flex; justify-content: space-between; font-weight: 500;">
              <span>iCloud+ with 200 GB Storage (Monthly)</span>
              <span>$2.99</span>
            </div>
            <div style="font-size: 12px; color: #86868b; margin-top: 4px;">Renews automatically on Nov 13, 2026</div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 600;">
            <span>Total</span>
            <span>$2.99 USD</span>
          </div>
          <p style="font-size: 13px; color: #515154; margin-top: 24px;">To cancel or manage your recurring subscriptions, you can review your Apple Account settings.</p>
          <div style="margin: 16px 0;">
            <span class="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
              Review your Apple Account subscriptions
            </span>
          </div>
          <p style="font-size: 11px; color: #86868b; margin-top: 24px;">
            Copyright © 2026 Apple Inc. One Apple Park Way, Cupertino, CA 95014. All rights reserved.
          </p>
        </div>
      </div>
    `,
    explanation: 'This is an authentic Apple transactional receipt. The sender domain email.apple.com is cryptographically signed by Apple, the price ($2.99/mo) matches standard iCloud+ 200GB pricing, and all links point strictly to official apple.com endpoints.',
    indicators: [
      {
        title: 'Authentic Apple Domain (@email.apple.com)',
        description: 'Apple uses email.apple.com for verified transactional purchase receipts.',
        isRedFlag: false,
      },
      {
        title: 'Accurate Standard Product Pricing',
        description: 'Standard pricing with no fabricated inflated charges aimed at prompting panicked refund requests.',
        isRedFlag: false,
      },
      {
        title: 'Legitimate Apple Support Links',
        description: 'Points directly to apple.com domain with valid encryption.',
        isRedFlag: false,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-8',
    senderName: 'Dropbox Business',
    senderEmail: 'no-reply@dropbox-filetransfer-services.com',
    recipientEmail: 'user@company.com',
    subject: 'Sarah Jenkins shared "Q3_Staff_Appraisals_Summary.docx" with you',
    dateStr: '4 days ago',
    timeStr: '4:50 PM',
    isPhishing: true,
    category: 'cloud',
    urgencyLevel: 'medium',
    hoverLinks: [
      {
        displayText: 'View Shared File on Dropbox',
        destinationUrl: 'http://dropbox-filetransfer-services.com/dl/file_auth',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e1919; border: 1px solid #e5e5e5; border-radius: 6px; overflow: hidden; max-width: 580px; margin: 0 auto;">
        <div style="background-color: #0061fe; padding: 16px 20px; color: white;">
          <span style="font-size: 20px; font-weight: bold;">Dropbox</span>
        </div>
        <div style="padding: 24px; background: white;">
          <p style="margin-top: 0;"><strong>Sarah Jenkins</strong> shared a sensitive file using Dropbox Transfer:</p>
          <div style="background-color: #f7f9fa; border: 1px solid #e1e3e5; border-radius: 6px; padding: 16px; margin: 18px 0; display: flex; align-items: center; gap: 14px;">
            <div style="font-size: 24px;">📄</div>
            <div>
              <div style="font-weight: 600; color: #1e1919;">Q3_Staff_Appraisals_Summary.docx</div>
              <div style="font-size: 12px; color: #637282;">Word Document · 1.8 MB · Shared via Enterprise Link</div>
            </div>
          </div>
          <div style="margin: 22px 0;">
            <span class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 cursor-pointer">
              View Shared File on Dropbox
            </span>
          </div>
          <p style="font-size: 11px; color: #7b8994;">Dropbox, Inc., 1800 Owens St, San Francisco, CA 94158</p>
        </div>
      </div>
    `,
    explanation: 'This phishing email uses Dropbox brand assets to lure the user into clicking. Real Dropbox notifications come from @dropbox.com or @dropboxmail.com, never from @dropbox-filetransfer-services.com.',
    indicators: [
      {
        title: 'Impersonated Third-Party Domain',
        description: 'Notice the domain @dropbox-filetransfer-services.com. Real Dropbox mail comes from @dropboxmail.com or @dropbox.com.',
        isRedFlag: true,
      },
      {
        title: 'Untrusted HTTP Destination Link',
        description: 'Hovering over the button reveals an unencrypted destination link hosted on the spoofed server.',
        isRedFlag: true,
      },
      {
        title: 'Curiosity Exploitation (Staff Appraisals)',
        description: 'Named to trigger workplace curiosity and impulsive clicks without checking headers.',
        isRedFlag: true,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-9',
    senderName: 'Stripe Support',
    senderEmail: 'support@stripe.com',
    recipientEmail: 'user@company.com',
    subject: 'Your 2026 1099-K tax document is now available for review',
    dateStr: '5 days ago',
    timeStr: '8:15 AM',
    isPhishing: false,
    category: 'finance',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Access Tax Documents in Stripe Express',
        destinationUrl: 'https://connect.stripe.com/express/tax-forms',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #3c4257; border: 1px solid #e3e8ee; border-radius: 6px; overflow: hidden; max-width: 580px; margin: 0 auto;">
        <div style="background-color: #635bff; padding: 18px 24px; color: white;">
          <span style="font-size: 22px; font-weight: bold; letter-spacing: -0.5px;">stripe</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h2 style="font-size: 18px; margin-top: 0; color: #0a2540;">Your 1099 tax form is ready</h2>
          <p>Your electronic 1099-K tax form for the 2026 tax year has been generated and is ready to download in your Stripe Express dashboard.</p>
          <div style="background: #f8f9fa; border: 1px solid #e3e8ee; border-radius: 6px; padding: 14px; margin: 16px 0; font-size: 13px;">
            <div><strong>Tax Year:</strong> 2026</div>
            <div><strong>Platform:</strong> Developer API Marketplace</div>
            <div><strong>Filing Status:</strong> Ready for electronic delivery</div>
          </div>
          <p style="font-size: 13px; color: #4f566b;">You can download your PDF tax form and verify your legal business details at any time.</p>
          <div style="margin: 22px 0;">
            <span class="inline-block px-5 py-2.5 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 cursor-pointer text-sm">
              Access Tax Documents in Stripe Express
            </span>
          </div>
          <p style="font-size: 11px; color: #a3acb9; margin-top: 24px; border-top: 1px solid #e3e8ee; padding-top: 12px;">
            Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080 · You can manage your email preferences in account settings.
          </p>
        </div>
      </div>
    `,
    explanation: 'This is an authentic tax notification from Stripe. The sender is verified from support@stripe.com, the destination URL is https://connect.stripe.com, and no tax IDs or sensitive data are collected via email.',
    indicators: [
      {
        title: 'Authentic Stripe Domain (@stripe.com)',
        description: 'Verified sender domain from official Stripe payment infrastructure.',
        isRedFlag: false,
      },
      {
        title: 'Legitimate Stripe Connect URL',
        description: 'Directs to https://connect.stripe.com/express/tax-forms over secure HTTPS.',
        isRedFlag: false,
      },
      {
        title: 'Privacy Preserved',
        description: 'Does not ask you to email back sensitive tax ID numbers or bank accounts.',
        isRedFlag: false,
      },
    ],
    difficulty: 'medium',
  },
  {
    id: 'med-10',
    senderName: 'Corporate Identity & Access',
    senderEmail: 'it-support@corp-sso-gateway.net',
    recipientEmail: 'user@company.com',
    subject: 'Action Required: Re-enroll your hardware MFA token within 24 hours',
    dateStr: '5 days ago',
    timeStr: '2:30 PM',
    isPhishing: true,
    category: 'it',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Re-authenticate MFA Security Device',
        destinationUrl: 'http://corp-sso-gateway.net/duo-mfa-reauth',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden;">
        <div style="background-color: #0f172a; padding: 16px 20px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-weight: 600; font-size: 16px;">Enterprise Single Sign-On (SSO)</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h3 style="margin-top: 0; color: #0f172a;">Multi-Factor Authentication Device Sync Required</h3>
          <p>Due to scheduled security certificate rotations on our identity clusters, all staff members using mobile Duo / Okta authentication must re-register their primary hardware token.</p>
          <div style="background-color: #f1f5f9; border-left: 4px solid #0284c7; padding: 12px; margin: 16px 0; font-size: 13px;">
            <strong>Deadline:</strong> October 18, 2026 at 5:00 PM.<br />
            Failure to re-enroll will cause SSO access lockouts for Slack, Email, and VPN.
          </div>
          <div style="margin: 22px 0;">
            <span class="inline-block px-5 py-2.5 bg-sky-600 text-white font-medium rounded hover:bg-sky-700 cursor-pointer">
              Re-authenticate MFA Security Device
            </span>
          </div>
          <p style="font-size: 11px; color: #64748b;">Enterprise Security Operations Center · Ref: MFA-CERT-SYNC-99</p>
        </div>
      </div>
    `,
    explanation: 'This is an MFA token harvesting attack. The sender uses an external domain @corp-sso-gateway.net rather than your company email. Scammers use this lure to capture session cookies and one-time MFA push tokens (Adversary-in-the-Middle).',
    indicators: [
      {
        title: 'External Unofficial Domain (@corp-sso-gateway.net)',
        description: 'SSO and IT infrastructure notifications are sent from your primary internal corporate domain, not external .net gateways.',
        isRedFlag: true,
      },
      {
        title: 'MFA Harvesting Scheme (AiTM)',
        description: 'Scammers frequently pretend MFA devices are desynchronized to capture real-time 2FA codes.',
        isRedFlag: true,
      },
      {
        title: 'Threat of Immediate Lockout',
        description: 'Creates deadline urgency to bypass standard internal IT verification procedures.',
        isRedFlag: true,
      },
    ],
    difficulty: 'medium',
  },
];

export const HARD_EMAILS: EmailItem[] = [
  {
    id: 'hard-1',
    senderName: 'David Harrison (Chief Executive Officer)',
    senderEmail: 'david.harrison.ceo@company-executives.co',
    recipientEmail: 'user@company.com',
    subject: 'CONFIDENTIAL: Project Apex - Urgent wire instructions for Q4 acquisition',
    dateStr: 'Today',
    timeStr: '8:05 AM',
    isPhishing: true,
    category: 'finance',
    urgencyLevel: 'critical',
    hoverLinks: [
      {
        displayText: 'View Escrow Wire Instructions & Account Routing',
        destinationUrl: 'http://company-executives.co/apex/escrow-docs.php',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
        <p>John,</p>
        <p>I am currently in an offsite closed-door board meeting regarding Project Apex. As you know, the non-disclosure agreements surrounding this acquisition are strictly governed by SEC regulations, so please keep this communication between the two of us for now.</p>
        <p>Our outside counsel has requested an initial earnest money escrow deposit of $320,000 to be wired before the 11:30 AM eastern deadline to lock in the terms.</p>
        <p>I have approved the capital release. Please access the encrypted escrow wire instructions linked below and coordinate with finance immediately:</p>
        <div style="margin: 20px 0;">
          <span class="inline-block px-5 py-2.5 bg-slate-900 text-white font-medium rounded hover:bg-slate-800 cursor-pointer">
            View Escrow Wire Instructions & Account Routing
          </span>
        </div>
        <p>Please reply directly to this email as soon as the wire is submitted so I can notify the board chair. Do not call my cell as I am presenting.</p>
        <p style="margin-top: 24px;">
          Best regards,<br />
          <strong>David Harrison</strong><br />
          Chief Executive Officer<br />
          Sent from my iPad
        </p>
      </div>
    `,
    explanation: 'This is a textbook Business Email Compromise (BEC) / CEO Fraud attack. Notice the sender domain: @company-executives.co (ending in .co instead of .com). The email exploits secrecy, urgency, and instructs the victim NOT to call the CEO.',
    indicators: [
      {
        title: 'Subtle Domain Impersonation (.co vs .com)',
        description: 'Notice the top-level domain: @company-executives.co instead of the legitimate corporate domain. The attacker registered an executive lookalike domain.',
        isRedFlag: true,
      },
      {
        title: 'Classic BEC Tactics (Strict Secrecy & Do Not Call)',
        description: 'Pretending to be in a closed-door meeting and instructing you not to call prevents out-of-band verification.',
        isRedFlag: true,
      },
      {
        title: 'Emergency Wire Transfer Request',
        description: 'Direct wire requests initiated solely over email violate standard accounting internal controls.',
        isRedFlag: true,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-2',
    senderName: 'Okta Identity Cloud',
    senderEmail: 'noreply@okta.com',
    recipientEmail: 'user@company.com',
    subject: 'New sign-in detected from Chrome on macOS in Seattle, WA',
    dateStr: 'Today',
    timeStr: '10:14 AM',
    isPhishing: false,
    category: 'it',
    urgencyLevel: 'medium',
    hoverLinks: [
      {
        displayText: 'Review Activity in Okta Dashboard',
        destinationUrl: 'https://company.okta.com/enduser/settings',
        isDeceptive: false,
      },
      {
        displayText: 'Report Suspicious Activity',
        destinationUrl: 'https://company.okta.com/security/report-compromise',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1d2d35; border: 1px solid #d8dde6; border-radius: 6px; overflow: hidden; max-width: 580px; margin: 0 auto;">
        <div style="background-color: #00297a; padding: 16px 20px; color: white;">
          <span style="font-size: 20px; font-weight: bold; letter-spacing: 0.5px;">okta</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h2 style="font-size: 18px; margin-top: 0; color: #1d2d35;">New sign-in to your Okta account</h2>
          <p style="font-size: 14px; color: #5c6f84;">Your identity was authenticated for enterprise application access:</p>
          <div style="background-color: #f4f6f9; border-radius: 6px; padding: 14px; margin: 16px 0; font-size: 13px;">
            <div style="margin-bottom: 6px;"><strong>Device:</strong> Mac OS X (Chrome 129.0)</div>
            <div style="margin-bottom: 6px;"><strong>Location:</strong> Seattle, WA, United States (IP: 136.24.112.9)</div>
            <div><strong>Time:</strong> October 17, 2026 at 10:13 AM PDT</div>
          </div>
          <p style="font-size: 13px; color: #5c6f84;">If this was you, you can disregard this notice. If you did not sign in, report it immediately to lock your session.</p>
          <div style="display: flex; gap: 12px; margin: 20px 0;">
            <span class="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded text-sm hover:bg-blue-700 cursor-pointer">
              Review Activity in Okta Dashboard
            </span>
            <span class="inline-block px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded text-sm hover:bg-gray-200 cursor-pointer border border-gray-300">
              Report Suspicious Activity
            </span>
          </div>
          <p style="font-size: 11px; color: #8a9ba8;">Okta, Inc., 100 First Street, Suite 600, San Francisco, CA 94105</p>
        </div>
      </div>
    `,
    explanation: 'This is a legitimate Okta security notification. The sender is verified from noreply@okta.com, the links direct to the tenant subdomain company.okta.com via HTTPS, and it provides balanced options without forcing password input directly.',
    indicators: [
      {
        title: 'Authentic Okta Sender (@okta.com)',
        description: 'Verified official domain with strict SPF, DKIM, and DMARC passing alignment.',
        isRedFlag: false,
      },
      {
        title: 'Matches Actual Corporate Tenant URL',
        description: 'Links point strictly to the customer HTTPS Okta subdomain (company.okta.com).',
        isRedFlag: false,
      },
      {
        title: 'Standard Security Telemetry',
        description: 'Provides neutral IP and device details without fabricating panicking narratives.',
        isRedFlag: false,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-3',
    senderName: 'Corporate Payroll Operations',
    senderEmail: 'payroll-update@secure-workday-portal.com',
    recipientEmail: 'user@company.com',
    subject: 'Direct Deposit Account Update - Routing number verification required before October cutoff',
    dateStr: 'Yesterday',
    timeStr: '3:45 PM',
    isPhishing: true,
    category: 'hr',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Verify Direct Deposit Routing in Workday',
        destinationUrl: 'http://secure-workday-portal.com/auth/login?tenant=corp',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #212529; border: 1px solid #ced4da; border-radius: 6px; overflow: hidden; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0875e1; padding: 16px 20px; color: white;">
          <span style="font-size: 20px; font-weight: bold;">workday.</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h3 style="margin-top: 0; color: #212529;">Payroll System Notification</h3>
          <p>Dear Employee,</p>
          <p>During our routine quarterly NACHA automated clearing house (ACH) validation, our banking partner flagged an incomplete transit routing record for your direct deposit allocation.</p>
          <div style="background-color: #fff3cd; border: 1px solid #ffeeba; color: #856404; padding: 12px; border-radius: 4px; margin: 16px 0; font-size: 13px;">
            <strong>Notice:</strong> To avoid delay of your October 31st salary disbursement, please re-authenticate your banking profile before 5:00 PM tomorrow.
          </div>
          <div style="margin: 22px 0;">
            <span class="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 cursor-pointer text-sm">
              Verify Direct Deposit Routing in Workday
            </span>
          </div>
          <p style="font-size: 11px; color: #6c757d; margin-top: 24px;">
            Workday HCM · Global Payroll Services · Ref: NACHA-ACH-VAL-2026
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a sophisticated payroll diversion attack. Workday notifications come from an internal tenant URL (e.g. wd5.myworkday.com/company), never from external domains like secure-workday-portal.com. Attackers use this to re-route employees direct deposit checks.',
    indicators: [
      {
        title: 'Unofficial Lookalike Domain (@secure-workday-portal.com)',
        description: 'Workday never uses standalone "workday-portal.com" domains; authentic links point to *.myworkday.com.',
        isRedFlag: true,
      },
      {
        title: 'Payroll Direct Deposit Diversion Scheme',
        description: 'A top enterprise cyber threat targeting employee salary deposits by stealing banking login sessions.',
        isRedFlag: true,
      },
      {
        title: 'Unauthenticated HTTP Destination',
        description: 'Hovering reveals an insecure HTTP URL on a freshly registered fraudulent host.',
        isRedFlag: true,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-4',
    senderName: 'Smith & Anderson Law Partners LLP',
    senderEmail: 'legal-notices@smith-anderson-lawpartners.com',
    recipientEmail: 'user@company.com',
    subject: 'NOTICE OF INFRINGEMENT: Formal Cease and Desist - Digital Asset Violations',
    dateStr: 'Yesterday',
    timeStr: '5:12 PM',
    isPhishing: true,
    category: 'security',
    urgencyLevel: 'high',
    attachmentName: 'Legal_Evidence_Package.zip',
    attachmentSize: '3.1 MB',
    hoverLinks: [
      {
        displayText: 'Review Deposited Case Evidence & Timestamps',
        destinationUrl: 'http://smith-anderson-lawpartners.com/cloud/evidence-vault.html',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: 'Times New Roman', Times, serif; line-height: 1.6; color: #111; border: 1px solid #999; padding: 28px; background: #fff;">
        <div style="border-bottom: 2px solid #333; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Smith & Anderson Law Partners LLP</h2>
          <div style="font-size: 12px; color: #555;">Intellectual Property & Digital Rights Practice Group · New York · London</div>
        </div>
        <p><strong>ATTN: Legal Operations & Webmaster</strong></p>
        <p>This correspondence constitutes formal notice that your company website and digital media assets are currently infringing on registered copyright assets owned by our client (Registration #TX-8-912-402).</p>
        <p>Failure to review the cited infringements and confirm immediate cessation by 5:00 PM EST on Monday may result in statutory damages of up to $150,000 per willful violation under 17 U.S.C. § 504(c).</p>
        <div style="background-color: #f5f5f5; border: 1px solid #ddd; padding: 14px; margin: 18px 0; font-family: Arial, sans-serif; font-size: 13px;">
          <div><strong>Case Docket:</strong> CR-2026-90412</div>
          <div><strong>Attached Document:</strong> Legal_Evidence_Package.zip (3.1 MB)</div>
        </div>
        <p style="font-family: Arial, sans-serif; font-size: 14px;">The complete evidentiary log of copyrighted image comparisons has been uploaded for your inspection:</p>
        <div style="margin: 20px 0;">
          <span class="inline-block px-5 py-2.5 bg-neutral-900 text-white font-serif font-medium rounded hover:bg-neutral-800 cursor-pointer">
            Review Deposited Case Evidence & Timestamps
          </span>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 24px;">CONFIDENTIAL ATTORNEY-CLIENT PRIVILEGED COMMUNICATION.</p>
      </div>
    `,
    explanation: 'This is a sophisticated spear-phishing attack using legal intimidation and fear of copyright lawsuits. The attached .zip file and link contain malware (info-stealers) designed to infect corporate workstations upon unzipping.',
    indicators: [
      {
        title: 'High-Stakes Legal Intimidation',
        description: 'Threatens massive $150,000 statutory damages to provoke panic and bypass normal IT security review.',
        isRedFlag: true,
      },
      {
        title: 'Dangerous .ZIP File Attachment',
        description: 'Scammers bundle malicious JavaScript or executable files inside archive packages (.zip) to evade simple gateway filters.',
        isRedFlag: true,
      },
      {
        title: 'Unverified Law Firm Domain',
        description: 'The domain was recently registered and has no verifiable public presence or authenticated mail records.',
        isRedFlag: true,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-5',
    senderName: 'Amazon Web Services',
    senderEmail: 'no-reply-aws@amazon.com',
    recipientEmail: 'user@company.com',
    subject: 'Amazon Web Services Billing Notification: Monthly invoice is ready for October 2026',
    dateStr: '2 days ago',
    timeStr: '6:30 AM',
    isPhishing: false,
    category: 'cloud',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'View Bill in AWS Billing Console',
        destinationUrl: 'https://console.aws.amazon.com/billing/home?region=us-east-1#/bills',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #16191f; border: 1px solid #eaeded; border-radius: 4px; overflow: hidden; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #232f3e; padding: 18px 24px; color: #ff9900; font-weight: bold; font-size: 20px;">
          aws
        </div>
        <div style="padding: 24px; background: white;">
          <h2 style="font-size: 18px; margin-top: 0; color: #16191f;">Your AWS Monthly Statement</h2>
          <p style="font-size: 14px; color: #545b64;">Greetings from Amazon Web Services. Your monthly billing statement for the period October 1, 2026 – October 16, 2026 is now available.</p>
          <div style="background-color: #f2f3f3; padding: 16px; border-radius: 4px; margin: 18px 0; font-size: 13px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span>Account ID:</span>
              <strong>1293-8402-9912</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span>Total Amount:</span>
              <strong>$148.22 USD</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Payment Status:</span>
              <span style="color: #1d8102; font-weight: bold;">Auto-billed to card ending in 4291</span>
            </div>
          </div>
          <div style="margin: 22px 0;">
            <span class="inline-block px-4 py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-medium rounded text-sm cursor-pointer">
              View Bill in AWS Billing Console
            </span>
          </div>
          <p style="font-size: 11px; color: #545b64; margin-top: 24px; border-top: 1px solid #eaeded; padding-top: 12px;">
            Amazon Web Services, Inc. is an affiliate of Amazon.com, Inc. 410 Terry Avenue North, Seattle, WA 98109-5210
          </p>
        </div>
      </div>
    `,
    explanation: 'This is an authentic AWS billing notification. The sender no-reply-aws@amazon.com is cryptographically authenticated via SPF and DKIM. The link points directly to the real AWS Console at https://console.aws.amazon.com over TLS.',
    indicators: [
      {
        title: 'Authentic AWS Domain (@amazon.com)',
        description: 'Directly sent from Amazon Web Services authenticated mailers.',
        isRedFlag: false,
      },
      {
        title: 'Direct Link to AWS Console',
        description: 'URL resolves directly to https://console.aws.amazon.com/billing/...',
        isRedFlag: false,
      },
      {
        title: 'Safe Transactional Notification',
        description: 'Auto-billed confirmation requiring no urgent credentials or wire submission.',
        isRedFlag: false,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-6',
    senderName: 'Accounts Receivable (Supplier Systems)',
    senderEmail: 'accounts-receivable@suppliermicrosystems.com',
    recipientEmail: 'user@company.com',
    subject: 'Important: Updated banking & wire remittance instructions for upcoming vendor invoices',
    dateStr: '2 days ago',
    timeStr: '11:45 AM',
    isPhishing: true,
    category: 'finance',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Download Certified Remittance Authorization Letter',
        destinationUrl: 'http://suppliermicrosystems.com/docs/remittance-auth.pdf',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 24px; background: #fff;">
        <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 12px;">
          <strong style="font-size: 18px; color: #1a365d;">Supplier Micro Systems Corporation</strong>
        </div>
        <p>Dear Valued Partner,</p>
        <p>We are writing to inform you of an upcoming transition in our treasury management operations. Effective immediately, our primary operating accounts with JPMorgan Chase are being migrated to Citibank as part of our annual corporate banking audit.</p>
        <div style="background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 14px; margin: 16px 0; font-size: 13px;">
          <div><strong>New Bank:</strong> Citibank N.A.</div>
          <div><strong>Account Beneficiary:</strong> Supplier Micro Systems Corp</div>
          <div><strong>Routing (ABA):</strong> 021000089</div>
          <div><strong>Account Number:</strong> 4829104921</div>
        </div>
        <p>Please update your ERP / accounts payable records before processing any scheduled invoice runs for this month.</p>
        <div style="margin: 20px 0;">
          <span class="inline-block px-5 py-2.5 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 cursor-pointer text-sm">
            Download Certified Remittance Authorization Letter
          </span>
        </div>
        <p style="font-size: 12px; color: #718096;">Please confirm receipt by replying directly to this email.</p>
      </div>
    `,
    explanation: 'This is a Vendor Email Compromise (VEC) / Supplier Banking Fraud attack. Notice that the real company name is "Supplier Micro-Systems" (with a hyphen) or the domain is subtly altered. Cybercriminals use this scheme to divert hundreds of thousands of dollars in legitimate invoices to fraudulent bank accounts.',
    indicators: [
      {
        title: 'Supplier Lookalike Domain (Missing Hyphen/Letters)',
        description: 'Notice the subtle difference between the trusted vendor domain and this lookalike address.',
        isRedFlag: true,
      },
      {
        title: 'Change of Banking Details via Unverified Email',
        description: 'Major financial red flag: Bank details should NEVER be modified based solely on an email without verbal out-of-band confirmation.',
        isRedFlag: true,
      },
      {
        title: 'Request to Reply Exclusively by Email',
        description: 'Designed to trap communication inside the fraudulent channel and avoid telephone verification.',
        isRedFlag: true,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-7',
    senderName: 'Global Human Resources',
    senderEmail: 'hr-benefits@company.com',
    recipientEmail: 'user@company.com',
    subject: 'Company-Wide Notice: 2027 Benefits Open Enrollment Period Starts Next Monday',
    dateStr: '3 days ago',
    timeStr: '9:00 AM',
    isPhishing: false,
    category: 'hr',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'Explore the 2027 Benefits Guide on Intranet',
        destinationUrl: 'https://intranet.company.com/hr/benefits-2027',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2d3748; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #319795; padding: 18px 24px; color: white;">
          <span style="font-size: 18px; font-weight: bold;">People Operations & Total Rewards</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h2 style="font-size: 18px; margin-top: 0; color: #234e52;">Annual Open Enrollment is Coming</h2>
          <p>Hello team,</p>
          <p>Our annual open enrollment window for medical, dental, vision, and voluntary life insurance will open next Monday, October 26, and run through November 14.</p>
          <div style="background: #f0fff4; border: 1px solid #c6f6d5; padding: 14px; border-radius: 6px; margin: 16px 0; font-size: 13px; color: #22543d;">
            <strong>What is new for 2027:</strong> Enhanced mental health wellness stipend ($1,200/year) and increased 401(k) company match up to 5%.
          </div>
          <p style="font-size: 14px;">No immediate action is needed today. You can preview plan comparison sheets on our secure internal employee portal:</p>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-teal-600 text-white font-medium rounded hover:bg-teal-700 cursor-pointer text-sm">
              Explore the 2027 Benefits Guide on Intranet
            </span>
          </div>
          <p style="font-size: 11px; color: #718096; margin-top: 24px;">
            People Operations Team · Building 4, Floor 3 · Office hours: Mon-Fri 9am-4pm
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine internal HR announcement. The sender email matches the authentic company domain @company.com, links point to the internal intranet portal (https://intranet.company.com), and no credentials or personal IDs are requested.',
    indicators: [
      {
        title: 'Authentic Internal Domain (@company.com)',
        description: 'Originates from the verified internal corporate mail server.',
        isRedFlag: false,
      },
      {
        title: 'Internal Intranet Link Target',
        description: 'Directs to the verified corporate intranet portal with internal SSO.',
        isRedFlag: false,
      },
      {
        title: 'Calm, Informational Communication',
        description: 'Announces a future open window with ample time (weeks) rather than a fabricated emergency.',
        isRedFlag: false,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-8',
    senderName: 'Microsoft Security & Compliance',
    senderEmail: 'quarantine@messaging.microsoft-protection.com',
    recipientEmail: 'user@company.com',
    subject: 'Microsoft 365: 2 inbound messages quarantined in your cloud inbox',
    dateStr: '4 days ago',
    timeStr: '1:00 PM',
    isPhishing: true,
    category: 'security',
    urgencyLevel: 'high',
    hoverLinks: [
      {
        displayText: 'Release Quarantined Messages to Inbox',
        destinationUrl: 'http://messaging.microsoft-protection.com/quarantine/release-portal.php',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #201f1e; border: 1px solid #edebe9; border-radius: 4px; overflow: hidden; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0078d4; padding: 14px 20px; color: white; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 16px; font-weight: 600;">Microsoft Defender for Office 365</span>
        </div>
        <div style="padding: 24px; background: white;">
          <h3 style="margin-top: 0; color: #201f1e; font-size: 17px;">Prevented Delivery: Spam & Phish Quarantine</h3>
          <p style="font-size: 13px; color: #605e5c;">The following messages addressed to <strong>user@company.com</strong> were intercepted by your tenant anti-spam policies:</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin: 16px 0;">
            <thead>
              <tr style="background-color: #f3f2f1; text-align: left;">
                <th style="padding: 8px; border: 1px solid #e1dfdd;">Sender</th>
                <th style="padding: 8px; border: 1px solid #e1dfdd;">Subject</th>
                <th style="padding: 8px; border: 1px solid #e1dfdd;">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 8px; border: 1px solid #e1dfdd;">payroll-audit@internal.com</td>
                <td style="padding: 8px; border: 1px solid #e1dfdd;">Bonus Distribution Q3</td>
                <td style="padding: 8px; border: 1px solid #e1dfdd; color: #0078d4;">Blocked</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #e1dfdd;">noreply@docusign.net</td>
                <td style="padding: 8px; border: 1px solid #e1dfdd;">Signature Required: 2026 Bonus</td>
                <td style="padding: 8px; border: 1px solid #e1dfdd; color: #0078d4;">Blocked</td>
              </tr>
            </tbody>
          </table>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-blue-700 text-white font-medium rounded text-sm hover:bg-blue-800 cursor-pointer">
              Release Quarantined Messages to Inbox
            </span>
          </div>
          <p style="font-size: 11px; color: #a19f9d;">This notification was sent by Microsoft Defender on behalf of your tenant administrator.</p>
        </div>
      </div>
    `,
    explanation: 'This is an ironic and deceptive "quarantine release" phishing lure. Attackers pretend Microsoft Defender quarantined important emails (like your bonus!) so that you click a link and enter your Microsoft 365 credentials to "release" them. Real Microsoft quarantine emails come from quarantine@messaging.microsoft.com, not @messaging.microsoft-protection.com.',
    indicators: [
      {
        title: 'Lookalike Quarantine Domain (@messaging.microsoft-protection.com)',
        description: 'Notice the extra hyphen and words. Legitimate Microsoft quarantine digests originate from quarantine@messaging.microsoft.com.',
        isRedFlag: true,
      },
      {
        title: 'Ironic Security Lure (Releasing Blocked Emails)',
        description: 'Scammers exploit curiosity by listing tantalizing subjects like "Bonus Distribution" among the blocked messages.',
        isRedFlag: true,
      },
      {
        title: 'Credential Harvester Link',
        description: 'Clicking directs you to a fake Microsoft 365 login screen designed to steal your enterprise credentials.',
        isRedFlag: true,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-9',
    senderName: 'Atlassian Jira Service Management',
    senderEmail: 'jira@company.atlassian.net',
    recipientEmail: 'user@company.com',
    subject: '[JIRA] (SEC-4091) Provisioning test staging credentials for API Sandbox',
    dateStr: '4 days ago',
    timeStr: '3:20 PM',
    isPhishing: false,
    category: 'it',
    urgencyLevel: 'low',
    hoverLinks: [
      {
        displayText: 'View Jira Issue SEC-4091',
        destinationUrl: 'https://company.atlassian.net/browse/SEC-4091',
        isDeceptive: false,
      },
    ],
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #172b4d; border: 1px solid #dfe1e6; border-radius: 4px; overflow: hidden; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0052cc; padding: 14px 20px; color: white;">
          <span style="font-size: 18px; font-weight: bold;">Jira Service Management</span>
        </div>
        <div style="padding: 24px; background: white;">
          <div style="font-size: 13px; color: #5e6c84; margin-bottom: 8px;">Issue Updated · Ticket #SEC-4091</div>
          <h2 style="font-size: 18px; margin-top: 0; color: #172b4d;">Provisioning test staging credentials for API Sandbox</h2>
          <div style="display: flex; gap: 8px; margin-bottom: 16px;">
            <span style="background: #e3fcef; color: #006644; font-size: 12px; font-weight: bold; padding: 2px 8px; border-radius: 3px;">Resolved</span>
            <span style="background: #f4f5f7; color: #42526e; font-size: 12px; font-weight: 500; padding: 2px 8px; border-radius: 3px;">IT Security</span>
          </div>
          <p style="font-size: 14px;"><strong>Alex Rivera (Security Engineer)</strong> commented:</p>
          <div style="background-color: #f4f5f7; border-left: 3px solid #0052cc; padding: 12px; font-size: 13px; margin: 12px 0;">
            "Staging sandbox credentials have been generated and added to the 1Password shared engineering vault under 'Sandbox API'. Closing this ticket."
          </div>
          <div style="margin: 20px 0;">
            <span class="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded text-sm hover:bg-blue-700 cursor-pointer">
              View Jira Issue SEC-4091
            </span>
          </div>
          <p style="font-size: 11px; color: #6b778c; margin-top: 24px; border-top: 1px solid #ebecf0; padding-top: 12px;">
            Atlassian Pty Ltd, 341 George Street, Sydney, NSW 2000 Australia · This notification was sent to user@company.com
          </p>
        </div>
      </div>
    `,
    explanation: 'This is a genuine Atlassian Jira notification. The sender email is verified from the official company Jira tenant jira@company.atlassian.net, links point to legitimate atlassian.net endpoints, and it properly refers to secure credential storage (1Password) rather than asking for passwords.',
    indicators: [
      {
        title: 'Authentic Atlassian Cloud Domain (*.atlassian.net)',
        description: 'Verified tenant notification from Atlassian cloud mail servers.',
        isRedFlag: false,
      },
      {
        title: 'Adheres to Good Security Hygiene',
        description: 'Explicitly states credentials were deposited in the team password manager rather than linked in email.',
        isRedFlag: false,
      },
      {
        title: 'Legitimate Ticket URL',
        description: 'Points directly to the authenticated internal issue tracker.',
        isRedFlag: false,
      },
    ],
    difficulty: 'hard',
  },
  {
    id: 'hard-10',
    senderName: 'Executive Travel Concierge',
    senderEmail: 'rachel.miller@corp-traveldesk.org',
    recipientEmail: 'user@company.com',
    subject: 'CONFIRMED: Board meeting flight itinerary & private lodging confirmation - ORD to SFO',
    dateStr: '5 days ago',
    timeStr: '4:18 PM',
    isPhishing: true,
    category: 'internal',
    urgencyLevel: 'medium',
    attachmentName: 'Flight_Board_Itinerary_ORD_SFO.html',
    attachmentSize: '215 KB',
    hoverLinks: [
      {
        displayText: 'Download Itinerary & Hotel Keycode Confirmation',
        destinationUrl: 'http://corp-traveldesk.org/itinerary/ORD-SFO-891.html',
        isDeceptive: true,
      },
    ],
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden; background: #fff;">
        <div style="background-color: #1e3a8a; padding: 16px 20px; color: white;">
          <span style="font-size: 18px; font-weight: bold;">Executive Travel Management</span>
        </div>
        <div style="padding: 24px;">
          <p style="margin-top: 0;">Hi John,</p>
          <p>Your business flight reservations for next week’s Strategy Offsite have been ticketed with United Airlines. Please find your seat assignment and hotel confirmation details below:</p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin: 16px 0; font-size: 13px;">
            <div><strong>Flight:</strong> UA 1402 (Chicago O'Hare ORD ➔ San Francisco SFO)</div>
            <div><strong>Departure:</strong> Tuesday, Oct 27 at 08:15 AM</div>
            <div><strong>Seat:</strong> 04B (Business First)</div>
            <div><strong>Hotel:</strong> The Ritz-Carlton San Francisco (Confirmation #RC-991204)</div>
          </div>
          <div style="border: 1px dashed #94a3b8; padding: 12px; border-radius: 4px; background: #f1f5f9; margin: 16px 0; font-size: 13px;">
            📎 <strong>Attachment:</strong> Flight_Board_Itinerary_ORD_SFO.html (215 KB)<br />
            <span style="font-size: 11px; color: #64748b;">(Contains offline boarding barcode and room access pin)</span>
          </div>
          <div style="margin: 20px 0;">
            <span class="inline-block px-5 py-2.5 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 cursor-pointer text-sm">
              Download Itinerary & Hotel Keycode Confirmation
            </span>
          </div>
          <p style="font-size: 11px; color: #94a3b8;">Corporate Travel Services, Inc. · Global Business Travel</p>
        </div>
      </div>
    `,
    explanation: 'This is a spear-phishing attack with an HTML attachment ("Flight_Board_Itinerary_ORD_SFO.html"). HTML attachments are frequently weaponized with embedded JavaScript credential scrapers that run locally in your browser. The sender domain uses .org instead of the company domain.',
    indicators: [
      {
        title: 'Weaponized HTML Attachment (.html)',
        description: 'Legitimate travel agencies send PDFs or standard emails, never executable or clickable HTML files containing local login harvesting scripts.',
        isRedFlag: true,
      },
      {
        title: 'External Third-Party Domain (.org)',
        description: 'The email comes from @corp-traveldesk.org, not your authenticated corporate domain or registered travel partner.',
        isRedFlag: true,
      },
      {
        title: 'Executive Travel Pretext',
        description: 'Appeals to convenience and curiosity about upcoming corporate offsites to provoke immediate opening of the attachment.',
        isRedFlag: true,
      },
    ],
    difficulty: 'hard',
  },
];

// Helper to get 10 emails for difficulty
export function getEmailsForDifficulty(difficulty: 'easy' | 'medium' | 'hard'): EmailItem[] {
  switch (difficulty) {
    case 'easy':
      return EASY_EMAILS;
    case 'medium':
      return MEDIUM_EMAILS;
    case 'hard':
      return HARD_EMAILS;
  }
}

// Visual placeholders for the inbox view (9 read placeholder emails to ensure 10 emails are always shown in the inbox!)
export const INBOX_PLACEHOLDER_EMAILS: PlaceholderEmail[] = [
  {
    id: 'placeholder-1',
    senderName: 'Microsoft Teams',
    subject: 'Daily activity digest: 12 unread channel mentions',
    preview: 'Summary of missed conversations in #product-launch and #general...',
    dateStr: 'Yesterday',
    isRead: true,
  },
  {
    id: 'placeholder-2',
    senderName: 'All Hands Team',
    subject: 'Quarterly All-Hands Meeting Recording and Slides',
    preview: 'Thank you for joining todays global town hall. Access the slide deck...',
    dateStr: 'Oct 15',
    isRead: true,
  },
  {
    id: 'placeholder-3',
    senderName: 'IT Operations',
    subject: 'Completed: Scheduled network maintenance on building 2 WiFi',
    preview: 'The weekend firmware upgrades have completed with zero downtime...',
    dateStr: 'Oct 14',
    isRead: true,
  },
  {
    id: 'placeholder-4',
    senderName: 'HR Wellness Committee',
    subject: 'Register for the Annual Wellness Step Challenge',
    preview: 'Join your teammates in friendly competition starting next month...',
    dateStr: 'Oct 13',
    isRead: true,
  },
  {
    id: 'placeholder-5',
    senderName: 'Concur Expense Reporting',
    subject: 'Expense Report #EXP-2026-88 has been approved for reimbursement',
    preview: 'Your submitted business expense report has been approved by your manager...',
    dateStr: 'Oct 12',
    isRead: true,
  },
  {
    id: 'placeholder-6',
    senderName: 'Facilities & Security',
    subject: 'Badge access reader updates for North Entrance',
    preview: 'Please note new contactless NFC card readers are now active...',
    dateStr: 'Oct 11',
    isRead: true,
  },
  {
    id: 'placeholder-7',
    senderName: 'Company Newsletter',
    subject: 'The Pulse: Employee Spotlights and Q4 Innovation Highlights',
    preview: 'Read about our latest customer wins and volunteer day photos...',
    dateStr: 'Oct 10',
    isRead: true,
  },
  {
    id: 'placeholder-8',
    senderName: 'Finance Accounting',
    subject: 'Reminder: Submit vendor invoices by end of monthly cycle',
    preview: 'Please ensure all outstanding PO invoices are submitted into SAP...',
    dateStr: 'Oct 9',
    isRead: true,
  },
  {
    id: 'placeholder-9',
    senderName: 'Service Desk Ticket System',
    subject: 'Your monitor arm replacement request has been resolved',
    preview: 'Ticket #HD-90812 has been marked as resolved by Facilities Team...',
    dateStr: 'Oct 8',
    isRead: true,
  },
];
