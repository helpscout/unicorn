import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import { CONTEXT_KEYS } from './constants'
import Router from './Router'
import Switch from './Switch'
import Provider from './Provider'
import createResources from './createResources'

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
  history = null
  resources = {}

  static childContextTypes = {
    [CONTEXT_KEYS.api]: () => {},
    [CONTEXT_KEYS.apiClient]: () => {},
    [CONTEXT_KEYS.history]: () => {},
    [CONTEXT_KEYS.resources]: () => {},
  }

  getChildContext() {
    return {
      [CONTEXT_KEYS.api]: this.api,
      [CONTEXT_KEYS.apiClient]: this.apiClient,
      [CONTEXT_KEYS.history]: this.history,
      [CONTEXT_KEYS.resources]: this.resources,
    }
  }

  enhanceExtraArguments = extraArguments => {
    const { api, apiClient, history } = extraArguments

    this.api = api
    this.apiClient = apiClient
    this.history = history
    this.resources = createResources(this.props.resources, extraArguments)

    return { ...extraArguments, resources: this.resources }
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
