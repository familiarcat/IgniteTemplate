// @flow

import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
// import NavigationRouter from 'NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ContentActions from '../Redux/ContentRedux'
import Content from '../Components/Content'

// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount() {
    this.props.startup()
    this.props.getContent()
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
    //   this.props.startup()
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Content data={this.props.content} />
        <StatusBar hidden={true} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content.payload
  }
}

const mapStateToDispatch = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  getContent: () => dispatch(ContentActions.contentRequest("native"))
})

export default connect(mapStateToProps, mapStateToDispatch)(RootContainer)
