import { Objectify } from '..';

import { parseTranslations, regexByKey } from './helpers';
import { TextLocalizerParams, TranslationsParam, WithHelpers } from './types';

class TextLocalizer<L extends string, T extends Record<string, any>> {
  private _input: TextLocalizerParams<L, T>;

  private _translations: T | undefined;
  private _currentLanguage: L | undefined;
  private _fallbackLanguage: L | undefined;
  private _fallbackTranslations: T | undefined;

  constructor(input: TextLocalizerParams<L, T>) {
    this._input = input;
  }

  public get languages(): L[] {
    return Object.keys(this._input) as L[];
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

  public get currentLanguage(): L {
    const language = this._currentLanguage ?? this._fallbackLanguage;
    // TODO:
    if (!language) throw Error();
    return language;
  }

  public getTranslations(): WithHelpers<L, T> {
    // TODO:
    if (!this._translations && !this._fallbackTranslations) throw Error();

    return {
      ...this._fallbackTranslations,
      ...this._translations,
      currentLanguage: this.currentLanguage,
    } as WithHelpers<L, T>;
  }

  public async setOptions({
    fallback,
    language,
  }: {
    fallback: L;
    language: L;
    formattedFunctionsEnabled?: boolean;
  }) {
    await Promise.all([this.setFallback(fallback), this.setLanguage(language)]);
  }

  public async setFallback(language: L): Promise<void> {
    this._fallbackLanguage = language;
    this._fallbackTranslations = await this.resolveTranslation(language);
  }

  public async setLanguage(language: L): Promise<WithHelpers<L, T>> {
    this._currentLanguage = language;
    this._translations = await this.resolveTranslation(language);
    return this.getTranslations();
  }

  private async resolveTranslation(language: L): Promise<T> {
    const translationsInput = this._input[language] as TranslationsParam<T>;

    const translations = await parseTranslations(translationsInput);
    if (!translations) throw Error();

    return translations;
  }
}

export { TextLocalizer, TextLocalizerParams };
