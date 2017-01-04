import React, { Component } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import { Images } from '../../Themes/'
import styles from "../Styles/PageStyle"
import HTMLView from 'react-native-htmlview'


class FullPageImageTemplate extends Component {
    renderBackgroundImage() {
        return <Image source={Images[this.props.data.backgroundImage]} style={styles.footerImage} />
    }
    renderFullPageImage() {
        return <Image source={Images.fullPageImages[this.props.data.images.fullPageImage]} style={styles.fullPageImage} />
    }
    renderColumns() {
        return this.props.data.columns.map((column, index) => {
            return (
                <View key={index} style={styles[column.style]}>
                    <HTMLView value={column.body} stylesheet={styles} renderNode={this.renderListItem}/>
                </View>
            )
        })
    }
    render() {
        // console.debug('renderBackgoundImage in HorizontalScrollTemplate?', styles.fullPageImage)
        return (
            <View>
                <Text style={styles.pageTitle}>{this.props.data.title}</Text>
                {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
                <View style={styles.fullPageImageContainer}>
                    {this.props.data.images.fullPageImage ? this.renderFullPageImage() : null}
                </View>
                {this.props.data.columns ? this.renderColumns() : null}
            </View>
        )
    }
}
export default FullPageImageTemplate