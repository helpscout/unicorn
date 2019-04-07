import * as React from 'react'
import { connect, selectors } from '../../src'

const User = props => {
  const { name, email, username } = props

  return (
    <>
      <h1>{name}</h1>
      <ul>
        <li>Username: {username}</li>
        <li>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </li>
      </ul>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const user = selectors.getById(state, ownProps)('users')
  return user
}

export default connect(mapStateToProps)(User)
