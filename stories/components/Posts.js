import React from 'react'
import Post from './Post'

const Posts = props => {
  const { loading, error, data } = props
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return data.map(post => <Post {...post} key={post.id} />)
}

export default Posts
