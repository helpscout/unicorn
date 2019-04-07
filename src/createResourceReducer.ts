import get from 'dash-get'
const createResourceReducer = (resource, apiTypes) => {
  return (state = null, action) => {
    const { type, payload } = action
    const data = get(payload, 'response.data')

    switch (type) {
      case '@@POSTS_API/GET_SUCCEEDED':
        return data
      default:
        return state
    }
  }
}

export default createResourceReducer
