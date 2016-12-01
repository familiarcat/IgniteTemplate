/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import ContentActions from '../Redux/ContentRedux'

export function * getContent (api, action) {
  const { data } = action
  console.log("gettingContent from Saga", data)
  const response = yield call(api.getContent, data)
  console.log("response:", response)
  if (response.ok) {
    yield put(ContentActions.contentSuccess(response.data))
  } else {
    yield put(ContentActions.contentFailure())
  }
}
