import React from 'react'

const Post = props => {
  const { title, body } = props
  return (
    <p>
      <strong>{title}</strong>
      <div>{body}</div>
    </p>
  )
}

export default Post
