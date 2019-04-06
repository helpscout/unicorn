const registerApiEndPoint = ({ api, apiClient, resource }) => {
  const endpoints = {
    get: props => {
      return props && props.id
        ? apiClient.get(props.id, props)
        : apiClient.get()
    },
    patch: props => apiClient.patch(props.id, props),
    put: props => apiClient.put(props.id, props),
    post: props => {
      return props && props.id
        ? apiClient.post(props.id, props)
        : apiClient.post(props)
    },
    delete: props => apiClient.delete(props.id, props),
  }

  // Register to the api
  Object.assign(api, {
    [resource]: endpoints,
  })
}

export default registerApiEndPoint
