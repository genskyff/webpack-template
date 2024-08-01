"use strict";

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      parser: "@babel/eslint-parser",
    },
    {
      files: ["*.js", "*.ts"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};
