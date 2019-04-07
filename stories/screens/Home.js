import * as React from 'react'
import { connect, getApiActions } from '../../src'
import PostList from '../components/PostList'

const Home = () => {
  console.log(getApiActions('posts'))
  return (
    <div>
      <h1>Home</h1>
      <PostList />
    </div>
  )
}

export default connect()(Home)
