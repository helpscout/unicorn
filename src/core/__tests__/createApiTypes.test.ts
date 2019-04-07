import createApiTypes from '../createApiTypes'

describe('createApiTypes', () => {
  test('Generates a set of action types by default', () => {
    const types = createApiTypes()

    expect(Object.keys(types).length).toBeGreaterThan(0)
  })

  test('Uses a fallback default namespace', () => {
    const types = createApiTypes()

    expect(types.GET_REQUESTED).toBeTruthy()
    expect(types.PUT_REQUESTED).toBeTruthy()
    expect(types.PATCH_REQUESTED).toBeTruthy()
    expect(types.POST_REQUESTED).toBeTruthy()
    expect(types.DELETE_REQUESTED).toBeTruthy()
  })

  test('Can specific a unique namespace', () => {
    const types = createApiTypes('unicorn')

    expect(types.GET_REQUESTED).toBeTruthy()
    expect(types.PUT_REQUESTED).toBeTruthy()
    expect(types.PATCH_REQUESTED).toBeTruthy()
    expect(types.POST_REQUESTED).toBeTruthy()
    expect(types.DELETE_REQUESTED).toBeTruthy()
  })
})
