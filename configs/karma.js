'use strict';

var extend = require('extend');
var path = require('path');
var rump = require('rump');

module.exports = function() {
  var tests = path.join(rump.configs.main.paths.source.root,
                        rump.configs.main.paths.source.tests,
                        rump.configs.main.globs.build.tests);
  var karma = {
    autoWatch: true,
    browsers: rump.configs.main.test.browsers,
    files: [tests],
    frameworks: rump.configs.main.test.frameworks,
    preprocessors: {},
    reporters: rump.configs.main.test.reporters,
    webpack: extend(true, {}, rump.configs.webpack)
  };

  delete karma.webpack.context;
  delete karma.webpack.entry;
  delete karma.webpack.output;
  karma.preprocessors[tests] = 'webpack';

  return extend(true, karma, rump.configs.main.test.karma);
};
