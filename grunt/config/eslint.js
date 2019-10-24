module.exports = {
    options: {
        fix: true,
        useEslintrc: false,
        parserOptions: {
            ecmaVersion: 8
        }
    },
    node: {
        options: {
            baseConfig: {
                root: true,
                extends: '@quoin/eslint-config-quoin'
            },
            rules: {
                'no-console': 'warn'
            }
        },
        src: [
            '*.js',
            '!*.test.js',
            'grunt/**/*.js',
            'lib/**/*.js',
            '!lib/**/*.test.js',
            '!lib/react-utils/**/*.js',
            'server/**/*.js',
            '!server/**/*.test.js'
        ]
    },
    test: {
        options: {
            baseConfig: {
                root: true,
                extends: '@quoin/eslint-config-quoin/node-test'
            }
        },
        src: [
            '*.test.js',
            'handlebars/**/*.test.js',
            'lib/**/*.test.js'
        ]
    },
    client: {
        options: {
            parserOptions: {
                ecmaFeatures: {
                    experimentalObjectRestSpread: true,
                    jsx: true
                }
            },
            baseConfig: {
                root: true,
                extends: [
                    '@quoin/eslint-config-quoin/client',
                    'eslint:recommended',
                    'plugin:react/recommended'
                ],
                plugins: [
                    "react"
                ],
                settings: {
                    react: {
                        version: "detect"
                    }
                }
            },
            envs: [
                'jquery',
                'node'
            ],
            globals: [
                'React'
            ],
            rules: {
                'no-console': 'warn'
            }
        },
        src: [
            'client/**/*.jsx',
            'client/**/*.js',
            '!client/**/*.test.js'
        ]
    }
};
