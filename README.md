# Rump Scripts Test
[![NPM](http://img.shields.io/npm/v/rump-scripts-test.svg?style=flat-square)](https://www.npmjs.org/package/rump-scripts-test)
![License](http://img.shields.io/npm/l/rump-scripts-test.svg?style=flat-square)
[![Dependencies](http://img.shields.io/david/rumps/rump-scripts-test.svg?style=flat-square)](https://david-dm.org/rumps/rump-scripts-test)


## About
Rump Scripts Test is a Rump module for handling and running client-side tests
on Rump Scripts using [Karma](https://karma-runner.github.io/) with support for
PhantomJS and Mocha out of the box. For more information, visit the
[Rump repository](https://github.com/rumps/rump).


## API
The following is appended to the core Rump API:

### `rump.addGulpTasks(options)`
This module adds the following tasks:

- `scripts:test` will process and execute tests with Karma. For more
information on source path see `rump.configure()` below. This task is also
added to the `test` task for a single run test as well as the `test:watch`
task for continuous test runs.
- `info:scripts:test` will display information on what this specific module
does, specifically the source path as well as what tests would run. This task
is also added to the `info` task.

### `rump.configure(options)`
Redefine options for Rump and Rump modules to follow. In addition to what
options Rump and other Rump modules offer, the following options are
available alongside default values:

#### `options.paths.source.tests` (`'tests'`)
This is the directory where tests to be processed and run are contained. This
path is relative to the root source path. (If the default root and tests path
is used, then the path would be `src/tests`)

#### `options.globs.build.tests` (`'**/*.js'`)
This specifies which tests to process and run. By default it processes all JS
files in the top level directory of the root test path for tests.

#### `options.test.browsers`
This specifies which browsers to run tests on. In fact, this is a convenience
for Karma's
[browsers option](http://karma-runner.github.io/0.12/config/browsers.html).
See the Karma Plugins section below for information on any browsers already
set.

#### `options.test.frameworks`
This specifies which frameworks to load in Karma. In fact, this is a
convenience for Karma's frameworks option. See the Karma Plugins section below
for information on any frameworks already set.

#### `options.test.reporters`
This specifies which reporters to use in Karma. In fact, this is a convenience
for Karma's reporters option.

#### `options.test.karma`
This specifies any options you want to override in Karma. This is best if you
want to fully make changes in
[Karma's configuration](http://karma-runner.github.io/0.12/config/configuration-file.html).

### `rump.configs.karma`
This contains the generated options that are passed to Karma. Not only is this
is a good way to see what options are generated based on defaults and
overrides, but this can be leveraged to run Karma tests directly through Karma.
For instance, you can create a `karma.conf.js` file with the following:

```js
// Load/initialize Rump modules
module.exports = function(config) {
  config.set(rump.configs.karma);
};
```

## Karma Plugins
Rump Scripts Test will detect Karma plugins available in the project and append
items as needed:

- Browsers
  - [`karma-phantomjs-launcher`](https://github.com/karma-runner/karma-phantomjs-launcher)
  tests code in the PhantomJS headless browser. If the project has no browsers
  listed in `package.json`, this browser is used by default.
  - [`karma-chrome-launcher`](https://github.com/karma-runner/karma-chrome-launcher)
  tests code in Chrome.
  - [`karma-firefox-launcher`](https://github.com/karma-runner/karma-firefox-launcher)
  tests code in Firefox.
  - [`karma-ie-launcher`](https://github.com/karma-runner/karma-ie-launcher)
  tests code in Internet Explorer.
  - [`karma-safari-launcher`](https://github.com/karma-runner/karma-safari-launcher)
  tests code in Safari.
  - [`karma-detect-browsers`](https://github.com/litixsoft/karma-detect-browsers)
  will detect and automatically run on all browsers available in the system.

- Frameworks
  - [`karma-mocha`](https://github.com/karma-runner/karma-mocha) adds Mocha as
  the testing framework. If the project has no frameworks listed in
  `package.json`, this testing framework is used by default. Make sure to
  include an assertion framework. (you can add one through NPM and use
  `require` to load one like [Chai](http://chaijs.com/) or
  [expect.js](https://github.com/LearnBoost/expect.js/))
  - [`karma-jasmine`](https://github.com/karma-runner/karma-jasmine) adds
  Jasmine as the testing framework.
  - [`karma-qunit`](https://github.com/karma-runner/karma-qunit) adds QUnit as
  the testing framework.

Want support for another plugin? Open an issue/PR.
