import * as React from 'react'
import { connect } from '../../src'
import UserList from '../components/UserList'

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <UserList />
    </div>
  )
}

export default connect()(Users)
