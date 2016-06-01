import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  redirect(event) {
    this.context.router.push(`/event/${event.id}`);
  }

  generateEvents(events) {
    const eventRows = [];

    if (events) {
      events.map(event => {
        eventRows.push(
          <tr onClick={this.redirect.bind(this, event)}>
            <td>
              {event.start_time}
            </td>
            <td>
              <div className="event-title">
                {event.name}
              </div>
              <div className="event-meta">
                {event.meta}
              </div>
            </td>
          </tr>        
        );
      });
    }

    return eventRows;
  }

  render() {
    const { dispatch, talks, conference } = this.props
    const eventRows = this.generateEvents(talks);

    return (
      <div>
        <section className="page-header">
          <div className="left">
            <h1>
              {conference && conference.name || 'SHIFT split 2016'}
            </h1>
            <div className="meta">
              <div className="date">31/05 - 03/06/2016</div>
              <div className="place">Split, Croatia</div>              
            </div>
          </div>
          <div className="right">
            <a 
              className="more"
              href={conference && conference.website || 'http://shift.codeanywhere.com'}
              target="_blank"              
            >
              More info
            </a>
          </div>
          <div className="clear">
          </div>
        </section>
        <header className="subheader">
          <div className="left">
            <a className="active">Talks</a>
            <a>Competitions</a>
          </div>
          <div className="right">
            <a className="active">31/05</a>
            <a>01/06</a>
            <a>02/06</a>
            <a>03/06</a>
          </div>
          <div className="clear"></div>
        </header>
        <section className="event-list">
          {/* Dashboard header*/}
          <table>
            <tbody>
              {eventRows}
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

Dashboard.propTypes = {
  children: PropTypes.element,
}

Dashboard.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default Dashboard;

