import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Tag, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../types';

interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  link: string;
  code?: string;
}

export default function OfferPopup() {
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const { data, error } = await supabase
          .from('offers')
          .select('*')
          .limit(5);

        if (error) throw error;

        if (data && data.length > 0) {
          // Check if user has seen an offer recently
          const lastSeen = localStorage.getItem('last_offer_seen');
          const now = Date.now();
          
          // Show after 8 seconds if not seen in the last 24 hours
          if (!lastSeen || now - parseInt(lastSeen) > 24 * 60 * 60 * 1000) {
            const timer = setTimeout(() => {
              const randomOffer = data[Math.floor(Math.random() * data.length)];
              setCurrentOffer({
                id: randomOffer.id,
                title: randomOffer.title,
                subtitle: randomOffer.discount || 'Special Offer',
                description: randomOffer.description,
                image: randomOffer.image || 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80',
                cta: 'View Offer',
                link: '/offers',
                code: randomOffer.slug?.toUpperCase().replace(/-/g, '')
              });
              setIsVisible(true);
              localStorage.setItem('last_offer_seen', now.toString());
            }, 8000);

            return () => clearTimeout(timer);
          }
        }
      } catch (err) {
        console.error('Error fetching offers for popup:', err);
      }
    }

    fetchOffers();
  }, []);

  if (!currentOffer) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md text-white md:text-stone-400 md:bg-transparent hover:text-stone-900 transition-colors rounded-full"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 h-48 md:h-auto relative">
              <img 
                src={currentOffer.image} 
                alt={currentOffer.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent md:hidden" />
              <div className="absolute bottom-4 left-6 md:hidden">
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={10} /> Limited Offer
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <div className="hidden md:block mb-4">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1">
                  <Sparkles size={10} /> Limited Time Offer
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-tripsans text-stone-900 mb-2">{currentOffer.title}</h3>
              <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">{currentOffer.subtitle}</p>
              
              <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light">
                {currentOffer.description}
              </p>

              {currentOffer.code && (
                <div className="mb-8 p-3 bg-stone-50 border border-dashed border-stone-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2 text-stone-400">
                    <Tag size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Promo Code</span>
                  </div>
                  <span className="font-mono font-bold text-stone-900">{currentOffer.code}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={currentOffer.link}
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-stone-900 text-white py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all text-center flex items-center justify-center gap-2"
                >
                  {currentOffer.cta} <ChevronRight size={14} />
                </Link>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-stone-50 text-stone-500 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-all"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
