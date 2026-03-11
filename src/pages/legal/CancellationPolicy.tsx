import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

export default function CancellationPolicy() {
  return (
    <LegalPageLayout title="Cancellation & Refund Policy" lastUpdated="March 2026">
      <div className="space-y-12">
        <section>
          <p className="text-sm text-stone-500 mb-8 italic">
            This policy applies to all Ayada Maldives bookings made through TripMaldives, operated by Maldives Serenity Travels.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">1. Standard Cancellation Timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-stone-100">
              <thead>
                <tr className="bg-stone-50">
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Notice Period</th>
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Refund Amount</th>
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">90+ days before arrival</td>
                  <td className="p-4 border border-stone-100 text-sm">Full refund minus processing fee</td>
                  <td className="p-4 border border-stone-100 text-sm">$100 admin fee</td>
                </tr>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">60-89 days before arrival</td>
                  <td className="p-4 border border-stone-100 text-sm">75% refund</td>
                  <td className="p-4 border border-stone-100 text-sm">Deposit retained</td>
                </tr>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">30-59 days before arrival</td>
                  <td className="p-4 border border-stone-100 text-sm">50% refund</td>
                  <td className="p-4 border border-stone-100 text-sm"></td>
                </tr>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">15-29 days before arrival</td>
                  <td className="p-4 border border-stone-100 text-sm">25% refund</td>
                  <td className="p-4 border border-stone-100 text-sm"></td>
                </tr>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">0-14 days before arrival</td>
                  <td className="p-4 border border-stone-100 text-sm">No refund</td>
                  <td className="p-4 border border-stone-100 text-sm"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">2. Resort-Specific Policies</h2>
          <div className="space-y-4">
            <p><strong>Peak Season Restrictions:</strong> Bookings during peak season (typically December 20 to January 10) are non-refundable and require full payment at the time of confirmation.</p>
            <p><strong>Special Offers:</strong> Certain promotional rates or special offer codes may have specific cancellation terms that supersede this standard policy. These will be clearly stated in your quotation.</p>
            <p><strong>Group Bookings:</strong> Bookings for 3 or more rooms are subject to different terms, which will be provided at the time of inquiry.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">3. Modification Policy</h2>
          <div className="space-y-4">
            <p>Date change requests are subject to availability and any applicable rate differences. A modification fee may apply. Name changes and room category upgrades/downgrades are also subject to Resort approval and administrative fees.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">4. Force Majeure</h2>
          <div className="space-y-4">
            <p>In cases of pandemics, natural disasters, government travel bans, or resort closures, Maldives Serenity Travels will mediate between the guest and Ayada Maldives to provide options such as full credit vouchers, rescheduling, or partial refunds.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">5. No-Show Policy</h2>
          <div className="space-y-4">
            <p>Failure to arrive at the Resort on the confirmed arrival date without prior notice will result in 100% forfeiture of the booking value. Late arrivals are treated as cancellations for the missed nights.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">6. Refund Process</h2>
          <div className="space-y-4">
            <p>Refund requests must be submitted in writing to <strong>cancellations@maldives-serenitytravels.com</strong>.</p>
            <p>Refunds are typically processed within 14-21 business days. Refunds will be issued to the original form of payment or via bank transfer in USD. The exchange rate at the time of refund will apply.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">7. Travel Insurance Recommendation</h2>
          <div className="space-y-4">
            <p className="font-bold">We strongly recommend comprehensive travel insurance for all guests.</p>
            <p>Maldives Serenity Travels is not responsible for losses incurred due to lack of insurance coverage for cancellations, medical emergencies, or travel disruptions.</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
