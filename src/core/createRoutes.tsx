import * as React from 'react'
import Fragment from '@helpscout/react-utils/dist/Fragment'
import Route from '../components/Route'
import Redirect from '../components/Redirect'

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

  const routeComponents = routes.map((props, index) => (
    <Route {...props} key={`route-${index}`} />
  ))
  const redirectComponents = redirects.map((props, index) => (
    <Redirect {...props} key={`redirect-${index}`} />
  ))

  const routeCollection = [...routeComponents, ...redirectComponents]

  if (!routeCollection.length) return null

  return <Fragment>{routeCollection}</Fragment>
}

export default createRoutes
