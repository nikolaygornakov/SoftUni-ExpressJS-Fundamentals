const homeHandler = require('./home')
const filesHandler = require('./static-files')
const productsHandler = require('./product')
const faviconHandler = require('./favicon')
const categoryHandler = require('./category')

module.exports = [
  homeHandler,
  filesHandler,
  productsHandler,
  faviconHandler,
  categoryHandler
]
