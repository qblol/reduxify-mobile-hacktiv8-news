import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  navbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: '10%',
    width: '100%'
  },
  navbarText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10
  },
  textInput:{
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: 'white'
  },
  content: {
    backgroundColor: 'white',
    height: '85%',
    width: '100%'
  },
  contentItem: {
    backgroundColor: 'white',
    height: 75,
    borderBottomWidth: 2,
    borderBottomColor: '#F0F0F0'
  },
  button: {
    height: '5%'
  }
})
