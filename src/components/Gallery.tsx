import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561440881384-97H8T15DQOVOZIUZ1L88/57396_ayada-maldives-12.jpg?format=2500w',
    title: 'Award-Winning AySpa',
    category: 'Wellness'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1562563737760-0SSSKTH06709Q1NHNU69/Wedding+1-2.jpg?format=2500w',
    title: 'Dream Weddings',
    category: 'Romance'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1583921079379-VY1ACFN2SEN0GJ2L2X6H/DJI_0956.jpg?format=2500w',
    title: 'E-foil Adventures',
    category: 'Watersports'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713728638-FF1S7ZURZJCGA6MGI603/_GPX0011.jpg?format=2500w',
    title: 'Deserted Island Picnic',
    category: 'Excursions'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1542709950343-MEP6NCMKIT0BJYRKFMTL/tennis.jpg?format=2500w',
    title: 'Professional Tennis Courts',
    category: 'Sports'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1545366312691-CKMD8K1R4OVAW53LXPN1/IMG_2982.JPG?format=2500w',
    title: 'Zuzuu Kids Club',
    category: 'Family'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1537419038295-84VVZL8P4DQEGPNQXRRJ/nemo3.JPG?format=2500w',
    title: 'Underwater Discovery',
    category: 'Diving'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1581738431395-8YVI6BCH40SNC4CCCFXJ/_AGU1684.jpg?format=2500w',
    title: 'Thrilling Jet Ski Rides',
    category: 'Watersports'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561435577404-QWUO8ZTN7CGZZ625BLM8/ayada+maldives+spa.jpg?format=2500w',
    title: 'Spa Relaxation Area',
    category: 'Wellness'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/b365752e-6b3b-4bf7-a86c-38225ca97b42/486099711_18496215082005962_4229497201407224796_n.jpg?format=2500w',
    title: 'Beachfront Ceremonies',
    category: 'Romance'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1561440321737-VFVMK51TUV3RV7ACUVV4/image002_large.jpg?format=2500w',
    title: 'Turkish Hammam',
    category: 'Wellness'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1562563737760-0SSSKTH06709Q1NHNU69/Wedding+1-2.jpg?format=2500w',
    title: 'Tropical Paradise',
    category: 'Resort'
  }
];

export default function Gallery() {
  const [shuffledImages, setShuffledImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffledImages([...galleryImages].sort(() => Math.random() - 0.5));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % shuffledImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + shuffledImages.length) % shuffledImages.length);
    }
  };

  return (
    <section className="mt-24 md:mt-32 relative group/gallery">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-4">
        <div className="mb-6 md:mb-0">
          <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">Visual Journey</p>
          <h2 className="text-3xl md:text-6xl font-tripsans text-stone-900 leading-tight">Resort Gallery</h2>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 md:gap-6 px-4 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {shuffledImages.map((image, index) => (
          <div 
            key={index} 
            className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer bg-stone-100 snap-start group relative"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">{image.category}</span>
              <h4 className="text-white font-tripsans text-lg md:text-2xl leading-tight">{image.title}</h4>
              <div className="mt-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <Maximize2 size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-stone-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[210] p-2"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-[210] p-4"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-[210] p-4"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-6">
            <img 
              src={shuffledImages[selectedImage].url} 
              alt={shuffledImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center text-white animate-in slide-in-from-bottom-4 duration-500">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2 block">
                {shuffledImages[selectedImage].category}
              </span>
              <h3 className="text-2xl md:text-4xl font-tripsans">{shuffledImages[selectedImage].title}</h3>
              <p className="text-white/40 text-xs mt-4 font-bold tracking-widest">
                {selectedImage + 1} / {shuffledImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
