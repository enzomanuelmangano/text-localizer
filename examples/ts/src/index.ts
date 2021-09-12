import { TextLocalizer } from 'text-localizer';

(async () => {
  const localizer = new TextLocalizer<Languages, AppTranslations>({
    en: import('./l10n/en.js'),
    it: import('./l10n/it.json'),
  });

  await localizer.setLanguage('en');
  console.log(localizer.translations);
  await localizer.setLanguage('it');
  console.log(localizer.translations.favourites);
})();
