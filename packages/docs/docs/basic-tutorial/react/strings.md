---
sidebar_position: 2
---

# Strings

Now you need to create the files where the translations will be stored.
Therefore create in the **src** directory the **l10n** folder and add the translation files. In this tutorial we'll use the same translation files used in the Typescript section.

For the sake of clarity here's the files:

```json title="src/l10n/us.json"
{
  "welcome": "Welcome on the Text Localizer Docs",
  "help": "Do you need some help about {{ topic }}?",
  "question": "Which is your favorite cat?"
}
```

```ts title="src/l10n/uk.ts"
import us from './us.json';

export default {
  ...us,
  question: 'Which is your favourite cat?',
};
```

```ts title="src/l10n/it.ts"
const fetchItTranslations = async () => ({
  welcome: 'Benvenuto sulla documentazione di Text Localizer',
  help: 'Hai bisogno di aiuto riguardo {{ topic }}?',
  question: 'Qual è il tuo gatto preferito?',
});
```

## Folder Structure

The project will have the following folder structure:

```
.
├── ...
├── _src
│   ├── _l10n
│   │   ├── us.json
│   │   ├── uk.ts
│   │   └── it.ts
│   ├── ...
│   └── App.tsx
└── package.json
```
