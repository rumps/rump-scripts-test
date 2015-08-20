import {resolve} from 'path'

const pkg = require(resolve('package')),
      {dependencies = {}} = pkg,
      {devDependencies = {}} = pkg,
      {optionalDependencies = {}} = pkg,
      {peerDependencies = {}} = pkg,
      keys1 = Object.keys(dependencies),
      keys2 = Object.keys(devDependencies),
      keys3 = Object.keys(optionalDependencies),
      keys4 = Object.keys(peerDependencies),
      modules = [...keys1, ...keys2, ...keys3, ...keys4],
      browserPlugins = {
        'karma-chrome-launcher': 'Chrome',
        'karma-firefox-launcher': 'Firefox',
        'karma-ie-launcher': 'IE',
        'karma-phantomjs-launcher': 'PhantomJS',
        'karma-safari-launcher': 'Safari',
      },
      frameworkPlugins = {
        'karma-detect-browsers': 'detectBrowsers',
        'karma-jasmine': 'jasmine',
        'karma-mocha': 'mocha',
        'karma-qunit': 'qunit',
      }
let browsers = Object.keys(browserPlugins)
      .filter(moduleExists)
      .map(key => browserPlugins[key]),
    frameworks = Object.keys(frameworkPlugins)
      .filter(moduleExists)
      .map(key => frameworkPlugins[key])

// If user did not specify any browsers, use PhantomJS
if(!browsers.length && !frameworks.includes('detectBrowsers')) {
  browsers = ['PhantomJS']
}

// If user did not specify any frameworks, use Mocha
if(!frameworks.length) {
  frameworks = ['mocha']
}

export {browsers, frameworks}

function moduleExists(mod) {
  if(modules.includes(mod)) {
    try {
      require.resolve(mod)
      return true
    }
    catch(e) {
      return false
    }
  }
  return false
}
