import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import Router from './Router'
import Switch from './Switch'
import Provider from './Provider'
import createResources from './createResources'

interface Props {
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
  render() {
    const {
      basename,
      children,
      forceRefresh,
      getUserConfirmation,
      initialEntries,
      initialIndex,
      keyLength,
      resources: resourcesProp,
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

    let resources

    const enhanceExtraArguments = extraArguments => {
      resources = createResources(resourcesProp, extraArguments)
      return { ...extraArguments, resources }
    }

    const store = createStore({ enhanceExtraArguments })

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
