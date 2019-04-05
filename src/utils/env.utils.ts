export const getProcessEnv = n => {
  return process && process.env && process.env[n]
}

export const isStorybookEnv = () => {
  return !!(
    getProcessEnv('STORYBOOK_GIT_BRANCH') || getProcessEnv('STORYBOOK_APP_NAME')
  )
}

export const isTestEnv = () => {
  return !!(getProcessEnv('NODE_ENV') === 'test')
}

export const isDevelopmentEnv = () => {
  return !!(getProcessEnv('NODE_ENV') === 'development')
}
