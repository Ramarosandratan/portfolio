# Guide de Configuration du Système de Traduction

## Vue d'ensemble

Ce portfolio utilise un système de traduction automatique qui sépare les données des projets des traductions, permettant une gestion facile du contenu multilingue sans dupliquer les données dans les fichiers i18n.

## Architecture

### Fichiers Clés

```
src/
├── data/
│   ├── projectsData.js                    # Données principales (avec images)
│   └── projectsDataForTranslation.js      # Version texte seul pour traduction
│
├── locales/
│   ├── en/
│   │   ├── common.json                    # Labels UI en anglais
│   │   └── projects.json                  # Traductions projets en anglais
│   └── fr/
│       ├── common.json                    # Labels UI en français
│       └── projects.json                  # Traductions projets en français
│
├── hooks/
│   └── useTranslatedProjects.js           # Hook pour obtenir projets traduits
│
├── context/
│   ├── ThemeLanguageContext.jsx           # Contexte i18n personnalisé
│   └── themeLanguageContext.shared.js     # Imports et merge des traductions
│
└── scripts/
    └── generateTranslations.js            # Script de génération auto
```

## Comment Ça Fonctionne

### 1. Stockage des Données Sources

Les données des projets sont stockées en **anglais** dans `src/data/projectsData.js`:

```javascript
export const projectsData = [
  {
    id: 6,
    title: "Automated Job Application Robot",
    description: "AI-powered system...",
    // ... autres champs
  }
];
```

### 2. Traductions Générées/Manuelles

Les traductions sont stockées dans `src/locales/[lang]/projects.json`:

```json
{
  "projects": {
    "data": {
      "6": {
        "title": "Robot d'Application d'Emploi Automatisé",
        "description": "Système alimenté par IA...",
        "features": ["Feature 1 traduite", "Feature 2 traduite"],
        "tags": ["Tag1", "Tag2"]
      }
    }
  }
}
```

### 3. Hook de Traduction Runtime

Le hook `useTranslatedProjects()` merge automatiquement les données avec les traductions:

```javascript
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';

function Projects() {
  const projects = useTranslatedProjects(); // Traduits automatiquement
  // ...
}
```

### 4. Fallback Intelligent

- Si une traduction existe → ✅ Utilisée
- Si manquante → ⚠️ Texte anglais original utilisé
- Pas d'erreur, toujours un rendu

## Ajouter un Nouveau Projet

### Étape 1: Ajouter aux Données Principales

Dans `src/data/projectsData.js`:

```javascript
{
  id: 11,
  title: "Mon Nouveau Projet",
  description: "Description courte",
  fullDescription: "Description détaillée...",
  image: monImage,
  category: "fullstack",
  tags: ["React", "Node.js"],
  features: [
    "Feature 1",
    "Feature 2"
  ],
  architecture: "Description architecture...",
  technologies: { /* ... */ },
  // ...
}
```

### Étape 2: Ajouter à la Version Traduction

Dans `src/data/projectsDataForTranslation.js` (sans images):

```javascript
{
  id: 11,
  title: "Mon Nouveau Projet",
  description: "Description courte",
  fullDescription: "Description détaillée...",
  category: "fullstack",
  tags: ["React", "Node.js"],
  features: ["Feature 1", "Feature 2"],
  architecture: "Description architecture..."
}
```

### Étape 3: Générer les Traductions

#### Option A: Automatique (LibreTranslate)

```bash
npm run translate
```

**⚠️ Limitations:**
- Rate limiting strict (429 Too Many Requests)
- Qualité variable pour le jargon technique
- Nécessite connexion internet

**Solutions aux erreurs 429:**
```bash
# Attendre quelques minutes puis réessayer
# OU traduire un projet à la fois
```

#### Option B: Manuel (Recommandé)

Éditez directement `src/locales/fr/projects.json`:

```json
{
  "projects": {
    "data": {
      "11": {
        "title": "Mon Nouveau Projet (FR)",
        "description": "Description en français...",
        "fullDescription": "...",
        "architecture": "...",
        "features": [
          "Fonctionnalité 1",
          "Fonctionnalité 2"
        ],
        "tags": ["React", "Node.js"]
      }
    }
  }
}
```

## Bonnes Pratiques

### ✅ À Faire

- **Traduire manuellement** pour meilleure qualité
- Garder les **noms de technologies** en anglais (React, Node.js, etc.)
- Vérifier les traductions automatiques avant commit
- Utiliser le même ID de projet partout
- Traduire **tous les champs** (title, description, features, etc.)

### ❌ À Éviter

- Ne pas traduire les enums (`category`, `links`, `technologies`)
- Ne pas oublier de traduire les arrays (`features`, `tags`)
- Ne pas laisser des traductions partielles
- Ne pas changer l'ID d'un projet existant

## Configuration du Script de Génération

### Ajuster les Délais (Rate Limiting)

Dans `scripts/generateTranslations.js`:

```javascript
const DELAY_BETWEEN_REQUESTS = 3000;  // 3 secondes entre projets
const DELAY_BETWEEN_ITEMS = 500;      // 500ms entre features/tags
```

Augmentez ces valeurs si vous rencontrez des erreurs 429.

### Traduire Seulement Certains Projets

Modifiez `projectsDataForTranslation.js` pour n'inclure que les nouveaux projets:

```javascript
export const projectsDataForTranslation = [
  // Commentez les projets déjà traduits
  // { id: 6, ... },
  // { id: 7, ... },
  
  // Nouveau projet seulement
  { id: 11, title: "...", ... }
];
```

## Alternatives de Traduction Gratuites

### LibreTranslate (Actuel)
- ✅ Gratuit, open source
- ✅ Pas de clé API
- ❌ Rate limiting strict

### MyMemory API
- ✅ 10,000 mots/jour gratuit
- ⚠️ Qualité moyenne

### DeepL Free
- ✅ Meilleure qualité
- ⚠️ 500,000 caractères/mois
- ⚠️ Clé API requise

### Google Translate (non officiel)
- ⚠️ Peut être instable
- ⚠️ Contre les ToS

## Dépannage

### "Unknown file extension .png"

**Problème:** Le script essaie d'importer des images  
**Solution:** Utilisez `projectsDataForTranslation.js` (déjà configuré)

### "429 Too Many Requests"

**Problème:** Trop de requêtes à LibreTranslate  
**Solutions:**
1. Attendre 5-10 minutes
2. Augmenter `DELAY_BETWEEN_REQUESTS`
3. Traduire manuellement

### "Translation not showing"

**Vérifications:**
1. ✅ ID projet identique dans `projectsData.js` et `projects.json`
2. ✅ Structure JSON correcte
3. ✅ Fichier `projects.json` importé dans `themeLanguageContext.shared.js`
4. ✅ Hook `useTranslatedProjects()` utilisé dans le composant

### "React Hook useMemo warning"

**Problème:** Dépendance inutile  
**Solution:** Déjà corrigé - hook utilise seulement `t`, pas `language`

## Tests Manuels

### Vérifier les Traductions

1. Lancez l'app: `npm run dev`
2. Ouvrez http://localhost:5173/portfolio_v2/
3. Cliquez sur Settings → Français
4. Allez sur la page Projets
5. Vérifiez que:
   - ✅ Titres traduits
   - ✅ Descriptions traduites
   - ✅ Features traduites
   - ✅ Tags traduits (si applicable)
6. Cliquez sur un projet → Détails
7. Vérifiez architecture et features traduites

### Tests de Fallback

1. Supprimez temporairement une traduction dans `fr/projects.json`
2. Rechargez la page en français
3. ✅ Le texte anglais devrait s'afficher (pas d'erreur)

## Support

Pour toute question ou problème:
1. Vérifiez ce guide
2. Consultez les commentaires dans le code
3. Vérifiez les erreurs de console browser
4. Revoir `README.md` principal

---

**Dernière mise à jour:** 16 février 2026  
**Version:** 2.0
