import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import EventDetails from '../../components/EventDetail.react';
import types from './actionTypes';
import {get} from '../../utils/api';


export default class EventContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  	console.log('store');
    this.getEvent();
  }

  getEvent() {
  	const {dispatch} = this.props;

    dispatch({type: types.requestEventDetails});
  }

  render() {
    return (
		  <EventDetails {...this.props} />
    )
  }
}

EventContainer.propTypes = {
  children: PropTypes.element,
}

function selector(state = {}) {
  const currentEvent = state.currentEvent;
  console.log(state);

  return {
    event: currentEvent
  };
}

export default connect(selector)(EventContainer)

