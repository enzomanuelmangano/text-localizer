---
sidebar_position: 2
---

# React

This section shows the project setup mode in React. As the react-text-localizer package depends heavily on text-localizer itself, many sections are shared.

## Setup

[The translation string setup is identical to the one used for text-localizer.](/docs/basic-tutorial/js-ts/setup)

## Context Definition

Once the translation files have been set up, a [Translations Context](/docs/api-reference/react/create-translations-context) must be created.

```ts title="src/l10n/index.tsx"
import { TextLocalizer } from 'text-localizer';
import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext(
  new TextLocalizer({
    it: fetchItTranslations,
    uk: import('./l10n/uk'),
    us: import('./l10n/us.json'),
  })
);

export { translationsContext };
```

## The Provider

In order to make the strings accessible throughout the component tree, it is necessary to wrap the application's root component with the [TranslationsProvider](/docs/api-reference/react/translations-provider) in this way:

```tsx title="src/index.tsx"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationsProvider } from 'react-text-localizer';
import { translationsContext } from './l10n';

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider context={translationsContext} language="en">
      <App />
    </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Hooks

Finally, thanks to the use of hooks:

- [useTranslationsState](/docs/api-reference/react/hooks/use-translations-state)
- [useTranslations](/docs/api-reference/react/hooks/use-translations)

It is possible to access the translations' state and the translations themselves respectively.

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
          href="https://reactjs.org"
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

## Generated Types

As for the Text Localizer package, you can easily use the "Generated Types" approach by running:

```shell
yarn generate-l10n [translationsPath]
```

Once the `translations.d.ts` is fully created, you can pass the Languages and AppTranslations types to the TextLocalizer in the [Context Definition](#context-definition):

```ts title="src/l10n/index.ts"
import { TextLocalizer } from 'text-localizer';
import { createTranslationsContext } from 'react-text-localizer';
import { fetchItTranslations } from './it';

const translationsContext = createTranslationsContext(
  new TextLocalizer<Languages, AppTranslations>({
    it: fetchItTranslations,
    uk: import('./l10n/uk'),
    us: import('./l10n/us.json'),
  })
);

export { translationsContext };
```

## Storage

If your translations lives on the backend, you can pass the [Storage params](/docs/basic-tutorial/js-ts/cached-translations) in the [TranslationsProvider](/docs/api-reference/react/translations-provider):

```tsx title="src/index.tsx"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationsProvider } from 'react-text-localizer';
import { translationsContext } from './l10n';

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider
      context={translationsContext}
      language="en"
      storage={localStorage}
    >
      <App />
    </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
