import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import Dashboard from '../../components/Dashboard.react';
import types from './actionTypes';

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  	console.log('store');
    this.getConference();
  }

  getConference() {
  	const {dispatch} = this.props;

    dispatch(createAction({type:types.requestConferenceDetails}));
  }

  render() {
    return (
		<Dashboard {...this.props}/>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element,
}

function dashboardStore(state = {}) {
  console.log(state.dashboard);

  return {
    dashboard: state.dashboard,
  }
}

export default connect(dashboardStore)(Dashboard)

