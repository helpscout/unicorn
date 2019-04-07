import createTypes from './createTypes'

export const defaultResourceNamespace = 'resource'
export const apiActions = ['DELETE', 'GET', 'PATCH', 'POST', 'PUT']
export const apiStates = ['REQUESTED', 'SUCCEEDED', 'FAILED']

export const generateApiKeyTypes = (): Array<string> => {
  return apiActions.reduce((types, action) => {
    const states = apiStates.map(state => {
      return `${action}_${state}`
    })
    return [...types, ...states]
  }, [])
}

const createApiTypes = (resource: string = defaultResourceNamespace) => {
  const keys = generateApiKeyTypes()
  return createTypes(`${resource}_api`, keys)
}

export default createApiTypes
