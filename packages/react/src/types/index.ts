import type { OptionsType, TextLocalizer } from 'text-localizer';

type TranslationsState<L> = {
  isLoading: boolean;
  error?: Error | null;
  languages: L[];
  currentLanguage?: L;
};

type TranslationsContextType<L extends string, T> = {
  translations: TextLocalizer<L, T>['translations'] | {};
} & {
  state: Omit<TranslationsState<L>, 'isLoading'>;
};

type TranslationsContextData<L extends string, T> = {
  initialValue: TranslationsContextType<L, T>;
  reactContext: React.Context<TranslationsContextType<L, T>>;
  textLocalizer: TextLocalizer<L, T>;
};

interface TranslationsProviderProps<L extends string, T>
  extends OptionsType<L> {
  context: TranslationsContextData<L, T>;
  children?: React.ReactNode;
  forceRefetch?: boolean;
}

export type {
  TranslationsContextData,
  TranslationsProviderProps,
  TranslationsContextType,
  TranslationsState,
};
