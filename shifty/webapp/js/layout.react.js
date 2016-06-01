import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import actions from './actions'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, isAppLoading, isLoggedIn } = this.props

    return (
      <div className="wrap">
        <header className="navigation">
          <div className="logo" >
            <a href="/#">
              <img src="/static/assets/img/logo2.svg" height="50" width="150" />
            </a>
          </div>
          <nav>
            <a className="profile" href="/app/#/users">Users</a>
            <a className="logout">Logout</a>
          </nav>
          <div className="clear"></div>
        </header>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element,
}

function selector(state) {
  console.log(state)

  return {
    isAppLoading: state.status.appLoading,
  }
}

export default connect(selector)(Layout)

