import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import { CONTEXT_KEYS } from './constants'
import Router from './Router'
import Switch from './Switch'
import Provider from './Provider'
import createResources from './createResources'
import bindApiActions from './bindApiActions'

interface Props {
  apiClient?: any
  basename?: string
  children: any
  forceRefresh?: boolean
  getUserConfirmation?: () => void
  initialEntries?: Array<any>
  initialIndex?: number
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

  static childContextTypes = {
    [CONTEXT_KEYS.api]: () => {},
    [CONTEXT_KEYS.apiClient]: () => {},
    [CONTEXT_KEYS.apiEndPoints]: () => {},
    [CONTEXT_KEYS.history]: () => {},
    [CONTEXT_KEYS.resources]: () => {},
  }

  getChildContext() {
    return {
      [CONTEXT_KEYS.api]: this.api,
      [CONTEXT_KEYS.apiClient]: this.apiClient,
      [CONTEXT_KEYS.apiEndPoints]: this.apiClient,
      [CONTEXT_KEYS.history]: this.history,
      [CONTEXT_KEYS.resources]: this.resources,
    }
  }

  getApiClientFromArgs = extraArguments => {
    return this.props.apiClient || extraArguments.apiClient
  }

  enhanceExtraArguments = extraArguments => {
    const { api, history } = extraArguments

    const apiClient = this.getApiClientFromArgs(extraArguments)

    this.apiClient = apiClient
    this.history = history
    this.resources = createResources(this.props.resources, {
      ...extraArguments,
      apiClient,
      apiEndPoints: this.apiEndPoints,
    })

    this.api = bindApiActions(this.resources, this.apiEndPoints)

    return {
      ...extraArguments,
      api: this.api,
      apiClient,
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
      initialEntries,
      initialIndex,
      keyLength,
      routes,
      store: createStore,
    } = this.props

    const routerProps = {
      basename,
      forceRefresh,
      getUserConfirmation,
      initialEntries,
      initialIndex,
      keyLength,
    }

    const store = createStore({
      enhanceExtraArguments: this.enhanceExtraArguments,
    })

    return (
      <Provider store={store}>
        <Router {...routerProps}>
          <Fragment>
            {children}
            <Switch>{routes}</Switch>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default AppProvider
