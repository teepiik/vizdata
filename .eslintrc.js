module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "no-console": 0,
        "react/prop-types": 0,
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            { "before": true, "after": true}
        ],
        "eqeqeq": "error",
        "no-trailing-spaces": "error"
    }
};