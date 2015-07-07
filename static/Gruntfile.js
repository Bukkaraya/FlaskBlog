module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			dist: {
				src: ['_/js/*.js'],
				dest: 'js/script.js'
			}//Distrubution
		},//Concat
		uglify: {
			my_target: {
				files: {
					'js/script.js': ['js/script.js']
				}//Files
			}//Target
		},//Uglify
		sass: {
			dist:{
				options: {
					style: 'expanded'
				},
				files: {
					'css/main.css': '_/sass/main.scss'
				}

			},
		},//Sass
		watch: {
			options: { livereload: 7331 },
			scripts: {
				files: ['_/js/*.js'],
				tasks: ['concat', 'uglify']
			},//Scripts
			sass: {
				files: ['_/sass/main.scss', '_/sass/**/*.scss'],
				tasks: ['sass']
			},
		}//Watch
	})//INITConfig

	//NPM Tasks:
  	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);

}//export
