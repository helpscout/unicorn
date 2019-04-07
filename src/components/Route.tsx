import * as React from 'react'
import { Route as BaseRoute } from 'react-router'

const setPageTitle = props => {
  const { page } = props
  if (page && page.title) {
    document.title =
      typeof page.title === 'function' ? page.title(props) : page.title
  }
}

export const Route = props => {
  const { page, render, ...rest } = props

  return (
    <BaseRoute
      {...rest}
      render={routerProps => {
        setPageTitle(props)
        return React.createElement(render, { ...routerProps })
      }}
    />
  )
}

Route.defaultProps = {
  exact: true,
}

export default Route
