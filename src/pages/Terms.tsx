import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Terms of Service & Refund Policy
          </h1>
          <p className="text-gray-400">Last updated: November 10, 2025</p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 space-y-8 animate-fade-in-up animation-delay-300">
          {/* Terms of Service */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms of Service (“Terms”) govern your use of our Services. By accessing or using any part of Zod you agree to these Terms. If you do not agree, please discontinue use of the app immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li><strong>User, You, Your:</strong> any person accessing or using the Services.</li>
              <li><strong>We, Us, Our:</strong> Zod and its affiliates, subsidiaries, and authorized partners.</li>
              <li><strong>Services:</strong> all modules of the Super App — social media, e-commerce, wallet, and chat functions.</li>
              <li><strong>Content:</strong> any text, images, video, audio, links, or other data shared or posted by users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>You must be at least 18 years old (or have parental consent if under 18).</li>
              <li>You must have legal capacity to enter a binding agreement.</li>
              <li>You agree to provide accurate, complete, and verifiable information during registration (including KYC data for wallet use).</li>
              <li>We may suspend or terminate accounts that provide false information or violate these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Account Registration & Security</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Maintain confidentiality of your login credentials.</li>
              <li>Notify us promptly of any unauthorised access or suspected breach.</li>
              <li>Each user may only maintain one personal account unless otherwise authorized.</li>
              <li>Accounts may be restricted or suspended for security, regulatory, or compliance reasons.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Use of Services</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Do not drop or share illegal, obscene, defamatory, or harmful content.</li>
              <li>Do not impersonate others or misrepresent your affiliation.</li>
              <li>No promotion of fraud, hate speech, or terrorism.</li>
              <li>No money laundering, scams, or other financial crimes.</li>
              <li>Do not interfere with the app’s operation or security systems.</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Zod may remove content or restrict accounts violating these rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. E-Commerce Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              a. Buyers must pay via approved methods (wallet, card, bank transfer). Refunds and cancellations follow our Refund Policy. False claims or chargebacks are prohibited.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2">
              b. Sellers must provide accurate product information, prices, and delivery timelines. Counterfeit or illegal goods are prohibited. Zod acts as an intermediary and is not liable for product defects, delivery delays, or disputes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Wallet and Payment Services</h2>
            <p className="text-gray-400 leading-relaxed">
              The wallet service is regulated. Users must secure wallet PINs and credentials. Transactions are final once authorized. Zod may delay, review, or reverse transactions if fraud is suspected. Transaction limits and fees apply as displayed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Chat and Social Media Conduct</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Be respectful and lawful in communication.</li>
              <li>Do not send spam, unsolicited ads, or harmful content.</li>
              <li>Messages are encrypted in transit, but metadata may be retained for operational and legal compliance.</li>
              <li>Content you share remains yours, but grants Zod a non-exclusive, worldwide, royalty-free license to display it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All intellectual property in Zod (software, logos, trademarks, interfaces) is owned by Zod or its licensors. You may not copy, modify, redistribute content, or reverse-engineer software. User-generated content remains yours but grants Zod permission to host and display it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Termination and Suspension</h2>
            <p className="text-gray-400 leading-relaxed">
              Accounts may be suspended or terminated for breaches, fraudulent activity, or regulatory requirements. Wallet funds may be refunded subject to verification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the fullest extent permitted by law, Zod is not liable for indirect, incidental, or consequential damages. We do not guarantee uninterrupted access. Liability for fraud, gross negligence, or death is not limited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Indemnity</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree to indemnify Zod and its partners for any claims arising from your use of the Services, violations of Terms, or content/activity under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">12. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms are governed by applicable laws. Disputes are first resolved amicably; unresolved cases may be referred to arbitration under the Arbitration and Mediation Act 2023.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">13. Modifications</h2>
            <p className="text-gray-400 leading-relaxed">
              Terms may be revised periodically. Material changes will be communicated via in-app notification or email. Continued use constitutes acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">15. Acceptance</h2>
            <p className="text-gray-400 leading-relaxed">
              By clicking “I Agree” or using the app, you acknowledge that you have read, understood, and consent to be bound by these Terms and our Privacy & User Policy.
            </p>
          </section>

          {/* Refund & Dispute Resolution Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Refund & Dispute Resolution Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              Effective Date: 10 November 2025. This Policy applies to refunds, reversals, and disputes in e-commerce, wallet, and service modules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Purpose</h2>
            <p className="text-gray-400 leading-relaxed">
              Ensure fair handling of refunds, protect buyers, sellers, and wallet users, and comply with FCCPA, CBN Consumer Protection Framework, and NDPA 2023.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Scope</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>E-Shop purchases (goods/services bought through the app)</li>
              <li>Wallet payments or transfers</li>
              <li>Merchant payouts and settlements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. General Refund Principles</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Refunds issued for non-delivery, defective goods, duplicate charges, or unauthorized transactions.</li>
              <li>Refunds processed only via original payment method.</li>
              <li>Requests submitted within 7 calendar days from transaction.</li>
              <li>Zod may decline fraudulent or late requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. E-Commerce Refunds</h2>
            <p className="text-gray-400 leading-relaxed">
              a. Buyer-Initiated Refunds: If item is defective, not as described, not delivered, or seller fails to respond within 3 business days.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2">
              b. Seller Responsibilities: Review and respond to refund requests within 3 business days. Refunds deducted from seller’s wallet or next settlement.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2">
              c. Dispute Mediation: Zod may mediate disputes with evidence (chat logs, delivery proof, screenshots). Decision is final internally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Wallet Transactions</h2>
            <p className="text-gray-400 leading-relaxed">
              a. Unauthorized or Erroneous Transactions: Report immediately via in-app support chat. Reversals processed in 5–10 business days.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2">
              b. Reversal Conditions: Denied if incorrect beneficiary details, transaction completed successfully, or issue caused by user negligence.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2">
              c. Failed Transactions: Funds automatically reversed within 24–72 hours. Contact support if not.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Service Subscriptions and Digital Products</h2>
            <p className="text-gray-400 leading-relaxed">
              Fees for digital ads, premium plans, or subscriptions are non-refundable except for duplicate billing, system errors, or unauthorized charges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Dispute Resolution Process</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Step 1: Submit complaint via in-app support chat with transaction ID and details (response within 2 business days).</li>
              <li>Step 2: Internal Review / Mediation by Dispute Resolution Unit (decision within 15 business days).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Refund Timelines</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Failed Wallet Transfer: 24–72 hours</li>
              <li>Duplicate Debit: 3–5 business days</li>
              <li>Product Return (Seller): 5–10 business days</li>
              <li>Unauthorized Transaction: Up to 10 business days after investigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Exceptions (Non-Refundable Items)</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>Digital content or ad credits already delivered</li>
              <li>Services consumed before cancellation</li>
              <li>Products marked “Final Sale” or “Non-Returnable”</li>
              <li>User errors (wrong input, incorrect beneficiary details)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Compliance and Record-Keeping</h2>
            <p className="text-gray-400 leading-relaxed">
              Refund and dispute records retained for at least 2 years. User data used only for dispute resolution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Fraud Prevention</h2>
            <p className="text-gray-400 leading-relaxed">
              Zod has zero tolerance for fraudulent refund claims or abuse. Offending users may be suspended, reported, and funds withheld pending investigation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
