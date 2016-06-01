import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import EventDetails from '../../components/EventDetail.react';
import types from './actionTypes';
import {get} from '../../utils/api';
import effects from '../../effects';

export default class EventContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  	const eventId = this.props.params.eventId;

    this.getEvent(eventId);
  }

  getEvent(eventId) {
  	const {dispatch} = this.props;

    dispatch(effects.event.getEvent(eventId));
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
  const currentEvent = state.events.selectedEvent;

  return {
    event: currentEvent,
    isLoaderVisible: state.events.isLoaderVisible,
  };
}

export default connect(selector)(EventContainer)

