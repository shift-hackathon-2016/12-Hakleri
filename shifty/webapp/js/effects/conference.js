import api from '../utils/api'
import actions from '../actions'

export default {
  get: () => dispatch => api.get('conference').then(c => dispatch(actions.setConferences(c.objects))),
}

