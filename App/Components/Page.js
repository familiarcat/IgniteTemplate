// @flow

import React from 'react'
import { View, Text, ListView, Image } from 'react-native'
import HTMLView from 'react-native-htmlview'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'

// Styles
import styles from './Styles/PageStyle'


class Page extends React.Component {
  
  renderColumns() {
      return this.props.data.columns.map((column, index) => {
          return (
              <View key={index} style={styles[column.type]}>
                {
                    this.props.data.backgroundImage ? <Image source={{uri:'../Images/' + this.props.data.backgroundImage}} style={styles.backgroundImage}/> : null
                }
                <HTMLView value={column.body}/>
              </View>
          )
      })
  }
  
  render() {
    return (
      <View style={styles.page}>
        {this.props.data.columns ? this.renderColumns() : null}
      </View>
    )
  }
}


export default Page
