module.exports = {
  "env": {
    "amd": true,
    "node": true,
    "jest/globals": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["jest"],
  "rules": {
  }
};
