import { resolveImportedObject } from '..';

const translations = { check: 'data', nestedData: { check: 'data' } };

describe('resolve the imported translations', () => {
  test('check if it resolves the "object" translations', () => {
    const importedFile = { default: translations, ...translations };

    return expect(resolveImportedObject(importedFile)).resolves.toStrictEqual(
      translations
    );
  });

  test(`
    given an exported function, 
    when the declarations generation is runned,
    then the function must be executed and the translations must be fetched.
    `, () => {
    const fetchTranslationsFromServer = () => translations;
    const importedFile = {
      fetchTranslationsFromServer,
    };

    return expect(resolveImportedObject(importedFile)).resolves.toStrictEqual(
      translations
    );
  });
});
