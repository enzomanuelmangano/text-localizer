import { createContext } from 'react';
import type { TextLocalizer } from 'text-localizer';
import type {
  TranslationsContextData,
  TranslationsContextType,
} from '../types';

function createTranslationsContext<L extends string, T>(
  textLocalizer: TextLocalizer<L, T>
) {
  const initialTranslationsState = {
    error: null,
    languages: textLocalizer.languages,
  };

  const initialValue: TranslationsContextType<L, T> = {
    state: initialTranslationsState,
    translations: {},
  };

  const reactContext =
    createContext<TranslationsContextType<L, T>>(initialValue);

  const translationsContextData: TranslationsContextData<L, T> = {
    initialValue,
    textLocalizer,
    reactContext,
  };

  return translationsContextData;
}

export { createTranslationsContext };
