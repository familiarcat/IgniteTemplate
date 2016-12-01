import React, { Component, PropTypes } from 'react'
import { Carousel } from "react-bootstrap"
import { Parser } from 'html-to-react'
import styles from './Styles/PageStyle'

const htmlParser = new Parser()

class Page extends Carousel.Item {
    
    renderColumns() {
        return this.props.data.columns.map((column, index) => {
            console.debug("rendering column", htmlParser)
            let columnComponent = htmlParser.parse(column.body)
            return (
                <div key={index}>
                    {columnComponent}
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.props.data ? this.renderColumns() : null}
            </div>
        )
    }
}

Page.propTypes = {
    data: React.PropTypes.object
}

// Wrap the component to inject dispatch and state into it
export default Page
