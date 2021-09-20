const eslint = require('../../configs/eslint');

module.exports = {
  ...eslint,
  extends: ['google', ...eslint.extends],
  rules: {
    'require-jsdoc': 'off',
  },
};
