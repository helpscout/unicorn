import get from 'dash-get'

export const getById = (state, ownProps) => (resource, id) => {
  const entryId = ownProps ? getIdFromProps(ownProps) : id
  const resources = get(state, resource, [])
  if (Array.isArray(resources)) {
    return resources.find(resource => resource.id == entryId)
  }
  return resources
}

export const getIdFromProps = (ownProps = {}) => {
  const id = get(ownProps, 'id')
  const routeId = get(ownProps, 'match.params.id')

  return id || routeId
}
