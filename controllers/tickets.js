const Ticket = require('../models/ticket');

// new ticket
const newTicket=(req,res) =>{
    let flightID=req.params.id;
    res.render ('tickets/new', {title: 'Add a new ticket', flightID});
}

// add ticket
const addTicket=(req,res) =>{
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const newItem=new Ticket(req.body);
    newItem.flight=req.params.id;
    newItem.save(function(err){
        if (err) return res.redirect(`/flights/${req.params.id}/tickets/new`);
        res.redirect(`/flights/${req.params.id}`);
    })
}

// exports
module.exports= {
    newTicket,
    addTicket
}