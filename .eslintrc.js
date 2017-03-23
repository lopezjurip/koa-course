module.exports = {
  "parserOptions": {
    "ecmaVersion": 2017,
  },
  "env": {
    "node": true,
  },
  "extends": [
    "prettier",
  ],
  "plugins": [
    "prettier",
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "trailingComma": "es5",
    }]
  }
};
