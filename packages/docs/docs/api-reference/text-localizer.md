---
sidebar_position: 1
---

# Text Localizer

The Text Localizer is undoubtedly the main core of the packages. Its task is to enclose and coordinate translations with each other.
In concrete terms, it is implemented as a class that accepts as constructor parameters a Typescript Record with the possible languages as keys and the translations associated with the languages as values.

```tsx
const localizer = new TextLocalizer({
  it: import('./l10n/it.json'),
  uk: import('./l10n/uk'),
  us: fetchUsTranslations,
});

await localizer.setOptions({
  language: 'uk',
});
```

A notable strength of the Text Localizer is that translations can be provided in many different ways.
In fact, translations can be enclosed in files of type [js, ts or json](/docs/basic-tutorial/js-ts/setup).

### Methods

### setOptions

Must be called to set the following options:

- language: defines the language for which translations must be loaded;
- fallback?: defines the language to use if an error happens;
- storage?: defines the storage to be used in order to cache remote translations;
- storageKey?: defines translations cache key (default: _@TEXT_LOCALIZER_STORAGE_KEY_);
- cacheDurationMs?: defines the translations cache duration in milliseconds (default: _ONE_DAY_MS = 86400000_ )

The **storage** shall extend the following interface:

```ts
export interface IStorage {
  setItem(key: string, value: string): void | Promise<void>;
  getItem(key: string): null | string | Promise<string>;
}
```

### formatTranslation

Allows formatting of defined strings.

```ts
// translations.help = "Do you need some help about {{ topic }}?"
console.log(
  localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })
);
// "Do you need some help about Text Localizer?"
```

### currentLanguage

Returns the last language set by the [setOptions](#setoptions) function.

```ts
console.log(localizer.currentLanguage); // eg: uk
```

### translations

Returns all translations related to the [currentLanguage](#currentlanguage).

```ts
console.log(localizer.translations);
// eg: if the currentLanguage === "us"
// {
//   "welcome": "Welcome on the Text Localizer Docs",
//   "help": "Do you need some help about {{ topic }}?",
//   "question": "Which is your favorite cat?"
// }
```

### languages

Returns all supported languages.

```ts
console.log(localizer.languages); // uk | it | us ...
```
