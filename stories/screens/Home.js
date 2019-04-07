import * as React from 'react'
import { connect } from '../../src'
import Query from '../../src/Query'

const createQuery = props => props.api.posts.get({ id: 1 })

const Home = () => {
  return (
    <>
      <Query query={createQuery} />
      <div>Hallo</div>
    </>
  )
}

export default connect()(Home)
