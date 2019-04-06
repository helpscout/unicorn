import { createRoutes } from '../src'
import Home from './screens/Home'

const routes = [
  {
    path: '/',
    render: Home,
  },
]

export default createRoutes({ routes })
