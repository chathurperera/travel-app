module.exports = {
    'env': {
      'browser': true,
      'node': true,
      'es2021': true
    },
    'parser': '@babel/eslint-parser',
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      },
      'ecmaVersion': 12,
      'sourceType': 'module'
    },
    'plugins': ['react'],
    'settings': {
      'react': {
        'version': 'detect',
      },
    },
    'rules': {
      'accessor-pairs': 'error',
      'array-bracket-newline': 'error',
      'array-bracket-spacing': 'error',
      'array-callback-return': 'off',
      'array-element-newline': 'off',
      'arrow-body-style': 'off',
      'indent': ['off', 2, { 'SwitchCase': 1 }],
      'arrow-parens': [
        'error',
        'as-needed',
        {
          'requireForBlockBody': true
        }
      ],
      'arrow-spacing': [
        'error',
        {
          'after': true,
          'before': true
        }
      ],
      'block-scoped-var': 'error',
      'block-spacing': 'error',
      'brace-style': [
        'error',
        '1tbs'
      ],
      'camelcase': 'off',
      'capitalized-comments': 'off',
      'class-methods-use-this': 'off',
      'comma-dangle': 'off',
      'react/no-unescaped-entities': 'off',
      'comma-spacing': [
        'error',
        {
          'after': true,
          'before': false
        }
      ],
      'comma-style': 'error',
      'complexity': 'off',
      'computed-property-spacing': [
        'error',
        'never'
      ],
      'consistent-return': 'off',
      'consistent-this': 'error',
      'curly': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-location': 'off',
      'dot-notation': 'error',
      'eol-last': 'error',
      'eqeqeq': 'error',
      'func-call-spacing': 'error',
      'func-name-matching': 'error',
      'func-names': 'off',
      'function-call-argument-newline': 'off',
      'function-paren-newline': 'error',
      'generator-star-spacing': 'error',
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'id-denylist': 'error',
      'id-length': 'off',
      'id-match': 'error',
      'implicit-arrow-linebreak': [
        'error',
        'beside'
      ],
      'init-declarations': 'off',
      'jsx-quotes': [
        'error',
        'prefer-single'
      ],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'key-spacing': 'error',
      'keyword-spacing': [
        'error',
        {
          'after': true,
          'before': true
        }
      ],
      'line-comment-position': 'off',
      'linebreak-style': [
        'error',
        'unix'
      ],
      'lines-around-comment': 'error',
      'lines-between-class-members': 'error',
      'max-depth': 'off',
      'max-len': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'error',
      'max-params': 'off',
      'max-statements': 'off',
      'max-statements-per-line': 'error',
      'multiline-comment-style': 'off',
      'multiline-ternary': 'off',
      'new-cap': 'off',
      'new-parens': 'error',
      'newline-per-chained-call': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'off',
      'no-confusing-arrow': 'error',
      'no-console': 'off',
      'no-constructor-return': 'error',
      'no-continue': 'error',
      'no-div-regex': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty': 'off',
      'no-empty-function': 'off',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-extra-parens': 'off',
      'no-implied-eval': 'error',
      'no-inline-comments': 'off',
      'no-invalid-this': 'off',
      'no-iterator': 'error',
      'no-magic-numbers': 'off',
      'no-multiple-empty-lines': 'error',
      'no-negated-condition': 'off',
      'no-nested-ternary': 'off',
      'no-nonoctal-decimal-escape': 'error',
      'no-octal-escape': 'error',
      'no-useless-escape': 'off',
      'no-param-reassign': 'error',
      'no-plusplus': 'off',
      'no-prototype-builtins': 'off',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-extra-boolean-cast': 'off',
      'no-restricted-properties': 'error',
      'no-restricted-syntax': 'error',
      'no-return-assign': 'off',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-tabs': 'error',
      'no-template-curly-in-string': 'error',
      'no-ternary': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-warning-comments': 'off',
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': 'error',
      'object-curly-newline': 'error',
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'object-property-newline': 'off',
      'one-var': 'off',
      'one-var-declaration-per-line': 'error',
      'operator-assignment': 'error',
      'operator-linebreak': 'error',
      'padded-blocks': 'off',
      'padding-line-between-statements': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'off',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'off',
      'quote-props': 'off',
      'radix': 'off',
      'require-await': 'off',
      'require-unicode-regexp': 'off',
      'rest-spread-spacing': 'error',
      'semi': 'error',
      'semi-spacing': 'error',
      'semi-style': [
        'error',
        'last'
      ],
      'sort-keys': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'sort-vars': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': 'off',
      'space-in-parens': [
        'error',
        'never'
      ],
      'strict': 'error',
      'switch-colon-spacing': 'error',
      'symbol-description': 'error',
      'template-curly-spacing': 'error',
      'template-tag-spacing': 'error',
      'unicode-bom': [
        'error',
        'never'
      ],
      'vars-on-top': 'error',
      'wrap-iife': 'error',
      'wrap-regex': 'error',
      'yield-star-spacing': 'error',
      'yoda': [
        'error',
        'never'
      ]
    }
  };