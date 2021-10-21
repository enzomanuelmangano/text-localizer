import { readdirSync } from 'fs';
import { ErrorTypes } from '../../constants';

type TranslationsFileName = {
  name: string;
  ext: 'ts' | 'js' | 'json';
};

type GetTranslationsFilenamesResult = TranslationsFileName[];

export const acceptedExtensions: TranslationsFileName['ext'][] = [
  'ts',
  'js',
  'json',
];

export const isTranslationsFilename = (filename: string): boolean => {
  const [name, fileExt] = filename.split('.');
  if (name === 'index') return false;

  return acceptedExtensions
    .map(
      (ext) =>
        // check valid extension
        filename.includes(ext) && fileExt === ext
    )
    .includes(true);
};

export const getTranslationsFilenames = (
  translationsPath: string
): GetTranslationsFilenamesResult => {
  const filenames = readdirSync(translationsPath).filter(
    isTranslationsFilename
  );

  return filenames.map((filename) => {
    const [name, ext] = filename.split('.') as [
      name: string,
      ext: TranslationsFileName['ext']
    ];
    if (!name || !ext) throw Error(ErrorTypes.UnsupportedFileExtensions);
    return { name, ext };
  });
};
