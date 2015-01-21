'use strict';

var extend = require('extend');
var rump = require('rump');
var karma = require('./karma');
var plugins = require('./plugins');

exports.rebuild = function() {
  rump.configs.main.paths = extend(true, {
    source: {
      tests: rump.configs.main.paths.scripts
    }
  }, rump.configs.main.paths);

  rump.configs.main.test = extend(true, {
    browsers: plugins.browsers.slice(),
    frameworks: plugins.frameworks.slice()
  }, rump.configs.main.test);

  exports.karma = karma();
};

exports.rebuild();
