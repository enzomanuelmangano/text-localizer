type ExtractDefault<T> = T extends { default: T } ? { default: T } : T;

type TranslationStrings<T> =
  | ExtractDefault<T>
  | Record<string, string | Record<string, string>>;

type TranslationsParam<T> =
  | TranslationStrings<T>
  | Promise<TranslationStrings<T>>
  | (() => TranslationStrings<T>)
  | (() => Promise<TranslationStrings<T>>);

type TextLocalizerParams<L extends string, T> = Record<L, TranslationsParam<T>>;

class TextLocalizer<L extends string, T> {
  private _input: TextLocalizerParams<L, T>;

  private _translations: T | undefined;

  constructor(input: TextLocalizerParams<L, T>) {
    this._input = input;
  }

  public getLanguages(): L[] {
    return Object.keys(this._input) as L[];
  }

  private async resolveTranslations(param: TranslationsParam<T>): Promise<T> {
    if (typeof param == 'function') {
      const functionParam = param as
        | (() => TranslationStrings<T>)
        | (() => Promise<TranslationStrings<T>>);

      return (await functionParam?.()) as T;
    }

    let translations = (await param) as any;
    if (translations?.['default'] != null) {
      translations = translations['default'] as any;
    }

    return translations as T;
  }

  async setLanguage(language: L): Promise<void> {
    this._translations = await this.resolveTranslations(this._input[language]);
  }

  get translations(): T {
    return this._translations as T;
  }
}

export * from './ts-utils';
export { TextLocalizer, TextLocalizerParams };
