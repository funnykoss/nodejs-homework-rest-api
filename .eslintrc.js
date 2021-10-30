module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "comma-dangle": "off",
    "space-before-function-paren": "off",
    "no-console": "off",
    quotes: [1, "single", { avoidEscape: true }],
  },
};
