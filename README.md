# grunt-help v0.5.0

> Runs the program with --help option, captures output for documentation

[![NPM][grunt-help-icon] ][grunt-help-url]

[![Build status][grunt-help-ci-image] ][grunt-help-ci-url]
[![dependencies][grunt-help-dependencies-image] ][grunt-help-dependencies-url]
[![devdependencies][grunt-help-devdependencies-image] ][grunt-help-devdependencies-url]

[grunt-help-icon]: https://nodei.co/npm/grunt-help.png?downloads=true
[grunt-help-url]: https://npmjs.org/package/grunt-help
[grunt-help-ci-image]: https://travis-ci.org/bahmutov/grunt-help.png?branch=master
[grunt-help-ci-url]: https://travis-ci.org/bahmutov/grunt-help
[grunt-help-dependencies-image]: https://david-dm.org/bahmutov/grunt-help.png
[grunt-help-dependencies-url]: https://david-dm.org/bahmutov/grunt-help
[grunt-help-devdependencies-image]: https://david-dm.org/bahmutov/grunt-help/dev-status.png
[grunt-help-devdependencies-url]: https://david-dm.org/bahmutov/grunt-help#info=devDependencies



```
grunt-help
    runs your program with --help (or given parameters) to generate help doc

	npm install grunt-help --save-dev
	grunt.initConfig({
	help: {
		options: {
			destination: "docs/help.md"
		},
		all: {}
	}
	grunt help // saved output of `node index.js --help into docs/help.md
```



See the [Gruntfile.js](Gruntfile.js) for example how to
generate README.md including program options via grunt tasks.

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/grunt-help/issues) on Github



## MIT License

The MIT License (MIT)

Copyright (c) 2013 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## History


0.1.0 / 2014-02-09
==================

 * initial 'help' task captures program's output


