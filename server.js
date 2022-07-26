const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')



// Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))
// Allows for the server to read front-end code (the css)
app.use(express.static('public'))

// routes
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    
})

// When user clicks on this nursing
// takes them to the page with homes info
app.get('/bainbridge', (request, response) => {
    response.sendFile(__dirname + '/routesToDiffHomes/bainbridge')
})

app.get('/morningside.html', (request, response) => {
    response.sendFile(__dirname + '/routesToDiffHomes/morningside.html')
})

// .catch(error => console.error(error))

// app.listen(, function() {
//     console.log('listening on 3000')
// })
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})