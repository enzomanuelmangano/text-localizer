import { TextLocalizer } from 'text-localizer';
import { fetchItTranslations } from './l10n/it';

(async () => {
  const localizer = new TextLocalizer<Languages, AppTranslations>({
    it: fetchItTranslations,
    gb: import('./l10n/gb'),
    us: import('./l10n/us.json'),
  });

  await localizer.setOptions({
    language: 'gb',
  });

  const translations = localizer.translations;

  console.log(translations.question);

  console.log(
    localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })
  );
})();
