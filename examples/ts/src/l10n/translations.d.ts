/* eslint-disable */

type en = import('text-localizer').TranslationsParser<{
  /**
   * @en Check out your favourites
   */
  favourites: 'Check out your favourites';
  /**
   * @en Check out your favorites! {{ now }}
   */
  favouritesFun: 'Check out your favorites! {{ now }}';
}>;

type it = import('text-localizer').TranslationsParser<{
  /**
   * @it Controlla subito i tuoi preferiti
   */
  favourites: 'Controlla subito i tuoi preferiti';
  /**
   * @it Controlla subito i tuoi preferiti {{ now }}
   */
  favouritesFun: 'Controlla subito i tuoi preferiti {{ now }}';
}>;

type us = import('text-localizer').TranslationsParser<{
  /**
   * @us bla
   */
  someStuffs: 'bla';
}>;

type AppTranslations = en | it;

type Languages = 'en' | 'it';
