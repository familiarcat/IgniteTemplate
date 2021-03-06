import test from 'ava'
import { select, put } from 'redux-saga/effects'
import { selectTemperature, startup } from '../../App/Sagas/StartupSaga'

const stepper = (fn) => (mock) => fn.next(mock).value

// test('watches for the right action', (t) => {
//   const step = stepper(startup())
//   TemperatureActions.temperatureRequest('San Francisco')
//   t.deepEqual(step(), select(selectTemperature))
//   t.deepEqual(step(), put(TemperatureActions.temperatureRequest('San Francisco')))
// })
