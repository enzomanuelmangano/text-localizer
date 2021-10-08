import { createTranslationsProvider } from 'react-text-localizer';
import { fetchUsTranslations } from './us';

const { useTranslations, useTranslationsState, TranslationsProvider } =
  createTranslationsProvider<Languages, AppTranslations>({
    it: import('./it.json'),
    us: fetchUsTranslations,
    en: import('./en'),
  });

export { useTranslations, useTranslationsState, TranslationsProvider };
