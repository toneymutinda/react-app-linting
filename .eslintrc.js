'use strict'

module.exports = {
  // environment defines predefined global variables you’re using. For example, Jest allows you to use global variables in your test files such as describe, it or test. However, ESLint won’t know what these variables refer to if you haven’t explicitely told it. For that, set jest to true.
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint",
  // Allows you to extend your configuration file from others configurations
  "extends": [
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
  ],
  "globals": {
   "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  // how do you parse your code and also inform if you use es modules
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  // plugins are a set of ESLint rules related to a same subject
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
  ],
  "rules": {
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn'
  },
  "settings": {
    "react": {
        "version": "detect"
    }
  }
}
