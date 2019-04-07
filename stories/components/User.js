import React from 'react'
import { Link } from '../../src'

const User = props => {
  const { name, id } = props
  return (
    <div style={{ margin: '10px 0' }}>
      <h2>
        <Link to={`/users/${id}`}>{name}</Link>
      </h2>
    </div>
  )
}

export default User
