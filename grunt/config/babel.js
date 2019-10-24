module.exports = {
    options: {
        sourceMap: false,
        presets: [ 'env', 'react' ]
    },
    ssr: {
        files: [
            {
                expand: true,
                cwd: 'client',
                src: [ 'react-utils/*.jsx', 'react-utils/*.js' ],
                dest: 'lib',
                ext: '.js'
            }
        ]
    }
};
