module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix']
  }
}
