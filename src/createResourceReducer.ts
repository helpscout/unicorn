import get from 'dash-get'
const createResourceReducer = (resource, apiTypes) => {
  return (state = null, action) => {
    const { type, payload } = action
    const data = get(payload, 'response.data')

    switch (type) {
      case apiTypes.GET_SUCCEEDED:
      case apiTypes.PATCH_SUCCEEDED:
      case apiTypes.PUT_SUCCEEDED:
      case apiTypes.POST_SUCCEEDED:
        return data
      default:
        return state
    }
  }
}

export default createResourceReducer
