module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['src/**/*.js'],
        dest: 'dest/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
      },
      dest: {
        files: {
          'dest/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        //这里是覆盖JSHint默认配置的选项
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);

  grunt.registerTask('clean', function() {
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