import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { ExampleContainer } from './containers'
import configureStore from './store/configure'
import './styles/main.scss'

const store = configureStore()
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={ExampleContainer} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
