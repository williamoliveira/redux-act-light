import { createAction, createReducer } from '../lib/index'
import chai from 'chai'
const expect = chai.expect

describe('createAction', () => {
  it('should create an action creator with type attribute', () => {
    expect(typeof createAction('FOO')).to.equal('function')
    expect(createAction('FOO').type).to.equal('FOO')
  })

  it('should create an action without payload', () => {
    const fooActionCreator = createAction('FOO')

    expect(fooActionCreator()).to.deep.equal({
      type: 'FOO',
      payload: undefined,
    })
  })

  it('should create an action with payload', () => {
    const fooActionCreator = createAction('FOO')

    expect(fooActionCreator({ bar: 'baz' })).to.deep.equal({
      type: 'FOO',
      payload: { bar: 'baz' },
    })
  })
})

describe('createReducer', () => {
  const actionHandlers = {
    TYPE1: (state, action) => action.payload,
    TYPE2: (state, action) => action.payload,
  }

  const initialState = {}

  it('should create a reducer', () => {
    const reducer = createReducer(actionHandlers, initialState)

    expect(typeof reducer).to.equal('function')
  })

  it('should create a reducer that handles actions', () => {
    const previousState = {}

    const action = {
      type: 'TYPE1',
      payload: {
        foo: 'bar',
      },
    }

    const nextState = {
      foo: 'bar',
    }

    const reducer = createReducer(actionHandlers, initialState)

    expect(reducer(previousState, action)).to.deep.equal(nextState)
  })
})