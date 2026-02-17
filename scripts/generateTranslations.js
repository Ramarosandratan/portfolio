import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ES Module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// LibreTranslate API configuration
const LIBRE_TRANSLATE_URL = 'https://libretranslate.com/translate';
const DELAY_BETWEEN_REQUESTS = 3000; // 3 seconds delay to avoid rate limiting
const DELAY_BETWEEN_ITEMS = 500; // 500ms delay between array items

// Translation cache to avoid duplicate translations
const translationCache = new Map();

/**
 * Translate text using LibreTranslate API
 * @param {string} text - Text to translate
 * @param {string} targetLang - Target language code ('fr', 'en', etc.)
 * @returns {Promise<string>} Translated text
 */
async function translateText(text, targetLang = 'fr') {
  if (!text || typeof text !== 'string') {
    return text;
  }

  const cacheKey = `${text}_${targetLang}`;
  
  // Check cache first
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  try {
    const response = await fetch(LIBRE_TRANSLATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: targetLang,
        format: 'text'
      })
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const translatedText = data.translatedText;
    
    // Store in cache
    translationCache.set(cacheKey, translatedText);
    
    return translatedText;
  } catch (error) {
    console.error(`❌ Translation error for "${text.substring(0, 50)}...":`, error.message);
    return text; // Return original text on error
  }
}

/**
 * Translate a single project
 * @param {Object} project - Project data
 * @returns {Promise<Object>} Translated project data
 */
async function translateProject(project) {
  console.log(`\n📝 Translating project: ${project.title} (ID: ${project.id})`);
  
  const translatedProject = {};

  // Translate title
  console.log('  → Title...');
  translatedProject.title = await translateText(project.title);
  
  // Translate description
  console.log('  → Description...');
  translatedProject.description = await translateText(project.description);
  
  // Translate fullDescription
  console.log('  → Full description...');
  translatedProject.fullDescription = await translateText(project.fullDescription);
  
  // Translate architecture
  console.log('  → Architecture...');
  translatedProject.architecture = await translateText(project.architecture);
  
  // Translate features array
  console.log(`  → Features (${project.features.length} items)...`);
  translatedProject.features = [];
  for (let i = 0; i < project.features.length; i++) {
    translatedProject.features.push(await translateText(project.features[i]));
    await delay(DELAY_BETWEEN_ITEMS); // Delay between features
  }
  
  // Translate tags array
  console.log(`  → Tags (${project.tags.length} items)...`);
  translatedProject.tags = [];
  for (let i = 0; i < project.tags.length; i++) {
    translatedProject.tags.push(await translateText(project.tags[i]));
    await delay(DELAY_BETWEEN_ITEMS); // Delay between tags
  }
  
  console.log(`✅ Project translated successfully!`);
  
  return translatedProject;
}

/**
 * Delay execution
 * @param {number} ms - Milliseconds to delay
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate translation files for all projects
 */
async function generateProjectTranslations() {
  console.log('🚀 Starting translation generation...\n');
  console.log('Using LibreTranslate API (free, no API key required)');
  console.log('═══════════════════════════════════════════════════\n');

  try {
    // Dynamically import projectsData from translation-specific file (no image imports)
    const projectsDataModule = await import('../src/data/projectsDataForTranslation.js');
    const projectsData = projectsDataModule.projectsDataForTranslation;

    console.log(`Found ${projectsData.length} projects to translate\n`);

    // Create translations object
    const frTranslations = {
      projects: {
        data: {}
      }
    };

    const enTranslations = {
      projects: {
        data: {}
      }
    };

    // Process each project
    for (let i = 0; i < projectsData.length; i++) {
      const project = projectsData[i];
      
      console.log(`\n[${ i + 1}/${projectsData.length}] Processing project ID ${project.id}...`);
      
      // Translate to French
      frTranslations.projects.data[project.id] = await translateProject(project);
      
      // Copy original English data
      enTranslations.projects.data[project.id] = {
        title: project.title,
        description: project.description,
        fullDescription: project.fullDescription,
        architecture: project.architecture,
        features: [...project.features],
        tags: [...project.tags]
      };

      // Delay between projects to avoid rate limiting
      if (i < projectsData.length - 1) {
        console.log(`⏳ Waiting ${DELAY_BETWEEN_REQUESTS}ms before next project...`);
        await delay(DELAY_BETWEEN_REQUESTS);
      }
    }

    // Create output directories
    const localesDir = path.join(__dirname, '../src/locales');
    const enDir = path.join(localesDir, 'en');
    const frDir = path.join(localesDir, 'fr');

    [enDir, frDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Write translation files
    const enOutputPath = path.join(enDir, 'projects.json');
    const frOutputPath = path.join(frDir, 'projects.json');

    fs.writeFileSync(enOutputPath, JSON.stringify(enTranslations, null, 2), 'utf-8');
    fs.writeFileSync(frOutputPath, JSON.stringify(frTranslations, null, 2), 'utf-8');

    console.log('\n═══════════════════════════════════════════════════');
    console.log('✅ Translation generation completed successfully!');
    console.log('═══════════════════════════════════════════════════\n');
    console.log(`📄 English translations: ${enOutputPath}`);
    console.log(`📄 French translations: ${frOutputPath}`);
    console.log(`\n📊 Statistics:`);
    console.log(`   - Projects translated: ${projectsData.length}`);
    console.log(`   - Translations cached: ${translationCache.size}`);
    console.log('\n✨ You can now use these translations in your application!\n');

  } catch (error) {
    console.error('\n❌ Fatal error during translation generation:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
generateProjectTranslations();
