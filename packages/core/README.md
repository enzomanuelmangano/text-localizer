<h1 align="center">
📖 Text Localizer
</h1>

## Tutorial

[**Tutorial can be found here**](https://enzomanuelmangano.github.io/text-localizer/docs/basic-tutorial/js-ts/setup).

## Usage

```ts
import { TextLocalizer } from 'text-localizer';
import { fetchItTranslations } from './l10n/it';

(async () => {
  const localizer = new TextLocalizer({
    us: import('./l10n/us.json'),
    uk: import('./l10n/uk'),
    it: fetchItTranslations,
  });

  await localizer.setOptions({
    language: 'uk',
  });

  const translations = localizer.translations;

  console.log(translations.question); // "Which is your favourite cat?"

  console.log(
    localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })
  );
})();
```

## Contributing

See the [contributing guide](https://github.com/enzomanuelmangano/text-localizer/blob/main/CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
