import { useState, useEffect } from 'react';
import {
  ThemeLanguageContext,
  translations,
  isBrowser,
} from './themeLanguageContext.shared';

export const ThemeLanguageProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (!isBrowser) return 'light';
    return window.localStorage.getItem('theme') || 'light';
  });

  const [language, setLanguage] = useState(() => {
    if (!isBrowser) return 'fr';
    return window.localStorage.getItem('language') || 'fr';
  });

  useEffect(() => {
    if (!isBrowser) return;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.body.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      if (isBrowser) {
        window.localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        document.body.classList.remove('dark');
      }

      return newTheme;
    });
  };

  const changeLanguage = (newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      if (isBrowser) {
        window.localStorage.setItem('language', newLanguage);
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};


