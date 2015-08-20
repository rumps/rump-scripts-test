import 'rump-scripts'
import rump from 'rump'
import {rebuild} from './configs'

rump.on('update:scripts', () => {
  rebuild()
  rump.emit('update:scripts:test')
})

rump.on('gulp:scripts', (...args) => {
  require('./gulp')
  rump.emit('gulp:scripts:test', ...args)
})

Object.defineProperty(rump.configs, 'karma', {
  get: () => rump.configs.main.scripts.karma,
})
