import React from 'react';
import { CheckCircle2, FileText, Download, Info, ShoppingBag, Check } from 'lucide-react';
import { ResortData } from '../../types';
import { useInquiry } from '../../context/InquiryContext';
import SEO from '../../components/SEO';

interface ExcursionsProps {
  resort: ResortData;
}

export default function Excursions({ resort }: ExcursionsProps) {
  const { items, addItem } = useInquiry();
  const excursions = resort.activities?.filter(a => a.category === 'Excursion' || a.category === 'Nature') || [];

  const handleAddToInquiry = (item: any) => {
    addItem({
      id: `excursion-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      category: 'Excursions',
      name: item.name,
      price: item.priceRange || item.price,
    });
  };

  const isInBucket = (name: string) => {
    const id = `excursion-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return items.some(item => item.id === id);
  };

  const priceListData = [
    {
      category: "SNORKELING",
      items: [
        { name: "Aquarium Snorkeling", price: "$65/pp", inclusive: "1.5 hrs - 30 mins ride & 60 mins snorkeling" },
        { name: "Snorkeling by Private Boat", price: "$200/pp", inclusive: "1.5 hrs - 30 mins ride & 60 mins snorkeling" },
        { name: "Private Lucky Dolphin & Snorkeling", price: "$200/pp", inclusive: "2 hrs - 1 hr searching for dolphin & 1 hr snorkeling" },
        { name: "Lucky Dolphin & Snorkeling", price: "$99/pp", inclusive: "2 hrs - 1 hr searching for dolphin & 1 hr snorkeling" },
        { name: "Snorkel Safari", price: "$150/pp", inclusive: "Snorkeling in 2 locations for 2 guests" },
        { name: "Private House Reef Snorkeling", price: "$75/pp", inclusive: "1 hr - 1 guide for 2 guests" },
        { name: "Night Snorkeling", price: "$250/pp", inclusive: "Max. 6 people" },
      ]
    },
    {
      category: "FISHING",
      items: [
        { name: "Sunset Fishing by Boat", price: "$75/pp", inclusive: "2 hrs - Traditional Maldivian style fishing" },
        { name: "Private Fishing by Dhoni", price: "$200/pp", inclusive: "3 hrs - Traditional Maldivian style fishing" },
        { name: "Private Sunrise Fishing by Dhoni", price: "$200/pp", inclusive: "3 hrs - Traditional Maldivian style fishing" },
      ]
    },
    {
      category: "SPECIAL EXCURSION",
      items: [
        { name: "Equator Crossing", price: "$1200", inclusive: "4 hrs/ 2-4 persons. Includes trip to Equator, deserted island & snorkeling" },
        { name: "Island Picnic", price: "$550", inclusive: "3 hrs / 2 persons. Includes picnic set up, snacks and drinks" },
        { name: "Sandbank Picnic", price: "$550", inclusive: "2.5 hrs / 2 persons" },
        { name: "Moonlight Cruise", price: "$75/pp", inclusive: "1 hr watching stars / Max 6 persons" },
        { name: "Romantic Sunset Cruise", price: "$550", inclusive: "1 hr / 2 persons / Including sparkling wine, canapes" },
        { name: "Glass Bottomed Boat", price: "$120", inclusive: "1 hr / Ayada house reef / Max 6 persons" },
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Curated Island Excursions"
        description="Discover the beauty of the Gaafu Dhaalu Atoll with our curated excursions. From dolphin spotting to sunset fishing, adventure awaits."
        keywords="Maldives excursions, island hopping Maldives, dolphin cruise Maldives, sunset fishing Maldives"
      />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-12 md:mb-20 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713728638-FF1S7ZURZJCGA6MGI603/_GPX0011.jpg" 
          className="w-full h-full object-cover"
          alt="Excursions Maldives"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Curated Adventures</p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.85] tracking-tighter">Excursions</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-tripsans mb-6 leading-tight text-stone-900">Explore the Wonders of the Atoll</h2>
              <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed">
                From romantic sunset cruises to thrilling dolphin spotting adventures, the excursions are designed to help you discover the natural beauty and culture of the Maldives. Each journey is led by experienced guides who share their deep knowledge of the local marine life and traditions.
              </p>
            </div>
            <a 
              href="https://static1.squarespace.com/static/5b4f0c8d89c17294e53d4ffc/t/692423b50814a904e6c53ba6/1763976117054/Watersports+_Prices_2025+%282%29.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/20 shrink-0"
            >
              <Download size={18} /> Download Price List
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-32">
            {excursions.map((item) => (
              <div key={item.id} className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-stone-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={item.name} 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {item.priceRange && (
                    <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-[11px] font-bold text-stone-900 shadow-lg">
                      From {item.priceRange}
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 md:px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">
                      {item.duration}
                    </span>
                  </div>
                  <h4 className="font-tripsans text-2xl md:text-3xl mb-3 md:mb-4 text-stone-900">{item.name}</h4>
                  <p className="text-stone-600 text-sm font-light leading-relaxed mb-6 md:mb-8 flex-1">
                    {item.description}
                  </p>
                  <div className="space-y-2.5 md:space-y-3 mb-8 md:mb-10">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 md:gap-3 text-[10px] md:text-[11px] text-stone-500 font-bold uppercase tracking-widest">
                        <CheckCircle2 size={14} className="text-emerald-500 md:w-4 md:h-4" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-4 md:py-5 bg-stone-50 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-stone-900 hover:bg-stone-100 transition-all duration-300">
                      Inquire
                    </button>
                    <button 
                      onClick={() => handleAddToInquiry(item)}
                      className="flex-1 py-4 md:py-5 bg-emerald-600 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isInBucket(item.name) ? (
                        <>
                          <Check size={14} />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} />
                          Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price List Section */}
          <div className="bg-stone-900 rounded-[2rem] md:rounded-[4rem] p-6 md:p-20 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 md:mb-16">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl flex items-center justify-center text-white shrink-0">
                  <FileText size={24} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-5xl font-tripsans">Water Sports Price List</h3>
                  <p className="text-stone-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mt-1 md:mt-2">Official Rates & Inclusions</p>
                </div>
              </div>
              <a 
                href="https://static1.squarespace.com/static/5b4f0c8d89c17294e53d4ffc/t/692423b50814a904e6c53ba6/1763976117054/Watersports+_Prices_2025+%282%29.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-stone-900 px-8 md:px-10 py-4 md:py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-100 transition-all shadow-xl shadow-white/10"
              >
                <Download size={18} /> Save as PDF
              </a>
            </div>

            <div className="space-y-12 md:space-y-20">
              {priceListData.map((section) => (
                <div key={section.category}>
                  <h4 className="text-emerald-400 font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 md:mb-10 border-b border-white/10 pb-4 md:pb-6">
                    {section.category}
                  </h4>
                  <div className="overflow-x-auto -mx-2 px-2">
                    <table className="w-full text-left min-w-[500px] md:min-w-0">
                      <thead>
                        <tr className="text-[10px] md:text-[11px] uppercase tracking-widest text-stone-500 font-bold">
                          <th className="pb-4 md:pb-6 pr-4 md:pr-6">Activity</th>
                          <th className="pb-4 md:pb-6 pr-4 md:pr-6">USD</th>
                          <th className="pb-4 md:pb-6 pr-4 md:pr-6">Inclusive</th>
                          <th className="pb-4 md:pb-6">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {section.items.map((item, idx) => (
                          <tr key={idx} className="group hover:bg-white/5 transition-colors">
                            <td className="py-4 md:py-6 pr-4 md:pr-6 text-sm md:text-base font-medium text-white">{item.name}</td>
                            <td className="py-4 md:py-6 pr-4 md:pr-6 text-sm md:text-base font-bold text-white">{item.price}</td>
                            <td className="py-4 md:py-6 pr-4 md:pr-6 text-xs md:text-sm text-stone-400 font-light leading-relaxed">{item.inclusive}</td>
                            <td className="py-4 md:py-6">
                              <button 
                                onClick={() => handleAddToInquiry(item)}
                                className={`p-2 rounded-full transition-all ${isInBucket(item.name) ? 'bg-emerald-600 text-white' : 'bg-white/10 text-white hover:bg-emerald-600'}`}
                                title={isInBucket(item.name) ? "Added to Inquiry" : "Add to Inquiry"}
                              >
                                {isInBucket(item.name) ? <Check size={16} /> : <ShoppingBag size={16} />}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex gap-4 md:gap-5">
                <Info className="text-emerald-400 shrink-0 md:w-6 md:h-6" size={20} />
                <p className="text-[10px] md:text-xs text-stone-400 leading-relaxed uppercase tracking-widest font-medium">
                  All activities are subject to weather conditions. Prices are in USD and subject to 10% service charge & 17% GST (Government Tax).
                </p>
              </div>
              <div className="flex gap-4 md:gap-5">
                <Info className="text-emerald-400 shrink-0 md:w-6 md:h-6" size={20} />
                <p className="text-[10px] md:text-xs text-stone-400 leading-relaxed uppercase tracking-widest font-medium">
                  Cancellation policy: Please inform the water sports centre before 18:00 of the prior evening. Late cancellations incur a 50% fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
