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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionSearchNews } from '../actions'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
          {this.props.news.filter(results=>
            (results.title === null ? '' : results.title)
            .match(new RegExp(this.state.text,'i'))
          ).map((item,index) =>
            <View key={index} style={styles.contentItem}>
              <Text style={{margin:10}}>{item.title}</Text>
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

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(News)
