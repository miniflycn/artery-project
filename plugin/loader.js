const core = require('artery-loader')

module.exports = (source) => { // eslint-disable-line
  return `var container = require('../../../lib/class').container
var dom = require('../../../lib/dom')
var elementOpen = dom.elementOpen
var elementClose = dom.elementClose
var text = dom.text
var options = require('./data/action')
var data = require('./data/view')
var initialState = require('./data/mock')
${core.call(this, source)}
module.exports = container(module.exports, options, data, initialState)`
}
