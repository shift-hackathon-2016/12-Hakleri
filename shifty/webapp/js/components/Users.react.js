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

  generateUserRows(users = []) {
    const userRows = [];

    if (users) {
      users.map(user => {
        userRows.push(
          <tr onClick={this.redirect.bind(null, user)}>
            <td>
              Roles
            </td>
            <td>
              {user.name}
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

