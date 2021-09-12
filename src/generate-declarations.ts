#!/usr/bin/env ts-node-script

// I used ts-node-script instead of
// the node executable in order to enable
// .ts file imports

import fs from 'fs';
import path from 'path';

const formatTranslationsWithDocs = ({
  language,
  translations,
}: {
  language: string;
  translations: Record<string, any>;
}) => {
  const translationKeys = Object.keys(translations);

  return `{\n${translationKeys.reduce(
    (stringifiedTranslations, key) =>
      `${stringifiedTranslations}\n/**\n* @${language} ${translations[key]}\n*/\n${key}: '${translations[key]}';`,
    ''
  )}\n}`;
};

const resolveTranslation = async (translations: Record<string, any>) => {
  let strings;
  if (translations?.['default']) {
    strings = translations?.['default'];
  } else {
    strings = translations;
  }
  const translationKeys = Object.keys(strings);
  if (translationKeys.length !== 1) return strings;
  const key = translationKeys[0] as string;
  const value = strings[key];
  if (typeof value !== 'function') return strings;

  return await value();
};

(async () => {
  const scriptFolder = process.argv[1]?.replace('/gen-l10n', '');
  const stringsDestination = process.argv[2];
  if (!stringsDestination || !scriptFolder) throw Error();

  const PATH = path.relative(scriptFolder, stringsDestination);

  const strings = fs
    .readdirSync(stringsDestination)
    .filter(
      (fileName) =>
        (fileName.includes('.ts') ||
          fileName.includes('.js') ||
          fileName.includes('.json')) &&
        !fileName.includes('.d.ts')
    )
    .map((strings) => {
      const [lang, ext] = strings.split('.');
      // TODO: error definition
      if (!lang || !ext) throw Error();
      return { lang, ext };
    });

  const importTranslations = strings.map(async ({ lang, ext }) => {
    const fileName = ext === 'json' ? `${lang}.${ext}` : `${lang}`;
    const translations = await import(`${scriptFolder}/${PATH}/${fileName}`);

    return { lang, data: await resolveTranslation(translations) };
  });

  const translations = await Promise.all(importTranslations);

  const COMMENTS = ['/* eslint-disable */'];

  const typedTranslations = translations.map(
    ({ lang, data }) =>
      `type ${lang} = import('text-localizer').TranslationsParser<${formatTranslationsWithDocs(
        { language: lang, translations: data }
      )}>;`
  );

  const languages = strings.map(({ lang }) => lang);

  const AppTranslations = `type AppTranslations = ${languages.join(' | ')}`;
  const Languages = `type Languages = ${languages
    .map((lang) => `'${lang}'`)
    .join(' | ')}`;

  const fileStructure = [
    ...COMMENTS,
    ...typedTranslations,
    AppTranslations,
    Languages,
  ].join('\n\n');

  fs.writeFile(
    `${stringsDestination}/translations.d.ts`,
    fileStructure,
    (err) => {
      if (err) throw err;
    }
  );
})();
