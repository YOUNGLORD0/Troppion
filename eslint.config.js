// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Abaikan output/artefak
  globalIgnores(['dist', 'node_modules', 'coverage']),

  // ---- Frontend (browser) ----
  {
    files: ['src/**/*.{js,jsx}'],
    ignores: [],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,          // window, document, etc.
        // Vite-specific
        __DEV__: 'readonly',
        importMeta: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
    },
    extends: [
      js.configs.recommended,
      react.configs.recommended,            // aturan React dasar
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,            // cegah state loss saat HMR
      jsxA11y.flatConfigs.recommended,      // aksesibilitas
      importPlugin.flatConfigs.recommended, // urusan import
    ],
    rules: {
      // gaya & kebersihan
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/order': ['warn', {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
      }],

      // React spesifik
      'react/react-in-jsx-scope': 'off', // Vite + React 17+
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // Hooks (sudah dari preset, tambahkan jika ingin ketat)
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // ---- Backend (node) ----
  {
    files: ['server/**/*.{js,jsx}', 'index.js', 'server.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: { import: importPlugin },
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    rules: {
      'no-console': 'off', // backend boleh console
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: ['**/eslint.config.js', '**/vite.config.*', '**/*.config.*'],
      }],
    },
  },

  // ---- Test (opsional; hapus jika tidak pakai) ----
  {
    files: ['**/*.{test,spec}.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        // tambahkan jest/vitest sesuai kebutuhan
        jest: true,
      },
    },
    rules: { 'no-unused-expressions': 'off' },
  },
])
