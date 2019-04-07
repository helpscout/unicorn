import { createRoutes } from '../src'
import Home from './screens/Home'
import Users from './screens/Users'
import User from './screens/User'

const routes = [
  {
    path: '/',
    render: Home,
  },
  {
    path: '/users',
    render: Users,
  },
  {
    path: '/users/:id',
    render: User,
  },
]

export default createRoutes({ routes })
