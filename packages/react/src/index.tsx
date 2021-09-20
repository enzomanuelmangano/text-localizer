import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { TextLocalizer, TextLocalizerParams } from '@text-localizer/core';
import type { SetOptionsParams } from '@text-localizer/core/src/localizer/types';
import { usePrevious } from './hooks/use-previous';
import { equals } from './helpers/equals';

interface TranslationsProviderProps<L> extends SetOptionsParams<L> {
  children?: React.ReactNode;
}

function createTranslationsProvider<L extends string, T>(
  textLocalizerParams: TextLocalizerParams<L, T>
) {
  type TranslationsState = {
    isLoading: boolean;
    error?: Error | null;
    languages: L[];
  };

  type TranslationsContextType = {
    translations: TextLocalizer<L, T>['translations'] | {};
  } & {
    state: Pick<TranslationsState, 'error' | 'languages'>;
  };

  const textLocalizer = new TextLocalizer(textLocalizerParams);

  const initialTranslationsState = {
    error: null,
    languages: textLocalizer.languages,
  };

  const initialContextValue: TranslationsContextType = {
    state: initialTranslationsState,
    translations: {},
  };

  const TranslationsContext =
    createContext<TranslationsContextType>(initialContextValue);

  const TranslationsProvider: React.FC<TranslationsProviderProps<L>> = ({
    children,
    ...options
  }) => {
    const [translationsData, setTranslationsData] =
      useState(initialContextValue);

    const previousOptions = usePrevious(options);

    const setTranslationsOptions = useCallback(
      async (options: SetOptionsParams<L>): Promise<void> => {
        if (previousOptions && options && equals(previousOptions, options)) {
          return;
        }
        if (previousOptions) {
          setTranslationsData((data) => ({
            ...data,
            translations: {},
          }));
        }
        await textLocalizer.setOptions(options);
        setTranslationsData((data) => ({
          ...data,
          translations: textLocalizer.translations,
        }));
      },
      [previousOptions]
    );

    useEffect(() => {
      void setTranslationsOptions(options);
    }, [options, setTranslationsOptions]);

    return (
      <TranslationsContext.Provider value={translationsData}>
        {children}
      </TranslationsContext.Provider>
    );
  };

  const useTranslations = () => {
    return useContext(TranslationsContext).translations as TextLocalizer<
      L,
      T
    >['translations'];
  };

  const useTranslationsState = (): TranslationsState => {
    const { state, translations } = useContext(TranslationsContext);

    return {
      ...state,
      isLoading: translations == null || Object.keys(translations).length === 0,
    };
  };

  return {
    TranslationsProvider,
    useTranslations,
    useTranslationsState,
  };
}

export { createTranslationsProvider };
