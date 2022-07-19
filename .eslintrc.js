module.exports = {
  root: true,

  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:markdown/recommended',
  ],
  plugins: ['prettier', 'markdown'],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
}
