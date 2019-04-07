import React from 'react'

const Post = props => {
  const { title, body } = props
  return (
    <div style={{ margin: '10px 0' }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Post
