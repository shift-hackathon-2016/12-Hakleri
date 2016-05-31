import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import actions from './actions'


export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, isAppLoading } = this.props

    return (
      <div onClick={ () => dispatch(actions.changeAppLoadingState(!isAppLoading)) }>
        App is loading: { isAppLoading.toString() }
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

