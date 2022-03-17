module.exports = {
    plugins: ['htg'],
    rules: {
        'htg/no-deep-module-imports': 'error',
        'htg/no-global-internal-imports': 'error',
        'htg/no-relative-outside-imports': 'error',
        'htg/no-own-index-imports': 'error',
        'htg/enforce-hierarchy': [
            'error',
            {
                '@v2/apps/*/pages': [
                    '@v2/apps/*/pages',
                    '@v2/apps/*/features',
                    '@v2/apps/*/models',
                    '@v2/apps/*/commons',
                    '@v2/features',
                    '@v2/models',
                    '@v2/commons',
                    '@v2/libs',
                ],
                '@v2/apps/*/features': [
                    '@v2/apps/*/features',
                    '@v2/apps/*/models',
                    '@v2/apps/*/commons',
                    '@v2/features',
                    '@v2/models',
                    '@v2/commons',
                    '@v2/libs',
                ],
                '@v2/apps/*/models': [
                    '@v2/apps/*/models',
                    '@v2/apps/*/commons',
                    '@v2/models',
                    '@v2/commons',
                    '@v2/libs',
                ],
                '@v2/apps/*/commons': ['@v2/apps/*/commons', '@v2/commons', '@v2/libs'],
                '@v2/features': ['@v2/features', '@v2/models', '@v2/commons', '@v2/libs'],
                '@v2/models': ['@v2/models', '@v2/commons', '@v2/libs'],
                '@v2/commons': ['@v2/commons', '@v2/libs'],
                '@v2/libs': ['@v2/libs'],
            },
        ],
    },
    settings: {
        htg: {
            path: {
                '@v2/': 'src/',
            },
            modules: [
                '@v2/apps/*/pages',
                '@v2/apps/*/features',
                '@v2/apps/*/models',
                '@v2/apps/*/commons',
                '@v2/features',
                '@v2/models',
                '@v2/commons',
                '@v2/libs',
            ],
        },
    },
};
