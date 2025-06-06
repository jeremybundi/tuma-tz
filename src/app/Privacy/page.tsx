// src/components/Privacy.tsx

import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl pt-24 font-bold text-center text-gray-900 mb-8">
            Tuma Ventures Limited Privacy Policy
          </h1>

          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            
            <h3 className="text-xl font-semibold mt-4">1.1. Purpose of This Policy:</h3>
            <p>
              This Privacy Policy outlines how Tuma Ventures Limited (“Tuma,” “we,” “us,” or “our”), a company duly incorporated in the United Republic of Tanzania under Registration No. 165945697, collects, uses, discloses, and safeguards personal data in connection with the provision of its digital financial services. This includes services accessed through our official website (www.tuma.tz) and mobile applications (collectively, the “Service”).
            </p>

            <h3 className="text-xl font-semibold mt-4">1.2. Our Commitment to Your Privacy:</h3>
            <p>
              Tuma Ventures Limited is deeply committed to protecting your privacy and personal data. We operate in full compliance with the Personal Data Protection Act, 2022 (PDPA 2022), the National Payment Systems Act, 2015 (NPS Act), the Cybercrimes Act, 2015, and all other applicable laws of Tanzania relating to data protection, electronic communications, and financial services. We recognize that the security and confidentiality of your data are fundamental to the trust you place in us as a licensed Payment Service Provider.
            </p>

            <h3 className="text-xl font-semibold mt-4">1.3. Your Consent:</h3>
            <p>
              By accessing, using, or registering for our Service, you confirm that you have read, understood, and agree to the terms of this Privacy Policy. You explicitly consent to the collection, processing, use, and disclosure of your personal data as described herein. If you do not agree with any part of this Policy, you must discontinue your use of our Service immediately. Terms used in this Policy have the same meaning as in our Terms and Conditions unless otherwise defined.
            </p>
          </section>

          {/* Section 2: Collection of Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold">2. Collection of Personal Data</h2>
            
            <h3 className="text-xl font-semibold mt-4">2.1. Information You Provide Directly:</h3>
            <p>We collect personal data that you provide directly to us when you:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
              <li>Create an account or register for our Service.</li>
              <li>Complete our Know Your Customer (KYC) verification process.</li>
              <li>Initiate transactions or use our payment services.</li>
              <li>Contact our customer support.</li>
              <li>Participate in surveys or promotions.</li>
              <li>Provide feedback.</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">2.2. Information We Collect Automatically from Your Use of Our Service:</h3>
            <p>When you access or use our digital platforms, we automatically collect certain technical and usage data, including but not limited to:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
              <li><strong>Device and Technical Data:</strong> Information such as your device type, unique device identifiers, operating system, browser type and version, mobile network information, and IP address.</li>
              <li><strong>Usage Data:</strong> Details of how you use our Service, including access times, features used, pages viewed, clicks, and transaction patterns.</li>
              <li><strong>Geolocation Data:</strong> Precise or approximate location information from your mobile device or IP address, where permitted by your device settings and applicable law, primarily for fraud prevention and compliance purposes.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-4">2.3. Information We Collect from Third Parties:</h3>
            <p>We may receive personal data about you from third parties as necessary and permitted by law, for purposes such as:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
                <li><strong>Identity Verification:</strong> From public registries, identity verification services, or credit reference bureaus for KYC and fraud prevention purposes, in line with AML/CFT regulations.</li>
                <li><strong>Compliance Databases:</strong> From national or international compliance databases (e.g., sanctions lists) for regulatory screening.</li>
                <li><strong>Partners:</strong> From partners involved in providing our Service (e.g., banks, other PSPs, merchants) to facilitate transactions and resolve issues.</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-4">2.4. Categories of Personal Data Collected:</h3>
            <p>The personal data we collect may include, but is not limited to:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
                <li><strong>Personal Identification Information:</strong> Your full name, gender, contact details (residential address, phone number, email address), date of birth, place of birth, nationality, and identity documents (e.g., National ID number, Passport number, Driver’s License number), photograph, and biometric data (if applicable and consented to).</li>
                <li><strong>Financial Information:</strong> Bank account details (if linked), mobile money numbers, transaction history, payment instrument details, and e-wallet balances.</li>
                <li><strong>Transaction and Payment Information:</strong> Details about the payments you make or receive, including amounts, dates, times, payment methods, transaction references, and recipient/sender details.</li>
                <li><strong>Customer Support Interactions:</strong> Records of your communications with our customer support team (e.g., call recordings, chat transcripts, email correspondence).</li>
            </ol>
          </section>

          {/* Section 3: Lawful Basis and Use of Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold">3. Lawful Basis and Use of Personal Data</h2>

            <h3 className="text-xl font-semibold mt-4">3.1. Lawful Basis for Processing (PDPA 2022, Section 28):</h3>
            <p>We process your personal data based on the following lawful grounds:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
                <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities (e.g., for marketing communications). You have the right to withdraw your consent at any time.</li>
                <li><strong>Performance of a Contract:</strong> Where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract (e.g., to process your transactions, manage your account, or deliver our Services).</li>
                <li><strong>Compliance with a Legal Obligation:</strong> Where processing is necessary for compliance with a legal or regulatory obligation to which Tuma Ventures Limited is subject (e.g., KYC/AML/CFT compliance, fraud prevention, regulatory reporting to the BoT).</li>
                <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests or those of a third party, provided your fundamental rights and interests do not override those interests.</li>
                <li><strong>Public Interest/Official Authority:</strong> Where processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in Tuma Ventures Limited.</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">3.2. Purposes of Using Your Personal Data:</h3>
            <p>Your personal data is used for the following specific purposes:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
                <li><strong>To Provide and Manage Our Services:</strong> To verify your identity, set up and manage your account, facilitate domestic payments, process financial transactions, fulfill our contractual obligations, and deliver our digital financial services.</li>
                <li><strong>Regulatory Compliance:</strong> To comply with relevant Tanzanian laws and regulatory requirements, including Bank of Tanzania (BoT) directives, the National Payment Systems Act, 2015, the Anti-Money Laundering Act, Cap. 423, and the Anti-Terrorism Act, 2002. This includes conducting KYC verification, sanctions screening, transaction monitoring, and regulatory reporting.</li>
                <li><strong>Customer Support and Communication:</strong> To respond to your inquiries, provide essential service updates, resolve technical issues, and manage your relationship with us.</li>
                <li><strong>Service Improvement and Optimization:</strong> To analyze usage patterns, collect feedback, troubleshoot errors, and improve user experience, service performance, and platform functionality.</li>
                <li><strong>Risk Management and Security:</strong> To monitor systems for fraud prevention, detect suspicious activities, enhance platform security, and protect against unauthorized access, misuse, or cyber threats. This includes adherence to the Cybercrimes Act, 2015.</li>
                <li><strong>Internal Business Operations:</strong> For internal management, accounting, auditing, and record-keeping purposes as required by law and internal policies.</li>
                <li><strong>Marketing and Promotional Communications:</strong> To provide you with important service-related communications and, where you have provided your explicit consent, promotional updates about new features, products, or offers. You can opt out of marketing communications at any time.</li>
            </ol>
          </section>

          {/* Section 4: Sharing of Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold">4. Sharing of Personal Data</h2>
            <h3 className="text-xl font-semibold mt-4">4.1. Circumstances for Sharing Your Data:</h3>
            <p>Your personal data may be shared under the following circumstances, always with appropriate safeguards and in compliance with this Policy and applicable laws:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
                <li><strong>With Service Providers:</strong> With trusted third-party service providers who support our operations. This includes providers for IT hosting, infrastructure, data analytics, communication services, customer support, and identity verification. These service providers are contractually obligated to protect your data and use it only for the purposes for which we engage them.</li>
                <li><strong>Regulatory and Legal Bodies:</strong> When required by law, court order, or to comply with lawful requests from government agencies, regulatory bodies such as the Bank of Tanzania (BoT), the Financial Intelligence Unit (FIU), the Tanzania Revenue Authority (TRA), or judicial authorities. This includes mandatory reporting under AML/CFT regulations.</li>
                <li><strong>Interoperability Partners:</strong> With other licensed payment service providers and financial institutions to facilitate seamless payment transactions, only as necessary to complete your transactions and as governed by Interoperability Agreements and relevant BoT directives.</li>
                <li><strong>With Your Consent:</strong> Where necessary, we will obtain your explicit consent before sharing your data for purposes outside the primary scope of service delivery, legal compliance, or our legitimate interests as described in this Policy.</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company. In such cases, your data would be subject to the acquiring entity's privacy policy.</li>
            </ol>
          </section>

          {/* Section 5: Your Rights Under Tanzanian Law */}
          <section>
            <h2 className="text-2xl font-semibold">5. Your Rights Under Tanzanian Law</h2>
            <h3 className="text-xl font-semibold mt-4">5.1. Your Data Protection Rights (PDPA 2022, Part V):</h3>
            <p>In accordance with the Personal Data Protection Act, 2022, you have the following rights regarding your personal data held by us:</p>
            <ol className="list-decimal list-inside pl-4 space-y-2">
                <li><strong>Right to Access:</strong> To request access to your personal data that we hold, and to receive information about its processing.</li>
                <li><strong>Right to Rectification:</strong> To request the correction or updating of inaccurate, incomplete, or outdated personal data.</li>
                <li><strong>Right to Object/Restriction of Processing:</strong> To object to or request the restriction of specific processing activities, especially where processing is based on legitimate interests or direct marketing.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.</li>
                <li><strong>Right to Erasure/Deletion ("Right to be Forgotten"):</strong> To request the deletion of your personal data, subject to our legal and regulatory retention obligations.</li>
                <li><strong>Right to Data Portability:</strong> To request a copy of your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another data controller, where technically feasible and permitted by law.</li>
                <li><strong>Right to lodge a Complaint:</strong> To lodge a complaint with the relevant data protection authority in Tanzania if you believe your rights have been violated.</li>
            </ol>
            <h3 className="text-xl font-semibold mt-4">5.2. How to Exercise Your Rights:</h3>
            <p>You may exercise any of your rights by contacting us through the dedicated contact details provided in Section 12 of this Policy. We will respond to your request within the timeframe stipulated by applicable law. Please note that we may require additional information to verify your identity before processing your request.</p>
          </section>

          {/* Section 6: Retention of Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold">6. Retention of Personal Data</h2>
            <p>We retain your personal data for only as long as necessary to fulfill the purposes for which it was collected, and to comply with our operational, legal, and regulatory obligations under Tanzanian law. This includes:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>AML/CFT Regulations:</strong> Records related to customer identification and transactions for at least ten (10) years after the business relationship ends or the transaction date.</li>
                <li><strong>National Payment Systems Act, 2015:</strong> Payment system records for at least five (5) years.</li>
                <li><strong>Financial Consumer Protection Regulations:</strong> Complaint records for a specified period.</li>
                <li>Other statutory retention periods.</li>
            </ul>
            <p>Once the retention period expires, your personal data will be securely deleted or anonymized in accordance with our Data Retention Policy.</p>
          </section>

          {/* Other Sections */}
          <section>
            <h2 className="text-2xl font-semibold">7. Data Transfers Outside Tanzania</h2>
            <p>Tuma Ventures Limited primarily processes data within Tanzania. However, should personal data be transferred outside Tanzania, we ensure that adequate safeguards are in place as required under the Personal Data Protection Act, 2022 (PDPA 2022), Part VII, Section 43. This includes:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Transferring data only to countries with adequate data protection laws as recognized by Tanzania.</li>
                <li>Implementing appropriate contractual clauses with the recipient.</li>
                <li>Obtaining your explicit consent where required for such transfers.</li>
                <li>Ensuring compliance with the BoT Cloud Computing Guidelines, 2023, particularly the requirement for mission-critical systems and data to remain within Tanzania.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, accidental loss, or destruction. These measures include:</p>
             <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Encryption:</strong> For data in transit and at rest where appropriate.</li>
                <li><strong>Access Controls:</strong> Strict controls to limit access to personal data to authorized personnel only.</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention systems, and secure network configurations.</li>
                <li><strong>Regular Security Audits:</strong> Periodic vulnerability assessments and penetration testing.</li>
                <li><strong>Employee Training:</strong> Regular training on data security and privacy best practices.</li>
                <li><strong>Incident Response:</strong> A robust plan for detecting, responding to, and recovering from data incidents.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Cookies and Tracking Technologies</h2>
            <p>Our digital platforms use cookies and similar technologies to enhance functionality, improve user experience, and analyze platform usage. These tools may collect non-personal data such as browser settings, time spent on pages, and user preferences. We also use them for security purposes, such as fraud detection. You can manage cookie settings through your browser, although disabling certain cookies may affect some platform features and the functionality of our Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Children’s Privacy</h2>
            <p>Our Services are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that personal data of a minor has been inadvertently collected, it will be promptly deleted from our records.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Third-Party Links</h2>
            <p>Our Services may contain links to external websites or applications that are not operated by Tuma Ventures Limited. We are not responsible for the privacy practices, content, or security of such third parties. Users are strongly encouraged to review the privacy policies of any external sites or services they visit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">12. Changes to This Privacy Policy</h2>
            <p>We may periodically update this Privacy Policy to reflect changes in our data practices, legal requirements, or regulatory guidance. Any changes will be posted on this page with a revised "Last Updated" date. Where significant changes are made, we will notify you through our platforms or by email. Your continued use of our Services after the effective date of the revised Policy constitutes your acceptance of the changes.</p>
          </section>

          {/* Section 13: Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold">13. Contact Information</h2>
            <p>For questions, concerns, or to exercise your rights regarding this Privacy Policy or our data practices, please contact:</p>
            <div className="mt-4 p-6 bg-gray-100 rounded-lg not-prose">
              <p className="font-bold text-lg text-gray-900">Tuma Ventures Limited</p>
              <address className="not-italic">
                Registered Office: Iconic Spaces Tan House, 9th Floor, Victoria, Dar es Salaam, Tanzania<br />
                <strong>Email:</strong> <a href="mailto:support@tuma.tz" className="text-blue-600 hover:underline">support@tuma.tz</a><br />
                <strong>Phone:</strong> <a href="tel:+2550758999133" className="text-blue-600 hover:underline">+255 0758 999 133</a><br />
                <strong>Website:</strong> <a href="https://www.tuma.tz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.tuma.tz</a>
              </address>
            </div>
          </section>

          {/* Approval Section */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="font-semibold">Approved:</p>
            <div className="mt-6 flex flex-col md:flex-row justify-between gap-8 not-prose">
              <div className="flex-1">
                <p className="mt-2 font-semibold">Andrew Akwesera Aligula</p>
                <p className="text-sm text-gray-600">Director & Chief Operations Officer</p>
              </div>
              <div className="flex-1">
                <p className="mt-2 font-semibold">Nelson Kigome Mwaura</p>
                <p className="text-sm text-gray-600">Director & Chief Technical Officer</p>
              </div>
            </div>
          </div>
          
          {/* Last Updated */}
          <div className="mt-12 text-center text-gray-500">
            <p><strong>Last Updated:</strong> 6th May 2025</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;