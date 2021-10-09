---
sidebar_position: 1
---

# createTranslationsContext

createTranslationsContext is a utility function that aims to create a javascript object containing three pieces of information:

- _A React Context;_
- _The initial value of the React Context;_
- _An instance of the TextLocalizer._

```tsx
const translationsContext = createTranslationsContext(
  new TextLocalizer({
    it: import('./it.json'),
    us: fetchUsTranslations,
    en: import('./en'),
  })
);
```

This object is essential when using the react-text-localizer package (and therefore also the react-native-text-localizer package) as it is used by all the components of the package.
