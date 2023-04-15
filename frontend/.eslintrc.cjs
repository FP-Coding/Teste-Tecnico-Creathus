module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    document: 'readonly',
    HTMLElement: 'readonly',
    HTMLInputElement: 'readonly',
    HTMLTextAreaElement: 'readonly',
    FileReader: 'readonly',
    window: 'readonly',
  },
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'no-alert': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
