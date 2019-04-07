import createStore from '../createStore'

describe('createStore', () => {
  test('Can create a basic Redux store', () => {
    const initialState = {
      app: 'unicorn',
      isLast: false,
    }

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'IS_LAST':
          return {
            ...state,
            isLast: true,
          }
        default:
          return state
      }
    }
    const store = createStore(reducer)()

    expect(store.getState().reducer.app).toBe('unicorn')
    expect(store.getState().reducer.isLast).toBe(false)

    store.dispatch({ type: 'IS_LAST' })
    expect(store.getState().reducer.isLast).toBe(true)
  })
})
