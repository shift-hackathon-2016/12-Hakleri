const join = require('urljoin')
const API_ROOT = 'http://hotels.nextuser.com/api/v1/'
const QS = ''

export function get(url, queryString = QS, data) {
  return new Promise((resolve, reject) => {
    $.get({ url: join(API_ROOT + url, queryString), data })
      .done(response => resolve(response))
      .fail(err => reject(err))
  })
}

export function post(url, queryString = QS, data) {
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