import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Trash2, Calendar as CalendarIcon, Users, Mail, Phone, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useInquiry, InquiryItem } from '../context/InquiryContext';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import { CONFIG } from '../config';

export default function InquiryBucket() {
  const { items, removeItem, clearBucket, isBucketOpen, setIsBucketOpen } = useInquiry();
  const [step, setStep] = useState<'bucket' | 'form' | 'success'>('bucket');
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    groups: [{ adults: 2, children: 0 }],
    specialRequest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${CONFIG.API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          adults: formData.groups.reduce((sum, g) => sum + g.adults, 0),
          children: formData.groups.reduce((sum, g) => sum + g.children, 0),
          groups: formData.groups,
          notes: formData.specialRequest,
          checkIn: dateRange.from ? format(dateRange.from, 'yyyy-MM-dd') : '',
          checkOut: dateRange.to ? format(dateRange.to, 'yyyy-MM-dd') : '',
          resort: 'Ayada Maldives', // Or dynamic if you have multiple
          items: items // Send the bucket items
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      const data = await response.json();
      
      setStep('success');
      setTimeout(() => {
        clearBucket();
        setIsBucketOpen(false);
        setStep('bucket');
        navigate('/thank-you', { state: { previewUrl: data.previewUrl } });
      }, 2000);
    } catch (error) {
      console.error('Error submitting bulk inquiry:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && !isBucketOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isBucketOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBucketOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-bottom border-stone-100 flex justify-between items-center bg-stone-50">
                <div>
                  <h3 className="text-xl font-tripsans text-stone-900">Inquiry Bucket</h3>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'} Selected
                  </p>
                </div>
                <button onClick={() => setIsBucketOpen(false)} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {step === 'bucket' && (
                  <div className="space-y-6">
                    {items.length === 0 ? (
                      <div className="text-center py-20">
                        <ShoppingBag size={48} className="mx-auto text-stone-200 mb-4" />
                        <p className="text-stone-500 font-light">Your bucket is empty.</p>
                        <button 
                          onClick={() => setIsBucketOpen(false)}
                          className="mt-4 text-emerald-600 font-bold text-xs uppercase tracking-widest"
                        >
                          Explore Experiences
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3">
                          {items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-100 group">
                              <div>
                                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1">{item.category}</p>
                                <p className="text-stone-900 font-medium">{item.name}</p>
                                {item.price && <p className="text-xs text-stone-500">{item.price}</p>}
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={() => setStep('form')}
                          className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl"
                        >
                          Proceed to Request Quote
                        </button>
                      </>
                    )}
                  </div>
                )}

                {step === 'form' && (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Date Selection */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
                        <CalendarIcon size={14} />
                        {!dateRange.from ? 'Select Check-in Date' : !dateRange.to ? 'Select Check-out Date' : 'Dates Selected'}
                      </label>
                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                        <DayPicker
                          mode="range"
                          selected={{ from: dateRange.from, to: dateRange.to }}
                          onSelect={(range) => setDateRange({ from: range?.from, to: range?.to })}
                          className="mx-auto"
                          disabled={{ before: new Date() }}
                        />
                        {dateRange.from && (
                          <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between items-center">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                              {dateRange.from && <span>In: {format(dateRange.from, 'MMM dd')}</span>}
                              {dateRange.to && <span className="ml-2">Out: {format(dateRange.to, 'MMM dd')}</span>}
                            </div>
                            <button 
                              type="button"
                              onClick={() => setDateRange({ from: undefined, to: undefined })}
                              className="text-[10px] font-bold uppercase tracking-widest text-emerald-600"
                            >
                              Reset
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Personal Details */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
                        <User size={14} />
                        Personal Details
                      </label>
                      <div className="space-y-3">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                          <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                          <input
                            type="tel"
                            placeholder="WhatsApp Number"
                            required
                            className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Groups */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
                          <Users size={14} />
                          Guest Groups
                        </label>
                        <button 
                          type="button"
                          onClick={addGroup}
                          className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest hover:text-emerald-700 transition-colors"
                        >
                          + Add Group
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {formData.groups.map((group, index) => (
                          <div key={index} className="p-4 bg-stone-50 rounded-2xl border border-stone-100 relative group">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Group {index + 1}</span>
                              {formData.groups.length > 1 && (
                                <button 
                                  type="button"
                                  onClick={() => removeGroup(index)}
                                  className="text-stone-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Adults</label>
                                <select 
                                  className="w-full p-3 bg-white border border-stone-100 rounded-xl focus:outline-none"
                                  value={group.adults}
                                  onChange={(e) => updateGroup(index, 'adults', parseInt(e.target.value))}
                                >
                                  {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                              </div>
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Children</label>
                                <select 
                                  className="w-full p-3 bg-white border border-stone-100 rounded-xl focus:outline-none"
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

                    {/* Special Request */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500">
                        <MessageSquare size={14} />
                        Special Request
                      </label>
                      <textarea
                        placeholder="Any special requirements or questions?"
                        rows={4}
                        className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                        value={formData.specialRequest}
                        onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-3">
                      <button 
                        type="button"
                        onClick={() => setStep('bucket')}
                        className="flex-1 py-4 bg-stone-100 text-stone-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-stone-200 transition-all"
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-[2] py-4 bg-stone-900 text-white rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send Bulk Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {step === 'success' && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-tripsans text-stone-900 mb-4">Inquiry Sent!</h3>
                    <p className="text-stone-500 font-light leading-relaxed">
                      Thank you for your interest. Our reservations team will review your bulk inquiry and get back to you with a personalized quote shortly.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
