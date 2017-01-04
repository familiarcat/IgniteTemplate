import React, { Component } from 'react'
import { Images } from '../../../Themes/_Web'
import HTMLParsingService from '../../../Services/_Web/HTMLParsingService'

import styles from "../Styles/PageStyle"

const htmlParsingService = new HTMLParsingService()

class SideBarTemplate extends Component {
    renderBackgroundImage() {
        return <div style={styles.backgroundImageContainer}><img src={Images[this.props.data.backgroundImage]} /></div>
    }
    renderSideBarImage(){
        return <img src={Images.sideBarImages[this.props.data.images.sideBarImage]} style={styles.sideBarImage}/>
    }
    renderColumns() {
        return this.props.data.columns.map((column, index) => {
            let columnComponent = htmlParsingService.parse(column.body, styles);
            return (
                <div key={index} style={styles[column.style]}>
                    {columnComponent}
                </div>
            )
        })
    }
    render() {
        return(
        <div style={styles.page} >
            {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
            {this.props.data.images ? this.renderSideBarImage() : null}
            {this.props.data ? this.renderColumns() : null}
        </div>
        )
    }
}
export default SideBarTemplate