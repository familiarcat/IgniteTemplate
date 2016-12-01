// @flow

import React, { Component, PropTypes } from 'react'
import { Carousel } from "react-bootstrap"
// external libs
import { Images } from '../../Themes/_Web'
// Styles
import styles from './Styles/CoverPageStyle'


class CoverPage extends Component {
    render() {
        console.debug("cover page data:", this.props.data.backgroundImage)
        return (
            <div>
                {
                    this.props.data.backgroundImage ? <img src={Images[this.props.data.backgroundImage]} /> : null
                }
                <h2>{this.props.data.title ? this.props.data.title : null}</h2>
            </div>
        )
    }
}

CoverPage.propTypes = {
    title: React.PropTypes.string
}


export default CoverPage
