---
sidebar_position: 4
---

# Translations Provider

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
