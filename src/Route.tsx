import * as React from 'react'
import { Route as BaseRoute } from 'react-router'

export const Route = props => {
  return <BaseRoute {...props} />
}

Route.defaultProps = {
  exact: true,
}

export default Route
