module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["prettier"],
  rules: {
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    camelcase: [
      "error",
      {
        properties: "never",
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
  },
};
