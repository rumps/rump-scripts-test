import extend from 'extend'
import rump from 'rump'
import {join} from 'path'

const {configs} = rump

export default function() {
  const tests = join(configs.main.paths.source.root,
                     configs.main.paths.source.tests,
                     configs.main.globs.build.tests),
        karma = {
          autoWatch: true,
          browsers: configs.main.test.browsers,
          files: [tests],
          frameworks: configs.main.test.frameworks,
          preprocessors: {[tests]: 'webpack'},
          reporters: configs.main.test.reporters,
          webpack: extend(true, {}, configs.webpack),
        }
  delete karma.webpack.context
  delete karma.webpack.entry
  delete karma.webpack.output
  return extend(true, karma, configs.main.test.karma)
}
