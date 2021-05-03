const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

const index =(req,res) =>{
  Flight.find({}, function(err,flights){
      if (err) return err;
      if(!flights.length){
          names.forEach((n) =>{
              let flight= new Flight ({airline:n.airline, airport:n.airport, flightNo:n.flightNo, depart:n.departs, destinations:n.destinations});
              flight.save();
          })
      }
      res.render ('flights/index', {title: 'List of All Flights', flights:flights});
  })
}
 
// new flight 
const newFlight=(req, res) => {
  res.render ('flights/newflight', {title: 'Add A New Flight'});
}

// add flight
const addFlight=(req, res) => {
  for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
  }
  const newItem=new Flight(req.body);
  newItem.save(function(err){
      if (err) return res.redirect('/flights/newflight');
      res.redirect('/flights');
  })
}

// show
const show=(req,res) =>{
  Flight.findById(req.params.id, function(err,thisFlight){
      Ticket.find({flight: thisFlight._id}, function (err, thisTickets){
          res.render('flights/show', {title: 'Flight Details', thisFlight, thisTickets});
      })
  })
}

// destination
const addDestinations=(req,res) =>{
  Flight.findById(req.params.id, function(err,thisFlight){
      thisFlight.destinations.push(req.body);
      thisFlight.save(function(err){           
          res.redirect(`/flights/${thisFlight._id}`);
      })
  })
}

// exports
module.exports = {
  index:index,
  newFlight: newFlight,
  addFlight: addFlight,
  show: show,
  addDestinations: addDestinations
};