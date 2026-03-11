import React from 'react';
import SEO from '../SEO';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <SEO 
        title={`${title} | Legal`}
        description={`Read our ${title.toLowerCase()} for Ayada Maldives bookings through TripMaldives. Last updated: ${lastUpdated}.`}
      />
      <div className="mb-12 border-b border-stone-100 pb-8">
        <p className="text-emerald-600 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Legal Information</p>
        <h1 className="text-4xl md:text-6xl font-tripsans text-stone-900 mb-4">{title}</h1>
        <p className="text-stone-400 text-xs uppercase tracking-widest">Last Updated: {lastUpdated}</p>
      </div>
      <div className="prose prose-stone max-w-none prose-headings:font-tripsans prose-headings:font-normal prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600">
        {children}
      </div>
      <div className="mt-16 pt-8 border-t border-stone-100 text-center">
        <p className="text-xs text-stone-400 leading-relaxed italic">
          Disclaimer: This document is provided for informational purposes. We recommend that Maldives Serenity Travels' legal counsel review these terms before final publication.
        </p>
      </div>
    </div>
  );
}
