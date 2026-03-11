import React, { useState } from 'react';
import { Heart, Camera, Music, Utensils, CheckCircle2, Star, Ship, MapPin, Sparkles, Cake, Wine, Bath, Anchor, Camera as CameraIcon, FileText, ShoppingBag, Check } from 'lucide-react';
import { ResortData } from '../types';
import { useInquiry } from '../context/InquiryContext';
import SEO from '../components/SEO';

import BottomCTA from '../components/BottomCTA';

interface WeddingsProps {
  resort: ResortData;
}

export default function Weddings({ resort }: WeddingsProps) {
  const [activePackage, setActivePackage] = useState('Romance');
  const { items, addItem } = useInquiry();

  const handleAddToInquiry = (pkgName: string, price: string) => {
    addItem({
      id: `wedding-${pkgName.toLowerCase()}`,
      category: 'Weddings',
      name: `${pkgName} Wedding Package`,
      price: `$${price}++`,
    });
  };

  const isInBucket = (name: string) => {
    const id = `wedding-${name.toLowerCase()}`;
    return items.some(item => item.id === id);
  };

  const weddingPackages = [
    {
      name: 'Romance',
      price: '888',
      inclusions: [
        'Dedicated wedding planner',
        'Venue: "White Room" pavilion',
        'Wedding decoration (White theme)',
        'Traditional Boduberu drum play',
        'Flower petals shower',
        'Synthetic flower bouquet for bride',
        'Master ceremony for vows',
        'Symbolic wedding certificate',
        'Welcome board',
        'Maldivian Kurumba',
        'A bottle of sparkling wine'
      ]
    },
    {
      name: 'Bronze',
      price: '1299',
      inclusions: [
        'All Romance Package inclusions',
        'A single tier wedding cake',
        'Romantic floating breakfast'
      ]
    },
    {
      name: 'Silver',
      price: '2500',
      inclusions: [
        'Dedicated wedding planner',
        'Venue: "White Room" or Beach',
        'Wedding decoration (White theme)',
        'Traditional Boduberu drum play',
        'Flower petals shower',
        'Fresh flower bouquet & buttonhole',
        'Master ceremony for vows',
        'Symbolic wedding certificate',
        'Welcome board',
        'Maldivian Kurumba',
        'A bottle of sparkling wine',
        'A double tier wedding cake',
        'Romantic private dinner on the beach',
        'Bed decoration on wedding night',
        'Couple\'s 30 minutes spa treatment'
      ]
    },
    {
      name: 'Gold',
      price: '3500',
      inclusions: [
        'Dedicated wedding planner',
        'Venue: "White Room" or Beach',
        'Wedding decoration (White theme)',
        'Traditional Boduberu drum play',
        'Flower petals shower',
        'Fresh flower bouquet & buttonhole',
        'Bridal buggy decoration',
        'Master ceremony for vows',
        'Symbolic wedding certificate',
        'Welcome board',
        'Maldivian Kurumba',
        'A bottle of champagne',
        'A triple tier wedding cake',
        'Romantic private dinner on the beach',
        'Romantic floating breakfast',
        'In villa bed & bath decoration (ESPA)',
        'Couple\'s 60 minutes spa treatment',
        'Private 45-minute romantic cruise'
      ]
    }
  ];

  const locations = [
    {
      title: 'White-Sand Beach',
      description: 'Exchange vows on the pristine white-sand beach with the turquoise ocean providing a breathtaking backdrop.',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/b365752e-6b3b-4bf7-a86c-38225ca97b42/486099711_18496215082005962_4229497201407224796_n.jpg'
    },
    {
      title: 'Traditional Dhoni',
      description: 'Sail out on a traditional Maldivian boat for an extravagant and unique celebration on the water.',
      image: 'https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/632cccc8f0558.jpg/840x840/fit;c:0,0,1180,1180/80/eda868a270f062f386b89fadd4d2cb99.jpg'
    },
    {
      title: 'The White Room',
      description: 'The largest and most beautiful wedding chapel in the Maldives, surrounded by lush lawns at the heart of the island.',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1534937268846-T05H9W8EUSI7ACLEMD7K/1-white-room.jpg'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-[#faf9f6]">
      <SEO 
        title="Dream Destination Weddings"
        description="Celebrate your love at Ayada Maldives. From beach ceremonies to traditional Dhoni weddings, create memories that last a lifetime."
        keywords="Maldives wedding, destination wedding, Ayada Maldives weddings, beach wedding Maldives"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-16 md:mb-24 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1562563737760-0SSSKTH06709Q1NHNU69/Wedding+1-2.jpg?format=2500w" 
          className="w-full h-full object-cover"
          alt="Weddings at Ayada Maldives"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/30 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Eternal Romance</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">Weddings</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Introduction */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl md:text-5xl font-tripsans text-stone-900 mb-8 leading-tight">Your Dream Story Starts Here</h2>
          <p className="text-stone-600 text-xl font-light leading-relaxed">
            With picture perfect locations and exceptional experience in hosting beautiful weddings, Ayada Maldives is a perfect choice to have your wedding at. Discover our locations, options and packages and contact us with any questions.
          </p>
        </div>

        {/* Locations */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <MapPin className="text-emerald-600" size={24} />
            <h3 className="text-3xl font-tripsans text-stone-900">Picture Perfect Locations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-6 shadow-lg">
                  <img src={loc.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={loc.title} referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-tripsans text-2xl mb-3 text-stone-900">{loc.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Packages */}
        <div className="mb-24 md:mb-32">
          <div className="bg-white rounded-[40px] md:rounded-[64px] shadow-2xl border border-stone-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Package Selector */}
              <div className="lg:col-span-2 bg-stone-900 p-8 md:p-20 text-white">
                <h3 className="text-3xl md:text-5xl font-tripsans mb-6 md:mb-8">Wedding Packages</h3>
                <p className="text-stone-400 mb-8 md:mb-12 font-light text-sm md:text-base">Choose the perfect package to celebrate your love story.</p>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                  {weddingPackages.map((pkg) => (
                    <button 
                      key={pkg.name}
                      onClick={() => setActivePackage(pkg.name)}
                      className={`w-full text-left px-4 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-2 ${activePackage === pkg.name ? 'bg-white text-stone-900 shadow-xl' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                    >
                      <span className="font-tripsans text-lg md:text-xl">{pkg.name}</span>
                      <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest opacity-70">${pkg.price}++</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Details */}
              <div className="lg:col-span-3 p-8 md:p-20">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <Sparkles className="text-emerald-600 shrink-0" size={20} />
                  <h4 className="text-2xl md:text-3xl font-tripsans text-stone-900">{activePackage} Package Inclusions</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4">
                  {weddingPackages.find(p => p.name === activePackage)?.inclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 md:p-4 bg-stone-50 rounded-xl border border-stone-100">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                      <span className="text-stone-600 text-xs md:text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                  <div className="text-center md:text-left">
                    <p className="text-stone-400 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Starting from</p>
                    <p className="text-3xl md:text-4xl font-tripsans text-stone-900">${weddingPackages.find(p => p.name === activePackage)?.price}++</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button 
                      onClick={() => handleAddToInquiry(activePackage, weddingPackages.find(p => p.name === activePackage)?.price || '')}
                      className={`px-8 py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${isInBucket(activePackage) ? 'bg-emerald-700 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
                    >
                      {isInBucket(activePackage) ? (
                        <>
                          <Check size={14} />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} />
                          Add to Inquiry
                        </>
                      )}
                    </button>
                    <button className="px-8 py-4 bg-stone-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfection in Details & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-emerald-900 text-white p-12 md:p-20 rounded-[64px] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-tripsans mb-8">Perfection in Details</h3>
              <p className="text-emerald-100 text-lg font-light leading-relaxed mb-10">
                Your dedicated wedding planner will take care of all the necessary arrangements to make your ceremony perfect. Carefully listening to your needs and requirements, the resort team will make sure that your wedding at Ayada Maldives will not only fulfill, but exceed your wedding dreams.
              </p>
              <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                <FileText size={20} />
                Download Wedding Brochure
              </button>
            </div>
          </div>

          <div className="bg-stone-200 p-12 md:p-20 rounded-[64px] relative overflow-hidden group">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1562129188939-4X63YE0SA5M36UNL5U98/weddingb.jpg?format=2500w" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" 
              alt="Photography"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-tripsans text-stone-900 mb-8">Photography Services</h3>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-10">
                Every smile, every detail, every glance — beautifully captured to last a lifetime. Explore the photography brochure and discover how these special moments can be turned into timeless memories.
              </p>
              <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 hover:text-emerald-600 transition-colors">
                <CameraIcon size={20} />
                Photography Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-tripsans text-stone-900 mb-4">Enhance Your Experience</h3>
            <p className="text-stone-500 font-light">Personalize your special day with our curated add-ons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Essentials', items: ['Flower Girl ($50)', 'Buggy Decoration ($50)', 'Boduberu Band ($150)', 'Private Cinema ($199)'] },
              { title: 'Venue Choices', items: ['Beach ($300)', 'Pagoda ($300)', 'Blue Ocean ($750)', 'Beach Setup with Stage ($5000)'] },
              { title: 'F&B & Cakes', items: ['Private Dinner (from $214++)', 'Floating Breakfast ($104)', 'Single Tier Cake ($180)', 'Triple Tier Cake ($360)'] }
            ].map((section, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-sm">
                <h4 className="font-tripsans text-2xl mb-6 text-stone-900">{section.title}</h4>
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-500 text-sm">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <BottomCTA 
          title="Begin Your Forever After"
          description="Our dedicated wedding planners are here to help you design every detail of your dream celebration at Ayada Maldives."
          buttonText="Request Wedding Quote"
          secondaryButtonText="Talk to a Wedding Specialist"
        />
      </div>
    </div>
  );
}
