import type { Objectify } from '../ts-utils';
import { ErrorTypes } from '../constants';

import { parseTranslations, regexByKey } from './helpers';
import type {
  OptionsType,
  TextLocalizerParams,
  TranslationsParam,
} from './types';

import { StorageHandler } from '../storage';

class TextLocalizer<L extends string, T extends Record<string, any>> {
  private _input: TextLocalizerParams<L, T>;

  private _translations: T | undefined;
  private _currentLanguage: L | undefined;
  private _fallbackLanguage: L | undefined;
  private _fallbackTranslations: T | undefined;

  private storage?: StorageHandler;

  constructor(input: TextLocalizerParams<L, T>) {
    this._input = input;
  }

  public get languages(): L[] {
    return Object.keys(this._input) as L[];
  }

  public get currentLanguage(): L {
    const language = this._currentLanguage ?? this._fallbackLanguage;
    if (!language) throw Error(ErrorTypes.NoLanguageSpecified);
    return language;
  }

  public get translations(): T {
    if (!this._translations && !this._fallbackTranslations)
      throw Error(ErrorTypes.NoTranslationWasFound);

    return {
      ...this._fallbackTranslations,
      ...this._translations,
    } as T;
  }

  public async setOptions({
    fallback,
    language,
    storage,
    storageKey,
    cacheDurationMs,
  }: OptionsType<L>) {
    if (storage == null && (storageKey || cacheDurationMs)) {
      throw Error(ErrorTypes.StorageOptions);
    }

    if (storage != null) {
      this.storage = new StorageHandler({
        storage,
        cacheDurationMs,
        key: storageKey,
      });
    }

    return await Promise.all([
      this.setLanguage(language),
      fallback ? this.setFallback(fallback) : null,
    ]);
  }

  public formatTranslation = <FormattedInput extends string>(
    input: FormattedInput,
    variables: Objectify<FormattedInput> extends undefined
      ? Record<string, string | number>
      : Required<Objectify<FormattedInput>>
  ) => {
    return Object.keys(variables)
      .map((key) => ({ key, regex: regexByKey(key) }))
      .reduce((text: string, { key, regex }) => {
        return text.replace(regex, (variables as any)[key] as string);
      }, input);
  };

  private async setFallback(language: L): Promise<void> {
    this._fallbackLanguage = language;
    this._fallbackTranslations = await this.resolveTranslation(language);
  }

  public async setLanguage(language: L, forceRefetch?: false): Promise<T> {
    this._currentLanguage = language;
    this._translations = await this.resolveTranslation(language, forceRefetch);
    return this.translations;
  }

  private async resolveTranslation(
    language: L,
    forceRefetch?: false
  ): Promise<T> {
    const translationsInput = this._input[language] as TranslationsParam<T>;

    if (
      typeof translationsInput === 'function' &&
      this.storage &&
      !forceRefetch
    ) {
      const storedTranslations = await this.storage.get<T>(language);
      if (storedTranslations) return storedTranslations;
    }

    const translations = await parseTranslations(translationsInput);
    if (!translations) {
      if (!this.languages.includes(language)) {
        throw Error(ErrorTypes.WrongTranslationKey);
      }
      throw Error(ErrorTypes.TranslationsParsing);
    }

    await this.storage?.set(language, translations);
    return translations;
  }
}

export { TextLocalizer, TextLocalizerParams, OptionsType };
