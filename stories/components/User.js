import React from 'react'

const User = props => {
  const { name } = props
  return (
    <div style={{ margin: '10px 0' }}>
      <h2>{name}</h2>
    </div>
  )
}

export default User
