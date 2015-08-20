import '../src'
import gulp from 'gulp'
import rump from 'rump'
import {spy} from 'sinon'

describe('tasks', function() {
  this.timeout(0)

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
})
