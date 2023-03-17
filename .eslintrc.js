module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next"
  ],
  plugins: ["@typescript-eslint", "import", "react", "react-hooks"],
  parserOptions: {
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    indent: [2, 4],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    eqeqeq: ["error", "always"],
    "no-mixed-spaces-and-tabs": "error",
    "jsx-quotes": "error",
    "max-nested-callbacks": ["error", 3],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-else-return": "error",
    "no-useless-return": "error",
    "no-nested-ternary": "error",
    "no-return-await": "error",
    "no-var": "error",
    "prefer-const": "error",
    yoda: "error",
    "block-spacing": "error",
    "brace-style": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "key-spacing": ["error", { mode: "strict" }],
    "keyword-spacing": "error",
    "max-len": ["error", 140],
    "linebreak-style": ["error", "unix"],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    semi: "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-non-null-assertion": "error",
  },
};
