import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Effective Date: 10 November 2025</p>
          <p className="text-gray-400">Last Updated: 10 November 2025</p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 space-y-8 animate-fade-in-up animation-delay-300">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              Welcome to Zod, a multi-service platform offering social media, e-commerce, digital wallet, messaging features, and more (collectively, the “Services”). Your privacy and safety are our top priorities. This Policy explains how we collect, use, store, and protect your information across all modules of our Super App.
            </p>
          </section>

          {/* Scope and Consent */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Scope and Consent</h2>
            <p className="text-gray-400 leading-relaxed">
              By creating an account or using any part of Zod, you agree to this Policy and our Terms of Service. You may withdraw consent or delete your account at any time under Section 11 (“Your Rights”).
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>We collect data to provide, personalize, and improve your experience:</p>

              <h3 className="font-semibold mt-2">a. Account Information</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Name, username, password, contact details</li>
                <li>Profile photo and preferences</li>
              </ul>

              <h3 className="font-semibold mt-2">b. Device & Technical Data</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Device identifiers, IP address, operating system, app version</li>
                <li>Usage logs and crash reports</li>
              </ul>

              <h3 className="font-semibold mt-2">c. Social Media Features</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Droplets, comments, likes, media uploads, and connections</li>
                <li>Content Data (timestamps, geotags if enabled)</li>
              </ul>

              <h3 className="font-semibold mt-2">d. E-Shop Module</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Purchase history, shopping preferences, delivery addresses</li>
                <li>Payment information (processed securely via approved gateways)</li>
              </ul>

              <h3 className="font-semibold mt-2">e. Wallet Services</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Account balance, transactions, and linked payment methods</li>
                <li>KYC verification data (e.g., ID, selfie, proof of address)</li>
              </ul>

              <h3 className="font-semibold mt-2">f. Chat Module</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Messages, attachments, and contacts (encrypted where applicable)</li>
                <li>Data such as time sent and delivery status</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1 leading-relaxed">
              <li>Operate and improve our Services</li>
              <li>Authenticate users and secure transactions</li>
              <li>Process payments and complete orders</li>
              <li>Personalize recommendations and content</li>
              <li>Enable social and communication features</li>
              <li>Detect, prevent, and investigate fraud or abuse</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Data Sharing & Disclosure */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing & Disclosure</h2>
            <p className="text-gray-400 leading-relaxed">
              We do not sell your personal information. We may share data only in these cases:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1">
              <li>With service providers who support app functionality (e.g., payment processors, cloud hosts)</li>
              <li>With business partners (e.g., merchants) to complete transactions</li>
              <li>For legal compliance or at the request of law enforcement</li>
              <li>With your consent, for promotional or linked account purposes</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-2">
              All third parties must comply with our data protection standards and applicable laws.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
            <p className="text-gray-400 leading-relaxed">
              We retain personal data only as long as necessary for the purposes stated in this Policy or as required by law. Wallet and transaction data may be kept for regulatory reasons even after account deletion.
            </p>
          </section>

          {/* Security Measures */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Security Measures</h2>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1 leading-relaxed">
              <li>Encryption in transit and at rest</li>
              <li>Multi-factor authentication</li>
              <li>Regular vulnerability assessments</li>
              <li>Limited employee access based on roles</li>
            </ul>
          </section>

          {/* Children’s Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Children’s Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              Our Services are not intended for users under 13 (or local minimum age requirements). We do not knowingly collect data from minors without parental consent.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-400 leading-relaxed">
              We use cookies and analytics tools to enhance performance and personalize content. You can manage cookie preferences in your account settings or browser.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
            <p className="text-gray-400 leading-relaxed">
              Your data may be transferred and processed outside your home country. We ensure such transfers comply with applicable data protection laws through standard contractual clauses or equivalent safeguards.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. User Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              Depending on your jurisdiction, you may:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-400 space-y-1 leading-relaxed">
              <li>Access, correct, or delete your data</li>
              <li>Restrict or object to data processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent for certain uses</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-2">
              Requests can be made via in-app support chat.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Policy from time to time. Significant changes will be communicated through in-app notifications or email.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              Zod Privacy Office<br/>
              Email: privacy@zodapp.com<br/>
              Address: Plot 100 Idris Gidado Street, Wuye, Abuja
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
