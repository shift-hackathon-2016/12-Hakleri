import api from '../utils/api'
import actions from '../actions'

export default {
  getEvent: (eventId) => dispatch => api.get(`conference_event/${eventId}`).then(c => dispatch(actions.setSelectedEvent(c))),
}

