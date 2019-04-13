module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      'components': ['Link'],
      'specialLink': ['to'],
      'aspects': ['noHref', 'invalidHref', 'preferButton']
    }],
    'max-len': [1, 130, 2],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/forbid-prop-types': [2, { 'forbid': ['any'] }],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
    'semi': [2, 'never'],
  },
};
