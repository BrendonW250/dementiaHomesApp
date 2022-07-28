'use strict';

const express = require('express');
let router = express.Router()

// making use of the app object instead of the router object
router
    .route('/') //Now considered the endpoint for this specific home
    // In actuality this is dealing with /bainbridge 
    .get((request, response) => {
        response.sendFile('./bainbridge.html')
    })

module.exports = router //exporting the router object that we created above