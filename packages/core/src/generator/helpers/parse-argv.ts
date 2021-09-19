import path from 'path';
import { ErrorTypes } from '../../constants';

export const parseProcessArgv = (argv: string[]) => {
  const scriptPath = argv[1]?.replace('/generate-l10n', '');
  const translationsPath = argv[2]?.replace('path=', '');
  if (!scriptPath || !translationsPath) {
    throw Error(ErrorTypes.TranslationsPath);
  }

  const fromScriptToTranslationsPath = path.relative(
    scriptPath,
    translationsPath
  );

  return { scriptPath, translationsPath, fromScriptToTranslationsPath };
};
