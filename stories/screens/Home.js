import * as React from 'react'
import { connect } from '../../src'
import Query from '../../src/Query'

const Home = () => {
  return (
    <>
      <Query />
      <div>Hallo</div>
    </>
  )
}

Home.fetch = () => (dispatch, getState, { api, apiClient, resources }) => {
  return apiClient
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
}

export default connect()(Home)
