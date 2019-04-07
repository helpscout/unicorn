import { createStore } from 'redux'

const emptyReducer = () => null
const initialCacheState = {
  api: null,
  apiClient: null,
  apiEndPoints: null,
  history: null,
  resources: null,
  store: createStore(emptyReducer),
}

let internalAppCache = initialCacheState

export const reset = () => {
  internalAppCache = initialCacheState
}

export const initialize = () => {
  reset()
  return internalAppCache
}

export const set = (key, value) => {
  internalAppCache[key] = value
  return internalAppCache
}

export const setState = nextState => {
  internalAppCache = {
    ...internalAppCache,
    ...nextState,
  }
  return internalAppCache
}

export const get = key => {
  return internalAppCache[key]
}

export const getState = () => internalAppCache
