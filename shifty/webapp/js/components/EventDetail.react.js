import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components

export default class EventDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, talks, conference } = this.props

    return (
      <div>
        Event details
      </div>
    )
  }
}

EventDetail.propTypes = {
  children: PropTypes.element,
}

EventDetail.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default EventDetail;

