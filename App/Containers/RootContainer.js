// @flow

import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
//import NavigationRouter from 'NavigationRouter'
import { connect } from 'react-redux'


// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
    //   this.props.startup()
    // }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text>Hello React Native</Text>
      </View>
    )
  }
}

const mapStateToDispatch = (dispatch) => ({
  //startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapStateToDispatch)(RootContainer)
