const express = require('express')

const configViewEngine = (app) => {
    app.set('views', './src/views')
    app.set('view engine', 'ejs')
    //static files
    app.use(express.static('./src/public'))

    //config res.body
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
}

module.exports = configViewEngine;