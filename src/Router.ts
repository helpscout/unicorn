import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { isStorybookEnv } from './utils/env.utils'

const Router: any = isStorybookEnv() ? MemoryRouter : BrowserRouter

export default Router
