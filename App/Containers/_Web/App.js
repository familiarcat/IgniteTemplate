import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../../Redux'
import applyConfigSettings from '../../Config/_Web'

import styles from './Styles/RootContainerStyle'

applyConfigSettings()

const store = createStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer style={styles.mainContainer}/>
      </Provider>
    )
  }
}

