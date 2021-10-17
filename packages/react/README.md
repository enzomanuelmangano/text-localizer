<h1 align="center">
📖 React Text Localizer
</h1>

## Tutorial

[**Tutorial can be found here**](https://enzomanuelmangano.github.io/text-localizer/docs/basic-tutorial/react/setup).

## Usage

```tsx
import { useTranslations, useTranslationsState } from 'react-text-localizer';
import './App.css';
import { translationsContext } from './l10n';

function App() {
  const { welcome } = useTranslations(translationsContext);
  const { isLoading } = useTranslationsState(translationsContext);

  if (isLoading) return null;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://enzomanuelmangano.github.io/text-localizer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {welcome}
        </a>
      </header>
    </div>
  );
}

export default App;
```

## Contributing

See the [contributing guide](https://github.com/enzomanuelmangano/text-localizer/blob/main/CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
