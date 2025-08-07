import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      'react-refresh/only-export-components': 'off',

      'no-empty-pattern': 'off',

      '@typescript-eslint/no-unused-vars': ['warn', {
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_',
        'caughtErrors': 'none',
        'destructuredArrayIgnorePattern': '^_',
        'ignoreRestSiblings': true,
      }],
      '@typescript-eslint/no-empty-object-type': 'off',

      '@stylistic/indent': ['error', 2, {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
      }],
      '@stylistic/semi': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
        'enums': 'always-multiline',
        'generics': 'never',
        'tuples': 'always-multiline',
      }],
    },
  },
  ...pluginQuery.configs['flat/recommended'],
])
