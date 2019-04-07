import {
  applyMiddleware,
  createStore as createReduxStore,
  compose,
} from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createApiClient from './createApiClient'
import combineResourceReducers from './combineResourceReducers'
import { isDevelopmentEnv, isStorybookEnv } from './utils/env.utils'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const defaultOptions = {
  extraArguments: {
    api: {},
    apiEndPoints: {},
    apiClient: createApiClient(),
    resources: {},
  },
}

export const createStore = (
  reducer: any = () => {},
  preloadedState?: any,
  customMiddleware = [],
  options = defaultOptions,
): any => {
  const middleware = []
  const mergedOptions = { ...defaultOptions, ...options } as any

  const { extraArguments } = mergedOptions

  const mergedExtraArguments = {
    ...defaultOptions.extraArguments,
    ...extraArguments,
  }

  return (
    { enhanceExtraArguments } = { enhanceExtraArguments: args => args },
  ) => {
    const enhancedArguments = enhanceExtraArguments(mergedExtraArguments)
    middleware.push(thunk.withExtraArgument(enhancedArguments))

    if (isDevelopmentEnv() || isStorybookEnv()) {
      const logger = createLogger({ collapsed: true })
      middleware.push(logger)
    }

    middleware.concat(customMiddleware)

    const enhancedReducer = combineResourceReducers(enhancedArguments.resources)
    const baseReducer = typeof reducer === 'function' ? { reducer } : reducer

    const store = createReduxStore(
      combineReducers({ ...baseReducer, ...enhancedReducer }),
      preloadedState,
      composeEnhancers(applyMiddleware(...middleware)),
    )

    return store
  }
}

export default createStore
