import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import Route from './Route'
import Redirect from './Redirect'

type CreateRouteProps = {
  routes: Array<any>
  redirects: Array<any>
}

const defaultProps = {
  routes: [],
  redirects: [],
}

const createRoutes = (props: CreateRouteProps = defaultProps) => {
  const mergedProps = { ...defaultProps, ...props }
  const { routes, redirects } = mergedProps

  const routeComponents = routes.map(props => <Route {...props} />)
  const redirectComponents = redirects.map(props => <Redirect {...props} />)

  const routeCollection = [...routeComponents, ...redirectComponents]

  if (!routeCollection.length) return null

  return <Fragment>{routeCollection}</Fragment>
}

export default createRoutes
