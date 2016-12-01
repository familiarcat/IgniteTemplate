// @flow

import React from 'react'
import { View, Text } from 'react-native'
import Page from './Page'
import CoverPage from './CoverPage'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import SwipeALot from 'react-native-swipe-a-lot'

// Styles
import styles from './Styles/HomeStyle'



class Section extends React.Component {
    renderPages() {
        return this.props.data.pages.map((page, index) => {
            console.debug("page:", page)
            return <Page key={index} data={page} />
        })
    }
    render() {
        console.debug('rendering section')
        return (
            <SwipeALot>
                <CoverPage data={this.props.data}/>
                {
                    this.renderPages()
                }
            </SwipeALot>
        )
    }
}


export default Section
