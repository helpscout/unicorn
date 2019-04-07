import createResource from './createResource'
import registerApiEndPoint from './registerApiEndPoint'

const createResources = (resources: Array<string>, extraArguments: any) => {
  const { apiEndPoints, apiClient } = extraArguments

  const appResources = resources.reduce((resourceMap, resource) => {
    registerApiEndPoint({ apiEndPoints, apiClient, resource })
    return { ...resourceMap, [resource]: createResource(resource) }
  }, {})

  return appResources
}

export default createResources
