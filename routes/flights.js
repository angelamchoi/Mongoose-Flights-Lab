const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

// flights
router.get('/', flightsCtrl.index);
router.get('/newflight', flightsCtrl.newFlight);
router.post('/newflight', flightsCtrl.addFlight);
router.get('/:id',flightsCtrl.show);
router.post('/:id/des', flightsCtrl.addDestinations);

//tickets
router.get('/:id/tickets/new', ticketsCtrl.newTicket);
router.post('/:id/tickets/new', ticketsCtrl.addTicket);

module.exports = router;
