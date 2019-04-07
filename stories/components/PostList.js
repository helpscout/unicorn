import * as React from 'react'
import { withQuery } from '../../src'
import Post from './Post'

const PostList = props => {
  const { loading, error, data } = props
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return data.map(post => <Post {...post} key={post.id} />)
}

export default withQuery({ query: 'posts' })(PostList)
