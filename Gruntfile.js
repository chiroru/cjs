'use strict';

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt){
  var packages = grunt.file.readJSON('package.json');

  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')];
          }
        }
      }
    },
    regarde: {
      html: {
        files:'*.html',
        tasks: ['livereload']
      },
      css: {
        files:'*.css',
        tasks: ['livereload']
      }
    },
    cssmin: {
      compress: {
        files: {
          './min.css': ['css/commont.css']
        }
      }
    },
    jshint: {
      files: [
//        'Gruntfile.js',
        'package.json',
        'js/*.js',
        '.jshintrc'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      files: ['css/*.css'],
      tasks: ['cssmin']
    },
    yuidoc: {
      dist: {
        'name': 'cjs',
        'description': 'this is test.',
        'version': '1.0.0.0',
        'url': 'test.com',
        options: {
          paths: 'js',
          outdir: 'docs'
        }
      }
    }
  });

//grunt.loadNpmTasks('grunt-contrib-cssmin');
//grunt.loadNpmTasks('grunt-contrib-watch');
  var t;
  for (t in packages.devDependencies) {
    if (t.substring(0, 6) === 'grunt-') {
      grunt.loadNpmTasks(t);
    }
  }
  
  grunt.registerTask('default',
    ['cssmin', 'jshint', 'yuidoc', 'livereload-start', 'connect', 'regarde']);
};
