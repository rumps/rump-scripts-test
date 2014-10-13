'use strict';

var chalk = require('chalk');
var globule = require('globule');
var gulp = require('gulp');
var path = require('path');
var rump = require('rump');
var pkg = require('../package');

gulp.task('rump:info:scripts:test', function() {
  var glob = path.join(rump.configs.main.paths.source.root,
                       rump.configs.main.paths.source.tests,
                       rump.configs.main.globs.build.tests);
  var files = globule.find([glob].concat(rump.configs.main.globs.global));
  var source = path.join(rump.configs.main.paths.source.root,
                         rump.configs.main.paths.source.tests);

  if(!files.length) {
    return;
  }

  console.log();
  console.log(chalk.magenta('--- Scripts Test', 'v' + pkg.version));
  console.log('Processed tests from', chalk.green(source), 'are run');
  console.log('Affected files:');
  files.forEach(function(file) {
    console.log(chalk.blue(path.relative(source, file)));
  });

  console.log();
});

gulp.tasks['rump:info'].dep.push('rump:info:scripts:test');
