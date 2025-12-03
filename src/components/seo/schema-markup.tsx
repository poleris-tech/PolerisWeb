export function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://polerisdigital.com',
    name: 'Poleris Digital',
    alternateName: ['Poleris', 'Poleris Digital LLC'],
    url: 'https://polerisdigital.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://polerisdigital.com/poleris_logo.png',
      width: 512,
      height: 512,
    },
    image: 'https://polerisdigital.com/poleris_logo.png',
    description: 'Poleris Digital creates hand-coded custom websites for small businesses. We specialize in web design, SEO optimization, Google Ads management, and website hosting.',
    email: 'polerisllc@outlook.com',
    telephone: '+1-617-838-3859',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'Massachusetts',
    },
    sameAs: [
      'https://www.facebook.com/polerisdigital',
      'https://www.linkedin.com/company/polerisdigital',
      'https://twitter.com/polerisdigital',
      'https://www.instagram.com/polerisdigital',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-617-838-3859',
        contactType: 'customer service',
        email: 'polerisllc@outlook.com',
        availableLanguage: ['en'],
        areaServed: ['US', 'CA'],
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://polerisdigital.com',
    name: 'Poleris Digital',
    image: 'https://polerisdigital.com/poleris_logo.png',
    description: 'Poleris Digital is a web design and development agency specializing in hand-coded custom websites for small businesses. We provide web design, SEO services, Google Ads management, and website hosting.',
    url: 'https://polerisdigital.com',
    telephone: '+1-617-838-3859',
    email: 'polerisllc@outlook.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boston, MA',
      addressRegion: 'MA',
      postalCode: '02101',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: ['US', 'Canada'],
    },
    priceRange: '$$',
    knowsAbout: [
      'Web Design',
      'Web Development',
      'Custom Websites',
      'SEO Optimization',
      'Google Ads',
      'Website Hosting',
      'Performance Optimization',
      'Responsive Design',
    ],
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
    '@id': 'https://polerisdigital.com',
    name: 'Poleris Digital',
    url: 'https://polerisdigital.com',
    description: 'Hand-coded custom websites and web design services for small businesses by Poleris Digital',
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Poleris Digital',
      url: 'https://polerisdigital.com',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://polerisdigital.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://polerisdigital.com/#services',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Poleris Digital different from other web design agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We hand-code every website from scratch, ensuring optimal performance, SEO, and speed. Unlike agencies using WordPress or page builders, our custom-coded sites load faster, rank higher, and provide better user experiences.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a custom website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most custom websites are completed within 2-4 weeks, depending on complexity and requirements. We focus on delivering quality results quickly without compromising on performance or design.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide SEO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer comprehensive SEO services including on-page optimization, technical SEO, keyword research, and ongoing optimization to help your website rank higher in search engines.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in your hosting service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our hosting includes fast SSD storage, 99.9% uptime guarantee, SSL certificates, automatic backups, CDN integration, and 24/7 monitoring to ensure your website stays fast and secure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with businesses outside the United States?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While we primarily serve businesses in the United States and Canada, we are open to working with clients worldwide. Contact us to discuss your project requirements.',
        },
      },
    ],
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

      {/* Professional Service Schema */}
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

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
