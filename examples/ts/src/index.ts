import { TextLocalizer } from 'text-localizer';
import { fetchUsTranslations } from './l10n/strings/us';

(async () => {
  const localizer = new TextLocalizer({
    en: import('./l10n/strings/en.js'),
    it: import('./l10n/strings/it.json'),
    us: fetchUsTranslations,
  });

  await localizer.setLanguage('en');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('it');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('us');
  console.log(localizer.translations.favourites);
})();
