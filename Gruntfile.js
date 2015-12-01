module.exports = function(grunt) {

  //1. registerTask
  grunt.registerTask('test-task', function() {
    console.log('Hello World! Tasks test.');
  });
  //$grunt test-task

  //2. grunt param:ok
  grunt.registerTask('test-param', function(name) {
    console.info('Hello params ' + name);
  });
  //$grunt test-param:myParams

  //3. grunt fail
  grunt.registerTask('test-fail', function(name) {
    if (name === undefined) {
      grunt.warn('Use grunt test-fail:myparams');//Others not be executed.
      return;
    }
    grunt.log.writeln('test fail params:' + name);
  });
  //$grunt fail

  //4. grunt all
  grunt.registerTask('test-all', function() {
    for (var i in grunt) {
      console.log('[+]' + i);
    }
  });
  //$grunt all

  //5. grunt tasks
  grunt.registerTask('tasks', ['test-task', 'test-param', 'test-fail', 'test-all']);
  //$grunt tasks

  //6. grunt variable
  // grunt.initConfig({
  //   test: {
  //     speak: 'This is a grunt init config test.',
  //     answer: 'OK, got it.'
  //   }
  // });
  // grunt.initConfig({//This will be covered.
  //   test: {
  //     answer: 'OK, got it.'
  //   }
  // });
  grunt.registerTask('initconfig', function() {
    var msg = grunt.config.get('test.speak');
    console.log(msg);
    //grunt.config.get('test.answer');//config will be covered.
  });
  //$grunt initconfig

  //7. multitask
  // grunt.initConfig({
  //   multitask: {
  //     speak: 'This is a grunt init config test.',
  //     answer: 'OK, got it.'
  //   },
  //   greet: {
  //     ok: 'This is OK',
  //     oops: 'This is oops'
  //   }
  // });
  grunt.registerMultiTask('multitask', function() {
    grunt.log.writeln(this.target + ':' + this.data);
  });
  //$grunt multitask
  grunt.registerMultiTask('greet', function() {
    console.log(this.target + '=>' + this.data);
  });
  //$grunt greet

  //8. file
  grunt.registerTask('mkdir', function() {
    grunt.file.mkdir('ok/test');
  });
  //$grunt mkdir
  grunt.registerTask('deldir', function() {
    grunt.file.delete('ok/test');
  });
  //$grunt deldir

  //9. copy file
  //npm install grunt-contrib-copy --save-dev
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({
    copy: {
      json: {
        src: 'bower.json',
        dest: 'dest/'
      }
    }
  });
  //$ grunt copy:json
  //$ grunt copy

  //10. copy files
  // grunt.initConfig({
  //   copy: {
  //     html: {
  //       src: 'src/**/*.html',
  //       dest: 'dest/'
  //     },
  //     js: {
  //       src: 'src/**/*.js',
  //       dest: 'dest/'
  //     },
  //     //......
  //   }
  // });
  //$grunt copy ==> copy:html, copy:js



  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),
  //   concat: {
  //     options: {
  //       separator: ';'
  //     },
  //     dist: {
  //       src: ['src/**/*.js'],
  //       dest: 'dist/<%= pkg.name %>.js'
  //     }
  //   },
  //   uglify: {
  //     options: {
  //       banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  //     },
  //     dist: {
  //       files: {
  //         'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
  //       }
  //     }
  //   },
  //   qunit: {
  //     files: ['test/**/*.html']
  //   },
  //   jshint: {
  //     files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
  //     options: {
  //       //这里是覆盖JSHint默认配置的选项
  //       globals: {
  //         jQuery: true,
  //         console: true,
  //         module: true,
  //         document: true
  //       }
  //     }
  //   },
  //   watch: {
  //     files: ['<%= jshint.files %>'],
  //     tasks: ['jshint', 'qunit']
  //   }
  // });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('test', ['jshint', 'qunit']);

  // grunt.registerTask('concat', ['concat']);

  // grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);

};