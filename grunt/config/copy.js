module.exports = {
    toastr: {
        files: [{
            expand: true,
            dest: 'assets',
            flatten: true,
            src: [
                'node_modules/toastr/build/*'
            ]
        }]
    }
};
