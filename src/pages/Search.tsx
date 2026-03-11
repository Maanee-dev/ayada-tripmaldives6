import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, MapPin, Star, ArrowRight, Clock } from 'lucide-react';
import { ResortData, Offer, supabase } from '../types';
import SEO from '../components/SEO';

interface SearchPageProps {
  resort: ResortData;
}

export default function SearchPage({ resort }: SearchPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const { data, error } = await supabase
          .from('offers')
          .select('*')
          .eq('resort_id', resort.id);

        if (error) throw error;
        setOffers(data || []);
      } catch (err) {
        console.error('Error fetching offers:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, [resort.id]);

  const allItems = [
    ...resort.room_types.map(room => ({ ...room, type: 'Room' })),
    ...resort.dining_venues.map(dine => ({ ...dine, type: 'Dining' })),
    ...resort.features.map(feature => ({ 
      name: feature, 
      description: `Experience the ultimate Maldivian luxury with our curated ${feature.toLowerCase()} activities.`, 
      image: resort.images[1],
      type: 'Experience' 
    })),
    ...offers.map(offer => ({ 
      name: offer.title, 
      description: offer.description, 
      image: offer.image, 
      type: 'Offer',
      category: offer.category,
      expiry: offer.expiry_date
    })),
  ];

  const results = allItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-stone-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <SEO 
        title={`Search results for "${query}"`}
        description={`Explore search results for "${query}" at Ayada Maldives. Find the best villas, dining, and experiences.`}
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-6">Explore Paradise</p>
          <h1 className="text-4xl md:text-6xl font-tripsans mb-10">Search Results</h1>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for rooms, dining, or experiences..."
              className="w-full pl-14 pr-6 py-5 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none text-lg font-light transition-all"
            />
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400" size={24} />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-stone-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-all"
            >
              Search
            </button>
          </form>
        </div>

        {query && (
          <div className="mb-8 flex items-center justify-between border-b border-stone-100 pb-6">
            <p className="text-stone-400 text-sm">
              Showing {results.length} results for <span className="text-stone-900 font-medium">"{query}"</span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl border border-stone-100 overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-900">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-tripsans mb-3 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>
                <Link 
                  to={item.type === 'Room' ? `/rooms/${(item as any).id}` : item.type === 'Dining' ? '/dining' : item.type === 'Experience' ? '/experiences' : '/offers'}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-900 group/link"
                >
                  View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {query && results.length === 0 && (
          <div className="text-center py-20 bg-stone-50 rounded-[3rem] border border-dashed border-stone-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-stone-300 mx-auto mb-6">
              <SearchIcon size={32} />
            </div>
            <h3 className="text-2xl font-tripsans mb-2">No results found</h3>
            <p className="text-stone-500 font-light">Try searching for something else, like "Villa" or "Spa".</p>
          </div>
        )}

        {!query && (
          <div className="text-center py-20">
            <p className="text-stone-400 font-light">Enter a search term above to explore Ayada Maldives.</p>
          </div>
        )}
      </div>
    </div>
  );
}
