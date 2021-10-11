---
sidebar_position: 1
---

# Setup

Before translations can be used in the project, it is necessary to create the files where these translations will be stored. Using Text Localizer there are several ways of saving translation files depending on the need. The main solutions are presented below:

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

```ts title="src/l10n/uk.ts"
import us from './us.json';

export default {
  ...us,
  question: 'Which is your favourite cat?',
};
```

### What if your strings lives on the backend?

With Text Localizer, it is simply a matter of creating a _js/ts_ file and exporting the function with which the translations for that country are fetched.

```ts title="src/l10n/it.ts"
// eg: this function will return this object
// {
//   welcome: 'Benvenuto sulla documentazione di Text Localizer',
//   help: 'Hai bisogno di aiuto riguardo {{ topic }}?',
//   question: 'Qual è il tuo gatto preferito?',
// }
const fetchItTranslations = async () => { ...fetch translations logic... };

export { fetchItTranslations };
```
