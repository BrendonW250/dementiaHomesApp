// const mongoose = require('mongoose')
// const ejs = require('ejs')
// const InfoOnHomes = require('./models/basicInfo');
// const basicInfo = require('./models/basicInfo')
// const { home } = require('nodemon/lib/utils')

// const MongoClient = require('mongodb').MongoClient
// const bainbridge = require('./public/routesForHomes/bainbridge')

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const bodyParser = require('body-parser')
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const { home } = require('nodemon/lib/utils')



// allowing me to connect to the ejs file
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


// connect to mongo
MongoClient.connect(process.env.DB_STRING, { useNewUrlParser: true })
    // () => {console.log('Connected to db!');}
    .then(client => {
        console.log('Connected to database')
        const db = client.db('dementiaHomesBx')
        const homeCollection = db.collection('homes-info')


            // now we set up routes for the server w/ express
            app
               .route('/')
               .get((request, response) => {
                   response.sendFile(__dirname + '/index.html')
               })
   
           // for bainbridge nursing home page
           app 
               .route('/bainbridge')
               .get((request, response) => {
                   homeCollection.find().toArray()
                        .then(results => {
                            response.render('bainbridge.ejs', {homes: results})
                        })
                        .catch(error => console.error(error))
               })

            // to get the data from the db to be displayed on the morningside ejs page
           app 
               .route('/morningside')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('morningside.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })

            //    allows me to get the data from the beth abraham document to be displayed on the ejs page
            app
               .route('/bethAbraham')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('bethAbraham.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })

            app
               .route('/kings-harbor')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('kingsHarbor.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })

            app
               .route('/eastchester-rehab')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('eastchesterRehab.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })

            app
               .route('/university-nursing')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('university.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })

            app
               .route('/stpatrickshome')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('stPatrick.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })


            app
               .route('/williamsbridge')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('williamsBridge.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })


            app
               .route('/grand-manor')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('grandManor.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })

            app
               .route('/splitrock')
               .get((request, response) => {
                   homeCollection.find().toArray()
                    .then(results => {
                        response.render('splitRock.ejs', {homes: results})
                    })
                    .catch(error => console.error(error))
               })
        // app 
        //     .route('/bainbridge')
        //     .get((request, response) => {
        //         const homeTitles = request.params.bainbridge
        //             homeCollection.find({work: homeTitles}).toArray()
        //             .then(results => {
        //                 console.log(results)
        //                 response.render('bainbridge', {
        //                     results
        //                 })
        //             })
        //             .catch(error => console.error(error))
        //     })

    })

     



// enables the express to contact the respective port 
//that I want the application to run on
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})