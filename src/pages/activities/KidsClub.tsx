import React from 'react';
import { Sun, Heart, Music, Zap, CheckCircle2, Clock, Users, MapPin, Palette, Utensils, GraduationCap, Waves } from 'lucide-react';
import { ResortData } from '../../types';
import SEO from '../../components/SEO';

interface KidsClubProps {
  resort: ResortData;
}

export default function KidsClub({ resort }: KidsClubProps) {
  const features = [
    {
      title: "Creative Arts",
      description: "T-shirt painting, face painting, and various arts and crafts to spark imagination.",
      icon: Palette
    },
    {
      title: "Little Chefs",
      description: "Engaging cooking classes where children can learn to make simple, fun dishes.",
      icon: Utensils
    },
    {
      title: "Eco-Explorers",
      description: "Educational insight into the unique flora, fauna, and marine life of the Maldives.",
      icon: GraduationCap
    },
    {
      title: "Active Play",
      description: "Access to a private kids' pool, playground area, and a jungle gym.",
      icon: Waves
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-[#fdfcfb]">
      <SEO 
        title="Zuzuu Kids Club - Family Fun"
        description="A world of wonder for our young guests. Zuzuu Kids Club offers educational and recreational activities in a safe and engaging environment."
        keywords="Maldives kids club, family resort Maldives, Ayada Maldives kids club, children activities Maldives"
      />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] -mx-6 md:-mx-12 lg:-mx-16 -mt-16 md:-mt-24 mb-16 md:mb-24 overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1545366312691-CKMD8K1R4OVAW53LXPN1/IMG_2982.JPG?format=2500w" 
          className="w-full h-full object-cover"
          alt="Zuzuu Kids Club"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/30 flex flex-col justify-end p-6 md:p-16 lg:p-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-orange-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">Young Adventurers</p>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-tripsans text-white mb-6 leading-[0.9] tracking-tighter">Zuzuu Kids Club</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-32">
          <div>
            <h2 className="text-3xl md:text-5xl font-tripsans mb-8 leading-tight text-stone-900">A World of Wonder</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
              Ayada Maldives provides a fully equipped Kid's Club inviting all children to explore, learn, and play. This facility offers a host of recreational and educational activities conducted by a personable and attentive team in a safe and engaging environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-2xl">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-tripsans text-lg text-stone-900">Opening Hours</h4>
                  <p className="text-stone-500 text-sm">09:00 AM – 06:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-tripsans text-lg text-stone-900">Age Group</h4>
                  <p className="text-stone-500 text-sm">4 years and above</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-[32px] border border-stone-100 mb-8">
              <h4 className="font-tripsans text-xl text-stone-900 mb-4">Good to Know</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-stone-600 text-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  Children under 4 are welcome (babysitting charges apply)
                </li>
                <li className="flex items-center gap-3 text-stone-600 text-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  Activities are complimentary unless specified
                </li>
                <li className="flex items-center gap-3 text-stone-600 text-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  Babysitting service is available on request
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-[32px] border border-stone-100 shadow-sm hover:shadow-md transition-all group">
                <item.icon className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-tripsans text-xl mb-3 text-stone-900">{item.title}</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-tripsans text-stone-900 mb-4">Kids Club Facilities</h3>
            <p className="text-stone-500 font-light">Designed for endless adventure and safe exploration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-[40px] overflow-hidden group">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1545366312999-S7E8FW3HHI43PHAYIT5E/IMG_2985.JPG?format=2500w" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Kids Pool"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-tripsans text-2xl">Kids' Pool</h4>
                <p className="text-white/80 text-sm font-light">Safe and shallow water fun</p>
              </div>
            </div>
            <div className="relative h-80 rounded-[40px] overflow-hidden group">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1545366322394-H4MIIOKGNDQ5PRDZMZT7/IMG_2991.JPG?format=2500w" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Playground"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-tripsans text-2xl">Playground</h4>
                <p className="text-white/80 text-sm font-light">Jungle gym and outdoor play</p>
              </div>
            </div>
            <div className="relative h-80 rounded-[40px] overflow-hidden group">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1541911854077-F7XXQ10MOGGFKY8RWO93/kidsclub2.jpg?format=2500w" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Creative Stage"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-tripsans text-2xl">Creative Stage</h4>
                <p className="text-white/80 text-sm font-light">For performances and shows</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-900 text-white p-12 rounded-[48px] flex flex-col justify-center">
              <h4 className="text-3xl font-tripsans mb-6">Attentive Care</h4>
              <p className="text-stone-400 font-light leading-relaxed mb-8">
                A dedicated nanny room and professional team ensure that your little ones are cared for with the utmost attention, allowing you to relax knowing they are in safe hands.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <span className="text-sm uppercase tracking-widest font-medium">Personable & Attentive Team</span>
              </div>
            </div>
            <div className="bg-orange-500 text-white p-12 rounded-[48px] flex flex-col justify-center">
              <h4 className="text-3xl font-tripsans mb-6">Educational Insight</h4>
              <p className="text-white/90 font-light leading-relaxed mb-8">
                We believe in fun with a purpose. Our activities provide children with unique insights into the Maldivian environment, fostering a love for nature and marine life.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Zap className="text-orange-500" size={24} />
                </div>
                <span className="text-sm uppercase tracking-widest font-medium">Unique Maldivian Flora & Fauna</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Schedule Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-tripsans text-stone-900 mb-4">Weekly Activity Schedule</h3>
            <p className="text-stone-500 font-light">A diverse program of fun and educational experiences</p>
          </div>
          
          <div className="bg-white p-4 md:p-8 rounded-[48px] shadow-xl border border-stone-100 overflow-hidden">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/7971cbef-6060-4dab-b8c2-79664ee1b4f2/Kids+club+schedule.png?format=2500w" 
              alt="Zuzuu Kids Club Weekly Activity Schedule"
              className="w-full h-auto rounded-[32px]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-stone-400 text-sm italic">
              * Schedule is subject to change based on weather conditions and seasonal availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
