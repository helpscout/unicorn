import createTypes from '../createTypes'

describe('createTypes', () => {
  test('Generates an empty object by default', () => {
    const types = createTypes()

    expect(types).toEqual({})
  })

  test('Generates an empty object, if no keys are provided', () => {
    const types = createTypes('unicorn')

    expect(types).toEqual({})
  })

  test('Uppercases namespaces and keys', () => {
    const types = createTypes('unicorn', ['first', 'last'])
    const keys = Object.keys(types)
    const values = Object.values(types)

    expect(keys.length).toBe(2)

    expect(keys[0]).toBe('FIRST')
    expect(keys[1]).toBe('LAST')

    expect(values[0]).toBe('@@UNICORN/FIRST')
    expect(values[1]).toBe('@@UNICORN/LAST')
  })
})
