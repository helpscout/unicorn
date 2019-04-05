import * as unicorn from '../index'

const modules = ['createTypes']

describe('@helpscout/unicorn', () => {
  modules.forEach(m => {
    test(`Should export ${m}`, () => {
      expect(unicorn[m]).toBeTruthy()
    })
  })
})
