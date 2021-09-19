import { IStorage } from '../storage/types';

type ExtractDefault<T> = T extends { default: T } ? { default: T } : T;

type TranslationStrings<T> = ExtractDefault<T>;

type TranslationsParam<T> =
  | TranslationStrings<T>
  | Promise<TranslationStrings<T>>
  | (() => TranslationStrings<T>)
  | (() => Promise<TranslationStrings<T>>);

type TextLocalizerParams<L extends string, T> = Record<L, TranslationsParam<T>>;

type WithHelpers<L, T> = T & {
  currentLanguage: L;
};

type SetOptionsParams<L> = {
  fallback?: L;
  language: L;
  storage?: IStorage;
  storageKey?: string;
  cacheDurationMs?: number;
};

export {
  TextLocalizerParams,
  WithHelpers,
  TranslationsParam,
  TranslationStrings,
  SetOptionsParams,
};
