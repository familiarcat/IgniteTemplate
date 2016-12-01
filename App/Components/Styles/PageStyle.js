// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  page: {
      flex: 1,
      flexDirection: 'row'
  },
  sidebar: {
      width: 100,
  },
  body: {
      width: 200
  }
})