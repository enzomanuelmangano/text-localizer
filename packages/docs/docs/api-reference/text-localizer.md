---
sidebar_position: 1
---

# Text Localizer

The Text Localizer is undoubtedly the main core of the packages. Its task is to enclose and coordinate translations with each other.
In concrete terms, it is implemented as a class that accepts as constructor parameters a Typescript Record with the possible languages as keys and the translations associated with the languages as values.

```tsx
const localizer = new TextLocalizer({
  it: import('./l10n/it.json'),
  en: import('./l10n/en'),
  us: fetchUsTranslations,
});

await localizer.setOptions({
  language: 'en',
});
```

A notable strength of the Text Localizer is that translations can be provided in many different ways.
In fact, translations can be enclosed in files of type js, ts or json.
