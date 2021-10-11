import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  TranslationsProvider,
  useTranslations,
  useTranslationsState,
  usePlatformLanguage,
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
  const platformLanguage = usePlatformLanguage();

  if (platformLanguage == null) {
    return null;
  }

  return (
    <TranslationsProvider
      context={translationsContext}
      language={platformLanguage as 'it' | 'en' | 'us'}
    >
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
