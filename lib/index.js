import ReactDom from 'react-dom'
import React from 'react'

module.exports = function init(App, selector, props = {}) {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector
  ReactDom.render(React.createElement(App, props), el)
}
