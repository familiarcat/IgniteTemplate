import { takeLatest } from 'redux-saga'
import ContentApi from '../Services/Content'
// import API from '../Services/Api'
// import SlideShowApi from '../Services/SlideShowApi'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ContentTypes } from '../Redux/ContentRedux'
// import { TemperatureTypes } from '../Redux/TemperatureRedux'
// import { LoginTypes } from '../Redux/LoginRedux'
// import { SlideShowTypes } from '../Redux/SlideShowRedux'
// import { AppStateTypes } from '../Redux/AppStateRedux'
// import { NotificationTypes } from '../Redux/NotificationsRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSaga'
import { getContent } from './ContentSaga'
// import { login } from './LoginSagas'
// import { getTemperature } from './TemperatureSagas'
// import { listSlideShows, getSlideShow, updateSlideShow } from './SlideShowSagas'
// import { setStateToBackground } from './AppStateSagas'
// import { requestPermissions } from './NotificationsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create()
// const slideShowApi = SlideShowApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  console.log("////// CONTENT API", ContentApi)
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ContentTypes.CONTENT_REQUEST, getContent, ContentApi),
    //getPlatform()
  ]
}
