import * as React from 'react'
import { connect } from 'react-redux'
import withRouter from '../wrappers/withRouter'
import hoistNonReactStatics from '@helpscout/react-utils/dist/hoistNonReactStatics'

export const connectWithRouter = (...args) => WrappedComponent => {
  class WithRouter extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  const ComposedComponent = withRouter(connect(...args)(WithRouter))

  return hoistNonReactStatics(ComposedComponent, WrappedComponent)
}

export default connectWithRouter
