import { TextLocalizer } from '../../lib';

(async () => {
  const localizer = new TextLocalizer({
    en: import('./l10n/en'),
    it: import('./l10n/it.json'),
    us: (await import('./l10n/us')).fetchUsTranslations,
  });

  await localizer.setOptions({
    fallback: 'it',
    language: 'en',
    formattedFunctionsEnabled: true,
  });

  await localizer.setLanguage('us');
  const usTranslations = localizer.getTranslations();
  // console.log(usTranslations.favouritesFun({ now: 'test' }));
  console.log(usTranslations.tab.check);
})();
