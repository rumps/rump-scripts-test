'use strict';

var extend = require('extend');
var path = require('path');
var rump = require('rump');
var karma = require('./karma');

exports.rebuild = function() {
  var scripts = path.join(rump.configs.main.paths.source.root,
                          rump.configs.main.paths.source.scripts);

  rump.configs.main.paths = extend(true, {
    test: {
      scripts: scripts
    }
  }, rump.configs.main.paths);

  rump.configs.main.test = extend({karma: {}}, rump.configs.main.test);

  exports.karma = karma();
};

exports.rebuild();
