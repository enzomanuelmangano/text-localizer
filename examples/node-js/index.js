const { TextLocalizer } = require('../../lib');
const axios = require('axios').default;

const fetchUsTranslations = async () =>
  (await axios.get('http://localhost:3000/')).data;

(async () => {
  const result = await fetchUsTranslations();

  console.log(result);
  const localizer = new TextLocalizer({
    en: import('./l10n/en-UK.js'),
    it: import('./l10n/it-IT.json'),
    us: result,
  });

  await localizer.setLanguage('en');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('it');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('us');
  console.log(localizer.translations.favourites);
})();
