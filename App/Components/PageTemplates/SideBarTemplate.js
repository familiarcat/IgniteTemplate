import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Images } from '../../Themes/'
import styles from "../Styles/PageStyle"
import HTMLView from 'react-native-htmlview'

class SideBarTemplate extends Component {
    renderBackgroundImage() {
        return <Image source={Images[this.props.data.backgroundImage]} style={styles.backgroundImage}/> 
    }
    renderSideBarImage(){
        return <Image source={Images.sideBarImages[this.props.data.images.sideBarImage]} style={styles.sideBarImage}/>
    }
    renderListItem(node, index, list) {
        if (node.name == "ul"){
            console.log("custom rendering LI: ", node, index, list)
            var BULLET = ""
        }
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
        //console.debug('renderBackgoundImage?', this.props.data.backgroundImage)
        return(
        <View style={styles.page} >
            {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
            {this.props.data.images ? this.renderSideBarImage() : null}
            {this.props.data.columns ? this.renderColumns() : null}
        </View>
        )
    }
}
export default SideBarTemplate