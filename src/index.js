const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const host = process.env.HOST_NAME
const port = process.env.PORT || 9999

//template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



//route
app.get('/', (req, res) => {
  res.render('test.ejs')
})

app.get('/courses ', (req, res) => {
  res.render('test.ejs')
})

app.get('/', (req, res) => {
  res.render('test.ejs')
})

app.listen(port, host, () => {
  console.log(`Server running: http://${host}:${port}`)
}) 