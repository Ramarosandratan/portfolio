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
  name: 'Your Name',
  url: 'https://portfolio.example.com',
  logo: 'https://portfolio.example.com/logo.svg',
  sameAs: [
    'https://www.linkedin.com/in/yourprofile',
    'https://github.com/yourprofile',
    'https://twitter.com/yourhandle'
  ],
  jobTitle: 'Full Stack Developer',
  email: 'your.email@example.com',
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
