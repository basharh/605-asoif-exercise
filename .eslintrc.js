module.exports = {
  extends: [
    "airbnb",
    "prettier"
  ],
  parser: "babel-eslint",
  plugins: [
    "prettier"
  ],
  env: { browser: true },
  rules: {
    strict: 0,
    "max-len": ["error", 100],
    "import/prefer-default-export": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 1,
    "react/no-array-index-key": 1,
    "prettier/prettier": "error",
  }
}

