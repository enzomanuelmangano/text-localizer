/* eslint-disable */

type en = import('text-localizer').TranslationsParser<{"favourites":"Check out your favourites","favouritesFun":"Check out your favorites! {{ now }}"}>

type it = import('text-localizer').TranslationsParser<{"favourites":"Controlla subito i tuoi preferiti","favouritesFun":"Controlla subito i tuoi preferiti {{ now }}"}>

type us = import('text-localizer').TranslationsParser<{"favourites":"Controlla subito i tuoi preferiti","favouritesFun":"Controlla subito i tuoi preferiti {{ now }}"}>

type AppTranslations = en | it | us

type Languages = 'en' | 'it' | 'us'