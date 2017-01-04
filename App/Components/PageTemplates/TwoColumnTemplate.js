import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Images } from '../../Themes/'
import { Timeline, Testimonials } from './Components'
import styles from '../Styles/PageStyle'
import HTMLView from 'react-native-htmlview'

class TwoColumnTemplate extends Component {
    renderBackgroundImage() {
        return <Image source={Images[this.props.data.backgroundImage]} style={styles.backgroundImage} />
    }
    renderSideBarImage() {
        return <View style={styles.columnTwo}><Image source={Images.sideBarImages[this.props.data.images.sideBarImage]} style={styles.columnTwoImage}/></View>
    }
    renderColumns() {
        return this.props.data.columns.map((column, index) => {
            let component = null
            switch (true) {
                case column.testimonials != null && column.testimonials != undefined:
                    component = <Testimonials key={index} data={column.testimonials}/>
                    break
                case column.timeline != null && column.timeline != undefined:
                    component = <Timeline key={index} data={column.timeline}/>
                    break
                default:
                    component = (
                        <View key={index} style={styles[column.style]}>
                            <HTMLView value={column.body} stylesheet={styles} />
                        </View>
                    )
            }
            return component
        })
    }
    render() {
        return (
            <View style={styles.page} >
                {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
                {this.props.data.images ? this.renderSideBarImage() : null}
                {this.props.data.columns ? this.renderColumns() : null}
            </View>
        )
    }
}
export default TwoColumnTemplate