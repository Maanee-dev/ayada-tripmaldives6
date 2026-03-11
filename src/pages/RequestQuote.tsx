import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Users, Home, Utensils, User, ChevronRight, ChevronLeft, CheckCircle2, Zap, Minus, Plus, ShieldCheck, Clock, Info, ExternalLink, X } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format, addDays, isBefore, startOfToday } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { ResortData } from '../types';
import { useForm } from '../context/FormContext';
import { useInquiry } from '../context/InquiryContext';
import SEO from '../components/SEO';
import { CONFIG } from '../config';

interface RequestQuoteProps {
  resort: ResortData;
}

export default function RequestQuote({ resort }: RequestQuoteProps) {
  const { formData, setFormData } = useForm();
  const { items } = useInquiry();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMealInfo, setShowMealInfo] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${CONFIG.API_URL}/api/leads`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-API-Key': CONFIG.BACKEND_API_KEY
        },
        body: JSON.stringify({
          ...formData,
          resort: resort.name,
          items: items // Include bucket items
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      const data = await response.json();
      
      navigate('/thank-you', { state: { previewUrl: data.previewUrl } });
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, name: 'Your Stay', icon: CalendarIcon },
    { id: 2, name: 'Contact Info', icon: User },
  ];

  return (
    <div className="w-full py-6 md:py-16 px-4 max-w-4xl mx-auto">
      <SEO 
        title="Get a Private Quote"
        description="Request a personalized quote for your stay at Ayada Maldives. Exclusive agency rates and dedicated concierge service."
        keywords="Maldives resort quote, Ayada Maldives pricing, luxury travel inquiry, Maldives vacation planning"
      />
      <div className="text-center mb-8 md:mb-16">
        <p className="text-emerald-600 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-bold mb-3 md:mb-4">Fast & Private</p>
        <h1 className="text-2xl md:text-5xl font-tripsans mb-3 md:mb-4 leading-tight">Get Your Custom Quote</h1>
        <p className="text-stone-500 text-xs md:text-base max-w-lg mx-auto px-4">Receive a personalized offer for your dream Maldivian getaway in minutes.</p>
      </div>

      <div className="bg-white rounded-2xl md:rounded-3xl border border-stone-100 shadow-2xl shadow-stone-200/50">
        <div className="flex border-b border-stone-50">
          {steps.map((s) => (
            <div 
              key={s.id} 
              className={`flex-1 py-3 md:py-4 flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${step === s.id ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-400'}`}
            >
              <s.icon size={12} className="md:w-3.5 md:h-3.5" /> {s.name}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 md:p-12">
          {step === 1 && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="relative">
                    <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 md:mb-3">Check-in & Check-out</label>
                    <div 
                      onClick={() => {
                        if (!showDatePicker) {
                          setShowDatePicker(true);
                          setShowGuestPicker(false);
                        }
                      }}
                      className={`bg-white p-4 md:p-5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all shadow-sm ${showDatePicker ? 'border-emerald-600 ring-1 ring-emerald-600' : 'border-stone-100 hover:bg-stone-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <CalendarIcon size={18} className={showDatePicker ? 'text-emerald-600' : 'text-stone-400'} />
                        <span className="text-sm font-medium text-stone-900">
                          {formData.checkIn && formData.checkOut 
                            ? `${format(new Date(formData.checkIn), 'MMM dd')} - ${format(new Date(formData.checkOut), 'MMM dd')}`
                            : 'Select Dates'}
                        </span>
                      </div>
                      <ChevronRight size={16} className={`text-stone-400 transition-transform ${showDatePicker ? 'rotate-90 text-emerald-600' : ''}`} />
                    </div>

                    {showDatePicker && (
                      <div className="absolute top-full left-0 w-[305px] -ml-[13px] pl-[9px] pr-2 mt-4 bg-white py-6 md:p-8 md:w-full md:ml-0 rounded-3xl shadow-2xl border border-stone-100 z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex justify-between items-center mt-[-15px] mb-[25px] px-4">
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-900 ml-[-20px]">
                              {!formData.checkIn ? 'Select Check-in Date' : !formData.checkOut ? 'Select Check-out Date' : 'Dates Selected'}
                            </h4>
                            {formData.checkIn && !formData.checkOut && (
                              <p className="text-[8px] text-emerald-600 font-bold uppercase tracking-widest ml-[-20px] mt-1">Check-in: {format(new Date(formData.checkIn), 'MMM dd, yyyy')}</p>
                            )}
                          </div>
                          <button type="button" onClick={() => setShowDatePicker(false)} className="p-0 hover:bg-stone-100 rounded-full transition-colors">
                            <X size={18} className="mr-[-99px]" />
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
                              const newCheckIn = range?.from ? format(range.from, 'yyyy-MM-dd') : '';
                              const newCheckOut = range?.to ? format(range.to, 'yyyy-MM-dd') : '';
                              
                              setFormData({
                                ...formData,
                                checkIn: newCheckIn,
                                checkOut: newCheckOut
                              });

                              // If both are selected, you can still keep it open for review
                              // or close it manually via the X button.
                              // Removed auto-close to satisfy user request for it not to toggle off.
                            }}
                            disabled={{ before: startOfToday() }}
                            className="luxury-datepicker"
                          />
                        </div>
                        <div className="mt-4 flex flex-col items-center gap-4">
                          {formData.checkIn && formData.checkOut && (
                            <button 
                              type="button"
                              onClick={() => setShowDatePicker(false)}
                              className="w-full bg-stone-900 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all"
                            >
                              Confirm Dates
                            </button>
                          )}
                          <button 
                            type="button"
                            onClick={() => {
                              setFormData({...formData, checkIn: '', checkOut: ''});
                            }}
                            className="text-[8px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            Reset Dates
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="relative">
                    <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 md:mb-3">Guests</label>
                    <div 
                      onClick={() => setShowGuestPicker(!showGuestPicker)}
                      className={`bg-white p-4 md:p-5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all shadow-sm ${showGuestPicker ? 'border-emerald-600 ring-1 ring-emerald-600' : 'border-stone-100 hover:bg-stone-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Users size={18} className={showGuestPicker ? 'text-emerald-600' : 'text-stone-400'} />
                        <span className="text-sm font-medium text-stone-900">
                          {formData.adults} Adults{formData.children > 0 ? `, ${formData.children} Kids` : ''}
                        </span>
                      </div>
                      <ChevronRight size={16} className={`text-stone-400 transition-transform ${showGuestPicker ? 'rotate-90 text-emerald-600' : ''}`} />
                    </div>

                    {showGuestPicker && (
                      <div className="absolute top-full left-0 w-full mt-4 bg-white p-8 rounded-3xl shadow-2xl border border-stone-100 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="space-y-8">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-stone-900">Adults</p>
                              <p className="text-[10px] text-stone-400 font-medium mt-1">AGES 13+</p>
                            </div>
                            <div className="flex items-center gap-6">
                              <button 
                                type="button"
                                onClick={() => setFormData({...formData, adults: Math.max(1, formData.adults - 1)})}
                                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="text-lg font-bold text-stone-900 w-4 text-center">{formData.adults}</span>
                              <button 
                                type="button"
                                onClick={() => setFormData({...formData, adults: formData.adults + 1})}
                                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-stone-900">Children</p>
                              <p className="text-[10px] text-stone-400 font-medium mt-1">AGES 0-12</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button 
                                type="button"
                                onClick={() => setFormData({...formData, children: Math.max(0, formData.children - 1)})}
                                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="text-lg font-bold text-stone-900 w-4 text-center">{formData.children}</span>
                              <button 
                                type="button"
                                onClick={() => setFormData({...formData, children: formData.children + 1})}
                                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          <button 
                            type="button"
                            onClick={() => setShowGuestPicker(false)}
                            className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
                          >
                            Apply Selection
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">Villa Type</label>
                      <button 
                        type="button"
                        onClick={() => window.open('/rooms', '_blank')}
                        className="text-[8px] md:text-[9px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1 hover:text-emerald-700 transition-colors"
                      >
                        Check Rooms <ExternalLink size={10} />
                      </button>
                    </div>
                    <select 
                      value={formData.roomType}
                      onChange={e => setFormData({...formData, roomType: e.target.value})}
                      className="w-full px-4 md:px-5 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-stone-900 transition-all text-sm appearance-none"
                    >
                      <option value="">Select a Villa</option>
                      {resort.room_types.map(room => (
                        <option key={room.id} value={room.name}>{room.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400">Meal Plan</label>
                      <button 
                        type="button"
                        onClick={() => setShowMealInfo(!showMealInfo)}
                        className="text-[8px] md:text-[9px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1 hover:text-emerald-700 transition-colors"
                      >
                        Meal Plan Details <Info size={10} />
                      </button>
                    </div>
                    <select 
                      value={formData.mealPlan}
                      onChange={e => setFormData({...formData, mealPlan: e.target.value})}
                      className="w-full px-4 md:px-5 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-stone-900 transition-all text-sm appearance-none"
                    >
                      <option value="">Select Meal Plan</option>
                      {resort.meal_plans.map(plan => (
                        <option key={plan} value={plan}>{plan.replace(/_/g, ' ')}</option>
                      ))}
                    </select>

                    {showMealInfo && (
                      <div className="mt-3 md:mt-4 p-3 md:p-4 bg-emerald-50 rounded-xl md:rounded-2xl border border-emerald-100 space-y-2 md:space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-[9px] md:text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Bed & Breakfast</p>
                          <p className="text-[9px] md:text-[10px] text-emerald-700 font-light">Daily breakfast at Magu restaurant.</p>
                        </div>
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-[9px] md:text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Half Board</p>
                          <p className="text-[9px] md:text-[10px] text-emerald-700 font-light">Daily breakfast and dinner at Magu restaurant.</p>
                        </div>
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-[9px] md:text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Full Board</p>
                          <p className="text-[9px] md:text-[10px] text-emerald-700 font-light">Daily breakfast, lunch, and dinner at Magu restaurant.</p>
                        </div>
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-[9px] md:text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Crystal All-Inclusive</p>
                          <p className="text-[9px] md:text-[10px] text-emerald-700 font-light">Breakfast, lunch, dinner, and a wide selection of alcoholic and non-alcoholic beverages across all venues.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 md:pt-6">
                <button 
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.checkIn || !formData.checkOut || !formData.roomType}
                  className="w-full md:w-auto bg-stone-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-stone-800 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
                >
                  Continue to Contact <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-stone-900 transition-all text-sm"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-stone-900 transition-all text-sm"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-stone-900 transition-all text-sm"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Special Requests</label>
                  <textarea 
                    rows={3}
                    placeholder="Any special occasions or requirements?" 
                    className="w-full px-5 md:px-6 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-stone-900 transition-all text-sm resize-none"
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-4 md:pt-6">
                <button 
                  type="button"
                  onClick={handleBack}
                  className="w-full md:w-auto text-stone-400 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:text-stone-900 transition-colors py-2"
                >
                  <ChevronLeft size={16} className="md:w-[18px] md:h-[18px]" /> Back
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-emerald-600 text-white px-10 md:px-16 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Get My Quote Now'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { icon: ShieldCheck, text: 'Best Price Guarantee' },
          { icon: Clock, text: '24/7 Local Support' },
          { icon: Zap, text: 'Instant Confirmation' },
          { icon: CheckCircle2, text: 'No Hidden Fees' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center p-2">
            <item.icon size={18} className="md:w-5 md:h-5 text-emerald-500" />
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-stone-400">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
