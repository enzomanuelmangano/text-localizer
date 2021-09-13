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

  const TypedTranslations = translations.map(
    ({ lang, data }) =>
      `type ${lang}<Options> = import('text-localizer').TranslationsParser<${formatTranslationsWithDocs(
        { language: lang, translations: data }
      )}, Options>;`
  );

  const AppTranslations = `type AppTranslations<
  Options extends { formattedFunctions?: boolean } = {
    formattedFunctions: true;
  }> = ${languages.map((language) => `${language}<Options>`).join(' | ')}`;

  const Languages = `type Languages = ${languages
    .map((lang) => `'${lang}'`)
    .join(' | ')}`;

  return [...Comments, ...TypedTranslations, AppTranslations, Languages];
};
