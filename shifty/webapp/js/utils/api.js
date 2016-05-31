const join = require('urljoin')
const API_ROOT = 'http://hotels.nextuser.com/api/v1/'
const QS = ''

function get(url, queryString = QS, data) {
  return new Promise((resolve, reject) => {
    $.get({ url: join(API_ROOT + url, queryString), data })
      .done(response => resolve(response))
      .fail(err => reject(err))
  })
}

function post(url, queryString = QS, data) {
  return new Promise((resolve, reject) => {
    $.post({ url: join(API_ROOT + url, queryString), data })
      .done(response => resolve(response))
      .fail(err => reject(err))
  })
}

export default {
  get,
  post,
}