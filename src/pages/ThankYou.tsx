import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, Home, Calendar, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const previewUrl = location.state?.previewUrl || searchParams.get('previewUrl');
  const whatsappNumber = "+96072509060";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <SEO 
        title="Thank You | Request Received"
        description="Your request for Ayada Maldives has been received. Our luxury travel specialists will contact you shortly."
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-xl shadow-emerald-100">
            <CheckCircle2 size={48} />
          </div>
        </div>

        <p className="text-emerald-600 uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-6">Request Received</p>
        <h1 className="text-4xl md:text-7xl font-tripsans mb-8 leading-tight tracking-tighter">Your Journey Begins</h1>
        
        <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed mb-12">
          Thank you for choosing Maldives Serenity Travels. Your request has been successfully received. A luxury specialist will review your details and contact you within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-left">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-stone-900 mb-6 shadow-sm">
              <Calendar size={20} />
            </div>
            <h3 className="font-tripsans text-xl mb-2">What's Next?</h3>
            <p className="text-sm text-stone-500 font-light leading-relaxed">
              We are reviewing your request and checking real-time availability and exclusive offers to ensure you get the best possible experience.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 text-left">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
              <MessageCircle size={20} />
            </div>
            <h3 className="font-tripsans text-xl mb-2">Need it Faster?</h3>
            <p className="text-sm text-emerald-800/70 font-light leading-relaxed">
              Connect with us directly on WhatsApp for immediate assistance with your booking or any urgent questions.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="w-full sm:w-auto bg-stone-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-stone-900/20"
          >
            <Home size={18} /> Return Home
          </button>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-stone-200 text-stone-900 px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all flex items-center justify-center gap-3"
          >
            <MessageCircle size={18} className="text-emerald-500" /> WhatsApp Us
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-2 text-stone-300">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">A Trip Maldives Experience</span>
        </div>
      </motion.div>
    </div>
  );
}
