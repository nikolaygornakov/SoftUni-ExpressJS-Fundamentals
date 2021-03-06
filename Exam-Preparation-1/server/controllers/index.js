const home = require('./home-controller')
const users = require('./users-controller')
const threads = require('./threads-controller')
const answers = require('./answers-controller')
const admins = require('./admins-controller')
const categories = require('./category-controller')

module.exports = {
  home: home,
  users: users,
  threads: threads,
  answers: answers,
  admins: admins,
  categories: categories
}
