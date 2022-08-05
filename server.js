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
        //    app 
        //        .route('/api/:nameOfHome')
        //        .get((request, response) => {
        //            const canThisWork = request.params.nameOfHome
        //            homeCollection.find({homeTitle: canThisWork})
        //            .then(results => {
        //                console.log(results)
        //                response.json(results)
        //            })
        //            .catch(error => console.error(error))
        //        })

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

     



// now we set up routes for the server w/ express
// app
//     .route('/')
//     .get((request, response) => {
//         response.render('index')
//     })

// app
//     .route('/bainbridge')
//     .get((request, response) => {

//         const canThisWork = request.params.bainbridge
//             .find({homeTitle: canThisWork}).toArray()
//             .then(results => {
//                 console.log(results)
//                 response.json(results[0])
//             })
//             .catch(error => console.error(error))
//         // try {
//         //     InfoOnHomes.find().toArray()
//         //     // InfoOnHomes.find({}, (err, places) => {
//         //     //     response.render('bainbridge.ejs', { basicInfo: places });
//         //     });
//         // } catch (err){
//         //     if (err) return response.status(500).send(err)
//         // }
        
//     }) 





// Incorporating my database of nursing homes to the routes created
// MongoClient.connect(process.env.DB_STRING, { useUnifiedTopology: true })
//     .then(client => {
//         console.log('Connected to database')
//         const db = client.db('dementiaApp')
//         const homeCollection = db.collection('home-info')

//         // Middleware
//         app.use(bodyParser.urlencoded({
//             extended: true
//         }))
//         app.use(express.urlencoded({
//             extended: true
//         }))
//         app.use(express.json())
//         // Allows for the server to read front-end code (the css)
//         app.use(express.static('public'))


// //////////////////////////// routes for each nursing home /////////////////////////////////
//     app.get('/', (request, response) => {
//         // response.sendFile(__dirname + '/index.html')
//         response.render('index')
    
//     })

//     // route and actions for bainbridge nursing home
//     // Whenever the server receives this route, it brings up
//     // the bainbridge nursing home page that will display the homes info
//     // Bainbridge Nursing Home page route
//     app
//         .route('/bainbridge')
//         .get((request, response) => {
//             homeCollection.find({}, function(err, hope) {
//                 response.render('bainbridge', {
//                     listOfThem: hope
//                 })
//             })
//     })
//             //const work = 
//             // homeCollection.find().toArray()
//             // .then(results => {
//             //     console.log(results)
//             //     response.render('bainbridge', { results })
//             // })
//             //response.render('bainbridge', { work })
            

//             // response.sendFile(__dirname + '/displayOfHomes/bainbridge.html') 

//             // const bain = request.params.firstHome
//             //     homeCollection.find({name: bain}).toArray()
//             //     .then(results => {
//             //         console.log(results)
//             //         response.json(results[0])
//             //     })
//             //     .catch(error => console.error(error))
//             // response.sendFile(__dirname + '/displayOfHomes/bainbridge.html') 
//         })

    // app
    //     .route('/bainbridge/:homeName')
    //     .get((request, response) => {
    //         const homeNames = request.params.homeName
    //             homeCollection.find({name: homeNames}).toArray()
    //             .then(results => {
    //                 console.log(results)
    //                 response.render(results[0])
    //             })
    //             .catch(error => console.error(error))
    //     })



    
//})
//.catch(error => console.error(error))






// // tells the server whenever it sees the '/morningside' route
// // to display the morningside.html file 
// // Morningside Nursing Home page route
// app
//     .route('/morningside')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/morningside.html')
//     })

// // Kings Harbor Nursing Home page route
// app
//     .route('/kings-harbor')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/kingsHarbor.html')
//     })

// // tells the server whenever it sees the '/eastchesterrehab' route
// // to display the eastchester rehab nursing home page
// // Eastchester Nursing Home page route
// app 
//     .route('/eastchester-rehab')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/eastchesterRehab.html')
//     })

// app
//     .route('/university-nursing')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/university.html')
//     })

// app
//     .route('/stpatrickshome')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/stPatrick.html')
//     })

// app
//     .route('/bronx-center')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/bronxCenter.html')
//     })

// app
//     .route('/williamsbridge')
//     .get((request, response) => {
//         response.sendFile(__dirname + '/displayOfHomes/williamsBridge.html')
//     })

// .catch(error => console.error(error))

// 
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})