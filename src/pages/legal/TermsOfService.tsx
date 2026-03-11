import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="March 2026">
      <div className="space-y-12">
        <section>
          <p className="text-sm text-stone-500 mb-8 italic">
            TripMaldives is a division of Maldives Serenity Travels, a registered travel agency in the Maldives (License No: BP22342025). All bookings, payments, and contracts are entered into directly with Maldives Serenity Travels. ayada.tripmaldives.co is an operating platform owned and managed by Maldives Serenity Travels.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">1. Definitions</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>"Company," "we," "us," "our"</strong> refers to Maldives Serenity Travels.</li>
            <li><strong>"Platform"</strong> refers to the brand TripMaldives and the website ayada.tripmaldives.co.</li>
            <li><strong>"You," "guest," "customer"</strong> refers to the person making a booking or using the Platform.</li>
            <li><strong>"Resort"</strong> refers to Ayada Maldives, the third-party service provider and supplier of accommodation and resort services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">2. Booking Process & Contract Formation</h2>
          <div className="space-y-4">
            <p>The submission of an inquiry or request for a quotation through the Platform does not constitute a confirmed booking.</p>
            <p>A binding contract between you and Maldives Serenity Travels is formed only when we issue a formal confirmation email and receive the required deposit or full payment as specified in your quotation.</p>
            <p>All payments are processed through the merchant accounts of Maldives Serenity Travels. TripMaldives is a booking platform operated by Maldives Serenity Travels.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">3. Payments & Pricing</h2>
          <div className="space-y-4">
            <p><strong>Deposit Requirements:</strong> A deposit, typically 30% of the total booking value, is required at the time of confirmation unless otherwise specified in your quotation.</p>
            <p><strong>Final Payment:</strong> The balance of the total booking value must be paid no later than 60 days prior to your arrival date, or as specified in your booking confirmation.</p>
            <p><strong>Currency:</strong> All prices are quoted in United States Dollars (USD). If payment is made in another currency, the exchange rate applied will be determined by our bank at the time of processing.</p>
            <p><strong>Payment Methods:</strong> We accept major credit cards and bank transfers. Credit card transactions may be subject to a processing surcharge as permitted by law.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">4. Cancellation & Refund Policy</h2>
          <div className="space-y-4">
            <p>Cancellations must be submitted in writing to Maldives Serenity Travels. Our standard cancellation tiers are as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>90+ days before arrival: Full refund minus a $100 administrative fee.</li>
              <li>60-89 days before arrival: 75% refund (deposit retained).</li>
              <li>30-59 days before arrival: 50% refund.</li>
              <li>0-29 days before arrival: No refund.</li>
            </ul>
            <p><strong>Force Majeure:</strong> In the event of force majeure (e.g., pandemics, natural disasters, political instability), Maldives Serenity Travels will work with the Resort to provide credit vouchers or rescheduling options where possible.</p>
            <p><strong>Travel Insurance:</strong> We strongly recommend that all guests purchase comprehensive travel insurance to cover unforeseen cancellations or medical emergencies.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">5. Responsibilities & Liabilities</h2>
          <div className="space-y-4">
            <p>Maldives Serenity Travels acts solely as an intermediary between the guest and Ayada Maldives. We do not operate the Resort and are not liable for failures in resort services, maintenance issues, or personal injury occurring on resort premises.</p>
            <p><strong>Guest Responsibilities:</strong> It is your responsibility to ensure you possess a valid passport (minimum 6 months validity), necessary visas, and meet all health entry requirements for the Maldives.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">6. Intellectual Property</h2>
          <div className="space-y-4">
            <p>All content on this Platform is owned by Maldives Serenity Travels or its licensors. Resort images and trademarks are the property of Ayada Maldives and are used under license or agreement.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">7. Governing Law & Dispute Resolution</h2>
          <div className="space-y-4">
            <p>These Terms of Service are governed by the laws of the Republic of Maldives. Any disputes arising from these terms or your booking shall be resolved in the courts of the Maldives or through arbitration in the Maldives.</p>
            <p>Complaints should be directed to the Maldives Serenity Travels office at FAITH, 19040, S. Feydhoo, Maldives.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">8. Modifications</h2>
          <div className="space-y-4">
            <p>We reserve the right to update these terms at any time. Changes will be effective immediately upon posting to the Platform. Continued use of the Platform constitutes acceptance of the updated terms.</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
