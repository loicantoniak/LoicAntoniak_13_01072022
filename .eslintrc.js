/* eslint-env node */
module.exports = {
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "babelOptions": {
            "parserOpts": {
              "plugins": ["jsx"]
            }
          },
        "requireConfigFile": false,
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "react/no-unescaped-entities": "warn",
        "react/prop-types": "warn",
        "react/function-component-definition": ["warn", {
            "namedComponents": "function-declaration",
            "unnamedComponents": "function-expression",
          }],
        "react/forbid-prop-types": "warn",
        "react/require-default-props": "warn",
        "react/no-unused-prop-types": "warn",
        "react/destructuring-assignment": ['warn', "always"],
    }
};
