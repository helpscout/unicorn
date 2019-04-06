import * as React from 'react'
import { AppProvider } from '../src'
import Nav from './app/Nav'
import store from './store'
import routes from './routes'

const resources = ['posts']

const App = () => {
  return (
    <AppProvider resources={resources} store={store} routes={routes}>
      <Nav />
    </AppProvider>
  )
}

export default App
