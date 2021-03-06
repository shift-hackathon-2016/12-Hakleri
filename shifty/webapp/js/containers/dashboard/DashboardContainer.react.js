import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import Dashboard from '../../components/Dashboard.react';
import types from './actionTypes';
import {get} from '../../utils/api';
import effects from '../../effects'

export default class DashboardContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getConference();
  }

  getConference() {
  	const {dispatch} = this.props;

  	dispatch(effects.conference.get());
  }

  render() {
    return (
		  <Dashboard {...this.props} />
    )
  }
}

DashboardContainer.propTypes = {
  children: PropTypes.element,
}

function selector(state = {}) {
  const dashboardState = state.dashboard.dashboard;
  console.log(state);

  return {
    talks: dashboardState.talks,
  };
}

export default connect(selector)(DashboardContainer)

