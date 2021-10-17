---
sidebar_position: 3
---

# TranslationsProvider

The TranslationsProvider is the component that provides translations to all components in the component tree.
It must therefore be initialized by wrapping all components.

To initialize it you must first define the [translationsContext](/docs/api-reference/react/create-translations-context).

```tsx
const Providers: React.FC = ({ children }) => (
  <TranslationsProvider
    context={translationsContext}
    language="%% YOUR_INITIAL_LANGUAGE %%"
  >
    {children}
  </TranslationsProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Note: Under the hood the TranslationsProvider is just a [React Context](https://reactjs.org/docs/context.html) with some additional logic.
