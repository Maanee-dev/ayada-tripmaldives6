import React, { useState } from 'react';
import { Waves, CheckCircle2, Utensils, GlassWater, Zap, Star, Plane, Coffee, Bike, Heart, Sparkles, Clock } from 'lucide-react';
import { ResortData } from '../types';
import SEO from '../components/SEO';
import BottomCTA from '../components/BottomCTA';

interface AllInclusiveProps {
  resort: ResortData;
}

export default function AllInclusive({ resort }: AllInclusiveProps) {
  const [activeTab, setActiveTab] = useState<'crystal' | 'diamond'>('crystal');

  const crystalInclusions = {
    arrival: [
      "Meet and assist on arrival and departure by Ayada Airport Ambassadors",
      "Lounge access upon arrival at domestic terminal",
      "Welcome drink upon arrival at Ayada Maldives"
    ],
    dining: [
      "Breakfast and dinner served in Magu Restaurant (International buffet with daily changing themes)",
      "Lunch served in Ocean Breeze over-water restaurant (Modern European dishes)",
      "A la carte lunch menu served in Zero Degree poolside restaurant and bar",
      "Up to $50 discount per adult for dinner at any other restaurant"
    ],
    bar: [
      "Ayada signature beverage menu in Magu, Zero Degree, Kai, Ocean Breeze, Mizu, Sea Salt BBQ and Private Dinners",
      "Wide selection of alcoholic and non-alcoholic cocktails, fine wines, beers and premium spirits",
      "Variety of fruit juices, milkshakes, soft drinks, tea and coffee served until midnight"
    ],
    activities: [
      "Complimentary use of snorkeling equipment and kayak",
      "Complimentary daily entertainment (Live music, Maldivian show, Movie Night, Carnival, Lightshow, Fireshow, Sunset DJ)",
      "Access to recreation & fitness area (Tennis court, yoga studio, football, volleyball, gym, water chess, PlayStation)",
      "Complimentary bicycles for the duration of the stay",
      "Zuzuu kids club access for children"
    ],
    villa: [
      "Complimentary wifi in the villa and covering outside private pool"
    ]
  };

  const diamondInclusions = {
    arrival: [
      "Meet and assist on arrival and departure by Ayada Airport Ambassadors",
      "Lounge access upon arrival at domestic terminal",
      "Welcome drink upon arrival at Ayada Maldives",
      "Complimentary early check in and late check-out (subject to availability)"
    ],
    dining: [
      "Breakfast and dinner served in Magu Restaurant (International buffet)",
      "Lunch and dinner served in Ocean Breeze (Set menu of modern European dishes)",
      "A la carte lunch menu served in Zero Degree poolside restaurant and bar",
      "A la carte dinner menu served in Kai Restaurant (Far-eastern and Asian cuisine)",
      "Access to Mizu Japanese Teppanyaki Restaurant for dinner once during the stay",
      "Bar snacks and home-made ice cream served in Zero Degree during the day",
      "Sea Salt beach barbeque dinner with fireshow (USD 50 food credit per adult)"
    ],
    bar: [
      "Ayada signature beverage menu in all outlets (Cocktails, fine wines, beers, premium spirits)",
      "Daily afternoon tea including sweet and savory delights",
      "Sunset Cheese and wine pairing at Ile de Joie (6pm till late)",
      "Daily evening shisha experience at authentic Turkish style Ottoman Lounge"
    ],
    activities: [
      "Two complimentary excursions per person (Aquarium snorkeling, sunset fishing, sunset cruise, or glass bottom boat)",
      "Complimentary 60-minute massage per adult at AySpa",
      "Complimentary use of snorkeling equipment and kayak",
      "Complimentary bicycles for the duration of the stay",
      "Complimentary daily entertainment program",
      "Access to recreation & fitness area and Zuzuu kids club"
    ],
    villa: [
      "Diamond Mini Bar with beers, wines, soft drinks, water and snacks",
      "Complimentary laundry service",
      "Minimum 7 night stay required"
    ]
  };

  const activeData = activeTab === 'crystal' ? crystalInclusions : diamondInclusions;

  return (
    <div className="animate-in fade-in duration-700 bg-[#f8f7f4]">
      <SEO 
        title="Premium All-Inclusive Plan"
        description="Enjoy a worry-free vacation with our Crystal All-Inclusive plan. Exquisite dining, premium drinks, and exciting activities included."
        keywords="Maldives all inclusive, Ayada Maldives packages, premium all inclusive Maldives, worry-free vacation"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-16 md:mb-24 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/f3692870-1cd9-4a69-81df-3dfec9e03dd7/image00002.jpeg?format=2500w" 
          className="w-full h-full object-cover"
          alt="All Inclusive Maldives"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">The Ultimate Carefree Experience</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">Plan Your Indulgence</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Tab Selection */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-full shadow-sm border border-stone-100 flex gap-2">
            <button 
              onClick={() => setActiveTab('crystal')}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'crystal' ? 'bg-stone-900 text-white shadow-lg' : 'text-stone-400 hover:text-stone-900'}`}
            >
              Crystal All Inclusive
            </button>
            <button 
              onClick={() => setActiveTab('diamond')}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'diamond' ? 'bg-emerald-600 text-white shadow-lg' : 'text-stone-400 hover:text-stone-900'}`}
            >
              Diamond All Inclusive
            </button>
          </div>
        </div>

        {/* Package Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-tripsans text-stone-900 mb-8 leading-tight">
              {activeTab === 'crystal' ? 'Crystal All Inclusive' : 'Diamond All Inclusive'}
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
              {activeTab === 'crystal' 
                ? "The Crystal package is designed for a seamless and indulgent holiday, covering all essentials from gourmet buffet dining to premium beverages and a wide array of island activities."
                : "The Diamond package offers the pinnacle of luxury with expanded dining options including Teppanyaki and Asian cuisine, spa treatments, excursions, and premium in-villa services for stays of 7 nights or more."
              }
            </p>

            <div className="space-y-16">
              {/* Dining */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-stone-100 rounded-2xl">
                    <Utensils className="text-stone-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-tripsans text-stone-900">Dining Experiences</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeData.dining.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={16} />
                      <p className="text-stone-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bar & Lounge */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-stone-100 rounded-2xl">
                    <GlassWater className="text-stone-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-tripsans text-stone-900">Bar & Lounge</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeData.bar.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={16} />
                      <p className="text-stone-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Activities */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-stone-100 rounded-2xl">
                    <Star className="text-stone-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-tripsans text-stone-900">Activities & Entertainment</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeData.activities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={16} />
                      <p className="text-stone-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-stone-900 text-white p-8 rounded-[32px] shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Plane size={20} className="text-emerald-400" />
                <h4 className="font-tripsans text-xl">Arrival & Departure</h4>
              </div>
              <ul className="space-y-4">
                {activeData.arrival.map((item, i) => (
                  <li key={i} className="text-stone-400 text-sm leading-relaxed flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-stone-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={20} className="text-emerald-600" />
                <h4 className="font-tripsans text-xl text-stone-900">In Villa Experience</h4>
              </div>
              <ul className="space-y-4">
                {activeData.villa.map((item, i) => (
                  <li key={i} className="text-stone-500 text-sm leading-relaxed flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-[32px] border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-emerald-600" />
                <h4 className="font-tripsans text-xl text-emerald-900">Validity</h4>
              </div>
              <p className="text-emerald-700 text-sm font-medium">
                Valid from 05 January 2026 – 04 January 2027
              </p>
              <p className="text-emerald-600 text-xs mt-4 italic">
                * Supplement is applicable on selected menu items
              </p>
            </div>
          </div>
        </div>
        <BottomCTA 
          title="Ready for a Carefree Vacation?"
          description="Contact our specialists to find the perfect all-inclusive plan for your stay at Ayada Maldives."
        />
      </div>
    </div>
  );
}
