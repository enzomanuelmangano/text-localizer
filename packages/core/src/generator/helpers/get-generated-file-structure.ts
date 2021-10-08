import { formatTranslationsWithDocs } from './format-translations-with-docs';

const Comments = [
  '/*\n* GENERATED CODE - DO NOT MODIFY BY HAND\n*/',
  '/* eslint-disable */',
];

export const getGeneratedFileStructure = (
  translations: {
    lang: string;
    data: Record<string, any>;
  }[]
) => {
  const languages = translations.map(({ lang }) => lang);
  const packageName = 'text-localizer';

  const TypedTranslations = translations.map(
    ({ lang, data }) =>
      `type ${lang} = import("${packageName}").TranslationsParser<${formatTranslationsWithDocs(
        { language: lang, translations: data }
      )}>;`
  );

  const AppTranslations = `type AppTranslations = ${languages.join(' | ')}`;

  const Languages = `type Languages = ${languages
    .map((lang) => `'${lang}'`)
    .join(' | ')}`;

  return [...Comments, ...TypedTranslations, AppTranslations, Languages];
};
