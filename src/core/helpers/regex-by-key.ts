// This function will create a regex in order to extract
// this pattern from a string `{{ ${key} }}`
export const regexByKey = (key: string) =>
  new RegExp(`\\{\{([ ]+)?${key}([ ]+)?\}\}`, 'g');
