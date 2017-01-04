// @flow

import React, { Component } from 'react'
import { View, Text, ListView, Image } from 'react-native'
import { Images } from '../Themes/'
import { SideBarTemplate, FullPageImageTemplate, ThreeColumnTemplate, TwoColumnTemplate } from "./PageTemplates"

// Styles
import styles from './Styles/PageStyle'

const templates = {
    sidebar:SideBarTemplate,
    fullPageImage:FullPageImageTemplate,
    threeColumn:ThreeColumnTemplate,
    twoColumn:TwoColumnTemplate
}

class Page extends React.Component {

    renderTemplate() {
        let Template = templates[this.props.data.template]
        if (Template){
            return <Template {...this.props}/>
        } else {
            return null
        }
        
    }

    render() {
        return (
            <View style={styles.page}>
                {this.props.data.template ? this.renderTemplate() : null}
            </View>
        )
    }
}


export default Page
