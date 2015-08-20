import extend from 'extend'
import gulp, {tasks} from 'gulp'
import karma from 'karma'
import rump from 'rump'

const name = ::rump.taskName,
      task = ::gulp.task,
      {configs} = rump

task(name('scripts:test'), () => {
  const options = extend(true, {}, configs.karma, {
    singleRun: !configs.watch,
    webpackServer: {quiet: configs.watch},
  })
  karma.server.start(options)
})

tasks[name('test')].dep.push(name('scripts:test'))
tasks[name('test:watch')].dep.push(name('scripts:test'))
