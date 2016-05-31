import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  generateEvents(events) {
    const eventRows = [];
    if (events) {
      events.map(event => {
        eventRows.push(
          <tr>
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
        <header>
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

export default Dashboard;

