---
sidebar_position: 3
---

# React Native

This section presents the project setup mode in React Native. As you might expect, many sections are shared between React Native and React.

## Setup

[The translation string setup is identical to the one used for text-localizer.](/docs/basic-tutorial/js-ts/setup)

## Context Definition

[The context definition identical to the one used for react-text-localizer.](/docs/basic-tutorial/react#context-definition)

## Usage

To be able to use react-native-text-localizer it is needed to:

- Initialise the [TranslationsProvider](/docs/api-reference/react/translations-provider) by wrapping the whole app;
- setup the [useTranslationsState](/docs/api-reference/react/hooks/use-translations-state) hook to understand the state of the translations;
- setup the [useTranslations](/docs/api-reference/react/hooks/use-translations) hook to access the translations.

Below is the code, which is mainly an adaptation of the code used for [React](/docs/basic-tutorial/react#hooks).

```tsx title="src/App.tsx"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  TranslationsProvider,
  useTranslations,
  useTranslationsState,
} from 'react-native-text-localizer';
import { translationsContext } from './l10n';

const MainScreen: React.FC = () => {
  const { welcome } = useTranslations(translationsContext);
  const { isLoading } = useTranslationsState(translationsContext);

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{welcome}</Text>
    </View>
  );
};

const App = () => {
  return (
    // If needed, you can retrieve the currentLanguage with the getCurrentLanguage() function
    <TranslationsProvider context={translationsContext} language={'en'}>
      <MainScreen />
    </TranslationsProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```
