import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import LikeIcon from './LikeIcon.react';
import TalkComponent from './TalkComponent.react';

export default class EventDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, talks, conference } = this.props

    return (
      <div>
        <section className="page-header">
          <div className="left">
            <h1>
              {event && evet.name || 'TALK MOCK'}
            </h1>
            <div className="meta">
              {event && event.speaker || 'speaker mock'}
            </div>
          </div>
          <div className="right">
            <a class="like" href="#">
              <LikeIcon />
              <div class="like-text">
                64 likes  
              </div>
            </a>
            <a class="more">
              upload file
            </a>
          </div>
          <div className="clear">
          </div>
        </section>
        <TalkComponent />
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

