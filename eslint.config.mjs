// @ts-check
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config({
  ignores: ['eslint.config.mjs'],
}, 
{
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.jest,
    },
    ecmaVersion: 5,
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'prettier/prettier': 'off',
  },
});
