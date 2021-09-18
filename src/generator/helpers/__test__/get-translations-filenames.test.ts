import {
  acceptedExtensions,
  getTranslationsFilenames,
  isTranslationsFilename,
} from '../get-translations-filenames';
import { mocked } from 'ts-jest/utils';
import fs from 'fs';

jest.mock('fs');
const mockedFs = mocked(fs, true);

describe('get translations filenames', () => {
  test("check if it's a valid filename", () => {
    for (const ext of acceptedExtensions) {
      expect(isTranslationsFilename(`file.${ext}`)).toBe(true);
    }
    expect(isTranslationsFilename('file.d.ts')).toBe(false);
  });

  test('check if the translations filenames are parsed correctly', () => {
    mockedFs.readdirSync.mockReturnValue([
      'first_file.ts',
      'second_file.js',
      'ignore_this_file.d.ts',
    ] as any);
    // readdirSync has been mocked so the translationsPath doesn't matter
    const translationsPath = 'translationsPath';
    expect(getTranslationsFilenames(translationsPath)).toStrictEqual([
      { name: 'first_file', ext: 'ts' },
      { name: 'second_file', ext: 'js' },
    ]);
  });
});
