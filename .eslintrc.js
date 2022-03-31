module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/prefer-default-export': 'off',
        'arrow-body-style': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'prefer-template': 'error',
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        'import/no-unresolved': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_|[R-r]eact' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase'],
            filter: {
              regex: '^_|[R-r]eact',
              match: false,
            },
          },
        ],
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-fragments': 'off',
        'react/require-default-props': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unused-prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-key': 'error',
        'prettier/prettier': 'warn',
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true },
    },
  ],
  rules: {'react/prop-types': 0},
};
