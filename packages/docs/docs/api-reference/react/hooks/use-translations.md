---
sidebar_position: 1
---

# useTranslations

useTranslations is a hook that takes the [translationsContext](/docs/api-reference/react/create-translations-context) as input and allows access to all translation strings.

```tsx
const { myFirstTranslationKey, mySecondTranslationKey, ...rest } =
  useTranslations(translationsContext);
```

In addition, it is also possible to access the formatTranslation function from this hook in order to handle formatted strings.

```tsx
// ex: myFormattedStringKey = "What do you think about {{ value }}?"
const { formatTranslation, myFormattedStringKey } =
  useTranslations(translationsContext);

// output: What do you think about TextLocalizer?
console.log(
  formatTranslation(myFormattedStringKey, { value: 'TextLocalizer' })
);
```
