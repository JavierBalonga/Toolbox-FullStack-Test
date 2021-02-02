import { Router } from 'express'

import iecho from './iecho'

export default Router()
  .use('/iecho', iecho)
