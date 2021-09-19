import { regexByKey } from '..';

test('Extract Key from formatted string', () => {
  const regexp = regexByKey('here');

  expect('test this string right {{ here }}'.match(regexp)).toStrictEqual([
    '{{ here }}',
  ]);
});
