---
sidebar_position: 1
---

# getPlatformLanguage

getPlatformLanguage is a method for knowing the current language set by the user on the device.
The output conforms to the [**ISO 639-1**](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard.

```ts
getPlatformLanguage().then((languageCode) => {
  console.log(languageCode); // en | us | fr | de ...
});
```
