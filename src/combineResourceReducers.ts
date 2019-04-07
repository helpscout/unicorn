import { combineReducers } from 'redux'

const combineResourceReducers = resources => {
  const reducers = Object.keys(resources).reduce((reducers, resource) => {
    return { ...reducers, [resource]: resources[resource].reducer }
  }, {})

  return combineReducers(reducers)
}

export default combineResourceReducers
