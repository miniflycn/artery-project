const path = require('path')
const REG = /src\/component\/([a-z\-]+)$/

function ComponentPlugin() {}
ComponentPlugin.prototype.apply = (compiler) => {
  compiler.plugin('normal-module-factory', (nmf) => {
    nmf.plugin('before-resolve', (result, callback) => {
      if (!result) return callback()
      const target = path.resolve(result.context, result.request)
      if (REG.test(target)) {
        result.request = `${result.request}/main.art` // eslint-disable-line
      }
      return callback(null, result)
    })
    nmf.plugin('after-resolve', (result, callback) => {
      if (!result) return callback()
      return callback(null, result)
    })
  })
}

module.exports = ComponentPlugin
