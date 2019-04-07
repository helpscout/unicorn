import * as React from 'react'
import bindActionCreator from './bindActionCreator'
import connect from './connect'

interface Props {
  children: any
  dispatch: any
  query: (props: any) => void
}

export class Query extends React.Component<Props> {
  componentWillMount() {
    this.runQuery()
  }

  runQuery = () => {
    const { query, ...rest } = this.props
    const queryAction = () => () => query(rest)
    const boundQueryAction = bindActionCreator(queryAction, this.props.dispatch)
    // @ts-ignore
    this.props.dispatch(boundQueryAction(rest))
  }

  render() {
    const { children, ...rest } = this.props
    if (!children) return null
    return children(rest)
  }
}

export default connect()(Query)
