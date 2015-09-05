import '../src'
import gulp from 'gulp'
import rump from 'rump'
import {stripColor} from 'chalk'
import {sep} from 'path'
import {spy} from 'sinon'

describe('tasks', function() {
  this.timeout(0)

  afterEach(() => {
    rump.configure({
      environment: 'development',
      paths: {source: {root: 'test/fixtures', scripts: ''}},
    })
  })

  it('are added and defined', () => {
    const callback = spy()
    rump.on('gulp:main', callback)
    rump.on('gulp:scripts', callback)
    rump.on('gulp:scripts:test', callback)
    rump.addGulpTasks({prefix: 'spec'})
    callback.should.be.calledThrice()
    gulp.tasks['spec:info:scripts:test'].should.be.ok()
    gulp.tasks['spec:scripts:test'].should.be.ok()
  })

  it('displays correct information in info task', () => {
    const logs = [],
          {log} = console
    console.log = newLog
    gulp.start('spec:info')
    console.log = log
    logs.slice(-6).should.eql([
      '',
      '--- Scripts Test v0.8.0',
      `Processed tests from test${sep}fixtures are run`,
      'Affected files:',
      `lib${sep}adder_test.js`,
      '',
    ])
    rump.reconfigure({paths: {source: {scripts: 'nonexistant'}}})
    logs.length = 0
    console.log = newLog
    gulp.start('spec:info')
    console.log = log
    logs.length.should.not.be.above(5)

    function newLog(...args) {
      logs.push(stripColor(args.join(' ')))
    }
  })

  it('can run test', async() => {
    await new Promise(resolve => {
      gulp.task('posttest', ['spec:test'], resolve)
      gulp.start('posttest')
    })
  })
})
