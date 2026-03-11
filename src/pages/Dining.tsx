import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Utensils, Star, Waves, ChevronRight, Clock, MapPin, Award, ArrowLeft, ArrowRight, Sparkles, ChefHat } from 'lucide-react';
import { ResortData } from '../types';
import { useForm } from '../context/FormContext';
import SEO from '../components/SEO';
import BottomCTA from '../components/BottomCTA';

interface DiningProps {
  resort: ResortData;
}

export default function Dining({ resort }: DiningProps) {
  const { setShowForm } = useForm();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(resort.dining_venues.length / itemsPerPage);
  const paginatedVenues = resort.dining_venues.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fcfbf7] min-h-screen">
      <SEO 
        title="Exquisite Culinary Journey"
        description="Indulge in a variety of dining experiences at Ayada Maldives. From international cuisine to local flavors, explore our 8 dining venues."
        keywords="Maldives dining, luxury restaurants Maldives, Ayada Maldives food, fine dining Maldives"
      />
      {/* Full Width Hero Section - Editorial Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={resort.images[2]} 
            className="w-full h-full object-cover" 
            alt="Dining at Ayada" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 uppercase tracking-[0.5em] text-xs md:text-sm font-medium mb-6 flex items-center justify-center gap-3"
          >
            <Award size={18} /> Epicurean Excellence
          </motion.p>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[12rem] font-tripsans text-white leading-none tracking-tighter mb-8"
          >
            A Culinary <br className="hidden md:block" /> Journey
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed italic">
              "Savor the world's finest flavors in breathtaking Maldivian settings."
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-12 bg-white/30 mx-auto mb-4" />
          <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        {/* Venues List - Minimalistic */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-7xl font-tripsans mb-8 text-stone-900 leading-tight">Signature Venues</h2>
              <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed">Each restaurant at {resort.name} offers a distinct atmosphere and menu, crafted by award-winning international chefs using the freshest local and imported ingredients.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-8 text-stone-400 text-[11px] font-bold uppercase tracking-[0.2em]"
            >
              <span className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm"><Clock size={16} className="text-emerald-600" /> Breakfast: 07:00 - 10:30</span>
              <span className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm"><Clock size={16} className="text-emerald-600" /> Dinner: 19:00 - 22:00</span>
            </motion.div>
          </div>

          <div className="space-y-32 md:space-y-64">
            {paginatedVenues.map((venue, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-3xl">
                    <img 
                      src={venue.image} 
                      className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt={venue.name} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-8 left-8 flex gap-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-xl">
                        {venue.cuisine}
                      </div>
                      {i === 0 && (
                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-900 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2 shadow-xl">
                          <Star size={12} className="text-amber-500" fill="currentColor" /> Signature
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                  <h3 className="text-4xl md:text-6xl font-tripsans text-stone-900 leading-tight">{venue.name}</h3>
                  <p className="text-stone-500 text-lg md:text-xl leading-relaxed font-light">{venue.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {venue.highlights.map((h, j) => (
                      <span key={j} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400 bg-stone-100 px-4 py-2 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => navigate('/request-quote')}
                      className="bg-stone-900 text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all shadow-2xl shadow-stone-900/20 flex items-center gap-3 group"
                    >
                      Reserve a Table <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-12 mb-40"
          >
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-6 rounded-full border border-stone-200 text-stone-400 disabled:opacity-20 hover:text-stone-900 hover:border-stone-900 transition-all shadow-sm hover:shadow-xl"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex items-center gap-6">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-14 h-14 rounded-full text-xs font-bold transition-all duration-500 ${
                    currentPage === i + 1 
                      ? 'bg-stone-900 text-white shadow-2xl scale-110' 
                      : 'text-stone-400 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-6 rounded-full border border-stone-200 text-stone-400 disabled:opacity-20 hover:text-stone-900 hover:border-stone-900 transition-all shadow-sm hover:shadow-xl"
            >
              <ArrowRight size={24} />
            </button>
          </motion.div>
        )}

        {/* Meal Plans Section - Immersive Style */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-white mb-40 overflow-hidden relative shadow-3xl"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <ChefHat className="w-full h-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <p className="text-emerald-400 uppercase tracking-[0.4em] text-[11px] font-bold mb-8">Tailored Indulgence</p>
              <h2 className="text-4xl md:text-7xl font-tripsans mb-10 leading-tight">Curated Meal Plans</h2>
              <p className="text-stone-400 text-lg md:text-xl mb-16 leading-relaxed font-light">Whether you prefer the flexibility of Half Board or the worry-free luxury of the Crystal All-Inclusive plan, the resort has designed their offerings to suit your island lifestyle.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {resort.meal_plans.map((plan, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 group hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                      <Utensils size={24} />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-4">{plan.replace(/_/g, ' ')}</h4>
                    <p className="text-xs text-stone-400 font-medium leading-relaxed">Includes {plan.includes('All_Inclusive') ? 'unlimited premium beverages and gourmet dining' : 'daily breakfast and dinner at Magu'}.</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl">
                <img 
                  src={resort.images[3]} 
                  className="w-full h-full object-cover" 
                  alt="Dining Experience" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-white p-10 rounded-[2rem] shadow-3xl hidden md:block">
                <Sparkles className="text-emerald-600 mb-4" size={32} />
                <p className="text-stone-900 font-tripsans text-xl italic">"Exquisite flavors, <br /> unforgettable views."</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <BottomCTA 
          title="Ready to Taste Paradise?"
          description="Contact our concierge team to personalize your culinary journey or book a private destination dining experience under the stars."
          buttonText="Inquire Now"
        />
      </div>
    </div>
  );
}
