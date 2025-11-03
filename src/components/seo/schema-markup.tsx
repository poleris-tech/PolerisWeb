export function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Poleris Digital',
    alternateName: 'Poleris',
    url: 'https://polerisdigital.com',
    logo: 'https://polerisdigital.com/logo.png',
    description: 'Professional web design and development services for small businesses. Custom websites, SEO, and Google Ads management.',
    email: 'polerisllc@outlook.com',
    telephone: '+1-617-838-3859',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'United States',
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://www.facebook.com/polerisdigital',
      // 'https://www.linkedin.com/company/polerisdigital',
      // 'https://twitter.com/polerisdigital',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-617-838-3859',
      contactType: 'customer service',
      email: 'polerisllc@outlook.com',
      availableLanguage: ['en'],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://polerisdigital.com',
    name: 'Poleris Digital',
    image: 'https://polerisdigital.com/logo.png',
    description: 'We believe small businesses deserve better. Just because you\'re small, doesn\'t mean your site needs to be. Let us make you something amazing.',
    url: 'https://polerisdigital.com',
    telephone: '+1-617-838-3859',
    email: 'polerisllc@outlook.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add your actual coordinates if you have a physical location
      // latitude: 40.7128,
      // longitude: -74.0060,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Poleris Digital',
      url: 'https://polerisdigital.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Design',
            description: 'Hand-coded, custom websites tailored to your business needs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Search engine optimization to help your website rank higher',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google PPC Ads',
            description: 'Professional Google Ads campaign management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Hosting',
            description: 'Fast, secure, and reliable website hosting with 99.9% uptime',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Poleris Digital',
    url: 'https://polerisdigital.com',
    description: 'Professional web design and development services for small businesses',
    publisher: {
      '@type': 'Organization',
      name: 'Poleris Digital',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://polerisdigital.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
