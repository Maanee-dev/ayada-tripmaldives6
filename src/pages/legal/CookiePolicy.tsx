import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="March 2026">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">1. Introduction</h2>
          <div className="space-y-4">
            <p>We use cookies to enhance your booking experience on ayada.tripmaldives.co. This policy explains what cookies are, how we use them, and how you can manage your preferences.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">2. Cookie Inventory</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-stone-100">
              <thead>
                <tr className="bg-stone-50">
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Name</th>
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Purpose</th>
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Duration</th>
                  <th className="p-4 border border-stone-100 text-[10px] uppercase tracking-widest font-bold">Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">_session_id</td>
                  <td className="p-4 border border-stone-100 text-sm">Essential: Maintains your booking session</td>
                  <td className="p-4 border border-stone-100 text-sm">Session</td>
                  <td className="p-4 border border-stone-100 text-sm">TripMaldives</td>
                </tr>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">_ga</td>
                  <td className="p-4 border border-stone-100 text-sm">Analytics: Tracking site usage</td>
                  <td className="p-4 border border-stone-100 text-sm">2 years</td>
                  <td className="p-4 border border-stone-100 text-sm">Google Analytics</td>
                </tr>
                <tr>
                  <td className="p-4 border border-stone-100 text-sm">_fbp</td>
                  <td className="p-4 border border-stone-100 text-sm">Marketing: Ad tracking and retargeting</td>
                  <td className="p-4 border border-stone-100 text-sm">3 months</td>
                  <td className="p-4 border border-stone-100 text-sm">Meta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">3. Cookie Categorization</h2>
          <div className="space-y-4">
            <p><strong>Essential Cookies:</strong> Necessary for the Platform to function, such as maintaining your booking session or security features. These cannot be disabled.</p>
            <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Platform, allowing us to improve our services.</p>
            <p><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">4. Managing Your Preferences</h2>
          <div className="space-y-4">
            <p>You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. However, disabling essential cookies may affect your ability to use certain features of the Platform.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-tripsans text-stone-900 mb-6">5. Third-Party Cookies</h2>
          <div className="space-y-4">
            <p>We may use third-party services such as Google Analytics and Meta Pixels that set their own cookies. We do not control these cookies and recommend reviewing the privacy policies of these providers.</p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
