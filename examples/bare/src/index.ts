import { TextLocalizer } from 'text-localizer';
import { fetchUsTranslations } from './l10n/us';

(async () => {
  const localizer = new TextLocalizer<Languages, AppTranslations>({
    it: import('./l10n/it.json'),
    en: import('./l10n/en'),
    us: fetchUsTranslations,
  });

  await localizer.setOptions({
    language: 'en',
  });

  const translations = localizer.translations;

  console.log(translations.tab.check);

  console.log(
    localizer.formatTranslation(translations.favouritesFun, { now: 'test' })
  );
})();
