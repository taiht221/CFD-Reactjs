// Gruntfile.js
module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
    		dest: 'dest',
            css:  "css",
            scss: "scss",
            js: "js"
        },
        cssmin: {
			options:{
				keepSpecialComments: 0
			},
			my_target: {
				files: [{
					'<%= dirs.dest %>/stylelibs.min.css' : ['<%= dirs.css %>/**/*.css']
				}]
			}
        },
        sass: {
		    dist: {
		    	options: {                       
		        	style: 'compressed',
		        	sourcemap: false,
		        	lineNumbers: true
		      	},
			    files: {
			       	'<%= dirs.dest %>/style.min.css': '<%= dirs.scss %>/style.scss'
			    }
		    }
        },
        // minify / uglify js
		uglify: {
		    my_target: {
		      	files: {
					// global
					'<%= dirs.dest %>/jsmain.min.js': ['<%= dirs.js %>/libs/*.js'],
					// my js
					'<%= dirs.dest %>/main.min.js': ['<%= dirs.js %>/*.js'],

		      	}
		    }
		},
        watch: {
			options: {
			    livereload: true,
			    spawn: false
			},
	      	sass: {
		        files: "<%= dirs.scss %>/**/**/*.scss",
		        tasks: ['sass']
		    },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    	'<%= dirs.dest %>/style.min.css',
	                    '*.html',
	                    '<%= dirs.css %>/*.css',
	                    '<%= dirs.js %>/*.js',
                    ]
                },
                options: {
                    watchTask: true,
                	server:'./'
                },
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync','watch']);
    // grunt.registerTask('copylib', ['cssmin:my_target']);
};