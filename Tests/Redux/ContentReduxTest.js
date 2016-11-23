import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/ContentRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.contentRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.contentSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.contentFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
