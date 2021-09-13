/* eslint-disable */

type en<Options> = import('text-localizer').TranslationsParser<
  {
    /**
     * @en Check out your favourites
     */
    favourites: 'Check out your favourites';
    /**
     * @en Check out your favourites! {{ now }}
     */
    favouritesFun: 'Check out your favourites! {{ now }}';
  },
  Options
>;

type it<Options> = import('text-localizer').TranslationsParser<
  {
    /**
     * @it Controlla subito i tuoi preferiti
     */
    favourites: 'Controlla subito i tuoi preferiti';
    /**
     * @it Controlla subito i tuoi preferiti {{ now }}
     */
    favouritesFun: 'Controlla subito i tuoi preferiti {{ now }}';
  },
  Options
>;

type us<Options> = import('text-localizer').TranslationsParser<
  {
    /**
     * @us Check out your favorites
     */
    favourites: 'Check out your favorites';
    /**
     * @us Check out your favorites! {{ now }}
     */
    favouritesFun: 'Check out your favorites! {{ now }}';
  },
  Options
>;

type AppTranslations<
  Options extends { formattedFunctions?: boolean } = {
    formattedFunctions: true;
  }
> = en<Options> | it<Options> | us<Options>;

type Languages = 'en' | 'it' | 'us';
