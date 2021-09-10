type ExtractDefault<T> = T extends { default: T } ? { default: T } : T;

type TranslationStrings<T> =
  | ExtractDefault<T>
  | Record<string, string | Record<string, string>>;

type TextLocalizerParams<L extends string, T, FallbackT> = Record<
  L,
  TranslationStrings<T> | Promise<TranslationStrings<T>>
> & {
  fallback?: ExtractDefault<FallbackT>;
};

type Translations<T, Fallback> = Fallback extends {} ? Fallback : T;

class TextLocalizer<L extends string, T, FallbackT = undefined> {
  private _input: TextLocalizerParams<L, T, FallbackT>;

  private _fallback: ExtractDefault<FallbackT> | undefined;
  private _translations: Translations<T, FallbackT> | undefined;

  constructor(input: TextLocalizerParams<L, T, FallbackT>) {
    this._input = input;

    if (input.fallback) {
      this._fallback = input['fallback'];
    }
  }

  public getLanguages(): L[] {
    return Object.keys(this._input) as L[];
  }

  async setLanguage(language: L): Promise<void> {
    let translations = (await this._input[language]) as any;

    if (translations['default'] !== null) {
      translations = translations['default'] as any;
      delete translations['default'];
    }

    if (!this._fallback) {
      this._translations = translations;
      return;
    }

    const fallbackTranslations = await this._fallback;

    this._translations = {
      ...fallbackTranslations,
      ...translations,
    };
  }

  get translations(): Translations<T, FallbackT> {
    if (!this._translations) throw Error('Uninitialized Translations');
    return this._translations;
  }
}

export * from './ts-utils';
export { TextLocalizer, TextLocalizerParams };
