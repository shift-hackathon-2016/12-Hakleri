import api from '../utils/api'
import actions from '../actions'

export default {
  get: () => dispatch => api.get('user').then(c => dispatch(actions.setUsers(c.objects))),
}

