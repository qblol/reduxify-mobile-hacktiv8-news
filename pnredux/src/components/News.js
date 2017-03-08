import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Alert
} from 'react-native'
import { styles } from '../styles'

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news:
      [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1
        }
      ],
      text: ''
    }
  }

  render() {
    return (
      <View>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>Hacktiv8 News</Text>
          <View style={{height:30, width:'100%'}} search>
            <TextInput
              style={styles.textInput}
              placeholder='Search here..'
              onChangeText={keyword => this.setState({text: keyword}) }
              value={this.state.text}
              />
          </View>
        </View>
        <ScrollView
          style={styles.content}
          >
          {this.state.news.filter(results=>
            (results.title === null ? '' : results.title)
            .match(new RegExp(this.state.text,'i'))
          ).map(item =>
            <View key={item.objectID} style={styles.contentItem}>
              <Text style={{margin:10}}>{item.title}</Text>
              <Text style={{margin:10}}>{item.author}</Text>
            </View>
          )}
        </ScrollView>
        <Button
          onPress={() => {
            this.props.navigator.push({
              title: 'People Scene',
              index: 1
            })
          }}
          title="People"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}
        />
      </View>
    );
  }
}
