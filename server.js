const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
const MongoClient = require('mongodb')
require('dotenv').config()
// const bainbridge = require('./public/routesForHomes/bainbridge')



// Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))
// Allows for the server to read front-end code (the css)
app.use(express.static('public'))





// Incorporating my database of nursing homes to the routes created
MongoClient.connect(process.env.DB_STRING, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to database')
        const db = client.db('dementiaApp')
        const homeCollection = db.collection('home-info')

        // Middleware
        app.use(bodyParser.urlencoded({
            extended: true
        }))
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(express.json())
        // Allows for the server to read front-end code (the css)
        app.use(express.static('public'))


//////////////////////////// routes for each nursing home /////////////////////////////////
    app.get('/', (request, response) => {
        response.sendFile(__dirname + '/index.html')
    
    })

    // route and actions for bainbridge nursing home
    // Whenever the server receives this route, it brings up
    // the bainbridge nursing home page that will display the homes info
    // Bainbridge Nursing Home page route
    app
        .route('/bainbridge')
        .get((request, response) => {

            response.sendFile(__dirname + '/displayOfHomes/bainbridge.html') 

            const bain = request.params.bainbridge
                homeCollection.find({name: bain}).toArray()
                .then(results => {
                    console.log(results)
                    response.json(results[0])
                })
                .catch(error => console.error(error))
            // response.sendFile(__dirname + '/displayOfHomes/bainbridge.html') 
        })



    
})
.catch(error => console.error(error))






// tells the server whenever it sees the '/morningside' route
// to display the morningside.html file 
// Morningside Nursing Home page route
app
    .route('/morningside')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/morningside.html')
    })

// Kings Harbor Nursing Home page route
app
    .route('/kings-harbor')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/kingsHarbor.html')
    })

// tells the server whenever it sees the '/eastchesterrehab' route
// to display the eastchester rehab nursing home page
// Eastchester Nursing Home page route
app 
    .route('/eastchester-rehab')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/eastchesterRehab.html')
    })

app
    .route('/university-nursing')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/university.html')
    })

app
    .route('/stpatrickshome')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/stPatrick.html')
    })

app
    .route('/bronx-center')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/bronxCenter.html')
    })

app
    .route('/williamsbridge')
    .get((request, response) => {
        response.sendFile(__dirname + '/displayOfHomes/williamsBridge.html')
    })

// .catch(error => console.error(error))

// 
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})