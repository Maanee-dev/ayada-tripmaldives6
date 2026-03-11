import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ResortData, supabase } from './types';
import { ayadaData } from './data';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Offers from './pages/Offers';
import Dining from './pages/Dining';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import RequestQuote from './pages/RequestQuote';
import ThankYou from './pages/ThankYou';
import SearchPage from './pages/Search';
import AllInclusive from './pages/AllInclusive';
import AySpa from './pages/AySpa';
import Weddings from './pages/Weddings';
import Contact from './pages/Contact';

// Activity Pages
import Excursions from './pages/activities/Excursions';
import Watersports from './pages/activities/Watersports';
import Diving from './pages/activities/Diving';
import SportsRecreation from './pages/activities/SportsRecreation';
import KidsClub from './pages/activities/KidsClub';
import ExoticAnimals from './pages/activities/ExoticAnimals';

// Legal Pages
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CancellationPolicy from './pages/legal/CancellationPolicy';
import BookingConditions from './pages/legal/BookingConditions';
import CookiePolicy from './pages/legal/CookiePolicy';

import { FormProvider } from './context/FormContext';
import { InquiryProvider } from './context/InquiryContext';
import InquiryBucket from './components/InquiryBucket';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [resort, setResort] = useState<ResortData | null>(ayadaData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResort() {
      try {
        const { data, error } = await supabase
          .from('resorts')
          .select('*')
          .eq('slug', 'ayada-maldives')
          .single();

        if (error) throw error;
        // Merge Supabase data with our detailed local data
        // We prioritize local room_types as they have the latest images and maps
        const mergedRoomTypes = ayadaData.room_types.map(localRoom => {
          const remoteRoom = data?.room_types?.find((r: any) => r.id === localRoom.id || r.name === localRoom.name);
          return remoteRoom ? { ...localRoom, ...remoteRoom } : localRoom;
        });

        setResort({ 
          ...ayadaData, 
          ...data, 
          room_types: mergedRoomTypes 
        });
      } catch (err) {
        console.error('Error fetching resort:', err);
        // Fallback to local data if Supabase fails
        setResort(ayadaData);
      } finally {
        setLoading(false);
      }
    }

    fetchResort();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-stone-200 border-t-stone-900 rounded-full animate-spin" />
          <p className="text-stone-400 text-sm uppercase tracking-widest font-bold">Loading Paradise...</p>
        </div>
      </div>
    );
  }

  if (!resort) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6 text-center">
        <div>
          <p className="text-stone-900 font-tripsans text-xl mb-4">Resort not found.</p>
          <p className="text-stone-500 text-sm">Please check your connection or try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <InquiryProvider>
          <FormProvider>
            <Layout resort={resort}>
              <Routes>
                {/* ... existing routes ... */}
                <Route path="/" element={<Home resort={resort} />} />
                <Route path="/experiences" element={<Experiences resort={resort} />} />
                <Route path="/offers" element={<Offers resort={resort} />} />
                <Route path="/dining" element={<Dining resort={resort} />} />
                <Route path="/rooms" element={<Rooms resort={resort} />} />
                <Route path="/rooms/:roomId" element={<RoomDetail resort={resort} />} />
                <Route path="/request-quote" element={<RequestQuote resort={resort} />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/search" element={<SearchPage resort={resort} />} />
                
                <Route path="/all-inclusive" element={<AllInclusive resort={resort} />} />
                <Route path="/ayspa" element={<AySpa resort={resort} />} />
                <Route path="/weddings" element={<Weddings resort={resort} />} />
                <Route path="/contact" element={<Contact resort={resort} />} />

                {/* Activity Routes */}
                <Route path="/activities/excursions" element={<Excursions resort={resort} />} />
                <Route path="/activities/watersports" element={<Watersports resort={resort} />} />
                <Route path="/activities/diving" element={<Diving resort={resort} />} />
                <Route path="/activities/sports-recreation" element={<SportsRecreation resort={resort} />} />
                <Route path="/activities/zuzuu-kids-club" element={<KidsClub resort={resort} />} />
                <Route path="/activities/exotic-animals" element={<ExoticAnimals resort={resort} />} />
                
                {/* Legal Routes */}
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                <Route path="/booking-conditions" element={<BookingConditions />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <InquiryBucket />
            </Layout>
          </FormProvider>
        </InquiryProvider>
      </Router>
    </HelmetProvider>
  );
}
