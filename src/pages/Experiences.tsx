import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Waves, ChevronRight, Star, Compass, Camera, Heart } from 'lucide-react';
import { ResortData } from '../types';
import { useForm } from '../context/FormContext';
import SEO from '../components/SEO';
import BottomCTA from '../components/BottomCTA';

interface ExperiencesProps {
  resort: ResortData;
}

export default function Experiences({ resort }: ExperiencesProps) {
  const { setShowForm } = useForm();
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Unforgettable Island Activities"
        description="Discover a world of adventure and relaxation at Ayada Maldives. From snorkeling to sunset cruises, explore our unique experiences."
        keywords="Maldives activities, snorkeling Maldives, sunset cruise, island excursions, Ayada experiences"
      />
      {/* Full Width Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden mb-12 md:mb-20">
        <img 
          src={resort.images[3]} 
          className="w-full h-full object-cover" 
          alt="Experiences at Ayada" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 flex items-center gap-3">
              <Compass size={18} /> Curated Adventures
            </p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">Beyond the Horizon</h1>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* Experiences List - Minimalistic */}
      <div className="mb-32">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-tripsans mb-6">Island Adventures</h2>
          <p className="text-stone-500 text-lg font-light leading-relaxed">Each experience at {resort.name} is meticulously designed to immerse you in the natural beauty and vibrant culture of the Maldives.</p>
        </div>

        <div className="space-y-24">
          {resort.features.map((feature, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className={`w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={resort.images[(i % 3) + 1]} 
                  className="w-full h-full object-cover" 
                  alt={feature} 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className={`w-full lg:w-1/2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
                    Signature Experience
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-tripsans mb-6 leading-tight">{feature}</h3>
                <p className="text-stone-500 text-lg leading-relaxed mb-10 font-light">Experience the ultimate Maldivian luxury with curated {feature.toLowerCase()} activities, designed for those who seek both adventure and tranquility.</p>
                <button 
                  onClick={() => navigate('/request-quote')}
                  className="bg-stone-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10"
                >
                  Explore Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <BottomCTA 
        title="Ready for Adventure?"
        description="Let our luxury travel specialists curate a personalized itinerary of experiences tailored to your interests."
        buttonText="Start Planning"
      />
      </div>
    </>
  );
}
