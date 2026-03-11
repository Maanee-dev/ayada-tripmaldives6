import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Waves, Gift, Plane, ChevronRight, Clock, Tag, Info, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { ResortData, Offer, supabase } from '../types';
import { useForm } from '../context/FormContext';
import SEO from '../components/SEO';

interface OffersProps {
  resort: ResortData;
}

export default function Offers({ resort }: OffersProps) {
  const { setShowForm } = useForm();
  const navigate = useNavigate();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchOffers() {
      try {
        const { data, error } = await supabase
          .from('offers')
          .select('*')
          .eq('resort_id', resort.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOffers(data || []);
      } catch (err) {
        console.error('Error fetching offers:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, [resort.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-stone-900 rounded-full animate-spin" />
      </div>
    );
  }

  const totalPages = Math.ceil(offers.length / itemsPerPage);
  const paginatedOffers = offers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <SEO 
        title="Exclusive Deals & Packages"
        description="Unlock special offers and exclusive packages for your stay at Ayada Maldives. Best price guarantee and complimentary benefits."
        keywords="Maldives resort offers, Ayada Maldives deals, luxury travel packages, Maldives honeymoon offers"
      />
      {/* Header */}
      <div className="mb-12 md:mb-20 text-center">
        <p className="text-emerald-600 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Limited Time Opportunities</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-tripsans mb-6 leading-tight">Exclusive Island Offers</h1>
        <p className="text-stone-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
          Discover a collection of curated experiences and exceptional value, designed to make your stay at {resort.name} even more unforgettable.
        </p>
      </div>

      {/* Offers List - Minimalistic */}
      <div className="space-y-24 mb-24">
        {paginatedOffers.map((offer, i) => (
          <div key={offer.id} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className={`w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img 
                src={offer.image} 
                className="w-full h-full object-cover" 
                alt={offer.title} 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className={`w-full lg:w-1/2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
                  {offer.category}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                  <Clock size={14} /> Valid until {new Date(offer.expiry_date).toLocaleDateString()}
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-tripsans mb-6 leading-tight">{offer.title}</h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-8 font-light line-clamp-3">{offer.description}</p>
              
              <div className="space-y-4 mb-10">
                <h4 className="text-[10px] uppercase tracking-widest text-stone-900 font-bold">Inclusions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {offer.inclusions.slice(0, 4).map((inc, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-stone-500 font-light">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> {inc}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setSelectedOffer(offer)}
                  className="bg-stone-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10"
                >
                  View Details
                </button>
                <button 
                  onClick={() => navigate('/request-quote')}
                  className="border border-stone-200 text-stone-900 px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all"
                >
                  Book Offer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-8 mb-24">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-4 rounded-full border border-stone-100 text-stone-400 disabled:opacity-20 hover:text-stone-900 hover:border-stone-900 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-full text-[10px] font-bold transition-all ${
                  currentPage === i + 1 
                    ? 'bg-stone-900 text-white shadow-lg' 
                    : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-4 rounded-full border border-stone-100 text-stone-400 disabled:opacity-20 hover:text-stone-900 hover:border-stone-900 transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* Modal for Offer Details */}
      {selectedOffer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setSelectedOffer(null)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
            <button 
              onClick={() => setSelectedOffer(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors z-10"
            >
              ×
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-48 md:h-auto relative">
                <img src={selectedOffer.image} className="w-full h-full object-cover" alt={selectedOffer.title} referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 md:p-10 lg:p-14">
                <p className="text-emerald-600 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-bold mb-4">{selectedOffer.category}</p>
                <h2 className="text-2xl md:text-3xl font-tripsans mb-6">{selectedOffer.title}</h2>
                <p className="text-stone-500 text-sm md:text-base mb-8 leading-relaxed font-light">{selectedOffer.description}</p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {selectedOffer.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-stone-600 font-light">
                          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedOffer(null);
                    navigate('/request-quote');
                  }}
                  className="w-full mt-8 md:mt-12 bg-stone-900 text-white py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/20"
                >
                  Inquire About This Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transfers Section */}
      <div className="bg-stone-50 rounded-2xl p-8 md:p-12 lg:p-24 mb-20 text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Seamless Arrival</p>
          <h2 className="text-3xl md:text-5xl font-tripsans mb-8 leading-tight">Island Transfers</h2>
          <p className="text-stone-500 text-sm md:text-lg leading-relaxed font-light mb-12">
            Your journey to paradise is handled with the utmost care. From the moment you land at Velana International Airport, our team is there to guide you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {resort.transfers.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-stone-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <Plane size={24} />
                </div>
                <h3 className="text-lg font-tripsans mb-2">{t.replace(/_/g, ' ')}</h3>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  Enjoy a scenic 50-minute domestic flight followed by a 45-minute luxury speedboat journey to the resort's private island.
                </p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => navigate('/request-quote')}
            className="bg-stone-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/20"
          >
            Check Eligibility
          </button>
        </div>
      </div>
    </div>
  );
}
