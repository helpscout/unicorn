import * as React from 'react'
import { bindActionCreators } from 'redux'
import hoistNonReactStatics from '@helpscout/react-utils/dist/hoistNonReactStatics'
import { CONTEXT_KEYS } from './constants'
import connectWithRouter from './connectWithRouter'

export const FETCH_HOOKS = [
  'fetch',
  'onBeforeFetch',
  'onAfterFetch',
  'onFetchSuccess',
  'onFetchError',
]

type Props = any
type State = {
  isReady: boolean
}

export const getFetchHooksFromStatic = WrappedComponent => {
  const actions = {}

  FETCH_HOOKS.forEach(hook => {
    if (WrappedComponent[hook]) {
      actions[hook] = WrappedComponent[hook]
    }
  })

  return actions
}

export const connect = (
  mapStateToProps = null,
  mapDispatchToProps: any = {},
  mergeProps = null,
) => WrappedComponent => {
  class WithData extends React.Component<Props, State> {
    static contextTypes = {
      [CONTEXT_KEYS.apiClient]: () => {},
      [CONTEXT_KEYS.api]: () => {},
      [CONTEXT_KEYS.resources]: () => {},
    }

    _isMounted = false
    actions: any

    constructor(props, context) {
      super(props, context)

      // We'll need to bind actions to Redux, to allow for them to have
      // access to things like dispatch, getState, and thunk.
      // We're doing this in the constructor() to set up the component
      // with bound actions to be used during the mount/render lifecycle.

      // 1. Binding the supported fetch hooks from the static properties on
      // the WrappedComponent
      const staticFetchHooks = getFetchHooksFromStatic(WrappedComponent)

      // 2. Combining all the actions that are required to be bound
      // with Redux
      const actions = {
        ...mapDispatchToProps,
        ...staticFetchHooks,
      }

      // 3. Binding the actions with Redux, and setting the actions as
      // an instance variable
      this.actions = bindActionCreators(actions, props.dispatch)

      const hasFetchHook = this.actions.fetch

      // This allows for the HOC to work like the regular Redux connect()
      // if there is no fetch hook defined.
      this.state = {
        isReady: hasFetchHook ? false : true,
      }
    }

    componentDidMount() {
      this._isMounted = true
      this.fetch()
    }

    componentWillUnmount() {
      this._isMounted = false
    }

    safeSetState = (nextState, callback?: any) => {
      if (this._isMounted) {
        this.setState(nextState, callback)
      }
    }

    getProps() {
      return {
        ...this.props,
        ...this.actions,
        api: this.context[CONTEXT_KEYS.api],
        apiClient: this.context[CONTEXT_KEYS.apiClient],
        resources: this.context[CONTEXT_KEYS.resources],
      }
    }

    /**
     * Safely call a (bound) action with args
     */
    callAction = action => (...args) => {
      if (this.actions[action]) {
        this.actions[action](...args)
      }
    }

    /**
     * Initializes the (async) fetch call, with support for
     * before/after/success/error callback hooks.
     */
    fetch() {
      if (!this.actions.fetch) {
        return
      }

      this.callAction('onBeforeFetch')()
      this.callAction('setLoadingStart')()

      this.actions
        .fetch(this.getProps())
        .then(response => {
          this.safeSetState({ isReady: true })
          this.callAction('onFetchSuccess')(response)
          this.callAction('onAfterFetch')()
          this.callAction('setLoadingEnd')()
        })
        .catch(error => {
          this.callAction('onFetchError')(error)
          this.callAction('onAfterFetch')()
          this.callAction('setLoadingEnd')()
        })
    }

    render() {
      if (!this.state.isReady) {
        return null
      } else {
        return React.createElement(WrappedComponent, this.getProps())
      }
    }
  }

  const ComposedComponent = connectWithRouter(
    mapStateToProps,
    null,
    mergeProps,
  )(WithData)

  return hoistNonReactStatics(ComposedComponent, WrappedComponent)
}

export default connect
