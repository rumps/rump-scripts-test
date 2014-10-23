'use strict';

var path = require('path');
var pkg = require(path.resolve('package'));
var browsers = {
  'karma-chrome-launcher': 'Chrome',
  'karma-firefox-launcher': 'Firefox',
  'karma-ie-launcher': 'IE',
  'karma-phantomjs-launcher': 'PhantomJS',
  'karma-safari-launcher': 'Safari'
};
var frameworks = {
  'karma-detect-browsers': 'detectBrowsers',
  'karma-jasmine': 'jasmine',
  'karma-mocha': 'mocha',
  'karma-qunit': 'qunit'
};
var modules = [].concat(Object.keys(pkg.dependencies || {}),
                        Object.keys(pkg.devDependencies || {}),
                        Object.keys(pkg.peerDependencies || {}));

// Add detected browser launcher plugins
exports.browsers = Object.keys(browsers).filter(moduleExists).map(function(key) {
  return browsers[key];
});

// Add detected framework plugins
exports.frameworks = Object.keys(frameworks).filter(moduleExists).map(function(key) {
  return frameworks[key];
});

// If user did not specify any browsers, use PhantomJS
if(!exports.browsers.length && !~exports.frameworks.indexOf('detectBrowsers')) {
  exports.browsers = ['PhantomJS'];
}

// If user did not specify any frameworks, use Mocha
if(!exports.frameworks.length) {
  exports.frameworks = ['mocha'];
}

function moduleExists(mod) {
  if(~modules.indexOf(mod)) {
    try {
      require.resolve(mod);
      return true;
    }
    catch(e) {}
  }
}
