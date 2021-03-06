import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import LikeIcon from './LikeIcon.react';
import TalkComponent from './TalkComponent.react';
import eventActions from '../containers/event/actions';

export default class EventDetail extends Component {
  constructor(props) {
    super(props)
  }

  handleFileUploadeClick() {
    $('section.loader').show();
  } 

  handleLikeClicked(e) {
    $(e.target).addClass('active').next().text("65 likes");
  }

  resize(el){
   $(el).height($(window).height()  - $(el).offset()['top']) 
  }

  componentDidUpdate() {
    this.resize('.comments');
  }

  componentDidMount() {
    this.resize('.comments');    
  }

  render() {
    const { dispatch, event } = this.props

    return (
      <div>
        <section className="page-header">
          <div className="left">
            <h1>
              {event && event.name}
            </h1>
            <div className="meta">
              { /*<div className="date">{`${event && event.time_start || ''} - ${event && event.time_end || ''}` }</div>*/}
              <div>Ivan Burazin</div>
            </div>
          </div>
          <div className="right">
            <a className="like" onClick={this.handleLikeClicked}>
              <LikeIcon />
              <div className="like-text">
                64 likes
              </div>
            </a>
            <a className="more" onClick={this.handleFileUploadeClick}>
              upload file
            </a>
          </div>
          <div className="clear">
          </div>
        </section>
        <TalkComponent {...this.props} description={event && event.description} />
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

