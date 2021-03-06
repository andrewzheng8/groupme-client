import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
