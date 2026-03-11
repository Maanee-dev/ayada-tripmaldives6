import React from 'react';
import { CheckCircle2, FileText, Download, Info, Waves, Wind, Zap, Anchor, Camera, Ship, Car, ShoppingBag, Check } from 'lucide-react';
import { ResortData } from '../../types';
import { useInquiry } from '../../context/InquiryContext';
import SEO from '../../components/SEO';

interface WatersportsProps {
  resort: ResortData;
}

export default function Watersports({ resort }: WatersportsProps) {
  const { items, addItem } = useInquiry();

  const handleAddToInquiry = (item: any) => {
    addItem({
      id: `watersport-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      category: 'Watersports',
      name: item.name,
      price: item.price,
    });
  };

  const isInBucket = (name: string) => {
    const id = `watersport-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return items.some(item => item.id === id);
  };
  const watersports = [
    {
      id: 'efoil',
      name: 'E-foil',
      description: 'Glide through the pristine lagoons with a fast e-foil — the perfect board for experienced adventure seekers and new users alike. Beginner, Experienced and even 3-day courses are available.',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1583921079379-VY1ACFN2SEN0GJ2L2X6H/DJI_0956.jpg',
      category: 'Motorized',
      duration: '30/60 Mins',
      icon: Zap
    },
    {
      id: 'parasailing',
      name: 'Parasailing',
      description: 'Enjoy the thrill of parasailing, and see the tropical island from a new perspective. We offer single, tandem and private parasailing both during daytime and at sunset.',
      image: 'https://samudramaldives.com/wp-content/uploads/parasailing-in-maldives-header.jpg',
      category: 'Aerial',
      duration: '15 Mins',
      icon: Wind
    },
    {
      id: 'jetcar',
      name: 'Jet Car',
      description: "Glide over the turquoise waters in this sleek, sports-car-inspired marvel, merging luxury with adventure for an unforgettable ride. Make waves in style and turn heads as you cruise through paradise—an exhilarating highlight of Ayada's exclusive experiences.",
      image: 'https://www.traveltrademaldives.com/assets/2024/11/2-6-672x428.png',
      category: 'Exclusive',
      duration: '20/40 Mins',
      icon: Car
    },
    {
      id: 'jetski',
      name: 'Jet Ski',
      description: 'Discover the fun and excitement of riding a jet ski at Indian Ocean. The resort provides a unique Jet Ski hire experience through amazing waterways under the safe guidance of friendly, experienced staff.',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1581738431395-8YVI6BCH40SNC4CCCFXJ/_AGU1684.jpg',
      category: 'Motorized',
      duration: '30/60 Mins',
      icon: Zap
    },
    {
      id: 'funtube',
      name: 'Fun Tube',
      description: 'For those who like a little more speed and adventure - then it’s the Fun tube ride. This adventure makes for great memories for holiday experiences. Tubing is the equivalent of rollercoaster ride of the beautiful Indian ocean.',
      image: 'https://tritonhotelsandtours.com/images/tours/tour-funtube.jpg',
      category: 'Towed',
      duration: '15 Mins',
      icon: Waves
    },
    {
      id: 'wakeboarding',
      name: 'Wakeboarding',
      description: 'Carve up the water and ride the wake behind the resort\'s luxury speedboat complete with air towers .Our professional instructors make wakeboarding fun and easy to learn for all, no matter what your skill level.',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/92/90/0b.jpg',
      category: 'Towed',
      duration: '20 Mins',
      icon: Anchor
    },
    {
      id: 'sunset-cruise',
      name: 'Sunset Cruise',
      description: 'Embark on a spectacular and romantic Sunset Cruise, to see the island from the ocean. It’s a fantastic opportunity for breath-taking photos. This excursion is available on Wednesday, Thursday, Saturday and Sunday.',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601808385538-AEBKLIAW1W2ZH1N37A5H/sunset+cruise.jpg',
      category: 'Excursion',
      duration: '1 Hour',
      icon: Ship
    },
    {
      id: 'snorkeling',
      name: 'Snorkeling',
      description: "You'll love snorkeling - the crystal blue waters of the Indian ocean are legendary. Combined with the blue skies and sunshine and some of the finest coral reefs on Maldives.",
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1581738482799-NGS9TKTVEOR15ZM725YJ/_AGU1030.jpg',
      category: 'Nature',
      duration: '1.5 Hours',
      icon: Camera
    }
  ];

  const priceListData = [
    {
      category: "MOTORIZED WATER SPORTS",
      items: [
        { name: "Jet Ski Safari", price: "$195", inclusive: "30 Mins" },
        { name: "Jet Ski Ride", price: "$120", inclusive: "15 Mins" },
        { name: "Jet Car Experience", price: "$250", inclusive: "20 Mins" },
        { name: "E-Foil Lesson", price: "$180", inclusive: "45 Mins" },
        { name: "Parasailing Single", price: "$150", inclusive: "15 Mins" },
        { name: "Parasailing Tandem", price: "$280", inclusive: "15 Mins" },
      ]
    },
    {
      category: "TOWED & NON-MOTORIZED",
      items: [
        { name: "Fun Tube Ride", price: "$60/pp", inclusive: "15 Mins (Min 2 pax)" },
        { name: "Wakeboarding / Water Ski", price: "$85", inclusive: "20 Mins" },
        { name: "Wakeboarding Lesson", price: "$110", inclusive: "30 Mins" },
        { name: "Glass Bottom Kayak", price: "$45", inclusive: "60 Mins" },
        { name: "Stand Up Paddleboard", price: "Complimentary", inclusive: "60 Mins" },
        { name: "Windsurfing", price: "Complimentary", inclusive: "60 Mins (License req.)" },
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Thrilling Watersports Adventures"
        description="Experience the ultimate aquatic thrills at Ayada Maldives. From jet skiing and parasailing to peaceful kayaking, we offer it all."
        keywords="Maldives watersports, jet ski Maldives, parasailing Maldives, surfing Maldives, Ayada Maldives activities"
      />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-12 md:mb-20 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1571636658729-47MF4EQGX0O5JGLGZDDR/5.jpg" 
          className="w-full h-full object-cover"
          alt="Watersports Maldives"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Aquatic Thrills</p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.85] tracking-tighter">Watersports</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-tripsans mb-6 leading-tight text-stone-900">Adventure on the Water</h2>
              <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed">
                Whether you're looking for a peaceful paddle or a high-speed thrill, the watersports center offers a wide range of activities for all skill levels. From complimentary non-motorized equipment to exclusive jet car experiences, we have something for every adventurer.
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
            {watersports.map((item) => (
              <div key={item.id} className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-stone-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={item.name} 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  <h3 className="text-2xl md:text-5xl font-tripsans">Watersports Prices</h3>
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
