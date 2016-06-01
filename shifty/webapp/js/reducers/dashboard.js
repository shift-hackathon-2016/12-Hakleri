import { combineReducers } from 'redux'
import types from '../action-types'
import status from './status'

const appLoadingDefault = true

function dashboard(state = {
	isFetching: false,
	talks: [
    {
    name: 'Keynote',
    meta: 'Ivan Burazin',
    start_time: '11:00',
    id: 1,
    type: 0,
},
{
    name: 'HOW WE SCALED FROM 0 TO 450 CITIES',
    meta: 'Davor Tremac - General Manager, Uber',
    start_time: '11:00',
    id: 3,
    type: 0,
},
{
    name: 'HOW WE BUILD TRELLO',
    meta: 'Hamid Palo - Director of Product, Partnerships, Trello',
    start_time: '11:15',
    id: 4,
    type: 0,
},
{
    name: 'FROM 4 TO 70: GROWING AN ENGINEERING TEAM AT A HYPERGROWTH STARTUP.',
    meta: 'Darragh Curran - VP of Engineering, Intercom',
    start_time: '12:00',
    id: 5,
    type: 0,
},
{
    name: 'WHY DIPLOMA IS NOT ENOUGH TO GET FIRST JOB AS A PROGRAMMER',
    meta: 'Ivan Nemytchenko - Developer Advocate, GitLab',
    start_time: '12:30',
    id: 6,
    type: 0,
},
{
    name: 'HOW TOOLS HAVE HELPED SHAPED THE ROLE OF A DESIGNER',
    meta: 'Jonathan Lieberman - Head of Design, Operator',
    start_time: '14:30',
    id: 7,
    type: 0,
},
{
    name: 'SHIFT HACKATHON FINALS ONE',
    meta: 'Judges: Hamid Palo, Brian White, Predrag Lesic, Filip Debowski',
    start_time: '14:45',
    id: 8,
    type: 0,
},
{
    name: 'FUNCTIONAL PROGRAMMING IN PRACTICE, IS IT WORTH IT? ',
    meta: 'Andrew Rollins - Founder, Localytics',
    start_time: '15:30',
    id: 9,
    type: 0,
},
{
    name: 'LESSONS CREATING AN OPEN SOURCE PROJECT: FROM 0 TO 500.000 USERS ',
    meta: 'Dan Cuellar - Head of Test Engineering, Shazaam',
    start_time: '16:00',
    id: 10,
    type: 0,
},
{
    name: 'BRIDGING THE GAP BETWEEN ARDUINO AND PROFESSIONAL FIRMWARE DEVS ',
    meta: 'Mat McGowan - Senior Embedded Engineer, Particle',
    start_time: '17:00',
    id: 11,
    type: 0,
},
{
    name: 'THE RETURN OF THE PLATFORM - THE CURE FOR JAVASCRIPT FATIGUE ',
    meta: 'Uri Goldshtein - Core Developer, Meteor',
    start_time: '17:30',
    id: 12,
    type: 0,
},
{
    name: 'SERIOUSLY?! WTF IS DEVOPS?!',
    meta: 'Demir Selmanovic - Head Of Content, Toptal',
    start_time: '18:00',
    id: 13,
    type: 0,
}
  ],
}, action) {
  if (action.type === types.requestConferenceDetails) {
    return Object.assign({}, state, {
      isFetching: true,
    });
  } else if (action.type === types.receivedConferenceDetails) {
	 return Object.assign({}, state, {
      isFetching: false,
      talks: action.payload.talks,
      challenges: action.payload.challenges,
    });
  }

  return state
}

export default combineReducers({
  dashboard,
})

