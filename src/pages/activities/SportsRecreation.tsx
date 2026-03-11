import React from 'react';
import { Dumbbell, Gamepad2, Map, Trophy, CheckCircle2, Clock, Users, Zap, ChevronRight } from 'lucide-react';
import { ResortData } from '../../types';
import SEO from '../../components/SEO';

interface SportsRecreationProps {
  resort: ResortData;
}

export default function SportsRecreation({ resort }: SportsRecreationProps) {
  const facilities = [
    {
      title: "The Gym",
      time: "08:00 AM - 11:00 PM",
      description: "A fully equipped state of the art fitness center located at the Recreation Center. The gym features various treadmills, a multi-function bench press, cycling, a rowing machine, leg training machines, free weights and more to ensure your workout routine remains uninterrupted.",
      icon: Dumbbell,
      image: "https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1534331912296-CNGGAB6R1E5MZ0FD8CPD/150938220.jpg?format=2500w"
    },
    {
      title: "Games Hall",
      time: "08:00 AM - 11:00 PM",
      description: "The vibrant games hall is available at the Recreation Center for your enjoyment. It offers a wide range of entertainment including PS4 consoles, table tennis, billiards, table football, and darts, making it the perfect spot for friendly competition.",
      icon: Gamepad2,
      image: "https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1542709950629-0HAWRKRK4FRYCKO7P9OQ/286275_16101112270047612463.jpg?format=750w"
    },
    {
      title: "Tennis & Football",
      time: "Floodlit Courts",
      description: "Professional floodlit tennis and football courts are available for both day and night play. Whether you're looking for a serious match or a casual kickabout, our facilities cater to all skill levels. Equipment and coaching can be arranged through your Butler.",
      icon: Trophy,
      image: "https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1542710174088-PGOE4BLDCIR5FN8GMHYW/ayada-maldives.jpg?format=750w"
    }
  ];

  const joggingTracks = [
    { length: "900m", type: "Garden Loop", color: "text-emerald-500" },
    { length: "1,200m", type: "Island Perimeter", color: "text-blue-500" },
    { length: "1,600m", type: "Full Resort Circuit", color: "text-amber-500" }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Sports & Recreation - AyClub"
        description="Stay active at Ayada Maldives. Our AyClub offers a state-of-the-art gym, games hall, tennis and football courts, and scenic jogging tracks."
        keywords="Maldives sports, resort gym Maldives, tennis Maldives, football Maldives, active holiday Maldives"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-16 md:mb-24 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1542709950343-MEP6NCMKIT0BJYRKFMTL/tennis.jpg?format=750w" 
          className="w-full h-full object-cover"
          alt="AyClub Sports & Recreation"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">The Heart of Activity</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">AyClub</h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              AyClub is located at the heart of the island, offering a range of sport and recreational facilities to complete your stay at Ayada Maldives.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Facilities Grid */}
        <div className="space-y-24 mb-32">
          {facilities.map((facility, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-3xl">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                    <Clock size={14} className="text-emerald-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{facility.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center">
                  <facility.icon className="text-stone-900" size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-tripsans leading-tight">{facility.title}</h2>
                <p className="text-stone-500 text-lg font-light leading-relaxed">
                  {facility.description}
                </p>
                <div className="pt-4">
                  <button className="w-full md:w-auto bg-stone-900 text-white px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group">
                    Inquire Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jogging Tracks Section */}
        <div className="bg-stone-900 rounded-[3rem] p-8 md:p-20 text-white mb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Map className="w-full h-full" />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Explore the Island</p>
            <h2 className="text-4xl md:text-6xl font-tripsans mb-8 leading-tight">Jogging Tracks</h2>
            <p className="text-stone-400 text-lg font-light leading-relaxed mb-12">
              Three jogging tracks measuring 900 m, 1,200 m and 1,600 m around the resort are available. Please contact the Leisure Concierge by pressing the “Things To Do” button on your telephone or contact your Butler or Guests Relation Agent for more information or please review the resort map for details.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {joggingTracks.map((track, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-colors">
                  <div className={`text-4xl font-tripsans mb-2 ${track.color}`}>{track.length}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{track.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Users, title: "Leisure Concierge", desc: "Press 'Things To Do' on your phone" },
            { icon: Zap, title: "Professional Gear", desc: "High-end equipment provided" },
            { icon: CheckCircle2, title: "Complimentary", desc: "Most facilities included in stay" },
            { icon: Map, title: "Resort Map", desc: "Available at reception & via Butler" }
          ].map((item, i) => (
            <div key={i} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:border-emerald-200 transition-colors">
              <item.icon className="text-emerald-600 mb-6" size={24} />
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
              <p className="text-stone-500 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
