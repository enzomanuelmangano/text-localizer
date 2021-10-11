---
sidebar_position: 1
---

# Motivation

Text Localizer is a package born out of the need to manage translations in a typesafe manner.
Currently, the best-known solutions in javascript for managing translations are based on a key-value approach (i18n.js, i18next).

This approach involves this way of accessing the individual translation.

```ts
console.log(translationsObject.get('translations_key'));
```

The main problems with this approach are that:

- _There is no effective compile-time support to catch errors if the key is wrong;_
- _There is no way of knowing whether the key being accessed is set for all languages;_
- _There is no warning if you try to access an unsupported locale;_
- _The refactoring of translation keys can easily lead to problems that cannot be intercepted at compile-time._

Consequently, the goal of **TextLocalizer** is to provide a **lightweight**, **fast**, and **flexible** way to access translation strings in a **type-safe** manner in the **JavaScript** world.

### Lightweight

**The package must be easy to use and must not increase the size of the bundle.**
Fortunately, Text Localizer successfully achieves this by weighing less than **2kb** _minified_ and less than **1kb** _gzipped_.

### Fast

**The package must not impact the start-up time in any way.**
To achieve this, Text Localizer extensively supports dynamic imports. This allows translations to be specified in files of type **JSON**, **TS** or **JS** and the translations can be passed into the Text Localizer constructor via dynamic imports.

```tsx
const localizer = new TextLocalizer({
  it: import('./l10n/it.json'),
  uk: import('./l10n/uk'),
});
```

### Flexible

**The package must adapt to several use cases without affecting the architecture of the project.**
This requirement is by far the most important one. In order to meet it, Text Localizer allows several modes of operation.

- **Inferred Types**: definitely the most convenient way to use Text Localizer if all translations are available at compile-time. The great advantage of this approach is that in the development phase it is possible to have type-safety of the translations without any extra work.
- **Generated Types**: this approach is the most natural one if the strings of translations are only available at runtime. In this case, in the development phase, it will be necessary to run a script which will generate a .d.ts file containing the types of the translation strings.

_Note_: Although these are the most natural ways of using Text Localizer, this does not exclude the possibility of using an **"Inferred Types"** approach in the case of translation strings available at run-time, or of using a **"Generated Types"** approach in the case of translation strings available at compile-time.
