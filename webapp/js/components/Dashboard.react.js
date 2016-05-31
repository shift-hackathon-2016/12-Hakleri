import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch } = this.props

    return (
		  <div>
        <p>dashboard</p>
      </div>
    )
  }
}

Dashboard.propTypes = {
  children: PropTypes.element,
}

export default Dashboard;

