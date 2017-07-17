module.exports = {
    options: {
        fix: true,
        useEslintrc: false
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
            '!lib/**/*.test.js'
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
            'lib/**/*.test.js'
        ]
    }
};
