import * as React from 'react'
import { withQuery } from '../../src'
import Query from '../../src/Query'
import Posts from '../components/Posts'

const createQuery = props => props.api.posts.get()

export default withQuery({ query: createQuery })(Posts)
