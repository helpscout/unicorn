import * as React from 'react'
import { connect } from '../../src'

const Home = () => {
  return <div>Hallo</div>
}

Home.fetch = () => (dispatch, getState, { api, resources }) => {
  console.log({ api, resources })
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
  })
}

export default connect()(Home)
