const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
const bainbridge = require('./routesForHomes/bainbridge')



// Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))
// Allows for the server to read front-end code (the css)
app.use(express.static('public'))

// treating the nursing home html files like middleware
// this is the importing of the router object from the js file
app.use('/bainbridge', bainbridge)
// use the bainbridge.js file to handle endpoints that start with /bainbridge

// routes
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    
})

// When user clicks on this nursing
// takes them to the page with homes info
// app.get('', (request, response) => {
//     response.sendFile(__dirname + '/displayOfHomes/bainbridge.html')
    // const homeNames = request.params.nameOfHome
    // const home = nursingHomes.find(home => home.id === id)

    // response.json(home)

//})

app.get('/morningside', (request, response) => {
    response.sendFile(__dirname + '/displayOfHomes/morningside.html')
})

// .catch(error => console.error(error))

// app.listen(, function() {
//     console.log('listening on 3000')
// })
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})