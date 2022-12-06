module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "prettier/prettier": "error",
    eqeqeq: ["error", "always"],
    "no-await-in-loop": "error",
    "require-atomic-updates": "error",
    "no-template-curly-in-string": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "no-else-return": "error",
    "vars-on-top": ["error"],
    "block-spacing": ["error", "always"],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "max-len": ["error", { code: 120 }],
  },
};
