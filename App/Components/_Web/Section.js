import React, { Component, PropTypes } from 'react'
import Page from "./Page"
import CoverPage from "./CoverPage"
import { Carousel } from "react-bootstrap"

import styles from './Styles/SectionStyle'

/** The app entry point */
class Section extends Component {
    renderPages() {
        return this.props.data.pages.map((page, index) => {
            return <Carousel.Item key={index}>
                <Page data={page} />
            </Carousel.Item>
        })
    }
    render() {
        return (
            <Carousel interval={0} style={styles.mainContainer}>
                <Carousel.Item>
                    <CoverPage data={this.props.data} />
                </Carousel.Item>
                {this.props.data ? this.renderPages() : null}
            </Carousel>
        )
    }
}

Section.propTypes = {
    data: React.PropTypes.object
}

// Wrap the component to inject dispatch and state into it
export default Section
