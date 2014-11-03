'use strict';

var extend = require('extend');
var gulp = require('gulp');
var karma = require('karma');
var rump = require('rump');

gulp.task(rump.taskName('scripts:test'), function(callback) {
  var options = extend(true, {}, rump.configs.karma, {
    singleRun: !rump.configs.watch,
    webpackServer: {
      quiet: rump.configs.watch
    }
  });

  karma.server.start(options);
});

gulp.tasks[rump.taskName('test')].dep.push(rump.taskName('scripts:test'));
gulp.tasks[rump.taskName('test:watch')].dep.push(rump.taskName('scripts:test'));
