import { createTranslationsProvider } from 'react-native-text-localizer';
import { fetchUsTranslations } from './us';

const { useTranslations, useTranslationsState, TranslationsProvider } =
  createTranslationsProvider({
    it: import('./it.json'),
    us: fetchUsTranslations,
    en: import('./en'),
  });

export { useTranslations, useTranslationsState, TranslationsProvider };
