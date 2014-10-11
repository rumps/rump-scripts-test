'use strict';

var extend = require('extend');
var path = require('path');
var rump = require('rump');

module.exports = function() {
  var tests = path.join(rump.configs.main.paths.test.scripts,
                        rump.configs.main.globs.test.scripts);
  var karma = {
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: [],
    files: [tests],
    preprocessors: {},
    webpack: extend(true, {}, rump.configs.webpack)
  };

  delete karma.webpack.context;
  delete karma.webpack.entry;
  delete karma.webpack.output;
  karma.preprocessors[tests] = 'webpack';

  return extend(true, karma, rump.configs.main.test.karma);
};
