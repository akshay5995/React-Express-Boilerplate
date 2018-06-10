module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "window": true,
    "describe": true,
    "beforeEach": true,
    "context": true,
    "it": true,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  },
  "rules": {
    "max-len": [2, 120, 2, { "ignoreUrls": true, "ignoreComments": false }],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-sort-props": 1,
    "react/sort-prop-types": 1,
    "react/require-default-props": 0,
    "arrow-body-style": 0
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
};
