const isObject = (object: any) => {
  return object != null && typeof object === 'object';
};

export const equals = (
  firstObj: Record<string, any>,
  secondObj: Record<string, any>
) => {
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = firstObj[key];
    const val2 = secondObj[key];
    const areObjects = isObject(val1) && isObject(val2);
    if ((areObjects && !equals(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false;
    }
  }

  return true;
};
