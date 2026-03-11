import React, { useState } from 'react';
import { Waves, CheckCircle2, Heart, Wind, ShieldCheck, Star, Clock, Sparkles, Droplets, Coffee, Bath, User, Sun, ShoppingBag, Check } from 'lucide-react';
import { ResortData } from '../types';
import { useInquiry } from '../context/InquiryContext';
import SEO from '../components/SEO';

import BottomCTA from '../components/BottomCTA';

interface AySpaProps {
  resort: ResortData;
}

export default function AySpa({ resort }: AySpaProps) {
  const [activeCategory, setActiveCategory] = useState('Massage Therapies');
  const { items, addItem } = useInquiry();

  const handleAddToInquiry = (item: { name: string, duration: string, price: string }) => {
    addItem({
      id: `spa-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      category: 'AySpa',
      name: item.name,
      price: `$${item.price}++`,
    });
  };

  const isInBucket = (name: string) => {
    const id = `spa-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return items.some(item => item.id === id);
  };

  const menuCategories = [
    {
      name: 'Massage Therapies',
      items: [
        { name: 'Aroma', duration: '60/90 mins', price: '120/190' },
        { name: 'Balinese', duration: '60/90 mins', price: '120/190' },
        { name: 'Hot Stone', duration: '60/90 mins', price: '120/190' },
        { name: 'Swedish', duration: '60/90 mins', price: '120/190' },
        { name: 'Traditional Thai', duration: '60/90 mins', price: '120/190' },
        { name: 'Japanese Shiatsu', duration: '60/90 mins', price: '120/190' },
        { name: 'Foot Reflexology', duration: '60/90 mins', price: '120/190' },
      ]
    },
    {
      name: 'Signature Rituals',
      items: [
        { name: 'Balancing Ritual', duration: '120 mins', price: '280' },
        { name: 'Detox Ritual', duration: '120 mins', price: '280' },
        { name: 'De-Stress Ritual', duration: '120 mins', price: '280' },
        { name: 'Intensive Muscle Release Ritual', duration: '120 mins', price: '280' },
        { name: 'Skin Nourishing Ritual', duration: '90 mins', price: '210' },
        { name: 'Tropical Aroma Rain', duration: '90 mins', price: '210' },
      ]
    },
    {
      name: 'Facial Therapies',
      items: [
        { name: 'Age-Defying Facial', duration: '90 mins', price: '220' },
        { name: 'Regenerating Facial', duration: '60 mins', price: '150' },
        { name: 'De-Sensitiser Facial', duration: '60 mins', price: '150' },
        { name: 'Re-Hydrator Facial', duration: '60 mins', price: '150' },
        { name: 'Skin Radiance Facial', duration: '60 mins', price: '150' },
        { name: 'Skin Purifying Facial', duration: '60 mins', price: '150' },
      ]
    },
    {
      name: 'Hammam Rituals',
      items: [
        { name: 'Indulgence Hammam Ritual', duration: '60 mins', price: '140' },
        { name: 'Revitalizing Body Scrub', duration: '30 mins', price: '85' },
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-[#fdfcfb]">
      <SEO 
        title="Award-Winning Spa & Wellness"
        description="Rejuvenate your mind, body, and soul at AySpa. Experience traditional Turkish hammam and world-class wellness treatments."
        keywords="Maldives spa, wellness resort Maldives, Ayada Maldives spa, Turkish hammam Maldives"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-16 md:mb-24 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561440881384-97H8T15DQOVOZIUZ1L88/57396_ayada-maldives-12.jpg?format=2500w" 
          className="w-full h-full object-cover"
          alt="AySpa Maldives"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/30 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Award-Winning Wellness Sanctuary</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-4 md:mb-6 leading-[0.9] tracking-tighter">AySpa</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 md:mb-32 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-tripsans mb-6 md:mb-8 leading-tight text-stone-900">A 3500 sqm Sanctuary for the Soul</h2>
            <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-8">
              Ayada Maldives’ 3500 sqm AySpa has been designed to rejuvenate the body, mind and spirit. The spa showcases terrazzo floors with marble and timber hues to reinforce an indigenous feel to your spa experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
                  <Sparkles size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-500">Turkish Hammam</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
                  <Droplets size={20} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-500">Vichy Shower</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-[48px] overflow-hidden aspect-[4/3] shadow-2xl">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561435577404-QWUO8ZTN7CGZZ625BLM8/ayada+maldives+spa.jpg?format=2500w" 
              className="w-full h-full object-cover"
              alt="Spa Interior"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Relaxation Area */}
        <div className="mb-24 md:mb-32">
          <div className="bg-stone-900 text-white rounded-[40px] md:rounded-[64px] p-8 md:p-20 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-5xl font-tripsans mb-6 md:mb-8">Beautiful Relaxation Area</h3>
                <p className="text-stone-400 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10">
                  Your spa experience does not end after finishing your treatment. You are more than welcome to enjoy the beautiful relaxation area with heated and cold plunge pools, steam rooms and saunas separately for female and male guests.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Heated & Cold Plunge Pools', 'Steam Rooms & Saunas', 'Healthy Juices & Teas'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
                      <span className="text-xs uppercase tracking-widest font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <img src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561455006224-EM87D8J9SAE1FBN0Z7Q9/18666254-jpg-ayspa--v18666254-1800-d9487b6e4-w1800-h1200-q75.jpg?format=2500w" className="rounded-2xl md:rounded-3xl h-48 md:h-64 w-full object-cover" alt="Plunge Pool" referrerPolicy="no-referrer" />
                <img src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561440321737-VFVMK51TUV3RV7ACUVV4/image002_large.jpg?format=2500w" className="rounded-2xl md:rounded-3xl h-48 md:h-64 w-full object-cover mt-6 md:mt-8" alt="Sauna" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Suites */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-tripsans text-stone-900 mb-4">Treatment Suites</h3>
            <p className="text-stone-500 font-light">8 spacious and tranquil treatment villas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Steam Shower', icon: Wind },
              { title: 'Private Bathroom', icon: ShieldCheck },
              { title: 'Outdoor Courtyard', icon: Sun },
              { title: 'Waterfall Shower', icon: Droplets }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-stone-100 text-center hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 mx-auto mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h4 className="font-tripsans text-xl mb-2">{item.title}</h4>
                <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">In-Suite Facility</p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Menu */}
        <div className="mb-24 md:mb-32">
          <div className="bg-white rounded-[40px] md:rounded-[64px] shadow-2xl border border-stone-100 overflow-hidden">
            <div className="bg-stone-900 p-10 md:p-20 text-center text-white">
              <h3 className="text-3xl md:text-6xl font-tripsans mb-4 md:mb-6">AySpa Treatment Menu</h3>
              <p className="text-stone-400 max-w-2xl mx-auto font-light text-sm md:text-base">Explore our curated selection of rituals and therapies designed for total rejuvenation.</p>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-12">
                {menuCategories.map((cat) => (
                  <button 
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold transition-all ${activeCategory === cat.name ? 'bg-white text-stone-900 shadow-lg' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 md:gap-y-8">
                {menuCategories.find(c => c.name === activeCategory)?.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start md:items-center border-b border-stone-100 pb-4 group gap-4">
                    <div className="flex-1">
                      <h4 className="font-tripsans text-lg md:text-xl text-stone-900 group-hover:text-emerald-600 transition-colors leading-tight">{item.name}</h4>
                      <p className="text-stone-400 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-1">{item.duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-stone-900 font-tripsans text-lg md:text-xl whitespace-nowrap">
                        <span className="text-[10px] md:text-xs text-stone-400 font-sans mr-1">US$</span>
                        {item.price}
                      </div>
                      <button 
                        onClick={() => handleAddToInquiry(item)}
                        className={`p-2 rounded-full transition-all ${isInBucket(item.name) ? 'bg-emerald-600 text-white' : 'bg-stone-50 text-stone-400 hover:bg-emerald-600 hover:text-white'}`}
                        title={isInBucket(item.name) ? "Added to Inquiry" : "Add to Inquiry"}
                      >
                        {isInBucket(item.name) ? <Check size={16} /> : <ShoppingBag size={16} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <p className="text-stone-400 text-xs uppercase tracking-[0.2em] font-bold">
                  All prices are in USD, subject to a 10% service charge and 17% TGST
                </p>
              </div>
            </div>
          </div>
        </div>
        <BottomCTA 
          title="Ready for Total Rejuvenation?"
          description="Contact our wellness specialists to book your treatments or curate a personalized wellness journey at AySpa."
        />
      </div>
    </div>
  );
}
