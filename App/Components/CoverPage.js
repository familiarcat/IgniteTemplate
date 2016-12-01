// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Images } from '../Themes/'
// Styles
import styles from './Styles/CoverPageStyle'


class CoverPage extends React.Component {
    render() {
        return (
            <View style={styles.coverPage}>
                {
                    this.props.data.backgroundImage ? <Image source={Images[this.props.data.backgroundImage]} style={styles.backgroundImage}/> : null
                }
                {
                    console.debug("cover page bg image?", Images[this.props.data.backgroundImage])
                }
                <Text>{this.props.data.title ? this.props.data.title : null}</Text>
            </View>
        )
    }
}

CoverPage.propTypes = {
    title: React.PropTypes.string
}


export default CoverPage
