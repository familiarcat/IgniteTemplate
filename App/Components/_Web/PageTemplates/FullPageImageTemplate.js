import React, { Component } from 'react'
import { Images } from '../../../Themes/_Web'
import HTMLParsingService from '../../../Services/_Web/HTMLParsingService'
import styles from "../Styles/PageStyle"


const htmlParsingService = new HTMLParsingService()

class FullPageImageTemplate extends Component {
    renderBackgroundImage() {
        return <img src={Images[this.props.data.backgroundImage]} style={styles.footerImage} />
    }
    renderFullPageImage() {
        return <img src={Images.fullPageImages[this.props.data.images.fullPageImage]} style={styles.fullPageImage} />
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
        // console.debug('renderBackgoundImage in HorizontalScrollTemplate?', styles.fullPageImage)
        return (
            <div style={styles.page}>
                <span style={styles.pageTitle}>{this.props.data.title}</span>
                <div style={styles.fullPageImageContainer}>
                    {this.props.data.images.fullPageImage ? this.renderFullPageImage() : null}
                </div>
                <div style={styles.footerImageContainer}>{this.props.data.backgroundImage ? this.renderBackgroundImage() : null}</div>
                {this.props.data.columns ? this.renderColumns() : null}
            </div>
        )
    }
}
export default FullPageImageTemplate