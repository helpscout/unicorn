import { createRoutes, selectors } from '../src'
import Home from './screens/Home'
import Users from './screens/Users'
import User from './screens/User'

const routes = [
  {
    path: '/',
    render: Home,
    page: {
      title: 'Unicorn App',
    },
  },
  {
    path: '/users',
    render: Users,
    page: {
      title: 'Users',
    },
  },
  {
    path: '/users/:id',
    render: User,
    page: {
      title: 'Users',
    },
  },
]

export default createRoutes({ routes })
