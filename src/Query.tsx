import * as React from 'react'
import bindActionCreator from './bindActionCreator'
import connect from './connect'

interface Props {
  children: any
  dispatch: any
  query: (props: any) => void
}

export class Query extends React.Component<Props> {
  state = {
    loading: false,
    error: null,
    data: null,
  }

  componentWillMount() {
    this.runQuery()
  }

  runQuery = () => {
    const { query, ...rest } = this.props

    this.setState({ loading: true })

    const queryAction = () => () => query(rest)
    const boundQueryAction = bindActionCreator(queryAction, this.props.dispatch)
    // @ts-ignore
    this.props.dispatch(boundQueryAction(rest)).then(data => {
      this.setState({
        loading: false,
        data,
      })
    })
  }

  render() {
    const { children, ...rest } = this.props
    if (!children) return null
    return children(this.state)
  }
}

export default connect()(Query)
