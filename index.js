'use strict';

var rump = module.exports = require('rump-scripts');
var configs = require('./configs');
var originalAddGulpTasks = rump.addGulpTasks;

rump.addGulpTasks = function(options) {
  originalAddGulpTasks(options);
  require('./gulp');
  return rump;
};

rump.on('update:scripts', function() {
  configs.rebuild();
  rump.emit('update:scripts:test');
});

Object.defineProperty(rump.configs, 'karma', {
  get: function() {
    return configs.karma;
  }
});
