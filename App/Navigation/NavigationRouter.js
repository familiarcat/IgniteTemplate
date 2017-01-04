import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavItems from './NavItems'
import { connect } from 'react-redux'
import R from 'ramda'

// screens identified by the router
import Content from '../Containers/Content'


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {

  render () {
    return (
      <Router>
        <Scene key='content'>
          <Content data={this.props.data}/>
        </Scene>
      </Router>
    )
  }
}

NavigationRouter.propTypes = {
    data: React.PropTypes.object
}

export default NavigationRouter

