import { TextLocalizer } from 'text-localizer';
import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext(
  new TextLocalizer({
    it: fetchItTranslations,
    en: import('./en'),
    us: import('./us.json'),
  })
);

export { translationsContext };
