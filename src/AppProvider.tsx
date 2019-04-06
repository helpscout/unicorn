import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import Router from './Router'
import Provider from './Provider'

interface Props {
  basename?: string
  children: any
  forceRefresh?: boolean
  getUserConfirmation?: () => void
  keyLength?: number
  routes: Array<T>
  store: any
}

export class AppProvider extends React.Component<Props> {
  render() {
    const {
      basename,
      children,
      forceRefresh,
      getUserConfirmation,
      keyLength,
      routes,
      store,
    } = this.props

    const routerProps = {
      basename,
      forceRefresh,
      getUserConfirmation,
      keyLength,
    }

    return (
      <Provider store={store}>
        <Router {...routerProps}>
          <Fragment>
            {routes}
            {children}
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default AppProvider
