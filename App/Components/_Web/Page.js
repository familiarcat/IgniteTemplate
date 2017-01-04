import React, { Component, PropTypes } from 'react'
import { Carousel } from "react-bootstrap"
import styles from './Styles/PageStyle'
import { Images } from '../../Themes/_Web'
import { SideBarTemplate, FullPageImageTemplate, ThreeColumnTemplate, TwoColumnTemplate } from "./PageTemplates"

const templates = {
    sidebar:SideBarTemplate,
    fullPageImage:FullPageImageTemplate,
    threeColumn:ThreeColumnTemplate,
    twoColumn:TwoColumnTemplate
}

class Page extends Carousel.Item {

    renderTemplate() {
        let Template = templates[this.props.data.template]
        return <Template {...this.props}/>
    }
    render() {
        return (
            <div style={styles.page}>
                {this.props.data.template ? this.renderTemplate() : null}
            </div>
        )
    }
}

Page.propTypes = {
    data: React.PropTypes.object
}

export default Page
