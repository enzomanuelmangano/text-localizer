/* eslint-disable no-unused-vars */
type en = import('../../lib').TranslationsParser<{
  favourites: 'Check out your favourites';
  favouritesFun: 'Check out your favorites! {{ now }}';
}>;

type it = import('../../lib').TranslationsParser<{
  favourites: 'Controlla subito i tuoi preferiti';
  favouritesFun: 'Controlla subito i tuoi preferiti {{ now }}';
}>;

type AppTranslations = en | it;

type Languages = 'it' | 'en';
