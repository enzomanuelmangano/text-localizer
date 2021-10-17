---
sidebar_position: 3
---

# React Native

This section shows the project setup mode in React Native. As you might expect, many sections are shared between React Native and React.

:::info
Before proceeding, note that the code you'll see in this section has already been implemented in the **examples/react-native** folder of the GitHub repo. [Click here to find out more](https://github.com/enzomanuelmangano/text-localizer/tree/main/examples/react-native).
:::

## Setup

:::caution
The tutorial assumes that the React Native environment is already configured. [If it isn't, you can configure the environment by following the official documentation.](https://reactnative.dev/docs/environment-setup)
:::

Initialize a React Native Project with Typescript by launching the following command:

```shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

### Install React Text Localizer

In order to unlock TextLocalizer, run:

```shell
npm install react-text-localizer
```

If you're on iOS, make sure also to run:

```shell
cd ios && pod install
```

## Strings

Before proceeding with the usage of react-native-text-localizer, it's necessary to create the translation files.

[This section is identical for React and React Native.](/docs/basic-tutorial/react/strings)

## Context Definition

Once the translation files have been created, it's essential to create a React Context that allows access to all of them.

[This section is identical for React and React Native.](/docs/basic-tutorial/react/context-definition)

## Usage

To be able to use react-native-text-localizer it is needed to:

- Initialize the [TranslationsProvider](/docs/api-reference/react/translations-provider) by wrapping the whole app;
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
    <TranslationsProvider context={translationsContext} language={'us'}>
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
