import { createTranslationsContext } from 'react-native-text-localizer';
import { TextLocalizer } from 'text-localizer';
import { fetchUsTranslations } from './us';

const translationsContext = createTranslationsContext(
  new TextLocalizer({
    it: import('./it.json'),
    us: fetchUsTranslations,
    en: import('./en'),
  })
);

export { translationsContext };
