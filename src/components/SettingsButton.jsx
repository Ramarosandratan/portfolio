import { useState } from 'react';
import { Settings, Sun, Moon } from 'lucide-react';
import { useThemeLanguage } from '../context/useThemeLanguage';

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, changeLanguage, t } = useThemeLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 rounded-lg shadow-lg p-4 min-w-48 border animate-fade-in transition-all duration-200" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)'}}>
          {/* Titre */}
          <h3 className="text-sm font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
            {t('settings.title')}
          </h3>

          {/* Section Thème */}
          <div className="mb-4 pb-4 border-b" style={{borderColor: 'var(--border)'}}>
            <p className="text-xs font-medium mb-3" style={{color: 'var(--text-secondary)'}}>
              {t('settings.theme')}
            </p>
            <button
              onClick={handleThemeToggle}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors duration-200 hover:opacity-80"
              style={{backgroundColor: 'var(--surface-secondary)'}}
            >
              <span className="text-sm" style={{color: 'var(--text-primary)'}}>
                {theme === 'light' ? t('settings.light') : t('settings.dark')}
              </span>
              {theme === 'light' ? (
                <Sun size={18} style={{color: 'var(--accent)'}} />
              ) : (
                <Moon size={18} style={{color: 'var(--accent)'}} />
              )}
            </button>
          </div>

          {/* Section Langue */}
          <div>
            <p className="text-xs font-medium mb-3" style={{color: 'var(--text-secondary)'}}>
              {t('settings.language')}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguageChange('fr')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'fr'
                    ? 'text-white shadow-md'
                    : 'hover:opacity-80'
                }`}
                style={language === 'fr' ? {backgroundColor: 'var(--accent)'} : {backgroundColor: 'var(--surface-secondary)', color: 'var(--text-primary)'}}
              >
                FR
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'text-white shadow-md'
                    : 'hover:opacity-80'
                }`}
                style={language === 'en' ? {backgroundColor: 'var(--accent)'} : {backgroundColor: 'var(--surface-secondary)', color: 'var(--text-primary)'}}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={toggleMenu}
        className="w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:opacity-90"
        style={{backgroundColor: 'var(--accent)'}}
        aria-label="Open settings"
      >
        <Settings size={24} />
      </button>
    </div>
  );
}
