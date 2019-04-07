import { BrowserRouter, HashRouter } from 'react-router-dom'
import { isStorybookEnv } from '../utils/env.utils'

const Router: any = isStorybookEnv() ? HashRouter : BrowserRouter

export default Router
