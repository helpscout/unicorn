import {
  applyMiddleware,
  createStore as createReduxStore,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { isDevelopmentEnv, isStorybookEnv } from './utils/env.utils'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const defaultOptions = {
  extraArguments: {},
}

export const createStore = (
  reducer,
  preloadedState = {},
  customMiddleware = [],
  options = defaultOptions,
): any => {
  const middleware = []
  const mergedOptions = { ...defaultOptions, ...options }
  const { extraArguments } = mergedOptions

  middleware.push(thunk.withExtraArgument(extraArguments))

  if (isDevelopmentEnv() || isStorybookEnv()) {
    const logger = createLogger({ collapsed: true })
    middleware.push(logger)
  }

  middleware.concat(customMiddleware)

  return createReduxStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  )
}

export default createStore
