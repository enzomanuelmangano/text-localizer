---
sidebar_position: 4
---

# Cached Translations

To handle this use case, Text Localizer provides the possibility of specifying the following parameters in the setOptions function:

- the _storage_ to be used;
- the _storageKey_ to be used to identify the translations in the cache (default: **@TEXT_LOCALIZER_STORAGE_KEY**);
- _cacheDurationMs_ (default: **86400000**).

```ts
  await localizer.setOptions({
    language: 'en',
    storage: myStorage,
    storageKey: '@MY_STORAGE_KEY'
    cacheDurationMs: ONE_DAY_MS,
  });
```

The storage shall extend the following interface:

```ts
export interface IStorage {
  setItem(key: string, value: string): void | Promise<void>;
  getItem(key: string): null | string | Promise<string>;
}
```
