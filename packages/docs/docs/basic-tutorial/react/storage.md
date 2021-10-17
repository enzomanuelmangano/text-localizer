---
sidebar_position: 5
---

# Storage

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
      language="uk"
      storage={localStorage}
    >
      <App />
    </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```