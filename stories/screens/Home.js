import * as React from 'react'
import { connect } from '../../src'
import Query from '../../src/Query'
import Posts from '../components/Posts'

const createQuery = props => props.api.posts.get()

const Home = () => {
  return (
    <>
      <Query query={createQuery}>{Posts}</Query>
    </>
  )
}

export default connect()(Home)
