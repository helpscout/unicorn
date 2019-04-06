import * as React from 'react'
import { AppProvider } from '../src'
import store from './store'
import routes from './routes'

const App = () => {
  return <AppProvider store={store} routes={routes} />
}

export default App
