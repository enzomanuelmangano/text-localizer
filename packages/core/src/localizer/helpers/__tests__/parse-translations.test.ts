import { parseTranslations } from '../parse-translations';

describe('Test parse Translations', () => {
  const nestedData = {
    check: 'test',
    nested: { checkNested: 'nestedTest' },
  };

  test('as a plain object', () => {
    const data = { check: 'test' };
    const translations = parseTranslations(data);

    return expect(translations).resolves.toBe(data);
  });

  test('as a nested object', () => {
    const translations = parseTranslations(nestedData);
    return expect(translations).resolves.toBe(nestedData);
  });

  test('as an async function', async () => {
    const data = async () => nestedData;

    const translations = parseTranslations(data);
    return expect(translations).resolves.toStrictEqual(await data());
  });

  test('as an imported file (with default param)', async () => {
    const data = {
      ...nestedData,
      default: nestedData,
    };

    const translations = parseTranslations(data);
    return expect(translations).resolves.toStrictEqual(data['default']);
  });
});
