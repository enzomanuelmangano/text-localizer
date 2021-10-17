import { createContext } from 'react';
import { TextLocalizer } from 'text-localizer';
import type { TextLocalizerParams } from 'text-localizer';
import type {
  TranslationsContextData,
  TranslationsContextType,
} from '../types';

function createTranslationsContext<L extends string, T>(
  textLocalizerParams: TextLocalizerParams<L, T>
) {
  const textLocalizer = new TextLocalizer<L, T>(textLocalizerParams);
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
