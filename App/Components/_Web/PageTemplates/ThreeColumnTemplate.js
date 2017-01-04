import React, { Component } from 'react'
import { Images } from '../../../Themes/_Web'
import styles from "../Styles/PageStyle"
import HTMLParsingService from '../../../Services/_Web/HTMLParsingService'


const htmlParsingService = new HTMLParsingService()

class ThreeColumnTemplate extends Component {
    renderBackgroundImage() {
        return <img src={Images[this.props.data.backgroundImage]} style={styles.backgroundImage}/> 
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
        //console.debug('renderBackgoundImage?', this.props.data.backgroundImage)
        return(
        <div style={styles.page} >
            {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
            <div style={styles.threeColumnContainer}>
                {this.props.data.columns ? this.renderColumns() : null}
            </div>
            <div style={styles.pageTitleContainer}>
                <span style={styles.pageTitle}>{this.props.data.title}</span>
            </div>
            <div style={styles.sideBarImageContainer}>
                {this.props.data.images ? this.renderSideBarImage() : null}
                <div style={styles.sideBarImageFooter}/>
            </div>
             
            
        </div>
        )
    }
}
export default ThreeColumnTemplate