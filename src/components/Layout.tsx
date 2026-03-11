import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Calendar, Users, Info, Utensils, Phone, ShieldCheck, Clock, Search, MessageCircle, ShoppingBag, Share2 } from 'lucide-react';
import { ResortData } from '../types';
import { useForm } from '../context/FormContext';
import { useInquiry } from '../context/InquiryContext';
import ChatBot from './ChatBot';
import OfferPopup from './OfferPopup';
import Gallery from './Gallery';
import Map from './Map';
import { CONFIG } from '../config';

interface LayoutProps {
  children: React.ReactNode;
  resort: ResortData;
}

export default function Layout({ children, resort }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    return !localStorage.getItem('cookieConsent');
  });
  const [searchQuery, setSearchQuery] = useState('');
  const { showForm, setShowForm } = useForm();
  const { items, setIsBucketOpen } = useInquiry();
  const [showNotification, setShowNotification] = useState(false);
  const [lastItemCount, setLastItemCount] = useState(items.length);
  const [formStep, setFormStep] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length > lastItemCount) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 5000);
      return () => clearTimeout(timer);
    }
    setLastItemCount(items.length);
  }, [items.length, lastItemCount]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    groups: [{ adults: 2, children: 0 }],
    roomType: '',
    mealPlan: ''
  });

  const addGroup = () => {
    setFormData(prev => ({
      ...prev,
      groups: [...prev.groups, { adults: 2, children: 0 }]
    }));
  };

  const removeGroup = (index: number) => {
    if (formData.groups.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      groups: prev.groups.filter((_, i) => i !== index)
    }));
  };

  const updateGroup = (index: number, field: 'adults' | 'children', value: number) => {
    setFormData(prev => ({
      ...prev,
      groups: prev.groups.map((g, i) => i === index ? { ...g, [field]: value } : g)
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${CONFIG.API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resort: resort.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          checkIn: formData.dates,
          adults: formData.groups.reduce((sum, g) => sum + g.adults, 0),
          children: formData.groups.reduce((sum, g) => sum + g.children, 0),
          groups: formData.groups,
          roomType: formData.roomType,
          mealPlan: formData.mealPlan,
          notes: `Lead from main request form. Dates: ${formData.dates}`
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      const data = await response.json();
      setShowForm(false);
      setFormStep(1);
      navigate('/thank-you', { state: { previewUrl: data.previewUrl } });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  const navLinks = [
    { name: 'Offers', path: '/offers' },
    { name: 'Dining', path: '/dining' },
    { name: 'Rooms', path: '/rooms' },
    { 
      name: 'Activities', 
      path: '#',
      subLinks: [
        { name: 'Excursions', path: '/activities/excursions' },
        { name: 'Watersports', path: '/activities/watersports' },
        { name: 'Diving', path: '/activities/diving' },
        { name: 'Sports & Recreation', path: '/activities/sports-recreation' },
        { name: 'Zuzuu Kids Club', path: '/activities/zuzuu-kids-club' },
        { name: 'Exotic Animals', path: '/activities/exotic-animals' },
      ]
    },
    { name: 'All Inclusive', path: '/all-inclusive' },
    { name: 'AySpa', path: '/ayspa' },
    { name: 'Weddings', path: '/weddings' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-emerald-100">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white border-b border-stone-100">
        <div className="w-full px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-8 xl:gap-12">
            <Link to="/" className="flex flex-col items-center group shrink-0">
              <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="50px" 
                height="34px" 
                viewBox="0 0 600.000000 395.000000"
                preserveAspectRatio="xMidYMid meet"
                className="text-stone-900 group-hover:text-emerald-600 transition-colors"
              >
                <g transform="translate(0.000000,395.000000) scale(0.050000,-0.050000)" fill="currentColor" stroke="none">
                  <path d="M3950 6733 c-197 -90 -362 -406 -630 -1216 -252 -756 -412 -1048 -770 -1397 -337 -329 -378 -480 -128 -480 440 0 829 550 1257 1780 245 704 359 879 466 715 47 -73 134 -554 136 -751 3 -387 187 -896 367 -1012 266 -172 570 -21 940 467 329 433 390 413 474 -156 183 -1234 446 -1388 1344 -787 379 255 446 254 776 -7 357 -282 524 -316 1067 -219 358 64 489 64 667 0 200 -72 283 -48 178 52 -149 141 -381 178 -806 128 -529 -62 -637 -36 -978 240 -436 352 -562 352 -1099 -8 -565 -377 -740 -240 -861 673 -83 635 -138 789 -306 859 -192 80 -341 -31 -674 -504 -501 -713 -603 -620 -767 700 -89 720 -336 1068 -653 923z"/>
                  <path d="M8868 5159 c-257 -99 -407 -346 -287 -475 169 -181 439 94 439 447 0 80 -11 82 -152 28z"/>
                </g>
              </svg>
            </Link>

            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[10px] uppercase tracking-[0.1em] font-bold text-stone-400">
              {navLinks.map(link => (
                link.subLinks ? (
                  <div key={link.name} className="relative group py-4">
                    <button className="flex items-center gap-1 hover:text-stone-900 transition-colors uppercase tracking-[0.1em]">
                      {link.name}
                      <ChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-0 w-56 bg-white border border-stone-100 shadow-xl rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                      {link.subLinks.map(sub => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-5 py-2 text-[9px] hover:bg-stone-50 hover:text-stone-900 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`hover:text-stone-900 transition-colors whitespace-nowrap ${location.pathname === link.path ? 'text-stone-900' : ''}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsBucketOpen(true)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-900 transition-all"
              aria-label="Inquiry Bucket"
            >
              <ShoppingBag size={18} />
              {items.length > 0 && (
                <span className="absolute top-1 right-1 bg-emerald-500 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                  {items.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-900 transition-all"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <a 
              href="https://wa.me/9607259060" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-emerald-50 text-emerald-500 hover:text-emerald-600 transition-all"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <Link 
              to="/request-quote"
              className="hidden lg:flex bg-stone-900 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/20"
            >
              Request for Quote
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 bg-stone-100 rounded-full text-stone-900 hover:bg-stone-200 transition-colors"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute inset-0 bg-white z-[60] flex items-center px-4 animate-in fade-in duration-300">
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto w-full flex items-center gap-4">
              <Search size={24} className="text-stone-400" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search experiences, villas, or offers..." 
                className="flex-1 bg-transparent border-none outline-none text-xl md:text-3xl font-tripsans placeholder:text-stone-200"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 md:top-20 left-0 w-full bg-white border-b border-stone-100 shadow-xl animate-in slide-in-from-top-4 duration-300 z-40 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <nav className="flex flex-col p-8 gap-6 text-sm uppercase tracking-[0.2em] font-bold text-stone-600">
              {navLinks.map(link => (
                link.subLinks ? (
                  <div key={link.name} className="flex flex-col gap-4">
                    <button 
                      onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                      className="flex items-center justify-between w-full hover:text-stone-900 transition-colors"
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transition-transform duration-300 ${isActivitiesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isActivitiesOpen && (
                      <div className="flex flex-col gap-4 pl-4 border-l border-stone-100 animate-in slide-in-from-top-2 duration-300">
                        {link.subLinks.map(sub => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xs text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ) }
                  </div>
                ) : (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-stone-900 transition-colors ${location.pathname === link.path ? 'text-stone-900' : ''}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-6 border-t border-stone-100 flex flex-col gap-4">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsBucketOpen(true);
                  }}
                  className="flex items-center gap-2 text-stone-900 font-bold"
                >
                  <div className="relative">
                    <ShoppingBag size={18} />
                    {items.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {items.length}
                      </span>
                    )}
                  </div>
                  Inquiry Bucket
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="flex items-center gap-2 text-stone-900 font-bold"
                >
                  <Search size={18} /> Search
                </button>
                <a 
                  href="https://wa.me/9607259060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-500 font-bold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <Link 
                  to="/request-quote"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-stone-900 text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest text-[10px]"
                >
                  Request for Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {children}
        <Gallery />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-24 mt-24">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block mb-8">
                <svg 
                  version="1.0" 
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px" 
                  height="40px" 
                  viewBox="0 0 600.000000 395.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="text-white"
                >
                  <g transform="translate(0.000000,395.000000) scale(0.050000,-0.050000)" fill="currentColor" stroke="none">
                    <path d="M3950 6733 c-197 -90 -362 -406 -630 -1216 -252 -756 -412 -1048 -770 -1397 -337 -329 -378 -480 -128 -480 440 0 829 550 1257 1780 245 704 359 879 466 715 47 -73 134 -554 136 -751 3 -387 187 -896 367 -1012 266 -172 570 -21 940 467 329 433 390 413 474 -156 183 -1234 446 -1388 1344 -787 379 255 446 254 776 -7 357 -282 524 -316 1067 -219 358 64 489 64 667 0 200 -72 283 -48 178 52 -149 141 -381 178 -806 128 -529 -62 -637 -36 -978 240 -436 352 -562 352 -1099 -8 -565 -377 -740 -240 -861 673 -83 635 -138 789 -306 859 -192 80 -341 -31 -674 -504 -501 -713 -603 -620 -767 700 -89 720 -336 1068 -653 923z"/>
                    <path d="M8868 5159 c-257 -99 -407 -346 -287 -475 169 -181 439 94 439 447 0 80 -11 82 -152 28z"/>
                  </g>
                </svg>
              </Link>
              <p className="text-stone-400 text-sm max-w-md leading-relaxed mb-6">
                Trip Maldives is a premier luxury travel platform dedicated to curating the most exclusive experiences in the Maldives. We partner with the finest resorts to ensure your journey is nothing short of extraordinary.
              </p>
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
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg"
              >
                <Share2 size={14} /> Share this Resort
              </button>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-xs font-medium text-stone-300">
                <li><Link to="/offers" className="hover:text-white transition-colors">Special Offers</Link></li>
                <li><Link to="/rooms" className="hover:text-white transition-colors">Villas & Suites</Link></li>
                <li><Link to="/dining" className="hover:text-white transition-colors">Dining Experiences</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-6">Legal</h4>
              <ul className="space-y-4 text-xs font-medium text-stone-300">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
                <li><Link to="/booking-conditions" className="hover:text-white transition-colors">Booking Conditions</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-2">Maldives Serenity Travels</p>
              <p className="text-[9px] text-stone-500 max-w-xl leading-relaxed">
                All bookings, payments, and travel arrangements are legally processed and managed by Maldives Serenity Travels (License No: SP02722025), Addu City, Maldives.
              </p>
            </div>
            <p className="text-[9px] text-stone-600 uppercase tracking-[0.2em]">© {new Date().getFullYear()} Trip Maldives. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ChatBot is the sticky WhatsApp icon */}
      <ChatBot />

      {/* Offer Popups */}
      <OfferPopup />

      {/* Item Added Notification */}
      {showNotification && (
        <div className="fixed top-24 right-6 z-[100] animate-in slide-in-from-right-8 duration-500">
          <div className="bg-stone-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
              <ShoppingBag size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Item Added to Bucket</p>
              <button 
                onClick={() => {
                  setIsBucketOpen(true);
                  setShowNotification(false);
                }}
                className="text-xs text-emerald-400 font-medium hover:text-emerald-300 transition-colors flex items-center gap-1"
              >
                Request Quote Now <ChevronRight size={12} />
              </button>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-20 md:bottom-8 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-[100] animate-in slide-in-from-bottom-8 duration-500">
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-stone-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-stone-900 mb-1">Cookie Consent</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  We use cookies to enhance your booking experience. By continuing, you consent to our use of essential and analytics cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={acceptCookies}
                className="flex-1 bg-stone-900 text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-all"
              >
                Accept All
              </button>
              <Link 
                to="/cookie-policy"
                className="flex-1 bg-stone-100 text-stone-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-stone-200 transition-all text-center"
              >
                Customize
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Step Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300">
          <div 
            onClick={() => setShowForm(false)}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300"
          />
          <div 
            className="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 max-h-[90vh] flex flex-col"
          >
            <div className="bg-stone-900 p-5 md:p-8 text-white shrink-0">
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-lg md:text-2xl font-tripsans mb-1 md:mb-2 pr-8">Request Quotation</h3>
              <p className="text-stone-400 text-[9px] md:text-sm">Step {formStep} of 3: {formStep === 1 ? 'Stay Details' : formStep === 2 ? 'Guest Info' : 'Contact Details'}</p>
              
              <div className="mt-3 md:mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500" 
                  style={{ width: `${(formStep / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="p-5 md:p-8 overflow-y-auto">
              {formStep === 1 && (
                <div className="space-y-5 md:space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Preferred Dates</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <input 
                        type="text" 
                        placeholder="e.g. Oct 2024" 
                        className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none text-sm"
                        value={formData.dates}
                        onChange={e => setFormData({...formData, dates: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400">Number of Guests</label>
                      <button 
                        type="button"
                        onClick={addGroup}
                        className="text-[9px] md:text-[10px] font-bold text-emerald-600 uppercase tracking-widest hover:text-emerald-700 transition-colors"
                      >
                        + Add Group
                      </button>
                    </div>
                    <div className="space-y-3">
                      {formData.groups.map((group, index) => (
                        <div key={index} className="p-3 md:p-4 bg-stone-50 border border-stone-200 rounded-xl relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest">Group {index + 1}</span>
                            {formData.groups.length > 1 && (
                              <button 
                                type="button"
                                onClick={() => removeGroup(index)}
                                className="text-stone-400 hover:text-red-500 transition-colors"
                              >
                                <X size={12} />
                              </button>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="space-y-1">
                              <label className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-stone-400">Adults</label>
                              <select 
                                className="w-full p-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none text-xs"
                                value={group.adults}
                                onChange={(e) => updateGroup(index, 'adults', parseInt(e.target.value))}
                              >
                                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                              </select>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-stone-400">Children</label>
                              <select 
                                className="w-full p-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-stone-900 outline-none text-xs"
                                value={group.children}
                                onChange={(e) => updateGroup(index, 'children', parseInt(e.target.value))}
                              >
                                {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Preferred Villa Category</label>
                    <div className="relative">
                      <Info className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <select 
                        className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none appearance-none text-sm"
                        value={formData.roomType}
                        onChange={e => setFormData({...formData, roomType: e.target.value})}
                        required
                      >
                        <option value="">Select a Villa</option>
                        {resort.room_types.map(room => (
                          <option key={room.id} value={room.name}>{room.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Preferred Meal Plan</label>
                    <div className="relative">
                      <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <select 
                        className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none appearance-none text-sm"
                        value={formData.mealPlan}
                        onChange={e => setFormData({...formData, mealPlan: e.target.value})}
                        required
                      >
                        <option value="">Select a Meal Plan</option>
                        {resort.meal_plans.map(plan => (
                          <option key={plan} value={plan}>{plan.replace(/_/g, ' ')}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => {
                      if (formData.dates && formData.roomType && formData.mealPlan) {
                        setFormStep(2);
                      } else {
                        alert("Please fill in all fields.");
                      }
                    }}
                    className="w-full bg-stone-900 text-white py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-800 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-5 md:space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-5 md:px-6 py-3.5 md:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none text-sm"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button 
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="w-full sm:flex-1 border border-stone-200 py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-50 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFormStep(3)}
                      className="w-full sm:flex-[2] bg-stone-900 text-white py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-800 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-5 md:space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-5 md:px-6 py-3.5 md:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none text-sm"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-5 md:px-6 py-3.5 md:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none text-sm"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button 
                      type="button"
                      onClick={() => setFormStep(2)}
                      className="w-full sm:flex-1 border border-stone-200 py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-50 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="w-full sm:flex-[2] bg-stone-900 text-white py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-800 transition-colors shadow-xl shadow-stone-900/20"
                    >
                      Request Private Quote
                    </button>
                  </div>
                  <p className="text-[9px] md:text-[10px] text-stone-400 text-center uppercase tracking-widest leading-relaxed">
                    By clicking, you agree to be contacted by a Trip Maldives specialist.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Global CTA Trigger - can be used from any page via context if needed, but for now we'll just use the sticky widget in pages */}
    </div>
  );
}
