/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { multiply } from 'react-native-text-localizer';
import {
  TranslationsProvider,
  useTranslations,
  useTranslationsState,
} from './l10n';

const App = () => {
  multiply(1, 30).then((result) => {
    console.log({ result });
  });

  return (
    <TranslationsProvider language={'it'}>
      <MainScreen />
    </TranslationsProvider>
  );
};

const MainScreen: React.FC = () => {
  const { favourites } = useTranslations();
  const { isLoading } = useTranslationsState();

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{favourites}</Text>
    </View>
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
