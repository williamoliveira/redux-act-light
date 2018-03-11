# redux-act-light

A simpler and smaller version of [redux-act](https://github.com/pauldijou/redux-act), limited only to its core API

## Install

```
# NPM
npm install redux-act-light --save
# Yarn
yarn add redux-act-light
```

## Usage example

```js
// Import functions
import { createStore } from 'redux'
import { createAction, createReducer } from 'redux-act-light'

// Create an action creator (type is required)
const add = createAction('ADD')
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

// Create a reducer
const counterReducer = createReducer({
  [add]: (state, action) => state + action.payload,
  [increment]: state => state + 1,
  [decrement]: state => state - 1,
}, 0) // <-- This is the initial state

// Create the store
const store = createStore(counterReducer)

// Dispatch actions
store.dispatch(increment()); // store.getState() === 1
store.dispatch(increment()); // store.getState() === 2
store.dispatch(decrement()); // store.getState() === 1
store.dispatch(add(5)); // store.getState() === 6
```

## Credits

- [redux-act](https://github.com/pauldijou/redux-act)
