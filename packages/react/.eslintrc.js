const eslint = require('../../configs/eslint');

module.exports = {
  ...eslint,
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    ...eslint.extends,
  ],
  rules: {
    'require-jsdoc': 'off',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
