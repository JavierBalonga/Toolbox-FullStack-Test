import express from 'express'
import routes from './routes'
import endware from './middlewares/endware'

const app = express()

app.use('/', routes)
app.use(endware)

export default app
