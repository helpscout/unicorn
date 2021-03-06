import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import * as appCache from '../core/appCache'
import { CONTEXT_KEYS } from '../constants'
import Router from './Router'
import ScrollToTop from './ScrollToTop'
import Switch from './Switch'
import Provider from './Provider'
import bindApiActions from '../core/bindApiActions'
import createApiClient from '../core/createApiClient'
import createResources from '../core/createResources'
import createStore from '../core/createStore'
import { isFunction, isObject } from '../utils/is.utils'

interface Props {
  apiClient?: any
  basename?: string
  children: any
  forceRefresh?: boolean
  getUserConfirmation?: () => void
  keyLength?: number
  resources?: Array<any>
  routes: Array<any>
  store: any
}

export class AppProvider extends React.Component<Props> {
  api = {}
  apiClient = null
  apiEndPoints = {}
  history = null
  resources = {}
  store = null

  static childContextTypes = {
    [CONTEXT_KEYS.api]: () => {},
    [CONTEXT_KEYS.apiClient]: () => {},
    [CONTEXT_KEYS.apiEndPoints]: () => {},
    [CONTEXT_KEYS.history]: () => {},
    [CONTEXT_KEYS.resources]: () => {},
  }

  componentWillMount() {
    this.createStore()
    this.initializeAppCache()
  }

  createStore() {
    const { store: storeProp } = this.props
    const store = storeProp || createStore()

    this.store = store({
      enhanceExtraArguments: this.enhanceExtraArguments,
    })
  }

  createApiClient(apiClient) {
    if (isFunction(apiClient)) {
      return apiClient
    }

    if (isObject(apiClient)) {
      return createApiClient(apiClient)
    }

    return createApiClient()
  }

  initializeAppCache() {
    appCache.initialize()
    appCache.setState({
      api: this.api,
      apiClient: this.apiClient,
      apiEndPoints: this.apiEndPoints,
      history: this.history,
      resources: this.resources,
      store: this.store,
    })
  }

  getChildContext() {
    return {
      [CONTEXT_KEYS.api]: this.api,
      [CONTEXT_KEYS.apiClient]: this.apiClient,
      [CONTEXT_KEYS.apiEndPoints]: this.apiEndPoints,
      [CONTEXT_KEYS.history]: this.history,
      [CONTEXT_KEYS.resources]: this.resources,
    }
  }

  getApiClientFromArgs = extraArguments => {
    return this.props.apiClient || extraArguments.apiClient
  }

  enhanceExtraArguments = extraArguments => {
    const { history } = extraArguments

    const apiClient = this.getApiClientFromArgs(extraArguments)

    this.apiClient = this.createApiClient(apiClient)
    this.history = history

    this.resources = createResources(this.props.resources, {
      ...extraArguments,
      apiClient: this.apiClient,
      apiEndPoints: this.apiEndPoints,
    })

    this.api = bindApiActions(this.resources, this.apiEndPoints)

    return {
      ...extraArguments,
      api: this.api,
      apiClient: this.apiClient,
      apiEndPoints: this.apiEndPoints,
      resources: this.resources,
    }
  }

  render() {
    const {
      basename,
      children,
      forceRefresh,
      getUserConfirmation,
      keyLength,
      routes,
    } = this.props

    const routerProps = {
      basename,
      forceRefresh,
      getUserConfirmation,
      keyLength,
    }

    const store = this.store

    return (
      <Provider store={store}>
        <Router {...routerProps}>
          <Fragment>
            <ScrollToTop />
            {children}
            <Switch>{routes}</Switch>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default AppProvider
