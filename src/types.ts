import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { CONFIG } from './config';

// Supabase Client
export const supabase = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

// Types
export interface RoomType {
  id: string;
  name: string;
  size: string;
  image: string;
  images?: string[];
  capacity: string;
  description: string;
  map_url?: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  highlights: string[];
  description: string;
}

export interface Offer {
  id: string;
  slug: string;
  resort_id: string;
  title: string;
  discount: string;
  resort_name: string;
  expiry_date: string;
  image: string;
  category: 'Early Bird' | 'Last Minute' | 'Honeymoon';
  description: string;
  inclusions: string[];
  dining: string;
  terms_and_conditions: string;
  created_at: string;
}

export interface Activity {
  id: string;
  name: string;
  category: 'Excursion' | 'Watersport' | 'Diving' | 'Sports' | 'Kids' | 'Nature' | 'Wellness';
  image: string;
  description: string;
  details: string[];
  priceRange?: string;
  duration?: string;
}

export interface SpaTreatment {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface WeddingPackage {
  id: string;
  name: string;
  description: string;
  inclusions: string[];
  image: string;
  price?: string;
}

export interface ResortData {
  id: string;
  name: string;
  slug: string;
  atoll: string;
  price_range: string;
  rating: string;
  description: string;
  short_description: string;
  images: string[];
  features: string[];
  transfers: string[];
  meal_plans: string[];
  uvp: string;
  room_types: RoomType[];
  dining_venues: DiningVenue[];
  activities?: Activity[];
  spa_treatments?: SpaTreatment[];
  wedding_packages?: WeddingPackage[];
}
