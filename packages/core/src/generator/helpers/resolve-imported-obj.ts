export const resolveImportedObject = async (
  importedObject: Record<string, any>
) => {
  let strings;
  if (importedObject?.['default']) {
    strings = importedObject?.['default'];
  } else {
    strings = importedObject;
  }
  const translationKeys = Object.keys(strings);
  if (translationKeys.length !== 1) return strings;
  const key = translationKeys[0] as string;
  const value = strings[key];
  if (typeof value !== 'function') return strings;

  return await value();
};
