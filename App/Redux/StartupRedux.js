import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupRequest: ['data'],
  startupSuccess: ['payload'],
  startupFailure: null,
  getPlatform: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  platform: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

// Check if we are in a browser by the Window class name

export const getPlatform = state => {
  console.log('getting platform')
  return state.merge({platform: window.constructor.name == 'Window' ? 'web' : 'native'})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP_REQUEST]: request,
  [Types.STARTUP_SUCCESS]: success,
  [Types.STARTUP_FAILURE]: failure,
  [Types.GET_PLATFORM]: getPlatform
})
