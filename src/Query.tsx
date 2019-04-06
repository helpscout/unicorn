import * as React from 'react'
import connect from './connect'

export const Query = props => {
  const { children, ...rest } = props
  console.log(rest)
  return <div>{children}</div>
}

export default connect()(Query)
