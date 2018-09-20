module.exports = (grunt) => {
    grunt.registerTask('default', [
        'check',
        'clean',
        'copy',
        'less',
        'webpack'
    ]);
};
