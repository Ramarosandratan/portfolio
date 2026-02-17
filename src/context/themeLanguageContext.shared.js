import { createContext } from 'react';
import frCommon from '../locales/fr/common.json';
import enCommon from '../locales/en/common.json';
import frProjects from '../locales/fr/projects.json';
import enProjects from '../locales/en/projects.json';

export const ThemeLanguageContext = createContext();

// Deep merge common and projects translations
export const translations = {
  fr: { 
    ...frCommon, 
    projects: { 
      ...frCommon.projects, 
      ...frProjects.projects 
    } 
  },
  en: { 
    ...enCommon, 
    projects: { 
      ...enCommon.projects, 
      ...enProjects.projects 
    } 
  },
};

export const isBrowser =
  typeof window !== 'undefined' && typeof document !== 'undefined';
