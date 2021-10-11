/* eslint-disable no-unused-vars */

export enum ErrorTypes {
  NoLanguageSpecified = 'No main or fallback language has been set. Make sure you have set at least one of them correctly via the setOptions function.',
  NoTranslationWasFound = 'No translations were found in the TextLocalizer. Make sure you have called the setOptions function before accessing the translations.',
  UnsupportedFileExtensions = 'The generation of declarations requires the existence of translation files with the following extensions exclusively: js | ts | json',
  WrongTranslationKey = 'An error occurred when parsing translations. Make sure you are passing the correct translation key.',
  TranslationsParsing = 'An error occurred when parsing translations. Make sure you have specified the translations correctly in the TextLocalizer constructor.',
  TranslationsPath = 'Translations path must be specified.',
  StorageOptions = 'Make sure to specify the storage property with cacheDurationMs || storageKey.',
}

export const DEFAULT_STORAGE_KEY = '@TEXT_LOCALIZER_STORAGE_KEY';
export const DEFAULT_CACHE_DURATION_MS = 86400000; // 1 Day in MS
