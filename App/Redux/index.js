// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    startup: require('./StartupRedux').reducer,
    content: require('./ContentRedux').reducer
    // login: require('./LoginRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
