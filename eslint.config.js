import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
    { ignores: ['dist', 'scripts'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '19.2' } },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...react.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-no-target-blank': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
        },
    },
];
