# Portfolio v2

Modern portfolio website built with React, Vite, and Tailwind CSS, featuring automatic i18n translation for project data.

## Features

- 🌐 **Multi-language Support**: English and French translations with automatic project data translation
- 🎨 **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- 📱 **Responsive Design**: Fully responsive layout optimized for all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds
- 🎯 **Type-safe**: ESLint configuration for code quality

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **i18n**: Custom implementation with automatic translation generation

## 🚀 SEO & Search Engine Optimization

This portfolio includes comprehensive SEO optimizations:

### ✅ Built-in SEO Features

- **Meta Tags**: Optimized titles, descriptions, and keywords per page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced sharing on X/Twitter
- **Structured Data**: JSON-LD schemas for better indexing
- **XML Sitemap**: Automatic sitemap generation
- **Robots.txt**: Crawler configuration
- **Breadcrumbs**: Enhanced navigation and SEO
- **Dynamic Meta Management**: `usePageMeta` hook for page-specific metadata

### 📝 SEO Configuration

For complete SEO setup instructions, see [SEO_GUIDE.md](./SEO_GUIDE.md)

#### Quick Setup:

1. Replace `portfolio.example.com` with your actual domain
2. Update social media profiles in `src/context/StructuredData.jsx`
3. Update your personal info in the schema
4. Generate sitemap: `npm run generate:sitemap`
5. Submit to Google Search Console

### 📊 Files Included

- `public/robots.txt` - Search engine crawler rules
- `public/sitemap.xml` - Website structure for indexing
- `public/.htaccess` - Server configuration for caching & compression
- `src/context/usePageMeta.js` - Meta tag management hook
- `src/context/StructuredData.jsx` - JSON-LD structured data


## Translation System

This project features an **automatic translation system** for project data that doesn't require storing translations in i18n files manually.

### How it Works

1. **Source Data**: Project information is stored in English in `src/data/projectsData.js`
2. **Translation Files**: Generated translations are stored separately in `src/locales/[lang]/projects.json`
3. **Runtime Translation**: The `useTranslatedProjects` hook automatically merges project data with translations based on the current language
4. **Fallback**: If a translation is missing, the original English text is displayed

### Translation Generation

#### Manual Translations (Current)

The French translations in `src/locales/fr/projects.json` have been manually created for all 5 projects. This ensures high-quality, contextually accurate translations.

#### Automatic Generation (For Future Updates)

When you add new projects, you can generate translations automatically using LibreTranslate (free, no API key required):

```bash
npm run translate
```

**Note**: LibreTranslate has rate limiting. If you encounter `429 Too Many Requests` errors:
- Wait a few minutes between attempts
- Translate projects one at a time by modifying `src/data/projectsDataForTranslation.js`
- Increase delays in `scripts/generateTranslations.js`

#### Project Structure

```
src/
├── data/
│   ├── projectsData.js                    # Main project data (used in app)
│   └── projectsDataForTranslation.js      # Text-only version (for translation script)
├── locales/
│   ├── en/
│   │   ├── common.json                    # UI labels in English
│   │   └── projects.json                  # Project translations in English
│   └── fr/
│       ├── common.json                    # UI labels in French
│       └── projects.json                  # Project translations in French
├── hooks/
│   └── useTranslatedProjects.js           # Hook to get translated projects
└── pages/
    ├── Projects.jsx                        # Uses useTranslatedProjects
    └── ProjectDetails.jsx                  # Uses useTranslatedProjects
```

### Adding New Projects

1. Add project data to `src/data/projectsData.js`
2. Add the same project (text fields only) to `src/data/projectsDataForTranslation.js`
3. Run `npm run translate` to generate translations
4. Review and refine the generated translations in `src/locales/fr/projects.json`

### Translation Keys Structure

Projects are translated using the following key structure:

```json
{
  "projects": {
    "data": {
      "6": {
        "title": "...",
        "description": "...",
        "fullDescription": "...",
        "architecture": "...",
        "features": ["...", "..."],
        "tags": ["...", "..."]
      }
    }
  }
}
```

## Development

### Prerequisites

- Node.js 18+ (for native `fetch` API support)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/portfolio_v2/`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

