import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Waves, Share2, Menu, ChevronRight, ShieldCheck, Clock, MapPin, Gift, X, CheckCircle2, Percent, Calendar as CalendarIcon, Users, Search, Minus, Plus } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format, startOfToday } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { ResortData } from '../types';
import { useForm } from '../context/FormContext';
import SEO from '../components/SEO';
import Map from '../components/Map';
import BottomCTA from '../components/BottomCTA';

interface HomeProps {
  resort: ResortData;
}

export default function Home({ resort }: HomeProps) {
  const { setShowForm, formData, setFormData } = useForm();
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const handleSearch = () => {
    navigate('/request-quote');
  };

  return (
    <>
      <SEO 
        title="Ayada Maldives - Luxury Resort Bookings | TripMaldives"
        description="Experience the ultimate luxury at Ayada Maldives. Book your dream vacation with exclusive rates, overwater villas, and personalized service through TripMaldives."
        keywords="Ayada Maldives, luxury resort Maldives, Maldives overwater villas, Maldives vacation booking, TripMaldives Ayada"
      />


      {/* Hero Section */}
      <div className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-tripsans text-stone-900 mb-4 tracking-tight">{resort.name}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <Star size={16} className="fill-stone-900" />
                <span className="font-bold">{resort.rating}.0</span>
                <span className="text-stone-400 font-normal underline cursor-pointer ml-1">Verified Partner Resort</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-stone-400 font-normal underline cursor-pointer">{resort.atoll}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: resort.name,
                    text: resort.short_description,
                    url: 'https://www.ayada.tripmaldives.co/',
                  }).catch(console.error);
                } else {
                  navigator.clipboard.writeText('https://www.ayada.tripmaldives.co/');
                  alert('Link copied to clipboard!');
                }
              }}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:bg-stone-50 px-4 py-2 rounded-lg transition-all"
            >
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        {/* Image Grid / Mobile Slider */}
        <div className="relative">
          {/* Mobile Slider */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 gap-3 h-[50vh]">
            {resort.images.map((img, i) => (
              <div key={i} className="min-w-[85vw] h-full snap-center rounded-2xl overflow-hidden">
                <img 
                  src={img} 
                  className="w-full h-full object-cover" 
                  alt={`${resort.name} - ${i + 1}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-3 h-[70vh] rounded-2xl overflow-hidden">
            <div className="md:col-span-2 h-full">
              <img 
                src={resort.images[0]} 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" 
                alt={resort.name}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 h-full">
              <div className="h-full overflow-hidden">
                <img src={resort.images[1]} className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Resort View 1" referrerPolicy="no-referrer" />
              </div>
              <div className="h-full overflow-hidden">
                <img src={resort.images[2]} className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Resort View 2" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 h-full">
              <div className="h-full overflow-hidden">
                <img src={resort.images[3]} className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Resort View 3" referrerPolicy="no-referrer" />
              </div>
              <div className="h-full overflow-hidden relative">
                <img src={resort.images[4]} className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Resort View 4" referrerPolicy="no-referrer" />
                <button 
                  onClick={() => setShowGallery(true)}
                  className="absolute bottom-6 right-6 bg-white border border-stone-900 text-stone-900 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg hover:bg-stone-50 transition-all"
                >
                  <Menu size={16} /> Show all photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Date Selection Bar - Unified for Desktop & Mobile (After Gallery, Not Sticky) */}
      <div className="max-w-5xl mx-auto mb-16 md:mb-24 px-4 relative">
        <div className="bg-white rounded-3xl md:rounded-full shadow-2xl border border-stone-100 p-2 flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-2">
          <div 
            className="flex-1 px-6 md:px-8 py-3 hover:bg-stone-50 rounded-2xl md:rounded-full cursor-pointer transition-all border-b md:border-b-0 md:border-r border-stone-100"
            onClick={() => {
              setShowDatePicker(!showDatePicker);
              setShowGuestPicker(false);
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Check-in & Out</p>
            <p className="text-sm font-medium text-stone-900">
              {formData.checkIn && formData.checkOut 
                ? `${format(new Date(formData.checkIn), 'MMM dd')} - ${format(new Date(formData.checkOut), 'MMM dd')}`
                : 'Add dates'}
            </p>
          </div>
          <div 
            className="flex-1 px-6 md:px-8 py-3 hover:bg-stone-50 rounded-2xl md:rounded-full cursor-pointer transition-all group relative"
            onClick={() => {
              setShowGuestPicker(!showGuestPicker);
              setShowDatePicker(false);
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Guests</p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-stone-900">
                {formData.adults} Adults{formData.children > 0 ? `, ${formData.children} Kids` : ''}
              </p>
              <Users size={16} className="text-stone-400" />
            </div>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-emerald-600 text-white p-4 rounded-2xl md:rounded-full hover:bg-emerald-700 transition-all shadow-lg flex items-center gap-2 px-8 justify-center"
          >
            <Search size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">Check Availability</span>
          </button>
        </div>

        {/* Guest Picker Popover */}
        {showGuestPicker && (
          <div className="absolute top-full left-0 md:left-auto md:right-0 mt-4 w-full md:w-96 bg-white p-8 rounded-[2rem] shadow-2xl border border-stone-100 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-stone-900">Adults</p>
                  <p className="text-[11px] text-stone-400 font-medium mt-1">AGES 13+</p>
                </div>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setFormData({...formData, adults: Math.max(1, formData.adults - 1)})}
                    className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-bold text-stone-900 w-6 text-center">{formData.adults}</span>
                  <button 
                    onClick={() => setFormData({...formData, adults: formData.adults + 1})}
                    className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-stone-900">Children</p>
                  <p className="text-[11px] text-stone-400 font-medium mt-1">AGES 0-12</p>
                </div>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setFormData({...formData, children: Math.max(0, formData.children - 1)})}
                    className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-bold text-stone-900 w-6 text-center">{formData.children}</span>
                  <button 
                    onClick={() => setFormData({...formData, children: formData.children + 1})}
                    className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setShowGuestPicker(false)}
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                Apply Selection
              </button>
            </div>
          </div>
        )}

        {showDatePicker && (
          <div className="absolute top-full left-0 w-full md:w-auto mt-4 bg-white px-2 py-6 md:p-12 rounded-3xl shadow-2xl border border-stone-100 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-10 px-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900">Select your stay dates</h4>
              <button onClick={() => setShowDatePicker(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="flex justify-center">
              <DayPicker
                mode="range"
                numberOfMonths={1}
                selected={{
                  from: formData.checkIn ? new Date(formData.checkIn) : undefined,
                  to: formData.checkOut ? new Date(formData.checkOut) : undefined
                }}
                onSelect={(range) => {
                  setFormData({
                    ...formData,
                    checkIn: range?.from ? format(range.from, 'yyyy-MM-dd') : '',
                    checkOut: range?.to ? format(range.to, 'yyyy-MM-dd') : ''
                  });
                  if (range?.from && range?.to) {
                    setShowDatePicker(false);
                  }
                }}
                disabled={{ before: startOfToday() }}
                className="luxury-datepicker"
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats & Info Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32 py-10 border-y border-stone-100">
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Location</p>
          <p className="font-tripsans text-xl md:text-2xl">{resort.atoll}</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Transfer</p>
          <p className="font-tripsans text-xl md:text-2xl">Seaplane / Domestic</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Villas</p>
          <p className="font-tripsans text-xl md:text-2xl">{resort.room_types.length} Categories</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Dining</p>
          <p className="font-tripsans text-xl md:text-2xl">{resort.dining_venues.length} Venues</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div className="lg:col-span-2">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-tripsans mb-8 leading-tight">{resort.short_description}</h2>
            <p className="text-stone-500 text-lg md:text-xl leading-relaxed font-light mb-10">
              {resort.description}
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-[10px]">
                <ShieldCheck size={18} /> Best Price Guarantee
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-[10px]">
                <Clock size={18} /> 24/7 Local Support
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="py-10 group cursor-pointer">
                <h3 className="text-2xl font-tripsans mb-4 group-hover:text-emerald-800 transition-colors">The Experience</h3>
                <p className="text-stone-500 mb-8 leading-relaxed font-light">Discover a world of luxury and adventure in the heart of the Maldives.</p>
                <button 
                  onClick={() => navigate('/experiences')}
                  className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all"
                >
                  Explore Experiences
                </button>
             </div>
             <div className="py-10 group cursor-pointer">
                <h3 className="text-2xl font-tripsans mb-4 group-hover:text-emerald-800 transition-colors">Villa Living</h3>
                <p className="text-stone-500 mb-8 leading-relaxed font-light">From overwater villas to beachfront suites, find your perfect sanctuary.</p>
                <button 
                  onClick={() => navigate('/rooms')}
                  className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all"
                >
                  View All Rooms
                </button>
             </div>
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-32 bg-stone-50 rounded-2xl p-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">Resort Rating</p>
                <div className="flex items-center gap-1.5">
                  <Star size={18} className="fill-stone-900" />
                  <span className="text-3xl font-bold">{resort.rating}.0</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl mb-8 border border-stone-100">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Gift size={14} /> Exclusive Benefit
              </p>
              <p className="text-xs font-medium text-stone-600 leading-relaxed">Complimentary 24-Hour Butler Service included with all bookings through Trip Maldives.</p>
            </div>

            <button 
              onClick={() => navigate('/request-quote')}
              className="w-full bg-stone-900 text-white py-5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center gap-3 mb-6 shadow-xl shadow-stone-900/20"
            >
              Request Private Quote <ChevronRight size={18} />
            </button>
            
            <p className="text-[9px] text-center text-stone-400 uppercase tracking-[0.2em] font-bold">No payment required to inquire</p>

            <div className="mt-10 pt-10 border-t border-stone-100 space-y-5">
              <div className="flex items-center gap-4 text-xs text-stone-600 font-medium">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-stone-600 font-medium">
                <Clock size={18} className="text-emerald-500" />
                <span>24/7 Local Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Exclusive Rates Banner */}
      <div className="bg-emerald-900 rounded-[32px] p-8 md:p-12 text-white mb-20 md:mb-32 relative overflow-hidden">
     
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500 rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Exclusive Agency Rates</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-tripsans mb-6 leading-tight">Unlock the Best Rates for Ayada Maldives</h2>
          <p className="text-emerald-100/80 text-lg font-light leading-relaxed mb-8">
            As a premier partner of Ayada Maldives, Trip Maldives offers exclusive rates and benefits that you won't find anywhere else. Our direct relationship ensures you get the most competitive pricing and personalized service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-sm font-medium">Lowest Price Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-sm font-medium">Exclusive Complimentary Benefits</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-sm font-medium">Direct Resort Confirmation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-sm font-medium">24/7 Personal Concierge</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/request-quote')}
            className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20"
          >
            Get Your Exclusive Quote
          </button>
        </div>
      </div>



        {/* Gallery Modal */}
        {showGallery && (
          <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-300">
            <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-stone-100 px-6 py-4 flex items-center justify-between">
              <h3 className="font-tripsans text-xl">{resort.name} Gallery</h3>
              <button 
                onClick={() => setShowGallery(false)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="max-w-7xl mx-auto p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resort.images.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={img} 
                      alt={`${resort.name} - ${i + 1}`} 
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                {/* Add more images from activities or rooms to fill the gallery */}
                {resort.room_types.map((room, i) => (
                  <div key={`room-${i}`} className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-stone-50">
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400">{room.name}</p>
                    </div>
                  </div>
                ))}
                {resort.activities.map((activity, i) => (
                  <div key={`activity-${i}`} className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={activity.image} 
                      alt={activity.name} 
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-stone-50">
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400">{activity.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <Map />
        <BottomCTA />
      </>
    );
  }
