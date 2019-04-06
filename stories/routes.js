import { createRoutes } from '../src'
import Home from './screens/Home'
import About from './screens/About'

const routes = [
  {
    path: '/',
    render: Home,
  },
  {
    path: '/about',
    render: About,
  },
]

export default createRoutes({ routes })
