import * as React from 'react'
import { Link } from '../../src'

export const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  )
}

export default Nav
