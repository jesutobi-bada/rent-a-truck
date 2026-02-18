/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Not needed with React JSX transform
    'react/react-in-jsx-scope': 'off',

    // Enforce named exports over default exports
    'import/no-anonymous-default-export': 'error',

    // Prevent unused variables
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // No 'any' type
    '@typescript-eslint/no-explicit-any': 'error',

    // Enforce exhaustive deps in hooks
    'react-hooks/exhaustive-deps': 'error',

    // Enforce import order: external -> @rent-a-truck -> local
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@rent-a-truck/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // Anti-Gravity: Apps cannot import from other apps
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '@rent-a-truck/renter-pwa/*',
              '@rent-a-truck/driver-pwa/*',
              '@rent-a-truck/admin-dashboard/*',
            ],
            message: 'Apps cannot import from other apps. Use shared packages instead.',
          },
          {
            group: ['@rent-a-truck/*/src/*'],
            message: 'Import from the package public API (index), not internal src paths.',
          },
        ],
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/', '.turbo/'],
};
