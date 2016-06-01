import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
// Components
import Users from '../../components/Users.react';
import types from './actionTypes';
import {get} from '../../utils/api';
import effects from '../../effects'

export default class UserContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
  	const {dispatch} = this.props;

    dispatch(effects.user.get());
  }

  render() {
    return (
		  <Users {...this.props} />
    )
  }
}

UserContainer.propTypes = {
  children: PropTypes.element,
}

function selector(state = {}) {
  console.log('users');
  const fetchedUsers = state.users.users;

  return {
    users: fetchedUsers,
  };
}

export default connect(selector)(UserContainer)
