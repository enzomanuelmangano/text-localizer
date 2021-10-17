---
sidebar_position: 3
---

# Context Definition

Once the translation files have been set up, a [Translations Context](/docs/api-reference/react/create-translations-context) must be created.

Then in the l10n folder create an index.ts file with this code.

```ts title="src/l10n/index.ts"
import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext({
  it: fetchItTranslations,
  uk: import('./l10n/uk'),
  us: import('./l10n/us.json'),
});

export { translationsContext };
```

## Generated Types

:::caution
The use of Generated Types is fully optional. Check the following section to learn more about it.
:::

If you want to use a Generated Types approach, you can do so by simply running the following command:

```shell
yarn generate-l10n [translationsPath]
```

Once the `translations.d.ts` is fully created, you can pass the Languages and AppTranslations types to the TextLocalizer in the [Context Definition](#context-definition):

```ts title="src/l10n/index.ts"
import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext<
  Languages,
  AppTranslations
>({
  it: fetchItTranslations,
  uk: import('./l10n/uk'),
  us: import('./l10n/us.json'),
});

export { translationsContext };
```
