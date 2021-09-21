import { TextLocalizer } from '@text-localizer/core';
import { fetchUsTranslations } from './l10n/us';

(async () => {
  const localizer = new TextLocalizer({
    it: import('./l10n/it.json'),
    en: import('./l10n/en'),
    us: fetchUsTranslations,
  });

  await localizer.setOptions({
    language: 'us',
  });

  const translations = localizer.translations;

  console.log(translations.tab.check);

  console.log(
    localizer.formatTranslation(translations.favouritesFun, { now: 'check' })
  );
})();
