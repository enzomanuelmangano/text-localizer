import { createTranslationsProvider } from '@text-localizer/react';

const { useTranslations, useTranslationsState, TranslationsProvider } =
  createTranslationsProvider({
    it: {
      check: 'now',
    },
  });

export { useTranslations, useTranslationsState, TranslationsProvider };
