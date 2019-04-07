import * as React from 'react'
import { connect } from '../../src'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Posts />
    </div>
  )
}

export default connect()(Home)
