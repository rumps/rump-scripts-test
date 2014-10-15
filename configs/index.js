'use strict';

var extend = require('extend');
var path = require('path');
var rump = require('rump');
var karma = require('./karma');

exports.rebuild = function() {
  rump.configs.main.globs = extend(true, {
    build: {
      tests: '**/*.js'
    }
  }, rump.configs.main.globs);

  rump.configs.main.paths = extend(true, {
    source: {
      tests: 'tests'
    }
  }, rump.configs.main.paths);

  rump.configs.main.test = extend(true, {
    browsers: ['PhantomJS']
  }, rump.configs.main.test);

  exports.karma = karma();
};

exports.rebuild();
