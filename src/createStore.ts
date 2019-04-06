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
  extraArguments: { api: {}, apiClient: {} },
}

export const createStore = (
  reducer: any = () => {},
  preloadedState,
  customMiddleware = [],
  options = defaultOptions,
): any => {
  const middleware = []
  const mergedOptions = { ...defaultOptions, ...options } as any

  const { extraArguments } = mergedOptions

  const mergedExtraArguments = {
    api: {},
    apiClient: {},
    ...extraArguments,
  }

  return (
    { enhanceExtraArguments } = { enhanceExtraArguments: args => args },
  ) => {
    middleware.push(
      thunk.withExtraArgument(enhanceExtraArguments(mergedExtraArguments)),
    )

    if (isDevelopmentEnv() || isStorybookEnv()) {
      const logger = createLogger({ collapsed: true })
      middleware.push(logger)
    }

    middleware.concat(customMiddleware)

    const store = createReduxStore(
      reducer,
      preloadedState,
      composeEnhancers(applyMiddleware(...middleware)),
    )

    return store
  }
}

export default createStore
