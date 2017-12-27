module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix']
  }
}
