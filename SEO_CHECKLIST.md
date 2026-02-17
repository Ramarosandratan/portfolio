# ✅ SEO Configuration Checklist

## 🎯 Avant le Déploiement

### Étape 1: Configuration de Base
- [ ] Préparer votre domaine réel
- [ ] Préparer votre logo (1200x630px PNG/SVG)
- [ ] Préparer vos infos:
  - Nom complet
  - Email professionnel
  - Titre professionnel
  - Description courte

### Étape 2: Remplacer les URLs d'Exemple
Dans les fichiers suivants, remplacer `portfolio.example.com` par votre domaine:

**Fichier: index.html**
```
- Line 9: meta property="og:url"
- Line 14: meta property="og:url"
- Line 27: link rel="canonical"
- Line 43: title
```

**Fichier: src/context/usePageMeta.js**
```
- ogUrl parameter (plusieurs occurrences)
```

**Fichier: src/context/StructuredData.jsx**
```
- url dans organizationSchema
- sameAs LinkedIn, GitHub, Twitter URLs
```

**Fichier: robots.txt**
```
- Sitemap URL
```

**Fichier: sitemap.xml**
```
- Toutes les URLs
```

### Étape 3: Mettre à Jour les Informations Personnelles

**Fichier: src/context/StructuredData.jsx**
```javascript
// Remplacer ces valeurs:
name: 'Your Name' → 'Votre Nom'
email: 'your.email@example.com' → 'votre.email@domaine.com'
jobTitle: 'Full Stack Developer' → 'Votre titre'
description: '...' → 'Votre description'

// Et ajouter vos profils sociaux:
'https://www.linkedin.com/in/votre-profil'
'https://github.com/votre-profil'
'https://twitter.com/votre-handle'
```

### Étape 4: Mettre à Jour le Logo
- [ ] Copier votre logo en: `/public/logo.svg`
- [ ] Format: SVG ou PNG (min 1200x630px)

### Étape 5: Installer les Dépendances
```bash
npm install
```

### Étape 6: Tester Localement
```bash
npm run dev
# Visiter http://localhost:5173/portfolio_v2/
```

### Étape 7: Vérifier les Meta Tags
1. Ouvrir DevTools (F12)
2. Aller à Sources → peeks
3. Vérifier que les meta tags sont présents
4. Vérifier les bonnes URLs

---

## 🚀 Déploiement

### Étape 1: Build Production
```bash
npm run build
npm run generate:sitemap
```

### Étape 2: Vérifier les Fichiers
- [ ] `/dist/index.html` existe et contient les meta tags
- [ ] `/public/robots.txt` existe
- [ ] `/public/sitemap.xml` existe  
- [ ] `/public/.htaccess` existe (si Apache)
- [ ] `/public/logo.svg` existe

### Étape 3: Déployer

#### Option Netlify:
```bash
# netlify.toml et _redirects sont déjà configurés
# Just deploy
```

#### Option Vercel:
```bash
# vercel.json est déjà configuré
# Just deploy
```

#### Option VPS/Apache:
- [ ] Upload les fichiers
- [ ] Vérifier que `.htaccess` est activé
- [ ] Vérifier que `robots.txt` est accessible
- [ ] Vérifier que `sitemap.xml` est accessible

### Étape 4: Vérifier Post-Déploiement
- [ ] Site accessible sur votre domaine
- [ ] robots.txt accessible: https://domaine.com/robots.txt
- [ ] sitemap.xml accessible: https://domaine.com/sitemap.xml
- [ ] Meta tags présents (voir DevTools)

---

## 🔍 Vérifications SEO

### Tools à Utiliser:

#### 1. Google Search Console
```
https://search.google.com/search-console
- Ajouter votre domaine
- Vérifier robots.txt
- Soumettre sitemap
```

#### 2. Google PageSpeed Insights
```
https://pagespeed.web.dev/
- Tester chaque page
- Vérifier Core Web Vitals
- Cible: >80 score
```

#### 3. Schema Validator
```
https://validator.schema.org/
- Coller votre page HTML
- Vérifier les schemas JSON-LD
```

#### 4. Open Graph Checker
```
https://www.opengraph.xyz/
- Tester le partage social
- Vérifier l'image et descripion
```

#### 5. Twitter Card Validator
```
https://cards-dev.twitter.com/validator
- Vérifier l'apparence sur Twitter
```

### Checklist de Vérification:
- [ ] Lighthouse score >80
- [ ] Mobile-friendly test: PASS
- [ ] No robots.txt errors
- [ ] No sitemap.xml errors
- [ ] Schema validation: PASS
- [ ] Open Graph: OK
- [ ] Twitter Card: OK
- [ ] Aucun 404 errors
- [ ] Tous les liens fonctionnent

---

## 📊 Monitoring Régulier

### Hebdomadaire:
- [ ] Vérifier Google Search Console
- [ ] Vérifier les impressions
- [ ] Vérifier le CTR

### Mensuel:
- [ ] Analyser le trafic organique
- [ ] Vérifier les positions des mots-clés
- [ ] Mettre à jour le contenu si nécessaire
- [ ] Vérifier les backlinks

### Trimestriel:
- [ ] Audit SEO complet
- [ ] Mise à jour de la stratégie
- [ ] Analyse concurrentielle

---

## ⚠️ Erreurs Courantes

### ❌ Erreur 1: Domain pas à jour
**Symptôme**: Meta tags montrent `portfolio.example.com`
**Solution**: Remplacer partout le domain d'exemple

### ❌ Erreur 2: Robots.txt not found
**Symptôme**: Google Search Console erreur
**Solution**: Vérifier que `robots.txt` est dans `/public/` et le fichier serveur le permet

### ❌ Erreur 3: Sitemap not accessible
**Symptôme**: Cannot fetch sitemap.xml
**Solution**: Générer avec `npm run generate:sitemap`

### ❌ Erreur 4: Meta tags pas visible
**Symptôme**: `usePageMeta` pas appelée
**Solution**: Vérifier que chaque page appelle le hook

### ❌ Erreur 5: Logo pas affiché
**Symptôme**: Image brisée sur réseaux sociaux
**Solution**: Vérifier que `/public/logo.svg` existe et est valide

---

## 📚 Ressources

### Documentation:
- [SEO_GUIDE.md](./SEO_GUIDE.md) - Guide complet
- [SEOOPTIMIZATION_REPORT.md](./SEOOPTIMIZATION_REPORT.md) - Rapport détaillé
- [Schema.org](https://schema.org/) - Documentation JSON-LD
- [Google Search Central](https://developers.google.com/search) - Google SEO

### Outils:
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Validator](https://validator.schema.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## ✅ Checklist Final

Avant de conclure le projet:

- [ ] Tous les fichiers créés/modifiés
- [ ] Domain configuré partout
- [ ] Infos personnelles mises à jour
- [ ] Logo ajouté
- [ ] Tests SEO passés
- [ ] Déploiement réussi
- [ ] Google Search Console configurée
- [ ] Sitemap soumis
- [ ] Robots.txt accessible
- [ ] Core Web Vitals OK
- [ ] Mobile-friendly: PASS
- [ ] Aucun erreur 404
- [ ] Tous les liens testés
- [ ] Documentation lue
- [ ] Monitoring mis en place

---

**Note**: Ce checklist peut être utilisé comme template pour chaque déploiement futur.

*Mis à jour: 17 Février 2026*
