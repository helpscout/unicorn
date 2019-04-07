import { createRoutes } from '../src'
import Home from './screens/Home'
import Users from './screens/Users'

const routes = [
  {
    path: '/',
    render: Home,
  },
  {
    path: '/users',
    render: Users,
  },
]

export default createRoutes({ routes })
