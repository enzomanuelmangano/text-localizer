---
sidebar_position: 2
---

# useTranslationsState

useTranslationsState is a hook that takes the [translationsContext](/docs/api-reference/react/create-translations-context) as input and allows access to the TranslationsContext State.

```tsx
function App() {
  const { isLoading } = useTranslationsState(translationsContext);

  if (isLoading) return null;

  return (
    <div className="App">
        {...}
    </div>
  );
}
```

Here is all the information you can access with this hook:

- _isLoading_: indicates whether the translation strings are loading;
- _error_: indicates whether an error has occurred and what type of error;
- _languages_: indicates which languages are supported;
- _currentLanguage_: indicates the language currently set.
