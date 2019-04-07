import * as React from 'react'
import hoistNonReactStatics from '@helpscout/react-utils/dist/hoistNonReactStatics'
import connect from './connect'
import Query from './Query'

const withQuery = ({ query }) => WrappedComponent => {
  interface Props {
    children?: any
  }

  class WithQuery extends React.Component<Props> {
    render() {
      return (
        // @ts-ignore
        <Query query={query}>
          {props => {
            return <WrappedComponent {...props} />
          }}
        </Query>
      )
    }
  }

  const ComposedComponent = connect()(WithQuery)

  return hoistNonReactStatics(ComposedComponent, WrappedComponent)
}

export default withQuery
