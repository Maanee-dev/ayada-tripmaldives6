import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function Map() {
  return (
    <section className="mt-24 md:mt-32">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">Location</p>
        <h2 className="text-3xl md:text-6xl font-tripsans text-stone-900 leading-tight mb-6">Find Your Paradise</h2>
        <p className="text-stone-500 text-xs md:text-base max-w-2xl mx-auto px-4">
          Ayada Maldives is located on the beautiful Maguhdhuvaa Island in the Gaafu Dhaalu Atoll, 
          offering a truly secluded and luxurious escape in the southern Maldives.
        </p>
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl border border-stone-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7711213080265!2d73.35541028496938!3d0.2786942821468243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b4aa21037b85ff9%3A0x5f4d2949e658a8a8!2sAyada%20Maldives!5e0!3m2!1sen!2sus!4v1773212135372!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ayada Maldives Location"
          className="transition-all duration-700"
        ></iframe>
      </div>
    </section>
  );
}
