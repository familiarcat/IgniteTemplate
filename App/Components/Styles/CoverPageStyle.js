// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
    width: 1024,
    height: 768,
    title: {
        left: 50,
        top: 650,
        backgroundColor: Colors.transparent,
        color: "white",
        ...Fonts.style.h3
    }
})
