/**
 * usePageMeta - Hook for managing page meta tags
 * Updates document head meta tags for SEO
 */
import React from 'react';

export const usePageMeta = (config) => {
  React.useEffect(() => {
    const {
      title = 'Professional Portfolio - Digital Solutions',
      description = 'Explore my portfolio featuring digital solutions and web development projects.',
      keywords = 'portfolio, web development, digital solutions',
      ogImage = '/logo.svg',
      ogUrl = 'https://ramarosandratan.github.io/portfolio',
      twitterHandle = '@yourhandle'
    } = config;

    // Update title
    document.title = title;

    // Update or create meta tags
    updateOrCreateMetaTag('name', 'description', description);
    updateOrCreateMetaTag('name', 'keywords', keywords);
    updateOrCreateMetaTag('property', 'og:title', title);
    updateOrCreateMetaTag('property', 'og:description', description);
    updateOrCreateMetaTag('property', 'og:image', ogImage);
    updateOrCreateMetaTag('property', 'og:url', ogUrl);
    updateOrCreateMetaTag('name', 'twitter:title', title);
    updateOrCreateMetaTag('name', 'twitter:description', description);
    updateOrCreateMetaTag('name', 'twitter:image', ogImage);
    updateOrCreateMetaTag('name', 'twitter:creator', twitterHandle);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = ogUrl;
  }, [config]);
};

const updateOrCreateMetaTag = (type, name, content) => {
  const attribute = type === 'name' ? 'name' : 'property';
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.content = content;
};
