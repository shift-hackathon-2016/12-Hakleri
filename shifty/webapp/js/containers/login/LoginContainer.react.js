import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import Login from '../../components/Login.react';
import types from './actionTypes';
import {get} from '../../utils/api';


export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
		  <Login {...this.props} />
    )
  }
}

LoginContainer.propTypes = {
  children: PropTypes.element,
}

function selector(state = {}) {
  const currentUser = state.currentUser;
  console.log(state);

  return {
    currentUser: currentUser,
  };
}

export default connect(selector)(LoginContainer)

