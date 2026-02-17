/**
 * StructuredData - Component for JSON-LD structured data
 * Improves SEO with schema.org markup
 */
import React from 'react';

export const StructuredData = ({ data }) => {
  React.useEffect(() => {
    // Remove existing structured data script if any
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }

    // Create new script with structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
};

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ramarosandratana Rinasoa Mampionona',
  url: 'https://ramarosandratan.github.io/portfolio',
  logo: 'https://ramarosandratan.github.io/portfolio/logo.svg',
  sameAs: [
    'https://www.linkedin.com/in/rinasoa-mampionona-ramarosandratana/',
    'https://github.com/Ramarosandratan',
    'https://twitter.com/yourhandle'
  ],
  jobTitle: 'Full Stack Developer',
  email: 'ramarosandratana2019@gmail.com',
  description: 'Professional Full Stack Developer specializing in digital solutions and web development'
};

// BreadcrumbList Schema
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Projects Schema
export const getProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: project.title,
  description: project.description,
  image: project.image,
  url: project.url,
  creator: {
    '@type': 'Person',
    name: 'Your Name'
  },
  datePublished: project.date || new Date().toISOString().split('T')[0],
  keywords: project.technologies ? project.technologies.join(', ') : ''
});
