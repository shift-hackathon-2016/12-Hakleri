import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import LikeIcon from './LikeIcon.react';
import TalkComponent from './TalkComponent.react';

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, talks, conference } = this.props

    return (
       <section className="welcome-page">
        <div className="wrapper">
          <div className="logo">
            <img src="/assets/img/logo.svg" />
          </div>
          <h1>SHIFT Split 2016</h1>
          <div className="conf-meta">
            <p>2 active talks</p>
            <p>1 active competitions</p>
          </div>
          <div className="join">
            <a href="#">Join now</a>  
          </div>
          <div className="signin">
            <a href="#">Sign in with twitter</a>
            <a href="#">Sign in with google</a>
            <a href="#">Sign in with github</a>
          </div>
        </div>
      </section>
    )
  }
}

Login.propTypes = {
  children: PropTypes.element,
}

Login.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default Login;

