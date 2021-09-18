import { mocked } from 'ts-jest/utils';
import { parseProcessArgv } from '..';
import { ErrorTypes } from '../../../constants';

import path from 'path';
jest.mock('path');

const mockedPath = mocked(path, true);

describe('parse argv test', () => {
  test('throw an error if translations path is missing', () => {
    expect(() => {
      parseProcessArgv(['./generate-l10n']);
    }).toThrowError(ErrorTypes.TranslationsPath);
  });

  test('check if script path and translationsPath are parsed properly from argv', () => {
    mockedPath.relative.mockImplementation((from, to) => from + to);

    const initialPath = 'src/initial-path';
    const destinationPath = 'src/test-destination-path';

    const { scriptPath, translationsPath, fromScriptToTranslationsPath } =
      parseProcessArgv(['/usr/local/bin/node', initialPath, destinationPath]);

    expect(scriptPath).toBe(initialPath);
    expect(translationsPath).toBe(destinationPath);
    expect(fromScriptToTranslationsPath).toBe(initialPath + destinationPath);
  });
});
