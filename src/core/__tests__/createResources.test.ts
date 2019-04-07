import createResources from '../createResources'

const defaultProps = {
  api: {},
  apiClient: {},
  apiEndPoints: {},
}

describe('createResources', () => {
  test('Creates resources', () => {
    const resources = createResources(['unicorn'], defaultProps)
  })
})
