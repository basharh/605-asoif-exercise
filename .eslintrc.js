module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: { browser: true },
  rules: {
    strict: 0,
    "import/prefer-default-export": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 1,
    "react/no-array-index-key": 1,
  }
}

