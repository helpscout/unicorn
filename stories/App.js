import * as React from 'react'
import { AppProvider, createApiClient } from '../src'
import Nav from './app/Nav'
import store from './store'
import routes from './routes'

const apiClient = createApiClient({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

const resources = ['posts', 'users']

const App = () => {
  return (
    <AppProvider
      apiClient={apiClient}
      resources={resources}
      store={store}
      routes={routes}
    >
      <Nav />
    </AppProvider>
  )
}

export default App
