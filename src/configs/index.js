import extend from 'extend'
import rump from 'rump'
import karma from './karma'
import {browsers, frameworks} from './plugins'

const {configs} = rump

rebuild()

export function rebuild() {
  configs.main.paths = extend(true, {source: {
    tests: configs.main.paths.source.scripts,
  }}, configs.main.paths)
  configs.main.test = extend(true, {
    browsers: [...browsers],
    frameworks: [...frameworks],
  }, configs.main.test)
  configs.main.scripts.karma = karma()
}
