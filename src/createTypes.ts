export const defaultNamespace = 'action'
export const typePrefix = '@@'
export const typeSeparator = '/'

const createTypes = (namespace: string = defaultNamespace) => (
  keys: Array<string> = [],
) => {
  const namespacedAction = `${typePrefix}${namespace.toUpperCase()}`

  return keys.reduce((keyMap, key) => {
    const transformedKey = key.toUpperCase()
    const renamedKey = `${namespacedAction}${typeSeparator}${transformedKey}`

    return {
      ...keyMap,
      [renamedKey]: transformedKey,
    }
  }, {})
}

export default createTypes
