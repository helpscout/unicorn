import get from 'dash-get'
import createApiTypes, { apiActions } from './createApiTypes'

export const createApiAction = ({ resource, method, types }) => {
  return props => (dispatch, getState, { apiEndPoints }) => {
    const apiMethod = get(apiEndPoints, `${resource}.${method}`)
    if (!apiMethod) return

    const succeededType = `${method.toUpperCase()}_SUCCEEDED`
    const failedType = `${method.toUpperCase()}_FAILED`

    return apiMethod(props)
      .then(response => {
        dispatch({
          type: types[succeededType],
          payload: {
            response,
          },
        })
      })
      .catch(response => {
        dispatch({
          type: types[failedType],
          payload: {
            response,
          },
        })
      })
  }
}

export const createApiActions = (resource: string, types: any) => {
  return apiActions.reduce((actions, methodName) => {
    const method = methodName.toLowerCase()
    return {
      ...actions,
      [method]: createApiAction({ resource, method, types }),
    }
  }, {})
}

export const createResource = (resource: string) => {
  const apiTypes = createApiTypes(resource)
  const apiActions = createApiActions(resource, apiTypes)

  return {
    apiTypes,
    apiActions,
  }
}

export default createResource
