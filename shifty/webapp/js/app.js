import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import Layout from './layout.react'
import reducer from './reducers'
import DashboardContainer from './containers/dashboard/DashboardContainer.react'
import EventContainer from './containers/event/EventContainer.react'
import LoginContainer from './containers/login/LoginContainer.react'

const middleware = [thunk]

if (window.localStorage.getItem('debug')) {
  middleware.push(createLogger())
}

const finalCreateStore = compose(
  applyMiddleware(...middleware)
)(createStore);

const store = finalCreateStore(reducer);

let isLoggedIn = false;
const requireAuth = (nextState, replace) => {
  isLoggedIn = true;
  if (!isLoggedIn) {
    replace('/login');
  } else {
    replace('/app');
  }
}

const routes = (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Layout } onEnter={requireAuth}>
      	{/*<IndexRedirect to="app" />*/}
      	<Route path="app" component={DashboardContainer} />
        <Route path="event/:eventId" component={EventContainer} />
        <Route path="login" component={LoginContainer} />
      </Route>
    </Router>
  </Provider>
)

render(routes, document.getElementById('app'))

