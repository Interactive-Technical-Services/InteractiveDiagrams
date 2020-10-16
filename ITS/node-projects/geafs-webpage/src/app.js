const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const fs = require('fs')

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Set up hanblebars engine, view path and templates path
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'GEA Training Site',
        footer: 'Created by GEAFS Training Team'
    })   
})

app.get('/training-modules', (req, res) => {
    res.render('training-modules', {
        title: 'Training Modules',
        footer: 'Created by GEAFS Training Team'
    })
})

app.get('/31-2000633', (req, res) => {
    res.render('31-2000633', {
        title: 'GEA Training Site',
        footer: 'Created by GEAFS Training Team',
        myScript: 'js/data.js'
    })
})

app.get('/31-20006332', (req, res) => {
    res.render('31-20006332', {
        title: 'GEA Training Site',
        footer: 'Created by GEAFS Training Team',
        myScript: 'js/data.js'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page Not Found'
    })
})

console.log(__dirname)

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})