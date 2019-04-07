import get from 'dash-get'
const createResourceReducer = (resource, apiTypes) => {
  return (state = null, action) => {
    const { type, payload } = action
    const data = get(payload, 'response.data')

    switch (type) {
      case apiTypes.GET_SUCCEEDED:
        return data

      case apiTypes.PATCH_SUCCEEDED:
      case apiTypes.PUT_SUCCEEDED:
      case apiTypes.POST_SUCCEEDED:
        const { id } = data
        return data.map(item => {
          if (item.id == id) {
            item = data
          }
          return item
        })

      default:
        return state
    }
  }
}

export default createResourceReducer
