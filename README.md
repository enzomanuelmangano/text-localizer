<h1 align="center">
📖 Text Localizer
</h1>

_A lightweight, fast and flexible way to handle localized strings._

[**Documentation can be found here.**](https://enzomanuelmangano.github.io/text-localizer/)

## Motivation

Text Localizer is a package born out of the need to manage translations in a typesafe manner. Currently, the best-known solutions in javascript for managing translations are based on a key-value approach (i18n.js, i18next).

This approach involves this way of accessing the individual translation.

```ts
console.log(translationsObject.get('translations_key'));
```

The main problems with this approach are that:

- _There is no effective compile-time support to catch errors if the key is wrong;_
- _There is no way of knowing whether the key being accessed is set for all languages;_
- _There is no warning if you try to access an unsupported locale;_
- _The refactoring of translation keys can easily lead to problems that cannot be intercepted at compile-time._

Consequently, the goal of TextLocalizer is to provide a lightweight, fast, and flexible way to access translation strings in a type-safe manner in the JavaScript world.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
