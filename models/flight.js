const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String
 },
    airport: {
        type: String,
        default: 'DEN'
 },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: 0
},
    departs: {
     type: Date
},
    destinations: [destinationSchema]

});

const destinationSchema = newSchema({
    airport: {
        type: String
    },
    arrival:{
        type: Date,
        default:
    }
})

module.exports = mongoose.model('Flight', flightSchema);