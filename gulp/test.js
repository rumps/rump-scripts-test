'use strict';

var extend = require('extend');
var gulp = require('gulp');
var karma = require('karma');
var rump = require('rump');

gulp.task('rump:test:scripts', function(callback) {
  var options = extend(true, {}, rump.configs.karma, {
    singleRun: !rump.configs.watch,
    webpackServer: {
      quiet: rump.configs.watch
    }
  });

  karma.server.start(options);
});

gulp.tasks['rump:test'].dep.push('rump:test:scripts');
gulp.tasks['rump:test:watch'].dep.push('rump:test:scripts');
