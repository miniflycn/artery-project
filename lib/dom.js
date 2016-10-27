const scope = {}
let curScope
let point

export const getScope = (id) => {
  if (scope[id]) {
    point = curScope = scope[id]
  } else {
    point = curScope = scope[id] = { children: [] }
    Object.assign(scope[id], { scope: scope[id] })
  }
  return curScope
}

export const elementOpen = (tagname, key, staticProps, props) => {
  const ele = {
    tagname,
    props,
    children: [],
    parent: point,
    key,
  }
  point.children.push(ele)
  point = ele
}

export const text = (content) => {
  point.children.push({
    tagname: 'text',
    content,
  })
}

export const elementClose = (tagname) => {
  if (point.tagname !== tagname) {
    throw new Error(`Tag "${tagname}" should not be closed before tag ${point.tagname}`)
  }
  point = point.parent
}

export const clear = () => {
  curScope.children.length = 0
  point = curScope
}
