import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import litEslint from 'eslint-plugin-lit';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  litEslint.configs['flat/recommended'],
  ...tsEslint.configs.recommended,
];