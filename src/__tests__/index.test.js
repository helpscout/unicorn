import * as unicorn from '../index'

describe('@helpscout/unicorn', () => {
  const modules = Object.keys(unicorn)

  modules.forEach(m => {
    test(`Should export ${m}`, () => {
      expect(unicorn[m]).toBeTruthy()
    })
  })
})
