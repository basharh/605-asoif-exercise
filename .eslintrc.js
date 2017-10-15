module.exports = {
  extends: "airbnb",
  env: {
    browser: true
  },
  rules: {
    "import/prefer-default-export": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 1,
  }
}

