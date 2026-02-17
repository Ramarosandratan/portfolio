import { useMemo } from 'react';
import { useThemeLanguage } from '../context/useThemeLanguage';
import { projectsData } from '../data/projectsData';

/**
 * Custom hook to get translated project data
 * Merges original project data with translations from i18n files
 * Falls back to original data if translation is not available
 */
export function useTranslatedProjects() {
  const { t } = useThemeLanguage();

  const translatedProjects = useMemo(() => {
    return projectsData.map((project) => {
      // Try to get translated data for this project
      const translationKey = `projects.data.${project.id}`;
      
      // Check if translation exists for this project
      const hasTranslation = t(`${translationKey}.title`) !== `${translationKey}.title`;

      if (!hasTranslation) {
        // No translation available, return original project
        return project;
      }

      // Return project with translated fields
      return {
        ...project,
        title: t(`${translationKey}.title`, project.title),
        description: t(`${translationKey}.description`, project.description),
        fullDescription: t(`${translationKey}.fullDescription`, project.fullDescription),
        architecture: t(`${translationKey}.architecture`, project.architecture),
        // Translate features array
        features: project.features.map((feature, index) => {
          const featureKey = `${translationKey}.features.${index}`;
          const translated = t(featureKey);
          // Return translated if available, otherwise original
          return translated === featureKey ? feature : translated;
        }),
        // Translate tags array
        tags: project.tags.map((tag, index) => {
          const tagKey = `${translationKey}.tags.${index}`;
          const translated = t(tagKey);
          // Return translated if available, otherwise original
          return translated === tagKey ? tag : translated;
        }),
      };
    });
  }, [t]);

  return translatedProjects;
}
