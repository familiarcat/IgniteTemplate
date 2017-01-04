import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Images } from '../../Themes/'
import styles from "../Styles/PageStyle"
import HTMLView from 'react-native-htmlview'

class ThreeColumnTemplate extends Component {
    renderBackgroundImage() {
        return <Image source={Images[this.props.data.backgroundImage]} style={styles.backgroundImage}/> 
    }
    renderSideBarImage(){
        return <Image source={Images.sideBarImages[this.props.data.images.sideBarImage]} style={styles.sideBarImage}/>
    }
    
    renderColumns() {
        return this.props.data.columns.map((column, index) => {
            return (
                <View key={index} style={styles[column.style]}>
                    <HTMLView value={column.body} stylesheet={styles}/>
                </View>
            )
        })
    }
    render() {
        //console.debug('renderBackgoundImage?', this.props.data.backgroundImage)
        return(
        <View style={styles.page} >
            {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
            <View style={styles.threeColumnContainer}>
                {this.props.data.columns ? this.renderColumns() : null}
            </View>
            <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitle}>{this.props.data.title}</Text>
            </View>
            <View style={styles.sideBarImageContainer}>
                {this.props.data.images ? this.renderSideBarImage() : null}
                <View style={styles.sideBarImageFooter}/>
            </View>
             
            
        </View>
        )
    }
}
export default ThreeColumnTemplate