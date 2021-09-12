import { TextLocalizer } from '../../../lib';

(async () => {
  const localizer = new TextLocalizer({
    en: import('./l10n/en.js'),
    it: import('./l10n/it.json'),
  });

  await localizer.setOptions({ fallback: 'it', language: 'en' });

  const translations = localizer.getTranslations();

  console.log(
    translations.formatText(translations.favouritesFun, { now: 'ora' })
  );
})();
