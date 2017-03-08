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

export default class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people:
      [
        {
          name: 'Iqbal'
        },
        {
          name: 'Radit'
        },
        {
          name: 'Timo'
        },
        {
          name: 'Yoma'
        },
        {
          name: 'Yoni'
        }
      ],
      text: ''
    }
  }

  render() {
    return (
      <View>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>Hacktiv8 People</Text>
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
          {this.state.people.filter(results=>
            (results.name === null ? '' : results.name)
            .match(new RegExp(this.state.text,'i'))
          ).map((item,index) =>
            <View key={index} style={styles.contentItem}>
              <Text style={{margin:10}}>{item.name}</Text>
            </View>
          )}
        </ScrollView>
        <Button
          onPress={() => {
            this.props.navigator.pop()
          }}
          title="News"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}
        />
      </View>
    );
  }
}
