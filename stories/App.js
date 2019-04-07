import * as React from 'react'
import { AppProvider } from '../src'
import Nav from './app/Nav'
import routes from './routes'

const apiClient = {
  baseURL: 'https://jsonplaceholder.typicode.com',
}

const resources = ['posts', 'users']

const App = () => {
  return (
    <AppProvider apiClient={apiClient} resources={resources} routes={routes}>
      <Nav />
    </AppProvider>
  )
}

export default App
