import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext<
  Languages,
  AppTranslations
>({
  it: fetchItTranslations,
  uk: import('./uk'),
  us: import('./us.json'),
});

export { translationsContext };
