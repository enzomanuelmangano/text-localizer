import React, { useCallback, useEffect, useMemo, useState } from 'react';

import type { OptionsType } from 'text-localizer';
import { usePrevious } from '../hooks/use-previous';
import { equals } from '../helpers/equals';
import type { TranslationsProviderProps } from '../types';

function TranslationsProvider<L extends string, T>({
  context: translationsContext,
  children,
  forceRefetch = false,
  ...options
}: TranslationsProviderProps<L, T>) {
  const {
    textLocalizer,
    reactContext: TranslationsContext,
    initialValue,
  } = translationsContext;
  const [translationsData, setTranslationsData] = useState(initialValue);

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
    [cacheDurationMs, previousOptions, textLocalizer]
  );

  useEffect(() => {
    void setTranslationsOptions(options);
  }, [options, setTranslationsOptions]);

  return (
    <TranslationsContext.Provider value={translationsData}>
      {children}
    </TranslationsContext.Provider>
  );
}

export { TranslationsProvider };
