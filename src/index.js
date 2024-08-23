const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const routers = require('./route/web.js')

const app = express()
const host = process.env.HOST_NAME
const port = process.env.PORT || 9999

//config template engine
configViewEngine(app)

//route
app.use('/', routers);


app.listen(port, host, () => {
  console.log(`Server running at: http://${host}:${port}`)
}) 