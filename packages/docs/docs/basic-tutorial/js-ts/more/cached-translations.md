---
sidebar_position: 4
---

# Cached Translations

To handle this use case, Text Localizer provides the possibility of specifying the following parameters in the setOptions function:

- the _storage_;
- the _storageKey_;
- _cacheDurationMs_.

```ts
  await localizer.setOptions({
    language: 'uk',
    storage: myStorage,
    storageKey: '@MY_STORAGE_KEY'
    cacheDurationMs: ONE_DAY_MS,
  });
```
