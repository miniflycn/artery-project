module.exports = () =>
  new Promise((resolve) => {
    resolve({
      admin: true,
      list: ['你好', '哈哈哈'],
    })
  })

