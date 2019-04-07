import * as React from 'react'
import { connect } from '../../src'
import PostList from '../components/PostList'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <PostList />
    </div>
  )
}

export default connect()(Home)
