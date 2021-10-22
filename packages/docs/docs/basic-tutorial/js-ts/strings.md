---
sidebar_position: 2
---

# Strings

Before translations can be used in the project, it is necessary to create the files where these translations will be stored. Using Text Localizer there are several ways of saving translation files depending on the need.

:::info
In this section, all possible solutions are implemented, but in a normal project, they don't all have to be used.
:::

### Folder Structure

In order to continue the previous tutorial, create a folder called _"l10n"_ where the translation files will be stored (there is no particular constraint on the name of the folder).
Also, create three separate files in the new l10n folder:

- _us.json_
- _uk.ts_
- _it.ts_

These are the files that will be referenced in the rest of the project, but there is no limit to the amount of files you can add.

```
.
├── package-lock.json
├── tsconfig.json
├── _node_modules
├── _dist
│   └── index.js
├── _src
│   ├── _l10n
│   │   └── us.json
│   │   └── gb.ts
│   │   └── it.ts
│   └── index.ts
└── package.json
```

## JSON

The use of JSON files to store translations is certainly the most common and the simplest.

```json title="src/l10n/us.json"
{
  "welcome": "Welcome on the Text Localizer Docs",
  "help": "Do you need some help about {{ topic }}?",
  "question": "Which is your favorite cat?"
}
```

Note: _"help"_ contains a formatted string, that can be easily managed with the [formatTranslation](/docs/api-reference/text-localizer#formattranslation) function.

## Javascript or Typescript

Although the Json is by far the most widely used solution in javascript for saving translation files, there are many use cases where using a JS or TS file can be just as useful.

For example, in cases where only a few strings differ, using a typescript file can be extremely useful.

```ts title="src/l10n/gb.ts"
import us from './us.json';

export default {
  ...us,
  question: 'Which is your favourite cat?',
};
```

### What if your strings lives on the backend?

With Text Localizer, it is simply a matter of creating a _js/ts_ file and exporting the function with which the translations for that country are fetched.

```ts title="src/l10n/it.ts"
// In this example fetchItTranslations simply returns a plain object.
// The point is that it could be any asynchronous function
// where maybe using axios, apollo or any other client.
const fetchItTranslations = async () => ({
  welcome: 'Benvenuto sulla documentazione di Text Localizer',
  help: 'Hai bisogno di aiuto riguardo {{ topic }}?',
  question: 'Qual è il tuo gatto preferito?',
});

export { fetchItTranslations };
```
