import fs from 'fs';
import { ErrorTypes } from '../../constants';

type TranslationsFileName = {
  name: string;
  ext: 'ts' | 'js' | 'json';
};

type GetTranslationsFilenamesResult = TranslationsFileName[];

const acceptedExtensions: TranslationsFileName['ext'][] = ['ts', 'js', 'json'];

const isTranslationsFilename = (filename: string): boolean => {
  return acceptedExtensions
    .map((ext) => filename.includes(ext) && filename.split('.')?.[1] === ext)
    .includes(true);
};

export const getTranslationsFilenames = (
  translationsPath: string
): GetTranslationsFilenamesResult => {
  const filenames = fs
    .readdirSync(translationsPath)
    .filter(isTranslationsFilename);

  return filenames.map((filename) => {
    const [name, ext] = filename.split('.') as [
      name: string,
      ext: TranslationsFileName['ext']
    ];
    if (!name || !ext) throw Error(ErrorTypes.UnsupportedFileExtensions);
    return { name, ext };
  });
};
