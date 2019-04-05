import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import Route from './router/Route'
import Redirect from './router/Redirect'

type CreateRouteOptions = {
  routes: Array<any>
  redirects: Array<any>
}

const createRoutes = (options: CreateRouteOptions) => {
  const { routes, redirects } = options

  const routeComponents = routes.map(props => <Route {...props} />)
  const redirectComponents = redirects.map(props => <Redirect {...props} />)

  const routeCollection = [...routeComponents, ...redirectComponents]

  if (!routeCollection.length) return null

  return <Fragment>{routeCollection}</Fragment>
}

export default createRoutes
