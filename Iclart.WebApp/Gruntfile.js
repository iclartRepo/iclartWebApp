module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['wwwroot/src/**/*.component.js', 'wwwroot/src/**/*.service.js'],
                tasks: ['default']
            }
        },
        clean: [
            'wwwroot/src/scripts/components.js',
            'wwwroot/src/scripts/services.js'
        ],
        uglify: {
          
            all_src: {
                src: 'wwwroot/src/**/*.component.js',
                dest: 'wwwroot/src/scripts/components.js'
            },
            all_services_src: {
                src: 'wwwroot/src/**/*.service.js',
                dest:'wwwroot/src/scripts/services.js'
            }
        }
    });

 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean','uglify']);
}