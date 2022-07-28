const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
// const bainbridge = require('./public/routesForHomes/bainbridge')



// Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))
// Allows for the server to read front-end code (the css)
app.use(express.static('public'))

// treating the nursing home html files like middleware
// '/bainbridge is considered the base for that specific route 
// similarly to how '/' is the base for the homepage then as you 
// click on other components of the webpage you get different routes
// app.use('/bainbridge', bainbridge)


//////////// routes for each nursing home ///////////

// Route to let the server know to go to the website's homepage
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    
})

// route and actions for bainbridge nursing home
// Whenever the server receives this route, it brings up
// the bainbridge nursing home page that will display the homes info
app
    .route('/bainbridge')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/bainbridge.html')
    })

// tells the server whenever it sees the '/morningside' route
// to display the morningside.html file 
app
    .route('/morningside')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/morningside.html')
    })

// tells the server whenever it sees the '/eastchesterrehab' route
// to display the eastchester rehab nursing home page
app 
    .route('/eastchesterrehab')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/eastchesterRehab.html')
    })


// .catch(error => console.error(error))

// 
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})