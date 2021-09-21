import { createTranslationsProvider } from '@text-localizer/react';
import { fetchUsTranslations } from './us';

const { useTranslations, useTranslationsState, TranslationsProvider } =
  createTranslationsProvider({
    it: import('./it.json'),
    us: fetchUsTranslations,
    en: import('./en'),
  });

export { useTranslations, useTranslationsState, TranslationsProvider };
