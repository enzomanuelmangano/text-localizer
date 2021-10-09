import { TextLocalizer } from 'text-localizer';
import { createTranslationsContext } from 'react-text-localizer';
import { fetchUsTranslations } from './us';

const translationsContext = createTranslationsContext(
  new TextLocalizer<Languages, AppTranslations>({
    it: import('./it.json'),
    us: fetchUsTranslations,
    en: import('./en'),
  })
);

export { translationsContext };
