import * as React from 'react'
import { withQuery } from '../../src'
import User from './User'

const UsersList = props => {
  const { loading, error, data } = props
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return data.map(user => <User {...user} key={user.id} />)
}

export default withQuery({ query: 'users' })(UsersList)
