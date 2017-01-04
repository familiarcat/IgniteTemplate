// @flow

import React, { Component, PropTypes } from 'react'
import { Carousel } from "react-bootstrap"
import { Images } from '../../Themes/_Web'
import styles from './Styles/CoverPageStyle'


class CoverPage extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.backgroundImage ? <img src={Images[this.props.data.backgroundImage]} style={styles.backgroundImage} /> : null
                }
                <h2 style={styles.title}>{this.props.data.title ? this.props.data.title : null}</h2>
            </div>
        )
    }
}

CoverPage.propTypes = {
    title: React.PropTypes.string
}


export default CoverPage
