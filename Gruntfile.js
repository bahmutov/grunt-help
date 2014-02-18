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
  console.log('    runs your program with --help (or given parameters) to generate help doc');
  console.log('');
  console.log('\tnpm install grunt-help --save-dev');
  console.log('\tgrunt.initConfig({');
  console.log('\thelp: {\n' +
    '\t\toptions: {\n' +
    '\t\t\tdestination: "docs/help.md"\n' +
    '\t\t},\n' +
    '\t\tall: {}\n' +
    '\t}');
  console.log('\tgrunt help // saved output of `node index.js --help into docs/help.md');
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
      options: {
        destination: 'docs/help.md'
      },
      all: {}
    },

    readme: {
      options: {
        readme: './docs/README.tmpl.md',
        docs: '.',
        templates: './docs'
      }
    },

    'nice-package': {
      all: {}
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'jshint-solid', 'nice-package', 'help', 'readme']);
};
