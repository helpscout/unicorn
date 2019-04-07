import get from 'dash-get'
import * as appCache from '../core/appCache'

export const getCache = () => appCache.getState()
export const getStore = () => appCache.get('store')

export const getDispatch = () => getStore().dispatch
export const getState = () => getStore().getState()

export const getApi = () => getCache().api
export const getApiClient = () => getCache().apiClient
export const getApiEndpoints = () => getCache().apiEndPoints
export const getHistory = () => getCache().history
export const getResources = () => getCache().resources

export const getApiActions = (resource: string) =>
  get(getResources(), `${resource}.apiActions`, {})

export const getApiTypes = (resource: string) =>
  get(getResources(), `${resource}.apiTypes`, {})
