import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ExampleContainer } from './containers'
import reducers from './reducers'
import './styles/main.scss'

const history = createHistory()
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
)


class App extends Component {
  constructor(props) {
    super(props)
    // Uncomment the line below complete line show store changes as console.logs
    this.debug()
  }

  debug() {
    window.store = store
    store.subscribe(() => console.log(store.getState()))
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={ExampleContainer} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
