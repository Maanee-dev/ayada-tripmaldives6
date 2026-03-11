import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 2026">
      <div className="space-y-12">
        <section>
          <p className="text-sm text-stone-500 mb-8 italic">
            Maldives Serenity Travels (Sole Proprietorship, Registry: SP02722025) is the data controller for all information collected through ayada.tripmaldives.co. TripMaldives operates as a brand and platform under Maldives Serenity Travels' data protection registration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">1. Introduction</h2>
          <div className="space-y-4">
            <p>Maldives Serenity Travels ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal data when you use ayada.tripmaldives.co (the "Platform").</p>
            <p>We strive to comply with international data protection standards, including the GDPR and CCPA, where applicable to our international clientele.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">2. Information We Collect</h2>
          <div className="space-y-4">
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification:</strong> Name, passport details, date of birth.</li>
              <li><strong>Contact Information:</strong> Email address, phone number, physical address.</li>
              <li><strong>Payment Information:</strong> Processed via secure, PCI-compliant gateways. We do not store full credit card details on our servers.</li>
              <li><strong>Travel Preferences:</strong> Room preferences, dietary requirements, and special occasion details.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">3. How We Use Your Information</h2>
          <div className="space-y-4">
            <p>Your information is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and fulfill your Ayada Maldives booking inquiry.</li>
              <li>To share necessary reservation details with Ayada Maldives resort.</li>
              <li>To prepare travel documentation and vouchers.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To send marketing communications (only with your explicit consent).</li>
              <li>To comply with legal and regulatory requirements in the Maldives.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">4. Legal Basis for Processing (GDPR)</h2>
          <div className="space-y-4">
            <p>For users in the European Economic Area, we process data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contract Performance:</strong> Necessary to fulfill your booking.</li>
              <li><strong>Legal Obligation:</strong> Required for immigration or tax reporting.</li>
              <li><strong>Legitimate Interest:</strong> For fraud prevention and service improvement.</li>
              <li><strong>Consent:</strong> For marketing and non-essential cookies.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">5. Data Sharing & Third Parties</h2>
          <div className="space-y-4">
            <p>We share your data only when necessary:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ayada Maldives:</strong> To secure your reservation.</li>
              <li><strong>Payment Processors:</strong> Such as Stripe or PayPal for secure transactions.</li>
              <li><strong>Government Authorities:</strong> When required by Maldivian law.</li>
            </ul>
            <p className="font-bold">We do not sell your personal data to third parties.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">6. Data Security</h2>
          <div className="space-y-4">
            <p>We implement robust security measures, including SSL encryption and restricted access controls, to protect your data. In the event of a data breach, we have procedures in place to notify affected users and relevant authorities.</p>
            <p>We retain booking records for 7 years to comply with Maldivian tax and legal requirements.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">7. Your Rights</h2>
          <div className="space-y-4">
            <p>You have the right to access, rectify, or erase your personal data. You may also object to processing or request data portability. To exercise these rights, please email <strong>privacy@maldives-serenitytravels.com</strong>.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">8. Contact Information</h2>
          <div className="space-y-4">
            <p><strong>Data Protection Officer:</strong> Hussain Maanee Ali</p>
            <p><strong>Address:</strong> FAITH, 19040, S. Feydhoo, Republic of Maldives</p>
            <p><strong>Email:</strong> privacy@maldives-serenitytravels.com</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
