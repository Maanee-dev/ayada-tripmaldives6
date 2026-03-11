import React, { createContext, useContext, useState } from 'react';

export interface FormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
  mealPlan: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

interface FormContextType {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomType: '',
    mealPlan: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  return (
    <FormContext.Provider value={{ showForm, setShowForm, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
