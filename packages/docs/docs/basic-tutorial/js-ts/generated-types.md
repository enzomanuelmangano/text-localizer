---
sidebar_position: 3
---

# Generated Types

The approach presented in the Handle Translations section is certainly straightforward and instantly enables the use of type-safety.
However, it has some limitations that can be optionally overcome by choosing to generate types.
The limitations to be overcome are:

- There is no type-safety on types obtained from server-side translations;
- There is no type-safety in the formatTranslation function.

You can therefore decide to generate all the types you need using the "generate-l10n" script in this way:

```shell
yarn generate-l10n [translationsPath]
```

Where translationsPath is the path where all the translation files are located. For example, assuming all translations are located in the src/l10n folder, the script would be run as follows:

```shell
yarn generate-l10n src/l10n
```

Execution of this script will result in the definition of a declarations typescript file called: 'translations.d.ts'. And it will have the following structure.

```ts title="/src/l10n/translations.d.ts"
/*
 * GENERATED CODE - DO NOT MODIFY BY HAND
 */

/* eslint-disable */

type en = import('text-localizer').TranslationsParser<{
  /**
   * @en Welcome on the Text Localizer Docs
   */
  welcome: 'Welcome on the Text Localizer Docs';
  /**
   * @en Do you need some help about {{ topic }}?
   */
  help: 'Do you need some help about {{ topic }}?';
  /**
   * @en Which is your favourite cat?
   */
  question: 'Which is your favourite cat?';
}>;

type it = import('text-localizer').TranslationsParser<{
  /**
   * @it Benvenuto sulla documentazione di Text Localizer
   */
  welcome: 'Benvenuto sulla documentazione di Text Localizer';
  /**
   * @it Hai bisogno di aiuto riguardo {{ topic }}?
   */
  help: 'Hai bisogno di aiuto riguardo {{ topic }}?';
  /**
   * @it Qual è il tuo gatto preferito?
   */
  question: 'Qual è il tuo gatto preferito?';
}>;

type us = import('text-localizer').TranslationsParser<{
  /**
   * @us Welcome on the Text Localizer Docs
   */
  welcome: 'Welcome on the Text Localizer Docs';
  /**
   * @us Do you need some help about {{ topic }}?
   */
  help: 'Do you need some help about {{ topic }}?';
  /**
   * @us Which is your favorite cat?
   */
  question: 'Which is your favorite cat?';
}>;

type AppTranslations = en | it | us;

type Languages = 'en' | 'it' | 'us';
```

What is really important in this file is the declaration of two types:

- Languages;
- AppTranslations.

These two types will simply have to be added at the creation stage of the TextLocalizer as generics.
For the sake of clarity, taking the previous code, the result will be this:

```ts
import { TextLocalizer } from 'text-localizer';
import { fetchItTranslations } from './l10n/it';

(async () => {
  const localizer = new TextLocalizer<Languages, AppTranslations>({
    us: import('./l10n/us.json'),
    en: import('./l10n/en'),
    it: fetchItTranslations,
  });

  await localizer.setOptions({
    language: 'en',
  });

  const translations = localizer.translations;

  console.log(translations.question); // "Which is your favourite cat?"

  console.log(
    localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })
  );
})();
```

The advantages?

- Server-side translations are truly type-safe;
- The object passed into formatTranslation will give a compile-time error if it does not conform to the actual object requested;
- All translation strings will have a docs.
