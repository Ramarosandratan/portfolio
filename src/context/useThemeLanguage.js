import { useContext } from 'react';
import { ThemeLanguageContext } from './themeLanguageContext.shared';

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error(
      'useThemeLanguage must be used within ThemeLanguageProvider'
    );
  }
  return context;
};
