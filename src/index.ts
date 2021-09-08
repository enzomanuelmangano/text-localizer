type TextLocalizerParams<L extends string, T, FallbackT> = {
  translations: Record<L, T | Promise<T>>;
  fallback?: FallbackT;
};

class TextLocalizer<L extends string, T, FallbackT> {
  private _input: TextLocalizerParams<L, T, FallbackT>;
  private _translations: (FallbackT & T) | undefined;

  constructor(input: TextLocalizerParams<L, T, FallbackT>) {
    this._input = input;
  }

  public getLanguages(): L[] {
    return Object.keys(this._input.translations) as L[];
  }

  async setLanguage(language: L): Promise<void> {
    const translations = await (this._input.translations[language] as
      | Promise<T>
      | T);

    if (this._input.fallback) {
      this._translations = {
        ...this._input.fallback,
        ...translations,
      };
      return;
    }

    this._translations = {
      ...translations,
    } as FallbackT & T;
  }

  get translations(): FallbackT & T {
    if (!this._translations) throw Error('Uninitialized Translations');
    return this._translations;
  }
}

export { TextLocalizer, TextLocalizerParams };
