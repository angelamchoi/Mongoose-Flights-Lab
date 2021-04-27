const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
 airline: {
     type: String,
     eum: ['American', 'Southwest' & 'United']
 },
 airport: {
     type: String,
     enum:['AUS', 'DFW', 'DEN', 'LAX' & 'SAN'],
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
}
destination: {
    type: destinationSchema
}
});

const destinationSchema = newSchema({
    airport: {
        type: String,
        eum: ['AUS', 'DFW', 'DEN', 'LAX' & 'SAN']
    }
    arrival:
})

module.exports = mongoose.model('Flight', flightSchema);