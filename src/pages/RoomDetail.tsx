import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Maximize, Users, Star, UserCheck, ShieldCheck, Coffee, Wind, ShoppingBag, Check, ChevronLeft, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { ResortData } from '../types';
import { useInquiry } from '../context/InquiryContext';
import SEO from '../components/SEO';
import BottomCTA from '../components/BottomCTA';

interface RoomDetailProps {
  resort: ResortData;
}

export default function RoomDetail({ resort }: RoomDetailProps) {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { items, addItem } = useInquiry();
  const [activeImage, setActiveImage] = React.useState(0);

  const room = resort.room_types.find(r => r.id === roomId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [roomId]);

  if (!room) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-tripsans mb-4 text-stone-900">Villa Not Found</h2>
        <p className="text-stone-500 mb-8">The villa you are looking for does not exist or has been moved.</p>
        <Link to="/rooms" className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px]">
          Back to All Villas
        </Link>
      </div>
    );
  }

  const handleAddToInquiry = () => {
    addItem({
      id: `room-${room.id}`,
      category: 'Rooms',
      name: room.name,
    });
  };

  const isInBucket = () => {
    return items.some(item => item.id === `room-${room.id}`);
  };

  const images = (room.images || [room.image]).filter(Boolean);
  const mapUrl = room.map_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7711213080265!2d73.35541028496938!3d0.2786942821468243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b4aa21037b85ff9%3A0x5f4d2949e658a8a8!2sAyada%20Maldives!5e1!3m2!1sen!2sus!4v1773212135372!5m2!1sen!2sus";

  return (
    <div className="w-full">
      <SEO 
        title={`${room.name} - Ayada Maldives`}
        description={room.description}
        keywords={`Maldives villa, ${room.name}, Ayada Maldives accommodation, luxury travel`}
      />

      {/* Hero Section / Gallery */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden mb-12 md:mb-20">
        <img 
          src={images[activeImage]} 
          className="w-full h-full object-cover transition-all duration-700" 
          alt={room.name} 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest mb-8">
              <ChevronLeft size={16} /> Back to Villas
            </Link>
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Luxury Sanctuary</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">{room.name}</h1>
            
            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 mt-8">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-emerald-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`${room.name} ${idx + 1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-tripsans text-stone-900 leading-tight">Your Private Island Retreat</h2>
              <p className="text-stone-500 text-xl leading-relaxed font-light">{room.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-stone-100">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Total Area</p>
                <p className="text-2xl font-tripsans text-stone-900">{room.size}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Occupancy</p>
                <p className="text-2xl font-tripsans text-stone-900">{room.capacity}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">View</p>
                <p className="text-2xl font-tripsans text-stone-900">{room.name.includes('Ocean') || room.name.includes('Water') ? 'Ocean View' : 'Garden/Beach View'}</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-widest text-stone-900 font-bold">Signature Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, text: 'Private Pool & Sun Deck' },
                  { icon: UserCheck, text: '24/7 Dedicated Butler Service' },
                  { icon: Coffee, text: 'Nespresso Machine & Tea Selection' },
                  { icon: Wind, text: 'Outdoor Rain Shower' },
                  { icon: Maximize, text: 'Spacious Living Area' },
                  { icon: Users, text: 'Complimentary Bicycles' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                      <item.icon size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-stone-900 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <p className="text-emerald-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Inquiry</p>
              <h4 className="text-2xl font-tripsans mb-8 leading-tight">Experience {room.name}</h4>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3 text-stone-400">
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-xs font-medium">Best Rate Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-xs font-medium">Exclusive Agency Benefits</span>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-xs font-medium">Personal Concierge</span>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleAddToInquiry}
                  className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${isInBucket() ? 'bg-emerald-700 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
                >
                  {isInBucket() ? (
                    <>
                      <Check size={14} />
                      Added to Inquiry
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} />
                      Add to Inquiry
                    </>
                  )}
                </button>
                <button 
                  onClick={() => navigate('/request-quote')}
                  className="w-full bg-white text-stone-900 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-100 transition-all"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-24 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">Location View</p>
            <h2 className="text-3xl md:text-6xl font-tripsans text-stone-900 leading-tight mb-6">Explore the Surroundings</h2>
            <p className="text-stone-500 text-xs md:text-base max-w-2xl mx-auto">
              See the exact location of the {room.name} within the resort. Use the satellite view to explore the pristine reefs and turquoise lagoon surrounding your villa.
            </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl border border-stone-100">
            <iframe 
              src={mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`${room.name} Location`}
              className="transition-all duration-700"
            ></iframe>
          </div>
        </section>
        <BottomCTA 
          title={`Book your stay in the ${room.name}`}
          description="Our luxury travel specialists are available 24/7 to help you secure this villa and plan your perfect stay."
        />
      </div>
    </div>
  );
}
