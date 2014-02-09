/*
 * grunt-help
 * https://github.com/bahmutov/grunt-help
 *
 * Copyright (c) 2014 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

if (process.argv[2] === '--help' || process.argv[2] === '-h') {
  console.log('grunt-help');
  console.log('  runs your program with --help (or given parameters) to generate help doc');
  process.exit(0);
}

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    help: {
      all: {
        options: {
        }
      }
    },
    readme: {
      options: {
        readme: './docs/README.tmpl.md',
        docs: '.',
        templates: './docs'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  // load other grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jshint-solid');
  grunt.loadNpmTasks('grunt-readme');

  grunt.registerTask('default', ['jshint', 'jshint-solid', 'help', 'readme']);
};
