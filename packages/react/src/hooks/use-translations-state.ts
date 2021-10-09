import { useContext } from 'react';
import type { TranslationsContextData, TranslationsState } from '../types';

const useTranslationsState = <L extends string, T>({
  reactContext,
}: TranslationsContextData<L, T>): TranslationsState<L> => {
  const { state, translations } = useContext(reactContext);

  return {
    ...state,
    isLoading: translations == null || Object.keys(translations).length === 0,
  };
};

export { useTranslationsState };
