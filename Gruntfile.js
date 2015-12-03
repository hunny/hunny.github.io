module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        files:[{expand: true, cwd: 'src/',src: ['**'], dest: 'dest/'}]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['dest/**/*.js'],
        dest: 'dest/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*<%= pkg.name %> builds at <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
        footer: '\n/*Author:Hunny.Hu*/'
      },
      build: {
        files: {
          'dest/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      build: {
        files: {
          'dest/css/<%= pkg.name %>.min.css': ['dest/css/index.css']
        }
      }
    },
    clean: {
      build: {
        src: ["dest/img", "dest/resource", "dest/tpl", "dest/view"]
      },
      js: {
        src: ["dest/js/*.js", "dest/js/*.md", "!dest/js/*.min.js"]
      },
      css: {
        src: ["dest/css/*.css", "dest/css/*.md", "!dest/css/*.min.css"]
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      options: {
        globals: {
          jQuery: true,
          angular: true,
          console: true,
          module: true,
          document: true
        }
      },
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['copy', 'jshint', 'concat', 'uglify', 'cssmin', 'clean']);

  grunt.registerTask('default', function() {
    grunt.warn('There is no tasks to be defineded.\n');
  });

  grunt.registerTask('manual-clean', function() {
    var exists = grunt.file.exists('dest');
    if (exists) {
      grunt.file.delete('dest');
    }
    grunt.file.mkdir('dest');
    grunt.file.copy('README.md', 'dest/README.md');
  });

  grunt.registerTask('grunt-tempalte', function() {
    console.log(grunt.template.today('yyyy-mm-dd HH:MM:ss'));
    for (var i in grunt.template) {
      console.log(i);
    }
  });

};