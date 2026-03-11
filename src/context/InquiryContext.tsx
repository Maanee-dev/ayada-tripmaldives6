import React, { createContext, useContext, useState, ReactNode } from 'react';

export type InquiryCategory = 
  | 'Excursions' 
  | 'Watersports' 
  | 'Diving' 
  | 'Sports & Recreation' 
  | 'AySpa' 
  | 'Weddings' 
  | 'Rooms';

export interface InquiryItem {
  id: string;
  category: InquiryCategory;
  name: string;
  price?: string;
}

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (item: InquiryItem) => void;
  removeItem: (id: string) => void;
  clearBucket: () => void;
  isBucketOpen: boolean;
  setIsBucketOpen: (isOpen: boolean) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isBucketOpen, setIsBucketOpen] = useState(false);

  const addItem = (item: InquiryItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearBucket = () => {
    setItems([]);
  };

  return (
    <InquiryContext.Provider value={{ items, addItem, removeItem, clearBucket, isBucketOpen, setIsBucketOpen }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
