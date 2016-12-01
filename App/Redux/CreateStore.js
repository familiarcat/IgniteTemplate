import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import R from 'ramda'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  console.log("///2//// creating store", __DEV__)
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
  if (__DEV__) {
    // the logger master switch
    const USE_LOGGING = __DEV__ || __WEB__
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    })
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  // if (ReduxPersist.active) {
  //   enhancers.push(autoRehydrate())
  // }
  // in dev mode, we'll create the store through Reactotron
  
  const createAppropriateStore = __DEV__ && !__WEB__ ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  
  
  // const store = (__DEV__ && !__WEB__) ? 
  // if  {
  //   console.tron.createStore(rootReducer, compose(...enhancers))
  // } else {
  //   createStore(rootReducer, compose(...enhancers))
  // }
  //const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  // if (ReduxPersist.active) {
  //   RehydrationServices.updateReducers(store)
  // }
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    console.log("enabling reducer hot reloading")
    module.hot.accept('../Redux', () => {
      const nextRootReducer = require('../Redux/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
