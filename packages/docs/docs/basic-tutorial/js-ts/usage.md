---
sidebar_position: 3
---

# Usage

Managing translations is now very simple. In order to do this, it is sufficient to initialise the Text Localizer by passing the Translation Record as input.
Once this has been done, it is necessary to set the reference language. Given that the translations are passed as _Javascript Promises_, it is necessary to set the language using the asynchronous function **setOptions**.

```ts
import { TextLocalizer } from 'text-localizer';
import { fetchItTranslations } from './l10n/it';

(async () => {
  const localizer = new TextLocalizer({
    us: import('./l10n/us.json'),
    uk: import('./l10n/uk'),
    it: fetchItTranslations,
  });

  await localizer.setOptions({
    language: 'uk',
  });

  const translations = localizer.translations;

  console.log(translations.question); // "Which is your favourite cat?"

  console.log(
    localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })
  );
})();
```

The strings can then be easily accessed via textLocalizer.translations.
If the string is specified as _formatted_ then the [formatTranslation](/docs/api-reference/text-localizer#formattranslation) function defined in the TextLocalizer class must be used.
The function accepts two parameters:

- The string to be formatted;
- An object having as keys the keys of the formatted string and as values, the values to be replaced.
