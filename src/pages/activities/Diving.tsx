import React from 'react';
import { Waves, Anchor, Camera, ShieldCheck, CheckCircle2, Map as MapIcon, Info, Fish, Compass, ShoppingBag, Check } from 'lucide-react';
import { ResortData } from '../../types';
import { useInquiry } from '../../context/InquiryContext';
import SEO from '../../components/SEO';

interface DivingProps {
  resort: ResortData;
}

export default function Diving({ resort }: DivingProps) {
  const { items, addItem } = useInquiry();

  const handleAddToInquiry = (item: any) => {
    addItem({
      id: `diving-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      category: 'Diving',
      name: item.name,
      price: `$${item.price}`,
    });
  };

  const isInBucket = (name: string) => {
    const id = `diving-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return items.some(item => item.id === id);
  };

  const programs = [
    {
      title: "Discover scuba diving",
      description: "This program lets you experience the thrill of diving under the supervision of a Instructor in easy conditions. After a short theory lesson you will make your fun dive.",
      icon: Waves,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/fe/91/f6/a-wonderfull-scuba-diving.jpg"
    },
    {
      title: "Course for Continuing education diving",
      description: "An experienced team of instructors would be delighted to make you diver to the wonders of diving with a range of courses. We are a PADI 5* Dive Center and train following PADI's standard system.",
      icon: ShieldCheck,
      image: "https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1537419032170-3BUHPZ30KOO4ZW97GUT5/nemo2.JPG?format=750w"
    },
    {
      title: "Guided fun dive",
      description: "The Maldives is one of the most beautiful places on earth and is waiting for you to come and explore it. We’ve selected some incredible places in this little corner of paradise and it’s our great pleasure to help you discover them with us.",
      icon: Anchor,
      image: "https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1537419040185-4YU016FOWI1KC69CCY77/nemo4.JPG?format=750w"
    }
  ];

  const priceList = [
    {
      category: "GUIDED DIVING",
      items: [
        { name: "Single dive", price: 117, info: "Valid over the entire holiday period" },
        { name: "Night dive", price: 150, info: "Valid over the entire holiday period" },
        { name: "5 dive package", price: 511, info: "Valid over the entire holiday period" },
        { name: "10 dive package", price: 920, info: "Valid over the entire holiday period" },
        { name: "15 dive package", price: 1236, info: "Valid over the entire holiday period" },
      ],
      note: "DIVING PACKAGE CAN NOT BE SHARED"
    },
    {
      category: "COURSE FOR BEGINNERS",
      items: [
        { name: "Scuba review", price: 165, info: "Confined water training & 1 dive" },
        { name: "Additional discover scuba dive", price: 202, info: "Max 12M with instructor/dive master" },
        { name: "Bubble-maker", price: 247, info: "Confined water dive (kids for 8-9 yrs)" },
        { name: "Discover scuba dive", price: 247, info: "Confined water training & dive 10 yrs or above" },
        { name: "Referral open water dive 2", price: 600, info: "4 training dive" },
        { name: "Referral open water dive 1", price: 800, info: "Confined water training & 4 dives" },
        { name: "PADI open water diver", price: 1080, info: "Confined water training & 4 dives, manual, logbook, certification" },
      ]
    },
    {
      category: "CONTINUING EDUCATION",
      items: [
        { name: "Adventure deep", price: 187, info: "1 deep adventure dive of advanced course" },
        { name: "Emergency first response", price: 210, info: "Manual, certification" },
        { name: "Speciality (photo, drift, deep)", price: 395, info: "2 dive & certification" },
        { name: "Adventure diver", price: 590, info: "3 dive, manual, certification" },
        { name: "Rescue diver", price: 790, info: "3 dive, manual, certification" },
        { name: "Advanced open water diver", price: 900, info: "5 dives, manual, certification" },
        { name: "Divemaster", price: 1250, info: "Extra charge for manual" },
      ]
    },
    {
      category: "REMARKS",
      items: [
        { name: "Passenger", price: 65, info: "Per trip" },
        { name: "Photographer", price: 150, info: "Per trip / per dive" },
        { name: "Catamaran 1hr", price: 200, info: "2 pax" },
        { name: "Big game fishing 4hr", price: 1200, info: "2 - 4 pax (extra pax 150$)" },
        { name: "Big game fishing 8hr", price: 2400, info: "2 - 4 pax (extra pax 150$)" },
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="PADI 5-Star Diving Center"
        description="Explore the untouched underwater world of Gaafu Dhaalu Atoll. Join our PADI 5-star dive center for guided dives and certification courses."
        keywords="Maldives diving, scuba diving Maldives, PADI dive center Maldives, Gaafu Dhaalu diving, Ayada Maldives diving"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-16 md:mb-24 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1537419038295-84VVZL8P4DQEGPNQXRRJ/nemo3.JPG?format=1500w" 
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          alt="Diving Maldives"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Underwater Paradise</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">Diving</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-5xl font-tripsans mb-8 leading-tight">Undisturbed & Untouched</h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed mb-8">
              With year round high visibility, over 3000 coral reefs and free flowing tides of the seasonal monsoons, the Maldives is known as an absolute heaven for divers. 
            </p>
            <p className="text-stone-500 text-lg font-light leading-relaxed mb-8">
              Over a 1000 species of fish, coral and other marine life inhabit the waters throughout the Maldives; however given the virtual isolation of the Gaafu Dhaalu atoll, the underwater seascape found here is still undisturbed and untouched awaiting discovery by enthusiasts...
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Fish className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-tripsans text-lg">1000+</h4>
                  <p className="text-stone-400 text-xs uppercase tracking-wider">Marine Species</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Compass className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-tripsans text-lg">PADI 5*</h4>
                  <p className="text-stone-400 text-xs uppercase tracking-wider">Dive Center</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images3.bovpg.net/r/media/1/8/6/7/8/86782.jpg" 
                className="w-full h-full object-cover"
                alt="Maldives Marine Life"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-stone-600 italic font-tripsans text-lg">"The underwater seascape found here is still undisturbed and untouched..."</p>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="text-emerald-600 uppercase tracking-widest text-xs font-bold mb-4">Diving Programs</p>
            <h2 className="text-4xl md:text-6xl font-tripsans">Discover the Deep</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={program.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <program.icon className="text-emerald-600" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-tripsans mb-4 group-hover:text-emerald-700 transition-colors">{program.title}</h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="flex-1 text-emerald-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      Learn More <CheckCircle2 size={16} />
                    </button>
                    <button 
                      onClick={() => handleAddToInquiry({ name: program.title, price: 'Inquire' })}
                      className={`p-3 rounded-xl transition-all ${isInBucket(program.title) ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white'}`}
                      title={isInBucket(program.title) ? "Added to Inquiry" : "Add to Inquiry"}
                    >
                      {isInBucket(program.title) ? <Check size={18} /> : <ShoppingBag size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atoll Map */}
        <div className="mb-32 bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-emerald-400 mb-6">
                  <MapIcon size={24} />
                  <span className="uppercase tracking-[0.3em] text-xs font-bold">Exploration</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-tripsans mb-8">Atoll Map</h2>
                <p className="text-stone-400 text-lg font-light leading-relaxed mb-8">
                  Discover the incredible dive sites and surf breaks surrounding Ayada Maldives. The resort's unique location in the Gaafu Dhaalu atoll provides access to some of the most pristine waters in the archipelago.
                </p>
                <div className="space-y-4">
                  {['Pristine Coral Reefs', 'Hidden Caves', 'Manta Ray Points', 'Shark Channels'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-sm uppercase tracking-widest text-stone-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/fa9d4891-ea37-426a-946a-3a552443aa9a/Atoll+Surf+Map+DEF.PNG?format=2500w" 
                    className="w-full rounded-xl shadow-2xl"
                    alt="Atoll Surf & Dive Map"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price List */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="text-emerald-600 uppercase tracking-widest text-xs font-bold mb-4">Official Rates</p>
            <h2 className="text-4xl md:text-6xl font-tripsans">Dive Kingdom Price List</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {priceList.map((section, idx) => (
              <div key={idx} className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
                <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-6">
                  <h3 className="text-xl font-tripsans tracking-tight">{section.category}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">USD / Person</span>
                </div>
                <div className="space-y-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex-1">
                          <span className="text-stone-800 font-medium group-hover:text-emerald-700 transition-colors">{item.name}</span>
                          <p className="text-stone-400 text-[11px] uppercase tracking-wider">{item.info}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-emerald-600 font-bold">${item.price}</span>
                          <button 
                            onClick={() => handleAddToInquiry(item)}
                            className={`p-1.5 rounded-full transition-all shadow-sm ${isInBucket(item.name) ? 'bg-emerald-600 text-white' : 'bg-white text-stone-400 hover:bg-emerald-600 hover:text-white'}`}
                            title={isInBucket(item.name) ? "Added to Inquiry" : "Add to Inquiry"}
                          >
                            {isInBucket(item.name) ? <Check size={14} /> : <ShoppingBag size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                      <Info size={14} className="text-emerald-500" />
                      {section.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terms & Conditions */}
          <div className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <h4 className="font-tripsans text-xl mb-2 text-emerald-900">Important Information</h4>
                <p className="text-emerald-800/70 text-sm leading-relaxed">
                  All diving trips provide equipment free of charge: Tanks, Weight, Mask, Short suit (3mm), Snorkel, Fins, BCD, Regulator, Dive computer. All activities are subject to weather conditions.
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[10px] uppercase tracking-widest text-emerald-700 font-bold mb-1">+10% Service Charge</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-700 font-bold">+17% GST (Government Tax)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
