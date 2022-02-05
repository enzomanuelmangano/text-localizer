import type { TranslationsParam, TranslationStrings } from '../types';

export const parseTranslations = async <T>(
  param: TranslationsParam<T>
): Promise<T> => {
  if (typeof param == 'function') {
    const functionParam = param as
      | (() => TranslationStrings<T>)
      | (() => Promise<TranslationStrings<T>>);

    const result = await functionParam();

    if ((result as any)?.['default']) return (result as any)?.['default'] as T;
    return result as T;
  }

  let translations = (await param) as any;
  if (translations?.['default'] != null) {
    translations = translations['default'] as any;
  }

  return translations as T;
};
