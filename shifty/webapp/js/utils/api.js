const join = require('urljoin')
const API_ROOT = '/api/v1'

export function get(url, data) {
  return new Promise((resolve, reject) => {
    $.get({ url: join(API_ROOT, url), data })
      .done(response => resolve(response))
      .fail(err => reject(err))
  })
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    $.post({ url: join(API_ROOT, url), data })
      .done(response => resolve(response))
      .fail(err => reject(err))
  })
}

export default {
  get,
  post,
}
