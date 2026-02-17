#!/bin/bash
# SEO Quick Setup Script
# Description: Aide à la configuration rapide du SEO après clonage du projet

# Couleurs pour output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 SEO Quick Setup Script${NC}"
echo "================================"

# Step 1: Install dependencies
echo -e "\n${YELLOW}Step 1: Installation des dépendances...${NC}"
npm install

# Step 2: Generate sitemap
echo -e "\n${YELLOW}Step 2: Génération du sitemap...${NC}"
npm run generate:sitemap

# Step 3: Display configuration steps
echo -e "\n${BLUE}📋 Prochaines étapes - Configuration requise:${NC}"
echo "================================"

echo -e "\n${YELLOW}1️⃣  Configuration du Domain${NC}"
echo "   Remplacer 'portfolio.example.com' dans:"
echo "   - index.html"
echo "   - src/context/usePageMeta.js"
echo "   - src/context/StructuredData.jsx"
echo "   - robots.txt"
echo "   - sitemap.xml"

echo -e "\n${YELLOW}2️⃣  Infos Personnelles${NC}"
echo "   Mettre à jour dans src/context/StructuredData.jsx:"
echo "   - name: 'Your Name'"
echo "   - email: 'your.email@example.com'"
echo "   - jobTitle: 'Your Title'"
echo "   - sameAs: [LinkedIn, GitHub, Twitter URLs]"

echo -e "\n${YELLOW}3️⃣  Logo${NC}"
echo "   Remplacer /public/logo.svg par votre logo"
echo "   (Min 1200x630px pour les réseaux sociaux)"

echo -e "\n${YELLOW}4️⃣  Test Local${NC}"
echo "   Lance: npm run dev"
echo "   Visite: http://localhost:5173/portfolio_v2/"
echo "   Vérifie les meta tags avec F12 DevTools"

echo -e "\n${YELLOW}5️⃣  Déploiement${NC}"
echo "   npm run build"
echo "   Déployer vers Netlify, Vercel, ou VPS"

echo -e "\n${YELLOW}6️⃣  Post-Déploiement${NC}"
echo "   Soumettre à Google Search Console"
echo "   Vérifier robots.txt et sitemap.xml"
echo "   Analyser avec PageSpeed Insights"

echo -e "\n${GREEN}✅ Configuration initiale complète!${NC}"
echo -e "${BLUE}Consultez:${NC}"
echo "   - SEO_GUIDE.md pour le guide complet"
echo "   - SEO_CHECKLIST.md pour la checklist détaillée"
echo "   - SEOOPTIMIZATION_REPORT.md pour le rapport"

echo -e "\n${GREEN}Happy optimizing! 🎯${NC}\n"
