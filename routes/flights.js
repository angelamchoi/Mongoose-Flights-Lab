const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

// flights
router.get('/', flightsCtrl.index);
router.get('/newFlight', flightsCtrl.newFlightForm);
router.post('/newFlight', flightsCtrl.addFlight);
router.get('/:id',flightsCtrl.show);
router.post('/:id/destination', flightsCtrl.addDestinations);

//tickets
router.get
router.post

module.exports = router;
