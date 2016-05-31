import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './layout.react'
import reducer from './reducers'

const middleware = [thunk]

if (window.localStorage.getItem('debug')) {
  middleware.push(createLogger())
}

const finalCreateStore = compose(
  applyMiddleware(...middleware)
)(createStore);

const store = finalCreateStore(reducer);

const routes = (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Layout }>
      </Route>
    </Router>
  </Provider>
)

render(routes, document.getElementById('app'))

