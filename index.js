// https://www.npmjs.com/package/@rushstack/eslint-patch
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['prettier', 'babel', 'react-hooks', 'etc'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                vars: 'all',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'enum',
                format: ['StrictPascalCase'],
            },
            {
                selector: 'enumMember',
                format: ['StrictPascalCase'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^[A-Z]',
                    match: true,
                },
            },
        ],

        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-empty-interface': [
            'warn',
            {
                allowSingleExtends: true,
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/prefer-as-const': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-imports': 'warn',

        complexity: ['warn', 35], // TODO: set to 25
        'babel/no-invalid-this': 'warn',
        'max-lines': ['warn', 800], // TODO: set to 400
        'sort-keys': 'off',
        'no-console': ['warn', { allow: ['warn', 'group', 'info', 'groupEnd'] }],
        'object-shorthand': ['warn', 'properties'],
        'one-var': 'off',
        'prefer-rest-params': 'warn',
        'array-callback-return': 'warn',
        'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
        'no-empty-pattern': 'warn',
        'no-fallthrough': 'warn',
        'no-shadow': 'warn',

        'react/jsx-no-bind': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-no-multiline-js': 'off',
        'react/prop-types': 'off',
        'react/no-children-prop': 'off',

        'react/display-name': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/jsx-key': 'warn',

        'import/no-duplicates': 'off',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'prettier/prettier': ['warn', {
            "singleQuote": true,
            "quoteProps": "consistent",
            "printWidth": 100
        }, { usePrettierrc: false }],

        'etc/no-assign-mutated-array': 'warn',
        'etc/no-implicit-any-catch': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    },
}
