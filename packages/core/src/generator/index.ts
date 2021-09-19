#!/usr/bin/env ts-node-script

// I used ts-node-script instead of
// the node executable in order to enable
// .ts file imports

import fs from 'fs';

import {
  getGeneratedFileStructure,
  getTranslationsFilenames,
  parseProcessArgv,
  resolveImportedObject,
} from './helpers';

const generateDeclarationsFile = async () => {
  const { scriptPath, translationsPath, fromScriptToTranslationsPath } =
    parseProcessArgv(process.argv);

  const filenames = getTranslationsFilenames(translationsPath);

  const importTranslations = filenames.map(async ({ name: lang, ext }) => {
    const fileName = ext === 'json' ? `${lang}.${ext}` : `${lang}`;
    const translations = await import(
      `${scriptPath}/${fromScriptToTranslationsPath}/${fileName}`
    );

    return { lang, data: await resolveImportedObject(translations) };
  });

  const translations = await Promise.all(importTranslations);

  const fileStructure = getGeneratedFileStructure(translations).join('\n\n');

  fs.writeFile(
    `${translationsPath}/translations.d.ts`,
    fileStructure,
    (err) => {
      if (err) throw err;
    }
  );
};

// Execute Generation
void generateDeclarationsFile();
