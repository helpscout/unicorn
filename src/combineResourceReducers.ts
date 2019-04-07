import { combineReducers } from 'redux'

const combineResourceReducers = (reducer, resources) => {
  const baseReducer = typeof reducer === 'function' ? { reducer } : reducer

  const reducers = Object.keys(resources).reduce((reducers, resource) => {
    return { ...reducers, [resource]: resources[resource].reducer }
  }, {})

  return combineReducers({ ...baseReducer, ...reducers })
}

export default combineResourceReducers
