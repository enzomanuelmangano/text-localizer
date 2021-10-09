import { useContext, useMemo } from 'react';
import type { TranslationsContextData } from '../types';

const useTranslations = <L extends string, T>({
  textLocalizer,
  reactContext,
}: TranslationsContextData<L, T>) => {
  const operations = useMemo(
    () => ({
      formatTranslation: textLocalizer.formatTranslation,
    }),
    [textLocalizer.formatTranslation]
  );
  const translations = useContext(reactContext).translations as T;

  return { ...operations, ...translations };
};

export { useTranslations };
