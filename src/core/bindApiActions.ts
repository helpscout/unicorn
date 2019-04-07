const bindApiActions = (resources, api) => {
  const apiActions = Object.keys(resources).reduce((apiMap, action) => {
    return {
      ...apiMap,
      [action]: resources[action].apiActions,
    }
  }, {})

  return { ...api, ...apiActions }
}

export default bindApiActions
