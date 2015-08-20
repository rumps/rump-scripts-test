import gulp, {tasks} from 'gulp'
import rump from 'rump'
import {find} from 'globule'
import {blue, green, magenta} from 'chalk'
import {join, relative} from 'path'
import {version} from '../../package'

const name = ::rump.taskName,
      task = ::gulp.task,
      {configs} = rump

task(name('info:scripts:test'), () => {
  const glob = join(configs.main.paths.source.root,
                    configs.main.paths.source.tests,
                    configs.main.globs.build.tests),
        files = find([glob].concat(configs.main.globs.global)),
        source = join(configs.main.paths.source.root,
                      configs.main.paths.source.tests)
  if(!files.length) {
    return
  }
  console.log()
  console.log(magenta(`--- Scripts Test v${version}`))
  console.log(`Processed tests from ${green(source)} are run`)
  console.log('Affected files:')
  files.forEach(file => console.log(blue(relative(source, file))))
  console.log()
})

tasks[name('info:scripts')].dep.push(name('info:scripts:test'))
