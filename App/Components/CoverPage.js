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
                <Text style={styles.title}>{this.props.data.title ? this.props.data.title : null}</Text>
            </View>
        )
    }
}

CoverPage.propTypes = {
    data: React.PropTypes.object
}


export default CoverPage
