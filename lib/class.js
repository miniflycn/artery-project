import { getScope, clear } from './dom'
import React from 'react'

const trans = (ele) => {
  if (ele.tagname === 'text') {
    return ele.content
  }
  const children = ele.children
  const props = Object.assign({}, ele.props, ele.key != null ? { key: ele.key } : null)
  const args = [
    ele.tagname,
    props,
  ]
  if (children && children.length) {
    args.push.apply(args, children.map(childEle => trans(childEle)))
  }
  return React.createElement.apply(React, args)
}

/* eslint-disable */
export const container = (app, options, data, initialState) => {
  const param = {
    getInitialState: function () { return initialState || {} },
    componentWillMount: function ComponentWillMount() {
      data().then(state => this.setState(state))
    },
    render: function render() {
      // create a element tree
      const scope = getScope('default')
      clear()
      app.call(this)
      // id -> react
      return trans(scope.children[0])
    },
  }
  Object.assign(param, options)

  return React.createClass(param)
}
/* eslint-enable */
