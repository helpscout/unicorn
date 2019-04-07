const makeCreateUrlPath = resource => props => {
  if (props && props.id) {
    return `/${resource}/${props.id}`
  } else {
    return `/${resource}`
  }
}

const registerApiEndPoint = ({ apiEndPoints, apiClient, resource }) => {
  const createUrl = makeCreateUrlPath(resource)

  const endpoints = {
    get: props => {
      return props && props.id
        ? apiClient.get(createUrl(props), props)
        : apiClient.get(createUrl(props))
    },

    patch: props => apiClient.patch(createUrl(props), props),

    put: props => apiClient.put(createUrl(props), props),

    post: props => {
      return props && props.id
        ? apiClient.post(createUrl(props), props)
        : apiClient.post(createUrl(props), props)
    },

    delete: props => apiClient.delete(createUrl(props), props),
  }

  // Register to the apiEndpoints
  Object.assign(apiEndPoints, {
    [resource]: endpoints,
  })
}

export default registerApiEndPoint
