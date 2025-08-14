import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            // 'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ]
        }
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
          ignoreMemberSort: false
        }
      ],
      'no-implicit-coercion': 'error',
      'prefer-template': 'error',
      'no-multi-spaces': 'error',
      'no-useless-catch': 'error',
      'no-duplicate-imports': 'error',
      'no-unreachable-loop': 'error',
      'no-promise-executor-return': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-await-in-loop': 'error'
    }
  }
];

export default eslintConfig;
