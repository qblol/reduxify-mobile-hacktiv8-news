import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './src/reducers'

const createStoreMiddleware = applyMiddleware()(createStore)

export default class pnredux extends Component {
  render() {
    return (
      <Provider store={createStoreMiddleware(rootReducers)}>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF'}}>
            <App />
          </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('pnredux', () => pnredux);
