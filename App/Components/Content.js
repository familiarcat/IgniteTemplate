// @flow

import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Section from './Section'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'

// Styles
import styles from './Styles/HomeStyle'

class Content extends React.Component {
  renderSections() {
    return this.props.data.sections.map((section, index) => {
      return <Section key={index} data={section} />
    })
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.props.data ? this.renderSections() : null}
      </View>
    )
  }
}

Content.propTypes = {
    data: React.PropTypes.object
}


export default Content
