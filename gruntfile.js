
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            dist: {
                src: ["Scripts/user-admin.js", "Scripts/user-admin/**/*.js"],
                dest: 'Scripts/user-admin-app.js',
            },
        },
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: "/Scripts/user-admin/templates/",
                    templateName: function (sourceFile) {
                        return sourceFile.replace("Scripts/user-admin/templates/", "");
                    }
                },
                files: {
                    "Scripts/user-admin-templates.js" : "Scripts/user-admin/templates/**/*.hbs"
                }
            }
        },
        watch: {
            files: ["Scripts/user-admin/templates/**/*.hbs","Scripts/user-admin.js", "Scripts/user-admin/**/*.js"],
            tasks : ["emberTemplates", "concat"]
        }

    });

    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', 'watch')
};