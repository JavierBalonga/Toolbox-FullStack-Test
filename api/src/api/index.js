import express from 'express'
import cors from 'cors'
import routes from './routes'
import endware from './middlewares/endware'

const app = express()

app.use(cors())
app.use('/', routes)
app.use(endware)

export default app
