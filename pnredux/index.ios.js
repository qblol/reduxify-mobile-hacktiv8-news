import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/App'

export default class pnredux extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF'}}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('pnredux', () => pnredux);
