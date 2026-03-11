import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'TripMaldives - Luxury Maldives Resort Bookings & Inquiries',
  description = 'Discover and book the most luxurious resorts in the Maldives. Exclusive offers, honeymoon packages, and personalized travel experiences.',
  keywords = 'Maldives, luxury resorts, Maldives travel, Maldives booking, honeymoon Maldives, Maldives villas',
  image = 'https://picsum.photos/seed/maldives/1200/630',
  url = 'https://ayada.tripmaldives.co',
  type = 'website',
}) => {
  const siteTitle = title.includes('TripMaldives') ? title : `${title} | TripMaldives`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
