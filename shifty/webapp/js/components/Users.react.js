import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components

export default class Users extends Component {
  constructor(props) {
    super(props)
  }

  redirect(e, event) {
    console.log(e);
    console.log(event);
    // this.context.router.push(`/event/${event.id}`);
  }

  generateRole(userType) {
    if (userType === 'judge') {
      return 'judge';
    } else if (userType === 'admin') {
      return 'admin';
    } else if (userType === 'speaker') {
      return 'speaker'
    }
    return 'Attendee';
  }

  generateUserRows(users = []) {
    const userRows = [];

    if (users) {
      users.map((user, index) => {
        userRows.push(
          <tr onClick={this.redirect.bind(this, user)}>
            <td>
              #{index}
            </td>
            <td>
              {`${user.first_name} ${user.last_name} (${user.username})`}
            </td>
            <td>
              {this.generateRole(user.user_type)}
            </td>
          </tr>        
        );
      });
    }

    return userRows;
  }

  render() {
    const { dispatch, users } = this.props
    const userRows = this.generateUserRows(users);

    return (
      <div>
        <section className="page-header">
          <div className="left">
            <h1>
              Users
            </h1>
            <div className="meta">              
            </div>
          </div>
          <div className="right">
            <input type="text" className="user-search" placeholder="Filter users" />
          </div>
          <div className="clear">
          </div>
        </section>
        <header>
        </header>
        <section className="event-list">
          {/* Users header*/}
          <table>
            <tbody>
              {userRows}
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

Users.propTypes = {
  children: PropTypes.element,
}

Users.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default Users;

