import * as React from 'react'
import { connect } from '../../src'

const Home = () => {
  return <div>Hallo</div>
}

Home.fetch = () => (dispatch, getState, { resources }) => {
  console.log(resources)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
  })
}

export default connect()(Home)
