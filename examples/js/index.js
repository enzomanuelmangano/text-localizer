const { TextLocalizer } = require('text-localizer');

(async () => {
  const result = await fetchUsTranslations();

  console.log(result);
  const localizer = new TextLocalizer({
    en: import('./l10n/en.js'),
    it: import('./l10n/it.json'),
  });

  await localizer.setLanguage('en');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('it');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('us');
  console.log(localizer.translations.favourites);
})();
