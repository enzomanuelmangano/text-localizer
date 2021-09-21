import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  TextLocalizer,
  TextLocalizerParams,
  OptionsType,
} from '@text-localizer/core';
import { usePrevious } from './hooks/use-previous';
import { equals } from './helpers/equals';

interface TranslationsProviderProps<L> extends OptionsType<L> {
  children?: React.ReactNode;
  forceRefetch?: boolean;
}

function createTranslationsProvider<L extends string, T>(
  textLocalizerParams: TextLocalizerParams<L, T>
) {
  type TranslationsState = {
    isLoading: boolean;
    error?: Error | null;
    languages: L[];
    currentLanguage?: L;
  };

  type TranslationsContextType = {
    translations: TextLocalizer<L, T>['translations'] | {};
  } & {
    state: Omit<TranslationsState, 'isLoading'>;
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
    forceRefetch = false,
    ...options
  }) => {
    const [translationsData, setTranslationsData] =
      useState(initialContextValue);

    const previousOptions = usePrevious(options);

    const cacheDurationMs = useMemo(
      () => (forceRefetch ? 0 : options.cacheDurationMs),
      [forceRefetch, options.cacheDurationMs]
    );

    const setTranslationsOptions = useCallback(
      async (options: OptionsType<L>): Promise<void> => {
        if (previousOptions && options && equals(previousOptions, options)) {
          return;
        }
        if (previousOptions) {
          setTranslationsData((data) => ({
            state: {
              ...data.state,
              currentLanguage: options.language ?? options.fallback,
            },
            translations: {},
          }));
        }
        try {
          await textLocalizer.setOptions({
            ...options,
            cacheDurationMs,
          });
        } catch (e) {
          if (!options.fallback) {
            console.error(e);
            return;
          }
          console.warn(e);
          await textLocalizer.setOptions({
            ...options,
            language: options.fallback,
          });
        }
        setTranslationsData((data) => ({
          state: {
            ...data.state,
            currentLanguage: options.language ?? options.fallback,
          },
          translations: textLocalizer.translations,
        }));
      },
      [cacheDurationMs, previousOptions]
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
    return useContext(TranslationsContext).translations as T;
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

export {
  createTranslationsProvider,
  TextLocalizerParams,
  TranslationsProviderProps,
};
