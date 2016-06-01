import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import Users from '../../components/Users.react';
import types from './actionTypes';
import {get} from '../../utils/api';


export default class UserContainer extends Component {
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
		  <Users {...this.props} />
    )
  }
}

UserContainer.propTypes = {
  children: PropTypes.element,
}

function selector(state = {}) {
  const currentEvent = state.currentEvent;
  console.log(state);

  return {
    event: currentEvent
  };
}

export default connect(selector)(UserContainer)
