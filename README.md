# Rump Scripts Test
[![NPM](http://img.shields.io/npm/v/rump-scripts-test.svg?style=flat-square)](https://www.npmjs.org/package/rump-scripts-test)
![License](http://img.shields.io/npm/l/rump-scripts-test.svg?style=flat-square)
[![Dependencies](http://img.shields.io/david/rumps/rump-scripts-test.svg?style=flat-square)](https://david-dm.org/rumps/rump-scripts-test)
[![Peer Dependencies](http://img.shields.io/david/peer/rumps/rump-scripts-test.svg?style=flat-square)](https://david-dm.org/rumps/rump-scripts-test#info=peerDependencies)


## About
Rump Scripts Test is a Rump module for handling and running client-side tests
on Rump Scripts using [Karma](https://karma-runner.github.io/) with support for
PhantomJS out of the box. For more information, visit the
[Rump repository](https://github.com/rumps/rump).


## Notes
While Webpack and PhantomJS support is included, there are no other options
included by default for Karma. Make sure to include at least a testing
framework ([Jasmine](https://github.com/karma-runner/karma-jasmine),
[Mocha](https://github.com/karma-runner/karma-mocha)/[Chai](https://github.com/princed/karma-chai-plugins),
etc.) and any other plugins.


## API
The following is appended to the core Rump API:

### `rump.addGulpTasks()`
This module adds the following tasks:
- `rump:scripts:test` will process and execute tests with Karma. For more
  information on source path see `rump.configure()` below. This task is also
  added to the `rump:build` task for single builds as well as the `rump:watch`
  task for continuous builds.
- `rump:info:scripts:test` will display information on what this specific
  module does, specifically the source path as well as what tests would run.
  This task is also added to the `rump:info` task.

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

#### `options.test.browsers` (`['PhantomJS']`)
This specifies which browsers to run tests on. By default it runs tests on the
PhantomJS browser. In fact, this is a convenience for Karma's
[browsers option](http://karma-runner.github.io/0.10/config/browsers.html).

#### `options.test.frameworks`
This specifies which frameworks to load in Karma. In fact, this is a
convenience for Karma's frameworks option.

#### `options.test.reporters`
This specifies which reporters to use in Karma. In fact, this is a convenience
for Karma's reporters option.

#### `options.test.karma`
This specifies any options you want to override in Karma. This is best if you
want to fully make changes in
[Karma's configuration](http://karma-runner.github.io/0.10/config/configuration-file.html).

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
