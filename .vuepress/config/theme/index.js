const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
const locales = require('../locales/')

module.exports = Object.assign({
  noFoundPageByTencent:false
}, themeReco, {
  sidebar,
  locales
})