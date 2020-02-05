import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter } from 'react-router-dom'

// redux imports
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/rootReducer'
import thunk from 'redux-thunk'

// logger
const looger  = store => next => action => {
  console.log('this is redux logger')
  console.log(store.getState())
  next(action) // this will console every action
  console.log(store.getState())

}

// redux store 
const store = createStore(rootReducer, applyMiddleware(looger, thunk))

const appJsx = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)


ReactDOM.render(appJsx, document.getElementById('root'))
