import React, { Component } from 'react'
import { Images } from '../../../Themes/_Web'
import { Timeline, Testimonials } from './Components'
import styles from '../Styles/PageStyle'
import HTMLParsingService from '../../../Services/_Web/HTMLParsingService'


const htmlParsingService = new HTMLParsingService()

class TwoColumnTemplate extends Component {
    renderBackgroundImage() {
        return <img src={Images[this.props.data.backgroundImage]} style={styles.backgroundImage} />
    }
    renderSideBarImage() {
        return <div style={styles.columnTwo}><img src={Images.sideBarImages[this.props.data.images.sideBarImage]} style={styles.columnTwoImage}/></div>
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
                    let columnComponent = htmlParsingService.parse(column.body, styles);
                    component = (
                        <div key={index} style={styles[column.style]}>
                            {columnComponent}
                        </div>
                    )
            }
            return component
        })
    }
    render() {
        return (
            <div style={styles.page} >
                {this.props.data.backgroundImage ? this.renderBackgroundImage() : null}
                {this.props.data.images ? this.renderSideBarImage() : null}
                {this.props.data.columns ? this.renderColumns() : null}
            </div>
        )
    }
}
export default TwoColumnTemplate