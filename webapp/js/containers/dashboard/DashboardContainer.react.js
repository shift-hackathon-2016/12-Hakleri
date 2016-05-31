import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import Dashboard from '../../components/Dashboard.react';

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch } = this.props

    return (
		<Dashboard />
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

