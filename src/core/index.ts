type ExtractDefault<T> = T extends { default: T } ? { default: T } : T;

type TranslationStrings<T> =
  | ExtractDefault<T>
  | {
      [key: string]: string | TranslationStrings<T>;
    };

type TranslationsParam<T> =
  | TranslationStrings<T>
  | Promise<TranslationStrings<T>>
  | (() => TranslationStrings<T>)
  | (() => Promise<TranslationStrings<T>>);

type TextLocalizerParams<L extends string, T> = Record<L, TranslationsParam<T>>;

const BRACKETS_PATTERN_REGEX = /\{\{[a-zA-Z ]+\}\}/g;

// This function will create a regex in order to extract
// this pattern from a string `{{ ${key} }}`
const regexByKey = (key: string) =>
  new RegExp(`\\{\{([ ]+)?${key}([ ]+)?\}\}`, 'g');

const parseTranslations = async <T>(
  param: TranslationsParam<T>
): Promise<T> => {
  if (typeof param == 'function') {
    const functionParam = param as
      | (() => TranslationStrings<T>)
      | (() => Promise<TranslationStrings<T>>);

    return (await functionParam()) as T;
  }

  let translations = (await param) as any;
  if (translations?.['default'] != null) {
    translations = translations['default'] as any;
  }

  return translations as T;
};

type FormatTextParams = (
  input: string,
  variables: Record<string, string | number>
) => string;

type WithHelpers<L, T> = T & {
  formatText: FormatTextParams;
  currentLanguage: L;
};

class TextLocalizer<L extends string, T extends Record<string, any>> {
  private _input: TextLocalizerParams<L, T>;

  private _translations: T | undefined;
  private _currentLanguage: L | undefined;
  private _fallbackLanguage: L | undefined;
  private _fallbackTranslations: T | undefined;
  private _formattedFunctionsEnabled: boolean = false;

  constructor(input: TextLocalizerParams<L, T>) {
    this._input = input;
  }

  public get languages(): L[] {
    return Object.keys(this._input) as L[];
  }

  public formatText: FormatTextParams = (input, variables) => {
    return Object.keys(variables)
      .map((key) => ({ key, regex: regexByKey(key) }))
      .reduce((text, { key, regex }) => {
        return text.replace(regex, variables[key] as string);
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
      formatText: this.formatText,
      currentLanguage: this.currentLanguage,
    } as WithHelpers<L, T>;
  }

  public async setOptions({
    fallback,
    language,
    formattedFunctionsEnabled,
  }: {
    fallback: L;
    language: L;
    formattedFunctionsEnabled?: boolean;
  }) {
    this._formattedFunctionsEnabled = formattedFunctionsEnabled ?? false;
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

    if (!this._formattedFunctionsEnabled) return translations;

    return Object.keys(translations).reduce((t, key) => {
      const value = (() => {
        const translationsValue = translations[key];
        if (
          typeof translationsValue === 'string' &&
          translationsValue.match(BRACKETS_PATTERN_REGEX)
        ) {
          return (variables: Record<string, number | string>) => {
            return this.formatText(translationsValue, variables);
          };
        }
        return translationsValue;
      })();

      return { ...t, [key]: value };
    }, {}) as T;
  }
}

export { TextLocalizer, TextLocalizerParams };
