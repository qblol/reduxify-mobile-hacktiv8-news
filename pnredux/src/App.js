import React, { Component } from 'react'
import News from './components/News'
import People from './components/People'
import {
  Navigator,
  View,
  Text,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene (route, navigator) {
    if(route.index===0) {
      return (
        <News route={route} navigator={navigator}/>
      )
    }
    else if (route.index===1) {
      return (
        <People route={route} navigator={navigator}/>
      )
    }
  }
  render() {
    return (
        <Navigator style={{width: '100%', height: '100%'}}
          initialRoute={{ title: 'News Scene', index: 0 }}
          renderScene={(route, navigator)  => {
            if(route.index===0) {
              return (
                <News route={route} navigator={navigator}/>
              )
            }
            else if (route.index===1) {
              return (
                <People route={route} navigator={navigator}/>
              )
            }
          }}
        />
    );
  }
}
