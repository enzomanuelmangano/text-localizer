import { TextLocalizer } from '../../../lib';

(async () => {
  const localizer = new TextLocalizer<Languages, AppTranslations>({
    en: import('./l10n/en.js'),
    it: import('./l10n/it.json'),
  });

  await localizer.setOptions({
    fallback: 'it',
    language: 'en',
    formattedFunctionsEnabled: true,
  });

  const translations = localizer.getTranslations();

  console.log(translations.favouritesFun);
})();
