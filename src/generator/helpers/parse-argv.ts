import path from 'path';

export const parseProcessArgv = (argv: string[]) => {
  const scriptPath = argv[1]?.replace('/generate-l10n', '');
  const translationsPath = argv[2];
  if (!scriptPath || !translationsPath) throw Error();

  const fromScriptToTranslationsPath = path.relative(
    scriptPath,
    translationsPath
  );

  return { scriptPath, translationsPath, fromScriptToTranslationsPath };
};
