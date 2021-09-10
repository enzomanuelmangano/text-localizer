const { TextLocalizer } = require('../lib');

(async () => {
  const localizer = new TextLocalizer({
    en: import('./l10n/en-UK.json'),
    it: import('./l10n/it-IT.json'),
    fallback: await import('./l10n/en-UK.json'),
  });

  await localizer.setLanguage('en');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('it');
  console.log(localizer.translations.favourites);
})();
