export const defaultNamespace = 'action'
export const typePrefix = '@@'
export const typeSeparator = '/'

const createTypes = (
  namespace: string = defaultNamespace,
  keys: Array<string> = [],
): any => {
  const namespacedAction = `${typePrefix}${namespace.toUpperCase()}`

  return keys.reduce((keyMap, key) => {
    const transformedKey = key.toUpperCase()
    const renamedKey = `${namespacedAction}${typeSeparator}${transformedKey}`

    return {
      ...keyMap,
      [transformedKey]: renamedKey,
    }
  }, {})
}

export default createTypes
