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

    // if loading, display loader

    return (
		  <div>
        {/* Dashboard header*/}
        <div>
          <ul>
            <li><a>Talks</a></li>
            <li><a>Speakers</a></li>
          </ul>
          {/* Conference days*/}
          <ul>
            <li><a>31/05</a></li>
            <li><a>1/6</a></li>
            <li><a>2/6</a></li>
            <li><a>3/6</a></li>
          </ul>
        </div>
        {/* Dashboard body*/}
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  aaa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                DATE
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  a
                </td>
                <td>
                b
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  children: PropTypes.element,
}

export default Dashboard;

