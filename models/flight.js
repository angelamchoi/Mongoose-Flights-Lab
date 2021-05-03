const mongoose = require('mongoose');
const Schema=mongoose.Schema;

// one year from today date
// used stack overflow to research this
const today = new Date();
const day = String(today.getDate())
const month = String(today.getMonth())
const year = today.getFullYear();
const addOneYear= year + 1;
let nextYear = month + "/" + day + "/" +addOneYear;

// destination
const destinationSchema= new Schema({
    airport:{
        type:String,
        default: 'n/a'
    },
    arrival:{
        type: Date,
        default: nextYear
    }
})

// fight
const flightSchema=new Schema({
    airline:{
        type:String,
        default: 'n/a'
    },
    airport: {
        type:String,
        default:'Den'
    },
    flightNo:{
        type: Number,
        default: 0
    },
    departs:{
        type: Date,
        default: nextYear
    },
    destinations:[destinationSchema]

});

module.exports= mongoose.model('flight', flightSchema);