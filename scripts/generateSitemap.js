#!/usr/bin/env node

/**
 * SEO Sitemap Generator Script
 * Generates an updated sitemap.xml with all routes
 * 
 * Usage: node scripts/generateSitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = process.env.SITE_URL || 'https://portfolio.example.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Routes définies
const routes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/experience', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact', changefreq: 'yearly', priority: '0.7' }
];

// Fonction pour générer le XML
function generateSitemap(routes) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  return xml;
}

// Générer et sauvegarder le sitemap
try {
  const sitemap = generateSitemap(routes);
  fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
  console.log(`✅ Sitemap généré avec succès: ${OUTPUT_PATH}`);
  console.log(`📍 Domaine: ${DOMAIN}`);
  console.log(`📄 Routes incluses: ${routes.length}`);
} catch (error) {
  console.error(`❌ Erreur lors de la génération du sitemap:`, error);
  process.exit(1);
}
