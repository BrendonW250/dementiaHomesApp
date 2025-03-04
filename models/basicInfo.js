const mongoose = require('mongoose');
const basicInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('InfoOnHomes', basicInfoSchema)