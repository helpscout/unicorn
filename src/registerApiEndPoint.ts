const makeCreateUrlPathWithId = resource => props => `/${resource}/${props.id}`

const registerApiEndPoint = ({ apiEndPoints, apiClient, resource }) => {
  const createUrl = makeCreateUrlPathWithId(resource)

  const endpoints = {
    get: props => {
      return props && props.id
        ? apiClient.get(createUrl(props), props)
        : apiClient.get('/')
    },

    patch: props => apiClient.patch(createUrl(props), props),

    put: props => apiClient.put(createUrl(props), props),

    post: props => {
      return props && props.id
        ? apiClient.post(createUrl(props), props)
        : apiClient.post('/', props)
    },

    delete: props => apiClient.delete(createUrl(props), props),
  }

  // Register to the apiEndpoints
  Object.assign(apiEndPoints, {
    [resource]: endpoints,
  })
}

export default registerApiEndPoint
