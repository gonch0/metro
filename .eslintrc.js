module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        JSX: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    rules: {
        indent: 'off',
        'react/jsx-indent': [
            'error',
            4,
        ],
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.tsx'] },
        ],
        'react/jsx-pascal-case': 'off',
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
        'react/jsx-props-no-spreading': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-throw-literal': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'consistent-return': 'off',
        'array-callback-return': 'off',
        'no-underscore-dangle': 'off',
        'dot-notation': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        radix: 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-throw-literal': 'off',
        'max-len': [
            1,
            120,
            2,
            {
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'import/no-duplicates': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                ],
            },
        },
    },
};
