import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { AppRegistry } from 'react-native'
import rootReducer from './app/reducers/index.js'
import AppContainer from './app/containers/AppContainer'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('thespotmobile', () => App);
