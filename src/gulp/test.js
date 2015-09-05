import extend from 'extend'
import gulp, {tasks} from 'gulp'
import {Server} from 'karma'
import rump from 'rump'

const name = ::rump.taskName
const task = ::gulp.task
const {configs} = rump

task(name('scripts:test'), done => {
  const server = new Server(extend(true, {}, configs.karma, {
    singleRun: !configs.watch,
    webpackServer: {quiet: configs.watch},
  }), done)
  server.start()
})

tasks[name('test')].dep.push(name('scripts:test'))
tasks[name('test:watch')].dep.push(name('scripts:test'))
