module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // looks in package.json for "devDependencies"

    grunt.initConfig({

        watch: {
            sass: {
                files: 'assets/css/sass/**/*.scss',
                tasks: 'sass:dist'
            }
        },

        sass: {
            dist : {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/compiled/style.css': 'assets/css/sass/style.scss'
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'assets/js/src/settings.js',
                    'assets/js/src/functions.js',
                    'assets/js/src/model.js',
                    'assets/js/src/views.js',
                    'assets/js/src/router.js'
                ],
                dest: 'assets/js/dist/global.js',
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'assets/js/dist/babel.js': 'assets/js/dist/global.js'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                // enable dynamic expansion
                    cwd: 'assets/img/',          // src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // actual patterns to match
                    dest: 'assets/img/dist/'     // destination path prefix
                }]
            }
        }

    });

    grunt.registerTask('default', 'watch');
    grunt.registerTask('dist',    ['sass:dist', 'concat:dist', 'babel', 'imagemin']);

};