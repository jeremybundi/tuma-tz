// src/components/Terms.tsx

import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl pt-16 font-bold text-center text-gray-900 mb-2">
            Terms and Conditions
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Last Updated: May 28, 2025
          </p>

          <p>Welcome to Tuma Ventures.</p>
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the payment services, platform, and related functionalities ("Services") provided by Tuma Ventures - Tuma Ventures Limited, a company duly incorporated under the laws of the United Republic of Tanzania, with Company Registration Number 20000054603, and holding a valid Payment Service Provider License NBPSL No. 0000-60 issued by the Bank of Tanzania ("BoT"). By accessing, using, or registering for our Services, you agree to be bound by these Terms, as well as our Privacy Policy and any other policies, guidelines, or rules applicable to specific Services you use. If you do not agree to these Terms, you may not access or use our Services.
          </p>
          <p className="font-semibold">
            PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICES. YOUR CONTINUED USE OF OUR SERVICES CONSTITUTES YOUR ACCEPTANCE OF THESE TERMS.
          </p>

          {/* PART I */}
          <section>
            <h2 className="text-2xl font-semibold">PART I: GENERAL PROVISIONS AND YOUR AGREEMENT</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. Definitions</h3>
            <p>Unless the context otherwise requires, or as defined elsewhere in these Terms, the following terms shall have the meanings set out below:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>"Act":</strong> The National Payment Systems Act, 2015, of the United Republic of Tanzania, as amended from time to time.</li>
              <li><strong>"Account":</strong> Your registered user account with Tuma Ventures, enabling access to and use of the Services, which may include an Electronic Money Account.</li>
              <li><strong>"Bank" / "BoT":</strong> The Bank of Tanzania.</li>
              <li><strong>"Consumer" / "User" / "You":</strong> Any natural person or legal entity that uses the electronic payment services provided by Tuma Ventures.</li>
              <li><strong>"Electronic Money":</strong> Monetary value as represented by a claim on its issuer, that is electronically stored, issued against receipt of funds, accepted as means of payment by others, and can be redeemed in cash.</li>
              <li><strong>"Electronic Money Account":</strong> A sub-account within your main Account where your Electronic Money balance is held and managed.</li>
              <li><strong>"Electronic Money Issuer":</strong> Tuma Ventures, in its capacity as a licensed issuer of Electronic Money.</li>
              <li><strong>"PSP" / "Payment System Provider" / "Tuma Ventures" / "We" / "Us":</strong> Tuma Ventures - Tuma Ventures Limited.</li>
              <li><strong>"Privacy Policy":</strong> The Tuma Ventures policy governing the collection, use, and disclosure of your personal information, available on our website.</li>
              <li><strong>"Services":</strong> The electronic payment services, platform, and related functionalities provided by Tuma Ventures.</li>
              <li><strong>"Trust Account":</strong> A separate legal entity in the form of a trust, holding funds equivalent to the Electronic Money issued to customers.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2. Acceptance of Terms</h3>
            <p><strong>2.1.</strong> By accessing, using, or registering for any of our Services, you unequivocally acknowledge that you have read, understood, and agree to be bound by these Terms and the Privacy Policy.</p>
            <p><strong>2.2.</strong> You affirm that you are at least 18 years of age and possess the full legal capacity to enter into a binding agreement.</p>

            <h3 className="text-xl font-semibold mt-4">3. Amendments to Terms</h3>
            <p><strong>3.1.</strong> Tuma Ventures reserves the right to modify or update these Terms at any time. We will provide at least fourteen (14) days' notice of any material changes.</p>
            <p><strong>3.2.</strong> Your continued use of the Services after the effective date of any revised Terms will constitute your acceptance of such changes.</p>
          </section>

          {/* PART II */}
          <section>
            <h2 className="text-2xl font-semibold">PART II: TUMA VENTURES' SERVICES AND YOUR ACCOUNT</h2>
            
            <h3 className="text-xl font-semibold mt-4">4. Our Services and Scope of Licence</h3>
            <p><strong>4.1.</strong> Tuma Ventures provides electronic payment services within the scope of our Licence, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Electronic Money Issuance and Management.</li>
              <li>Electronic Fund Transfers.</li>
              <li>Merchant Payment Processing.</li>
              <li>Bill Payments and Collections.</li>
            </ul>
            <p><strong>4.2.</strong> All Services adhere to the National Payment Systems Act, 2015, and other relevant laws and regulations.</p>

            <h3 className="text-xl font-semibold mt-4">5. Account Registration and Management</h3>
            <p><strong>5.1. Eligibility and KYC/AML Compliance:</strong> You must register for an Account and satisfy our Know-Your-Customer (KYC) and Anti-Money Laundering (AML) requirements by providing accurate identification information.</p>
            <p><strong>5.2. Accuracy of Information:</strong> You agree to provide truthful, accurate, and complete information and to keep it updated.</p>
            <p><strong>5.3. Account Security and Your Responsibility:</strong> You are solely responsible for maintaining the confidentiality of your Account login credentials (password, PIN, OTPs). You must notify us immediately at support@tuma.tz of any unauthorized access. We are not liable for losses due to your negligence.</p>
            <p><strong>5.4. Prohibited Account Activities:</strong> You are strictly prohibited from using the Services for illegal, fraudulent, or unauthorized purposes, including Money Laundering or Terrorism Financing.</p>

            <h3 className="text-xl font-semibold mt-4">6. Electronic Money Issuance and Redemption</h3>
            <p><strong>6.1. Issuance Principle:</strong> Electronic Money is issued upon receipt of equivalent funds into our designated Trust Account.</p>
            <p><strong>6.2. Redemption Rights:</strong> You can redeem your Electronic Money balance at any time at its full nominal value, less any applicable fees.</p>
            <p><strong>6.3. Trust Account Management:</strong> All customer funds are held in a Trust Account, legally separate from Tuma Ventures' operational funds, to safeguard your money.</p>

            <h3 className="text-xl font-semibold mt-4">7. Transaction Processing</h3>
            <p><strong>7.1. Accuracy of Instructions:</strong> You are solely responsible for the accuracy of all Payment Instructions.</p>
            <p><strong>7.2. Irrevocability of Transactions:</strong> Confirmed transactions are final and irrevocable, except in cases of system error or fraud as determined by us.</p>
            <p><strong>7.3. Transaction Limits:</strong> We may impose transaction limits for security and compliance, which will be communicated to you.</p>
            <p><strong>7.4. Refusal of Transactions:</strong> We reserve the right to refuse any transaction that violates these Terms, is suspicious, or poses a risk to our system.</p>
          </section>

          {/* PART III */}
          <section>
            <h2 className="text-2xl font-semibold">PART III: FEES, CHARGES, AND TAXES</h2>

            <h3 className="text-xl font-semibold mt-4">8. Fees and Charges</h3>
            <p><strong>8.1.</strong> All applicable fees and charges will be clearly displayed to you before you complete a transaction.</p>
            <p><strong>8.2.</strong> We reserve the right to modify our fee structure with at least thirty (30) days' notice.</p>
            
            <h3 className="text-xl font-semibold mt-4">9. Taxes</h3>
            <p><strong>9.1.</strong> You are solely responsible for all taxes associated with your use of the Services.</p>
          </section>

          {/* PART IV */}
          <section>
            <h2 className="text-2xl font-semibold">PART IV: CONSUMER PROTECTION, DISPUTE RESOLUTION, AND LIABILITY</h2>
            
            <h3 className="text-xl font-semibold mt-4">10. Consumer Protection and Fair Treatment</h3>
            <p><strong>10.1.</strong> We are committed to upholding the highest standards of financial consumer protection, including transparency, fair treatment, and protection of your assets and information.</p>
            <p><strong>10.2. Complaints Handling:</strong> If you have a complaint, please contact our customer support first. We aim to resolve it within fourteen (14) days. If you are unsatisfied, you may escalate the complaint to the Bank of Tanzania.</p>

            <h3 className="text-xl font-semibold mt-4">11. Limitations of Liability</h3>
            <p><strong>11.1.</strong> Tuma Ventures shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services, unless caused by our gross negligence or willful misconduct.</p>
            <p><strong>11.2.</strong> Our total liability to you shall not exceed the lesser of the fees you paid us in the preceding 12 months or TZS 6,000,000 per incident.</p>

            <h3 className="text-xl font-semibold mt-4">12. Indemnification</h3>
            <p>You agree to indemnify and hold harmless Tuma Ventures from any claims, losses, or expenses arising from your breach of these Terms, misuse of the Services, or violation of any law or third-party rights.</p>
          </section>

          {/* PART V */}
          <section>
            <h2 className="text-2xl font-semibold">PART V: DATA PRIVACY, SECURITY, AND COMPLIANCE</h2>
            
            <h3 className="text-xl font-semibold mt-4">13. Data Privacy and Protection of Customer Information</h3>
            <p>Our comprehensive <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> details how we collect, use, and protect your personal data in compliance with Tanzanian law. We will not disclose your information without your consent, unless required by law.</p>

            <h3 className="text-xl font-semibold mt-4">14. Cyber-Security and Fraud Prevention</h3>
            <p>We implement robust cyber-security measures to protect our systems. You are prohibited from engaging in any cyber-crime and are responsible for the security of your own devices and credentials.</p>

            <h3 className="text-xl font-semibold mt-4">15. Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT)</h3>
            <p>We operate in strict compliance with all AML/CFT laws. We will monitor transactions, report suspicious activity to the Financial Intelligence Unit (FIU), and cooperate with all authorities.</p>

            <h3 className="text-xl font-semibold mt-4">16. Retention of Payment System Records</h3>
            <p>We will retain transaction records for at least five (5) years and AML-related records for at least ten (10) years, as required by law.</p>
          </section>

          {/* PART VI */}
          <section>
            <h2 className="text-2xl font-semibold">PART VI: MISCELLANEOUS PROVISIONS</h2>

            <h3 className="text-xl font-semibold mt-4">17. Intellectual Property</h3>
            <p>All intellectual property rights associated with the Services are the exclusive property of Tuma Ventures or its licensors. You are granted a limited, non-exclusive license to use the Services according to these Terms.</p>
            
            <h3 className="text-xl font-semibold mt-4">18. Governing Law and Jurisdiction</h3>
            <p>These Terms are governed by the laws of the United Republic of Tanzania. Any disputes shall be subject to the exclusive jurisdiction of the High Court of Tanzania.</p>

            <h3 className="text-xl font-semibold mt-4">19. Suspension, Revocation, and Termination of Your Account</h3>
            <p>We reserve the right to suspend or terminate your Account for any breach of these Terms, fraudulent activity, or as required by law or regulatory bodies.</p>

            <h3 className="text-xl font-semibold mt-4">20. Winding-Up, Receivership, or Judicial Management of Tuma Ventures</h3>
            <p>In the event of our insolvency, payment settlements made before any winding-up order will be honored, and customer funds in the Trust Account are protected.</p>

            <h3 className="text-xl font-semibold mt-4">21. Entire Agreement</h3>
            <p>These Terms, along with our Privacy Policy, constitute the entire agreement between you and Tuma Ventures.</p>

            <h3 className="text-xl font-semibold mt-4">22. Contact Information</h3>
            <p>For any questions about these Terms, the Services, or to lodge a complaint, please contact us:</p>
            <div className="mt-4 p-6 bg-gray-100 rounded-lg not-prose">
              <p className="font-bold text-lg text-gray-900">Tuma Ventures Limited</p>
              <address className="not-italic">
                Iconic Spaces Tan House, 9th Floor, Victoria, Dar es Salaam, Tanzania<br />
                <strong>Email:</strong> <a href="mailto:support@tuma.tz" className="text-blue-600 hover:underline">support@tuma.tz</a><br />
                <strong>Phone:</strong> <a href="tel:+2550758999133" className="text-blue-600 hover:underline">+255 0758 999 133</a><br />
                <strong>Website:</strong> <a href="https://www.tuma.tz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.tuma.tz</a>
              </address>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;