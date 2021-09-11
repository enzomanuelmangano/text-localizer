#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

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

  const strings = fs.readdirSync(stringsDestination).map((strings) => {
    console.log(strings);
    const [lang, ext] = strings.split('.');
    return { lang, ext };
  });

  const importStuffs = strings.map(async ({ lang, ext }) => {
    const fileName = ext === 'json' ? `${lang}.${ext}` : `${lang}`;
    // TODO:
    const translations = await import(
      `${scriptFolder}/${PATH.replace('src', 'lib')}/${fileName}`
    );
    return { lang, data: await resolveTranslation(translations) };
  });

  const stuffs = await Promise.all(importStuffs);
  console.log(stuffs);

  const COMMENTS = ['/* eslint-disable */'];

  const translations = stuffs.map(
    ({ lang, data }) =>
      `type ${lang} = import('text-localizer').TranslationsParser<${JSON.stringify(
        data
      )}>`
  );

  const languages = strings.map(({ lang }) => lang);

  const AppTranslations = `type AppTranslations = ${languages.join(' | ')}`;
  const Languages = `type Languages = ${languages
    .map((lang) => `'${lang}'`)
    .join(' | ')}`;

  const fileStructure = [
    ...COMMENTS,
    ...translations,
    AppTranslations,
    Languages,
  ].join('\n\n');

  fs.writeFile('src/l10n/translations.d.ts', fileStructure, (err) => {
    if (err) throw err;
  });
})();
