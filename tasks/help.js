/*
 * grunt-help
 * https://github.com/bahmutov/grunt-help
 *
 * Copyright (c) 2014 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var verify = require('check-types').verify;
var exists = require('fs').existsSync;
var write = require('fs').writeFileSync;
var exec = require('child_process').exec;

module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  verify.unemptyString(pkg.description, 'package is missing description');

  grunt.registerMultiTask('help', pkg.description, function() {
    var options = this.options({
      main: pkg.main || 'index.js',
      destination: null
    });
    if (!exists(options.main)) {
      throw new Error('Cannot find script to run ' + options.main);
    }

    var cmd = 'node ' + options.main + ' --help';
    grunt.verbose.writeln('generating help via', cmd);

    var done = this.async();
    exec(cmd, function (error, stdout, stderr) {
      if (error) {
        grunt.log.error(error);
        done(false);
        return;
      }
      if (stderr) {
        grunt.log.warn(stderr);
        done(false);
        return;
      }

      if (options.destination) {
        verify.unemptyString(options.destination, 'expected destination string');
        write(options.destination, stdout, 'utf8');
        grunt.verbose.writeln('saved options to', options.destination);
      }
      grunt.log.writeln(stdout);
      done(true);
    });

    /*
    (function runFixPack() {
      var join = require('path').join;
      var fixpack = join(__dirname, '../node_modules/fixpack');
      var exec = require('child_process').exec;

      exec('node ' + fixpack, function (error, stdout, stderr) {
        if (error) {
          grunt.log.error(error);
          done(false);
        } else {
          grunt.log.writeln(stdout);
          if (stderr) {
            grunt.log.warn(stderr);
          }
          done(!!result.valid);
        }
      });

    }());
    */

  });

};
