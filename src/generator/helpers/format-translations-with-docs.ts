type FormatTranslationsWithDocsParams = {
  language: string;
  translations: Record<string, any>;
};

export const formatTranslationsWithDocs = ({
  language,
  translations,
}: FormatTranslationsWithDocsParams): string => {
  const translationKeys = Object.keys(translations);

  return `{\n${translationKeys.reduce((stringifiedTranslations, key) => {
    const base = stringifiedTranslations;

    const value = translations[key];

    // prettier-ignore
    const docs = typeof value === 'string' ? 
      ['/**', 
        `* @${language} ${value}`,
        '*/'] : [];

    const assignment =
      typeof value === 'string'
        ? `${key}: "${value}";`
        : `${key}: ${formatTranslationsWithDocs({
            language,
            translations: value,
          })};`;

    return [base, ...docs, assignment].join('\n');
  }, '')}\n}`;
};
