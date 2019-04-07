import * as React from 'react'
import bindActionCreator from './bindActionCreator'
import connect from './connect'

interface Props {
  api: any
  children?: any
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

  getQuery = () => {
    const { api, query } = this.props

    if (typeof query === 'string') {
      return api[query].get
    }

    return query
  }

  runQuery = () => {
    const { query: queryProp, ...rest } = this.props

    const query = this.getQuery()

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
