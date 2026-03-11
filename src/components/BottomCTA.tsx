import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BottomCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  secondaryButtonText?: string;
}

export default function BottomCTA({ 
  title = "Ready to Plan Your Perfect Escape?", 
  description = "Our luxury travel specialists are available 24/7 to help you curate your dream Maldivian vacation.",
  buttonText = "Request a Quote",
  secondaryButtonText = "Talk to a Specialist"
}: BottomCTAProps) {
  const navigate = useNavigate();

  return (
    <div className="mt-20 md:mt-32 relative rounded-2xl overflow-hidden bg-stone-50 p-8 md:p-12 lg:p-24 text-center">
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Personalized Service</p>
        <h2 className="text-3xl md:text-5xl font-tripsans mb-8 leading-tight">{title}</h2>
        <p className="text-stone-500 text-sm md:text-lg mb-12 leading-relaxed font-light">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/request-quote')}
            className="bg-stone-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/20 flex items-center justify-center gap-2"
          >
            {buttonText} <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => navigate('/request-quote')}
            className="bg-white text-stone-900 border border-stone-200 px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-stone-50 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
