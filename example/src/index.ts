import { TextLocalizer } from '../../lib';

(async () => {
  const localizer = new TextLocalizer<Languages, AppTranslations>({
    en: import('./l10n/en'),
    it: import('./l10n/it.json'),
    us: (await import('./l10n/us')).fetchUsTranslations,
  });

  await localizer.setOptions({
    fallback: 'it',
    language: 'en',
  });

  const translations = localizer.translations;

  console.log(translations.tab.check);
  console.log(
    localizer.formatTranslation(translations.favouritesFun, { now: 'check' })
  );
})();
