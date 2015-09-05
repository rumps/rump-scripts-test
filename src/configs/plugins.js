import {resolve} from 'path'

const pkg = require(resolve('package'))
const {
  dependencies = {},
  devDependencies = {},
  optionalDependencies = {},
  peerDependencies = {},
} = pkg
const modules = [
  ...Object.keys(dependencies),
  ...Object.keys(devDependencies),
  ...Object.keys(optionalDependencies),
  ...Object.keys(peerDependencies),
]
const browserPlugins = {
  'karma-chrome-launcher': 'Chrome',
  'karma-firefox-launcher': 'Firefox',
  'karma-ie-launcher': 'IE',
  'karma-phantomjs-launcher': 'PhantomJS',
  'karma-safari-launcher': 'Safari',
}
const frameworkPlugins = {
  'karma-detect-browsers': 'detectBrowsers',
  'karma-jasmine': 'jasmine',
  'karma-mocha': 'mocha',
  'karma-qunit': 'qunit',
}
let browsers = Object.keys(browserPlugins)
      .filter(moduleExists)
      .map(key => browserPlugins[key])
let frameworks = Object.keys(frameworkPlugins)
      .filter(moduleExists)
      .map(key => frameworkPlugins[key])

// If user did not specify any browsers, use PhantomJS
if(!browsers.length && !~frameworks.indexOf('detectBrowsers')) {
  browsers = ['PhantomJS']
}

// If user did not specify any frameworks, use Mocha
if(!frameworks.length) {
  frameworks = ['mocha']
}

export {browsers, frameworks}

function moduleExists(mod) {
  if(~modules.indexOf(mod)) {
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
