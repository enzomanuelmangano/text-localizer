---
sidebar_position: 4
---

# Usage

Finally, thanks to the following hooks:

- [useTranslationsState](/docs/api-reference/react/hooks/use-translations-state)
- [useTranslations](/docs/api-reference/react/hooks/use-translations)

It's possible to access the translations' state and the translations themselves respectively.

```tsx title="src/App.tsx"
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
