import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext({
  it: fetchItTranslations,
  gb: () => import('./gb'),
  us: () => import('./us.json'),
});

export { translationsContext };
