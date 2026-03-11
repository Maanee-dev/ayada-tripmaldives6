import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

export default function BookingConditions() {
  return (
    <LegalPageLayout title="Booking Conditions & Disclaimers" lastUpdated="March 2026">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">1. Price Validity</h2>
          <div className="space-y-4">
            <p>Quotations provided through the Platform are valid for 7 days from the date of issue. All rates are subject to resort availability and may change until a deposit is received and the booking is formally confirmed.</p>
            <p>Prices are subject to currency fluctuations and changes in Maldivian government taxes (e.g., TGST, Green Tax).</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">2. Accuracy of Information</h2>
          <div className="space-y-4">
            <p>Resort descriptions, amenities, and images are based on data provided by Ayada Maldives. While we strive for accuracy, images are representative and specific room views or decor may vary. Amenities are subject to resort operational changes without prior notice.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">3. Passport & Visa</h2>
          <div className="space-y-4">
            <p>Guests must possess a passport valid for at least 6 months beyond the date of stay. Visa requirements are the sole responsibility of the guest. Maldives Serenity Travels provides documentation support for visa applications but does not guarantee visa issuance.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">4. Health & Safety</h2>
          <div className="space-y-4">
            <p>Travel health insurance is mandatory. Guests must comply with all health entry requirements for the Maldives. Maldives Serenity Travels does not guarantee the health and safety standards of the Resort, as these are managed independently by Ayada Maldives.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">5. Special Requests</h2>
          <div className="space-y-4">
            <p>Special requests such as honeymoon amenities, dietary requirements, or accessibility needs are subject to Resort confirmation and are not guaranteed by Maldives Serenity Travels.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">6. Complaints Procedure</h2>
          <div className="space-y-4">
            <p><strong>In-Resort:</strong> If you encounter issues during your stay, please contact Ayada Maldives management immediately to allow them the opportunity to resolve the matter.</p>
            <p><strong>Post-Trip:</strong> Formal complaints must be submitted in writing to Maldives Serenity Travels within 14 days of your departure from the Resort.</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
