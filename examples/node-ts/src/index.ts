import { TextLocalizer } from '../../../lib';
import axios from 'axios';

const fetchUsTranslations = async () =>
  (await axios.get('http://localhost:3000/')).data;

(async () => {
  const localizer = new TextLocalizer({
    en: import('./l10n/en-UK'),
    it: import('./l10n/it-IT.json'),
    us: fetchUsTranslations,
  });

  await localizer.setLanguage('en');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('it');
  console.log(localizer.translations.favourites);
  await localizer.setLanguage('us');
  console.log(localizer.translations.favourites);
})();
